// It's a module witohout UI elements
xui.Class('Module.FirebaseHandler', 'xui.Module',{
    Instance:{
        SCHEMAS_COLLECTION:"__xui_db_schemas",
 
        // Dependency libs
        Required:[
            "[firebase]https://www.gstatic.com/firebasejs/6.6.1/firebase.js"
        ],
        // To initialize properties
        properties : {
        },
        // To initialize instance(e.g. properties)
        initialize : function(){
            // set a global variable, for other html calling
            window.xui_FirebaseHandler = this;
        },     
        getFirebaseConfig:function(){
            return {
                config : {
                  apiKey: "AIzaSyC2Bqk0ddNtUa4UOhgJS9fpUq_3bRG1rck",
                  authDomain: "crossui.firebaseapp.com",
                  databaseURL: "https://crossui.firebaseio.com",
                  projectId: "crossui",
                  storageBucket: "crossui.appspot.com",
                  messagingSenderId: "20598955141",
                  appId: "1:20598955141:web:f86e98e32c1ffcdaf61dec"
                },
                signInMethods : "Google;Github;EmailPassword",
                // Google OAuth Client ID, needed to support One-tap sign-up.
                // Set to null if One-tap sign-up is not supported.
                  GOOGLE_OAUTH_CLIENT_ID : null
            };

            // return "{codesnip_conf}";
        },
        ensureFirebaseAuth:function(){
            var api = this;

            function showFirebaseLogInLayer(){
                var body=xui('body'),
                    top = body.first().topZindex();
                var loginLayer =  (new xui.UI.Div())
                    .setDock('cover')
                    .setShowEffects("Slide In TB")
                    .setHideEffects("Slide In TB")
                    .setPanelBgClr("#fff")
                    .setIframeAutoLoad("{/}pages/FirebaseLoginLayer.html");
                // ensure effects
                loginLayer.render(true);
                loginLayer.setZIndex(top+1).setDisplay('');
                loginLayer.show(body).setDock('cover',true);
                return loginLayer;
            }
 
            // init firebase
            firebase.initializeApp(api.getFirebaseConfig().config);
            firebase.auth().onAuthStateChanged(function(user) {
                if (!user) {
                    api.loginLayer= showFirebaseLogInLayer();
                }else{
                    if (user.photoURL) {
                      var photoURL = user.photoURL;
                      if ((photoURL.indexOf('googleusercontent.com') != -1) || (photoURL.indexOf('ggpht.com') != -1)) {
                        photoURL = photoURL + '?sz=64';
                      }
                      user.photoURL = photoURL;
                    }
                    var crossuiUser = {
                      uid: user.uid,
                      name: user.displayName,
                      email: user.email,
                      avatar: user.photoURL,
                      project: api.getFirebaseConfig().config.projectId
                    };
                    api._userProfile = crossuiUser;
                    api.setToken(crossuiUser.uid);
                    api.db = firebase.firestore();
                    api.fireEvent("onFirebaseLogin", [crossuiUser.name, crossuiUser.avatar, crossuiUser.project, crossuiUser, crossuiUser.uid]);
                }
            });
        },
        getToken:function (){
            return this._firebaseAccessToken || ( this._firebaseAccessToken = xui.Cookies.get('access_token'));
        },
        setToken: function (token){
            var ns=this;
            xui.Cookies.set("access_token", ns._firebaseAccessToken = token);
        },
        getFirebaseUser:function(){
            return this._userProfile && this._userProfile.name || "";
        },
        //get firestore instance
        getFirestore:function(){
            return this.db;  
        },
        onFirebaseAuthOK:function(user){
            var api=this;
            if(api.loginLayer){
                api.loginLayer.destroy(true,true);
                delete api.loginLayer;
            }    
            api.ensureFirebaseAuth();
        },
        firebaseLogout:function(){
            var ns=this;
            ns.fireEvent("onFirebaseLogout", [ns.getFirebaseUser(), ns._firebaseAccessToken]);

            xui.Cookies.remove("access_token");
            delete ns._firebaseAccessToken;
            delete ns._userProfile;
            delete ns.db;

            firebase.auth().signOut();
        },
        deleteAccount:function(){
              firebase.auth().currentUser.delete().catch(function(error) {
                if (error.code == 'auth/requires-recent-login') {
                  // The user's credential is too old. She needs to sign in again.
                  firebase.auth().signOut().then(function() {
                    // The timeout allows the message to be displayed after the UI has
                    // changed to the signed out state.
                    setTimeout(function() {
                      alert('Please sign in again to delete your account.');
                    }, 1);
                  });
                }
              });
        },

        // APIs

        // for  Collections ( google doesn't support get collections in web API)
        listCollections : function(requestId, filter, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["listCollections",requestId,arguments])){
                return;
            }
            api.db.collection(api.SCHEMAS_COLLECTION).get().then((querySnapshot) => {
                var objs=[];
                querySnapshot.forEach((doc) => {
                    objs.push(doc.id);
                });
                var args=[requestId, objs];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onCollectionsList", args);      
                api.fireEvent("afterDBAction", ["listCollections",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", [requestId, "listCollections", xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["listCollections",requestId]);
            });
        },
        collectionExist:function(requestId, collectionName, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["collectionExist",requestId,arguments])){
                return;
            }
            api.db.collection(collectionName).limit(1).get().then(snap => {
                if (snap.docs && snap.docs.length > 0) {
                    xui.tryF(onSuccess, [requestId, collectionName]);
                    api.fireEvent("afterDBAction", ["collectionExist",requestId]);
                }else{
                    xui.tryF(onFail,[requestId, collectionName] );
                    api.fireEvent("afterDBAction", ["collectionExist",requestId]);
                }
            }).catch( e => {
                api.fireEvent("onError", ["collectionExist",requestId, xui.getErrMsg(e), e]);
                api.fireEvent("afterDBAction", ["collectionExist",requestId]);
              });
        },
        // firestore doesn't need to create colletion, but crossui need to create schema
        createCollection : function(requestId, collectionName, schema, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["createCollection",requestId,arguments])){
                return;
            }
            api.db.collection(api.SCHEMAS_COLLECTION).doc(collectionName).set(schema)
            .then(function() {
                var args = [requestId, collectionName];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onCollectionCreate", args);  
                api.fireEvent("afterDBAction", ["createCollection",requestId]);
            })
            .catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["createCollection",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["createCollection",requestId]);
            });
        },
        deleteCollection:function(requestId, collectionName, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["deleteCollection",requestId,arguments])){
                return;
            }
            api.db.collection(collectionName).get().then(function(snap) {
                  snap.docs.map(doc => {
                    doc.ref.delete();
                  });
                var args = [requestId, collectionName];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onCollectionDelete", args);      
                 api.fireEvent("afterDBAction", ["deleteCollection",requestId]);
            }).catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["deleteCollection",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["deleteCollection",requestId]);
            });

            // asyn
            api.db.collection(api.SCHEMAS_COLLECTION).doc(collectionName).delete();
        },

        /**
         * 
         * startAt: doc > refresh the current page start at doc
         *          -1 > get the last page
         *          other > get the first page
         * startAfter : doc > get the next page start after doc
         * endBefore : doc > get the prev page end before doc
         **/
        
        listDocs : function(requestId, collectionName, withSchema, page_size, startAt, startAfter, endBefore, wheres, orders, onSuccess, onFail){
            var api = this;
            if(false===api.fireEvent("beforeDBAction", ["listDocs",requestId,arguments])){
                return;
            }
          
            var datas=[], schema={}, pageLocation;
            var ref = api.db.collection(collectionName);
            var whereOrders = [];
            var hasWhere;
            if(wheres && wheres.length){
                for(var i=0,l=wheres.length;i<l;i++){
                    var where = wheres[i];
                    if(where && where.left && where.symbol && where.right){
                        if(">"==where.symbol||">="==where.symbol||"<"==where.symbol||"<="==where.symbol){
                            whereOrders.push(where.left);
                        }
                        ref = ref.where(where.left, where.symbol, where.right);
                        hasWhere = 1;
                    }
                } 
            }
            
            var needReverse;
            if(startAt === -1){
                pageLocation = "last";
                endBefore = startAt = startAfter = null;
                needReverse = true;
            }else{
                needReverse = !!endBefore;
            }
            if(xui.isNumb(startAt)) startAt = null;
            

            var hasOrdered={};
            if(orders && orders.length){
                for(var i=0,l=orders.length;i<l;i++){
                    var order = orders[i];
                    if(!hasOrdered[order.by]){
                        ref = ref.orderBy(order.by, order.desc? (needReverse?'asc':'desc'):(needReverse?'desc':'asc'));
                        hasOrdered[order.by]=1;
                    }
                }
            }
            if(whereOrders && whereOrders.length){
                for(var i=0,l=whereOrders.length;i<l;i++){
                    if(!hasOrdered[whereOrders[i]]){
                        ref = ref.orderBy(whereOrders[i], (needReverse?'desc':'asc'));
                        hasOrdered[whereOrders[i]]=1;
                    }
                }
            }
            
            // no wheres and no orders, add __xui_updated 
            if(!hasWhere && xui.isEmpty(hasOrdered)){
                ref = ref.orderBy("__xui_updated", needReverse?'asc':'desc');
            }

            if(endBefore)ref = ref.startAfter(endBefore);
            else if(startAt)ref = ref.startAt(startAt);
            else if(startAfter)ref = ref.startAfter(startAfter);

            
            ref.limit(page_size).get().then(function(querySnapshot) {
                var size=0;
                querySnapshot.forEach(function(doc) {
                    var data = doc.data();
                    // for timestamp, ref and geo
                    xui.clone(data, function(v,k){
                        if(v){
                             if(v instanceof firebase.firestore.Timestamp ){
                                this[k] = {
                                    value:v.toDate(),
                                    _stp:v
                                };
                            }else if(v instanceof firebase.firestore.DocumentReference){
                                this[k] = {
                                    value:v.path,
                                    _ref: v
                                };
                            }else if(v instanceof firebase.firestore.GeoPoint){
                                this[k] = {
                                    caption: v.latitude+":"+v.longitude,
                                    value:{
                                        latitude:v.latitude,
                                        longitude:v.longitude
                                    },
                                    _geo: v
                                };
                            }
                        }
                    });
                    data.__row__id=doc.id;
                    data.__row__doc = doc;
                    
                    datas.push(data);
                    size++;
                });
                if(size<page_size){
                    // to next page 
                    if(startAt || startAfter){
                        pageLocation = size===0?"verylast":"last";
                    }
                    // to prev page
                    else if(endBefore){
                        pageLocation = size===0?"veryfirst":"first";
                    }
                    // the first page
                    else{
                        pageLocation = "solo";
                    }
                }
                else{
                    // the first page
                    if(!startAt && !startAfter && !endBefore){
                        pageLocation = pageLocation || "first";
                    }else{
                        pageLocation = "middle";
                    }
                }
                if(needReverse){
                    datas.reverse();
                }
                var suc = function(){
                    var args = [requestId, collectionName, datas, schema, page_size, pageLocation];
                     if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onDocsList", args);
                    api.fireEvent("afterDBAction", ["listDocs",requestId]);
                };
                // try to get schema
                if(withSchema){
                    api.db.collection(api.SCHEMAS_COLLECTION).doc(collectionName).get().then(function(doc){
                        if (doc.exists) {
                            xui.merge(schema, doc.data(), 'all');
                            suc();
                        }else{
                            xui.log("No schema file: "+api.SCHEMAS_COLLECTION+"/"+collectionName);
                            suc();
                        }
                    });
                }else{
                    suc();
                }
            })
            .catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["listDocs",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["listDocs",requestId]);
            });
        },
 
        docExist:function(requestId, collectionName, doc/*ref,data,id*/, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["docExist",requestId,arguments])){
                return;
            }
            var ref;
            if(doc instanceof firebase.firestore.DocumentReference){
                ref = doc;
            }else if(xui.isHash(doc) && xui.isStr(doc.__row__id)){
                ref = api.db.collection(collectionName).doc(doc.__row__id);
            }else if(xui.isStr(doc)){
                ref = api.db.collection(collectionName).doc(doc);
            }else{
                api.fireEvent("onError", ["docExist",requestId, "argument-doc error",new Error("argument-doc error")]);
                api.fireEvent("afterDBAction", ["docExist",requestId]);
                return;
            }
            ref.get().then(function(doc){
                if (doc.exists) {
                    xui.tryF(onSuccess, [requestId, collectionName, doc.id]);
                }else{
                    xui.tryF(onFail,[requestId, collectionName] );
                }
            }).catch(function(e){
                api.fireEvent("onError", ["docExist",requestId, xui.getErrMsg(e),e]);
                api.fireEvent("afterDBAction", ["docExist",requestId]);
            });
        },
        readDoc : function(requestId, collectionName, doc/*ref,id*/, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["readDoc",requestId,arguments])){
                return;
            }
            var ref;
            if(doc instanceof firebase.firestore.DocumentReference){
                ref = doc;
            }else if(xui.isStr(doc)){
                ref = api.db.collection(collectionName).doc(doc);
            }else{
                var e=new Error("argument-doc error");
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["readDoc",requestId, xui.getErrMsg(e),e]);
                }
                return;
            }
            ref.get().then(function(doc){
                if (doc.exists) {
                    var data=doc.data();
                    // for timestamp, ref and geo
                    xui.clone(data, function(v,k){
                        if(v){
                            if(v instanceof firebase.firestore.Timestamp ){
                                this[k] = {
                                    value:v.toDate(),
                                    _stp:v
                                };
                            }else if(v instanceof firebase.firestore.DocumentReference){
                                this[k] = {
                                    value:v.path,
                                    _ref: v
                                };
                            }else if(v instanceof firebase.firestore.GeoPoint){
                                this[k] = {
                                    caption: v.latitude+":"+v.longitude,
                                    value:{
                                        latitude:v.latitude,
                                        longitude:v.longitude
                                    },
                                    _geo: v
                                };
                            }
                        }
                    });
                    data.__row__id=doc.id;
                    data.__row__doc=doc;
                    var args = [requestId, collectionName, data, doc.id, doc];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onDocRead", args);
                }else{
                    var e=new Error("no doc!");
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", ["readDoc",requestId, xui.getErrMsg(e),e]);
                    }
                }
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["readDoc",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["readDoc",requestId]);
            });
        },
        createDoc : function(requestId, collectionName, data, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["createDoc",requestId,arguments])){
                return;
            }
            delete data.__row__id;
            delete data.__row__doc;
            data.__xui_created = firebase.firestore.FieldValue.serverTimestamp();
            data.__xui_updated = firebase.firestore.FieldValue.serverTimestamp();

            var doc = api.db.collection(collectionName).doc();
            doc.set(data).then(function() {
                data.__row__id = doc.id;
                data.__row__doc = doc;
                var args = [requestId, collectionName, data, doc.id, doc];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onDocCreate", args);  
                api.fireEvent("afterDBAction", ["createDoc",requestId]);
            })
            .catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["createDoc",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["createDoc",requestId]);
            });
        },
        updateDoc : function(requestId, collectionName, data, doc/*doc,ref,id*/, onSuccess, onFail){
            var api=this;
            if(!data){
                var e= new Error("No data");
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["updateDoc",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["updateDoc",requestId]);                
                return;
            }
            if(false===api.fireEvent("beforeDBAction", ["updateDoc",requestId,arguments])){
                return;
            }
            var ref;
            if(doc instanceof firebase.firestore.DocumentSnapshot){
                ref = doc.ref;
            }else if(doc instanceof firebase.firestore.DocumentReference){
                ref = doc
            }else if(xui.isHash(doc) && xui.isStr(doc.__row__id)){
                ref = api.db.collection(collectionName).doc(doc.__row__id);
            }else if(xui.isStr(doc)){
                ref = api.db.collection(collectionName).doc(doc);
            }else if(xui.isStr(data.__row__id)){
                ref = api.db.collection(collectionName).doc(data.__row__id);
            }else{
                var e=new Error("argument-doc error");
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["updateDoc",requestId, xui.getErrMsg(e),e]);
                }
                return;
            }
            
            delete data.__row__id;
            delete data.__row__doc;
            data.__xui_updated = firebase.firestore.FieldValue.serverTimestamp();
            //can't modify this
            delete data.__xui_created;
            
            ref.set(data, { merge: true })
            .then(function() {
                data.__row__id = ref.id;
                data.__row__doc = ref;
                var args = [requestId, collectionName, data, ref.id, ref];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onDocUpdate", args);  
                api.fireEvent("afterDBAction", ["updateDoc",requestId]);
            })
            .catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["updateDoc",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["updateDoc",requestId]);
            });
        },
        deleteDoc : function(requestId, collectionName, doc/*doc,ref,data,id*/, onSuccess, onFail){
            var api=this;
            if(false===api.fireEvent("beforeDBAction", ["deleteDoc",requestId,arguments])){
                return;
            }
            var docId;
            var ref;
            if(doc instanceof firebase.firestore.DocumentSnapshot){
                ref = doc.ref; docId=doc.id;
            }else if(doc instanceof firebase.firestore.DocumentReference){
                ref = doc; docId=doc.id;
            }else if(xui.isHash(doc) && xui.isStr(doc.__row__id)){
                ref = api.db.collection(collectionName).doc(docId=doc.__row__id);
            }else if(xui.isStr(doc)){
                ref = api.db.collection(collectionName).doc(docId=doc);
            }else if(xui.isStr(data.__row__id)){
                ref = api.db.collection(collectionName).doc(docId=data.__row__id);
            }else{
                var e=new Error("argument-doc error");
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["deleteDoc",requestId, xui.getErrMsg(e),e]);
                }
                return;
            }
            ref.delete().then(function() {
                var args = [requestId, collectionName, docId];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onDocDelete", args);      
                 api.fireEvent("afterDBAction", ["deleteDoc",requestId]);
            }).catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["deleteDoc",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["deleteDoc",requestId]);
            });
        },
        callFunction: function(requestId, funName, argsObj,  onSuccess, onFail){
            if(false===api.fireEvent("beforeDBAction", ["callFunction",requestId,arguments])){
                return;
            }
            var fun = firebase.functions().httpsCallable(funName);
            fun(argsObj).then(function(result) {
                var args = [requestId, funName, argsObj, result];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onCallFunction", args);   
                api.fireEvent("afterDBAction", ["callFunction",requestId]);
            })
            .catch(function(e) {
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["callFunction",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["callFunction",requestId]);
            });
        },
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }, 
    Static:{
        $Functions:{
            ensureFirebaseAuth : function(){},
            firebaseLogout : function(){},
            // Get firestore instance
            getFirestore:function(){ },
            setLastActionConf:function(lastActionConf/*Object, {fun:Function, scope:Object, params:Array}*/){},
            
             // 4 for table/object
            collectionExist:function(requestId /*String, the given request id*/, 
                                collectionName /*String, collection name*/, 
                                onSuccess /*Function, function(requestId, collectionName){}*/, 
                                onFail/*Function, function(errorMessage){}*/){},
            listCollections: function(requestId /*String, requestid*/, 
                                  filter /*Function, function(obj:{}, key){}*/, 
                                  onSuccess /*Function, function(requestId, collections:[collectionName]){} */, 
                                  onFail/*Function*/){},
            createCollection:function(requestId /*String, the given request id*/, 
                                 collectionName /*String, collection name*/, 
                                 schema /*Object, {prop:[],...}*/, 
                                 onSuccess /*Function, function(requestId, collectionName){} */, 
                                 onFail/*Function, function(errorMessage){}*/){},
            deleteCollection:function(requestId /*String, the given request id*/, 
                                 collectionName /*String, collection name*/, 
                                 onSuccess /*Function, function(requestId, collectionName){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){},
            // 6 for record / doc
            listDocs : function(requestId /*String, the given request id*/, 
                                  collectionName /*String, collection name*/, 
                                  withSchema /*Boolean, get schema or not*/,
                                  page_size /*Number, per page count*/,
                                  startAt /*Object, the page ref*/,
                                  startAfter /*Object, the page ref*/,
                                  endBefore /*Object, the page ref*/,
                                  wheres /*Object, key/value pairs {left:String,symbol:String,right:String}*/, 
                                  orders/*Object, key/value pairs {by:String, asc:boolean}*/, 
                                  onSuccess /*Function, function(requestId, collectionName, datas:[{}], schema:{prop:[],...},page_size, pageLocation:String){}*/, 
                                  onFail/*Function, function(errorMessage){}*/){},
            docExist:function(requestId /*String, the given request id*/, 
                                collectionName /*String, collection name*/, 
                                docId/*String/Object, ref,data,id*/, 
                                onSuccess /*Function, function(requestId, collectionName, docId){}*/, 
                                onFail/*Function, function(errorMessage){}*/){},
            readDoc:function(requestId /*String, the given request id*/, 
                               collectionName /*String, collection name*/, 
                               docId/*String/Object, ref or id*/, 
                               onSuccess /*Function, function(requestId , collectionName, data, docId, doc){} */, 
                               onFail/*Function, function(errorMessage){}*/){},
            createDoc:function(requestId /*String, the given request id*/, 
                                 collectionName /*String, collection name*/, 
                                 data /*Object, doc data*/,
                                 onSuccess /*Function, function(requestId, collectionName, data, docId, doc){} */, 
                                 onFail/*Function, function(errorMessage){}*/){},
            updateDoc:function(requestId /*String, the given request id*/, 
                                 collectionName /*String, collection name*/, 
                                 data /*Object, data data*/,
                                 docId/*String/Object, doc,ref,id*/, 
                                 onSuccess /*Function, function(requestId, collectionName, data, docId, doc){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){},
            deleteDoc:function(requestId /*String, the given request id*/, 
                                 collectionName /*String, collection name*/, 
                                 docId/*String/Object, doc,ref,data,id*/, 
                                 onSuccess /*Function, function(requestId, collectionName, docId){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){},
            callFunction:function(requestId /*String, the given request id*/, 
                                funName /*String, function name*/, 
                                argsObj /*Object, key/value pair */, 
                                onSuccess /*Function, function(requestId, funName, argsObj,result){}*/, 
                                onFail/*Function, function(errorMessage){}*/){}
        },
        // export prop
        $DataModel:{
            // collection(table) name
            // collectionName: ""
        },
        $EventHandlers :{
            beforeDBAction : function(funName /*String, function name*/,
                                       requestId /*String, the given request id*/,
                                       args /*Array, arguments*/
                                       ){},
            afterDBAction : function(funName /*String, function name*/,
                                      requestId /*String, the given request id*/
                                       ){},
            onError : function(funName /*String, function name*/,
                              requestId /*String, the given request id*/, 
                              errMsg /*String, error message*/,
                              error /*Object, errorobject*/){},
            onFirebaseLogin : function(username /*String, user name*/, 
                              avatar /*String, user avatar url*/, 
                              project/*String, project name*/,
                              user /*Object, user object*/,
                              uid /*String, user uid*/
                             ){},
            onFirebaseLogout : function(username /*String, user name*/, uid /*String, user uid*/){},
 
            
            onCollectionsList: function(requestId /*String, requestid*/, 
                  collections /*Array, [collectionName], result list*/
                 ){},

            onCollectionCreate : function(requestId /*String, the given request id*/, 
                                             collectionName /*String, collection name*/
                                            ){},
            onCollectionDelete : function(requestId /*String, the given request id*/, 
                                             collectionName /*String, collection name*/
                                            ){},

            onDocsList : function(requestId /*String, the given request id*/, 
                                          collectionName/*String, collection name*/, 
                                          datas /*Array, result list [{doc data}]*/, 
                                          schema /*Object, schema object {prop[],...}*/, 
                                          page_size /*Number, per page count*/,
                                          pageLocation /*String, the page location*/                                
                                         ){},
            onDocRead : function(requestId /*String, the given request id*/, 
                                         collectionName/*String, collection name*/, 
                                         data /*Object, doc data*/,
                                         docId/*String, doc id*/
                                        ){},
            onDocCreate : function(requestId /*String, the given request id*/, 
                                          collectionName/*String, collection name*/, 
                                          data /*Object, doc data*/,
                                          docId/*String, doc id*/
                                          ){},
            onDocUpdate : function(requestId /*String, the given request id*/, 
                                          collectionName/*String, collection name*/, 
                                          data /*Object, doc data*/,
                                          docId/*String, doc id*/
                                          ){},
            onDocDelete : function(requestId /*String, the given request id*/, 
                                          collectionName/*String, collection name*/, 
                                          docId/*String, doc id*/
                                          ){},
            onCallFunction:function(requestId /*String, the given request id*/, 
                                funName /*String, function name*/, 
                                argsObj /*Object, key/value pair */, 
                               result /*Object,  result*/){}
        }
    }
});