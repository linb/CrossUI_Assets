// It's a module witohout UI elements
xui.Class('App', 'xui.Module',{
    Instance:{
        DB_ROOT_PATH:"__crossui_db",
        OBJ_SCHEMA_FILE:".gitkeep",

        // Dependency libs
        Required:[
            "[Base64]https://linb.github.io/CrossUI_Assets/thirdparty/base64.min.js",
            "[Octokit]https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
        ],
        // To initialize properties
        properties : {
        },
        // To initialize instance(e.g. properties)
        initialize : function(){
            // set a global variable, for other html calling
            window.xui_GithubHandler = this;
        },     
        // api
        getGithubClient:function(){
            if(this.clientWithAuth){
                return this.clientWithAuth;
            }else{
                // this.ensureGithubAuth();
                throw new Error("No github auth yet!");
            }
        },
        ensureGithubAuth:function(){
            var api = this;
            var loginLayer = api.loginLayer;
            if(!loginLayer){
                loginLayer = api.loginLayer= (new xui.UI.Div())
                    .setDock('cover')
                    .setShowEffects("Slide In TB")
                    .setHideEffects("Slide In TB")
                    .setPanelBgClr("#fff")
                    .setIframeAutoLoad("{/}pages/GithubLoginLayer.html");
                // ensure effects
                loginLayer.render(true);
            }

            function showGithubLogInLayer(){
                var body=xui('body'),
                    top = body.first().topZindex();
                loginLayer.setZIndex(top+1).setDisplay('');
                loginLayer.show(body).setDock('cover',true);
            }

            var token = api.getToken();
            if(!token){
                showGithubLogInLayer();
            }else{
                api.clientWithAuth = new Octokit({
                    auth: 'token ' + token
                });
                api.getGithubClient().users.getAuthenticated().then(function(rsp){
                    api._userProfile = rsp.data;
                    api.fireEvent("onGithubLogin", [rsp.data.login, rsp.data.avatar_url, rsp.data, token]);

                    var action = api._lastActionConf;
                    if(action){
                        action.fun.apply(action.scope, action.params);
                        delete api._lastActionConf;
                    }
                }, function(e){
                    api.clientWithAuth = null;
                    if(err.message == "Bad credentials"){
                        showGithubLogInLayer();
                    }
                });
            }
        },
        getToken:function (){
            return this._githubAccessToken || ( this._githubAccessToken  = xui.Cookies.get('access_token'));
        },
        setToken: function (token){
            var ns=this;
            xui.Cookies.set("access_token", ns._githubAccessToken = token);
        },
        getGithubUser:function(){
            return this._userProfile && this._userProfile.login || "";
        },
        setLastActionConf:function(conf){
            this._lastActionConf = conf;
        },
        githubTokenResponse:function(tokenHash){
            var ns=this,
                paras = xui.urlDecode(tokenHash);
            // save to cookie
            if(paras.access_token){
                ns.setToken(paras.access_token);
                if(ns.loginLayer){
                    ns.loginLayer.hide();
                }            
            }
            ns.ensureGithubAuth();
        },
        githubLogout:function(){
            var ns=this;
            ns.fireEvent("onGithubLogout", [ns.getGithubUser(), ns._githubAccessToken]);

            xui.Cookies.remove("access_token");
            delete ns._githubAccessToken;
            delete ns.clientWithAuth;
            delete ns._userProfile;

            ns.ensureGithubAuth();
        },
        // APIs
        // for repo
        listRepos : function(requestId, cur_page, page_size, nameIn, sort, order, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();
            if(false===api.fireEvent("beforeDBAction", ["listRepos",requestId,arguments])){
                return;
            }
            
            clientWithAuth.search.repos({
                q: "user:" +api.getGithubUser() + (nameIn?("+"+nameIn + "+in:name"):""),
                sort:sort||"updated",
                order:order || "desc",
                page:cur_page|| 1,
                per_page:page_size || 20,
                rand:xui.rand()
            }).then( function(rst){
                var repos = [];
                rst.data.items.forEach( function(v, i){
                    repos.push({
                        id:v.name,
                        caption:v.name,
                        tagVar:v
                    });
                });
                var args = [requestId, repos, rst.data.total_count||0, cur_page, page_size];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onReposList", args);
                api.fireEvent("afterDBAction", ["listRepos",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", [requestId,"listRepos",xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["listRepos",requestId]);
            });            
        },
        repoExist :  function(requestId, repo, onExist, onNotExist){
            var api=this,
                clientWithAuth = api.getGithubClient();  
            if(false===api.fireEvent("beforeDBAction", ["repoExist",requestId,arguments])){
                return;
            }            
            clientWithAuth.repos.get({
                owner:api.getGithubUser(),
                repo:repo
            }).then(function(){
                xui.tryF(onExist,[requestId, repo]);
                api.fireEvent("afterDBAction", ["repoExist",requestId]);
            }).catch(function(){
                xui.tryF(onNotExist,[requestId, repo]); 
                api.fireEvent("afterDBAction", ["repoExist",requestId]);
            });
        },

        // for  object
        listObjects : function(requestId, repo, filter, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();  
            if(false===api.fireEvent("beforeDBAction", ["listObjects",requestId,arguments])){
                return;
            }
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH,
                rand:xui.rand()
            }).then(function(rst){
                var objs=[];
                rst.data.forEach(function(v,i){
                    if("dir"==v.type){
                        if(!filter || (xui.isFun(filter) ? filter(v,i) : true)){
                            objs.push(v.name);
                        }
                    }
                }); 
                var args = [requestId, objs];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onObjectsList", args);      
                api.fireEvent("afterDBAction", ["listObjects",requestId]);
            }).catch(function(e){
                if(e.status == 404){
                    var args = [requestId, []];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onObjectsList", args);
                }else {
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", [requestId, "listObjects", xui.getErrMsg(e),e]);
                    }
                }
                api.fireEvent("afterDBAction", ["listObjects",requestId]);
            });
        },
        objectExist:function(requestId, repo, objectName, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient();  
            if(false===api.fireEvent("beforeDBAction", ["objectExist",requestId,arguments])){
                return;
            }
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH+"/"+objectName,
                rand:xui.rand()
            }).then(function(rst){
                if(xui.isArr(rst.data)){
                    xui.tryF(onSuccess, [requestId, objectName]);
                }else if(rst.data.type){
                    var e1= new Error("Not a dir");
                    if(false!==xui.tryF(onFail,[e1,"notdir"] )){
                        api.fireEvent("onError", ["objectExist",requestId, xui.getErrMsg(e1), e1]);
                    }
                }else{
                    var e2 = new Error("Doesn't exist");
                    if(false!==xui.tryF(onFail,[e2,"notexist"] )){
                        api.fireEvent("onError", ["objectExist",requestId, xui.getErrMsg(e2),e2]);
                    }
                }
                api.fireEvent("afterDBAction", ["objectExist",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["objectExist",requestId, xui.getErrMsg(e), e]);
                }
                api.fireEvent("afterDBAction", ["objectExist",requestId]);
            });
        },
        createObject : function(requestId, repo, objectName, schema, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient();
            if(false===api.fireEvent("beforeDBAction", ["createObject",requestId,arguments])){
                return;
            }            
            api.objectExist(requestId, repo, objectName, function(){
                var e  = new Error("Object "+objectName+" exists already!");
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["createObject",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["createObject",requestId]);
            }, function(e,type){   
                if(type=="notdir"){
                    var e2  = new Error("The ''"+objectName+"'' is a file in repo path!");
                    if(false!==xui.tryF(onFail,[e2] )){
                        api.fireEvent("onError", ["createObject",requestId, xui.getErrMsg(e2), e2]);
                    }
                    api.fireEvent("afterDBAction", ["createObject",requestId]);
                }else{
                    clientWithAuth.repos.createFile({
                        owner:api.getGithubUser(),
                        repo:repo,
                        path: api.DB_ROOT_PATH+"/"+objectName+"/"+api.OBJ_SCHEMA_FILE,
                        message:"Created by CrossUI GitHub DB",
                        content: Base64.encode( JSON.stringify(schema)||" " )
                    }).then(function(rsp){
                        var args = [requestId, objectName];
                        if(false !== xui.tryF(onSuccess, args))
                            api.fireEvent("onObjectCreate", args);  
                        api.fireEvent("afterDBAction", ["createObject",requestId]);
                    }).catch(function(e){
                        if(false!==xui.tryF(onFail,[e] )){
                            api.fireEvent("onError", ["createObject",requestId, xui.getErrMsg(e),e]);
                        }
                        api.fireEvent("afterDBAction", ["createObject",requestId]);
                    }); 
                }
                return false;
            })
            
        },
        deleteObject:function(requestId, repo, objectName, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient(),
                sourceOwner = api.getGithubUser(),
                sourceRepo = repo,
                path = api.DB_ROOT_PATH+"/"+objectName;
            if(false===api.fireEvent("beforeDBAction", ["deleteObject",requestId,arguments])){
                return;
            }
            
            let masterSha="";
            let tree="";
            function getMasterSha(){
                return clientWithAuth.git.getRef({
                  owner:sourceOwner,
                  repo:sourceRepo,
                  ref:"heads/master"
                });
            }
            function getTree(rsp){
                masterSha = rsp.data.object.sha;
                return clientWithAuth.git.getTree({
                    owner:sourceOwner,
                    repo:sourceRepo,
                    recursive: "1",
                    tree_sha: masterSha
                });
            }
            function modifyTree(rsp){
               tree = rsp.data.tree;
               tree = tree.filter(v => {return v.type=="tree" ? false: (v.path!=path && !v.path.startsWith(path+"/"))});
               return clientWithAuth.git.createTree({
                    owner:sourceOwner,
                    repo:sourceRepo,
                    tree:tree
                });
            };
            function commitTree(rsp){
                return  clientWithAuth.git.createCommit({
                    owner:sourceOwner,
                    repo:sourceRepo,
                    message:"for delete",
                    tree: rsp.data.sha,
                    parents: [masterSha]
                });
            };
            function updateRef(rsp){
                return clientWithAuth.git.updateRef({
                    owner:sourceOwner,
                    repo:sourceRepo,
                    ref:"heads/master",
                    sha: rsp.data.sha 
                })
            };
            // use create tree to delete quickly
            getMasterSha()
                .then(getTree)
                .then(modifyTree)
                .then(commitTree)
                .then(updateRef)
                .then(rsp => {
                    var args = [requestId, objectName];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onObjectDelete", args);      
                api.fireEvent("afterDBAction", ["deleteObject",requestId]);
                }).catch((e)=>{
                    api.fireEvent("onError", ["deleteObject",requestId, xui.getErrMsg(e),e]);
                    api.fireEvent("afterDBAction", ["deleteObject",requestId]);
                });
        },

        // for item
        // uset search code
        // weakness: delay several seconds
        // strenthness: limit to 100,000, order by updated, can query by word
        listItems : function(requestId, repo, objectName, withSchema, cur_page, page_size, wordIn, order, onSuccess, onFail){
            var api=this, user = api.getGithubUser(),
                clientWithAuth = api.getGithubClient();
            if(false===api.fireEvent("beforeDBAction", ["listItems",requestId,arguments])){
                return;
            }
            wordIn = xui.str.trim(wordIn);
            clientWithAuth.search.code({
                q: (wordIn?(wordIn + " in:file"):"") + " repo:"+user+"/"+repo+" path:"+api.DB_ROOT_PATH+"/"+objectName+"/ extension:json",
                sort:"indexed",
                order:order || "desc",
                page:cur_page|| 1,
                per_page:page_size || 20,
                rand:xui.rand()
            }).then( function(rst){
                var promises = [],schema={};
                if(withSchema){
                    var p = api.readItem(requestId, repo, objectName, api.OBJ_SCHEMA_FILE,function(req, objectName, json, itemId){
                            xui.merge(schema, json, 'all');
                            return false;
                        }, function(e){
                            xui.log("No schema file "+api.OBJ_SCHEMA_FILE+":"+e);
                            return false;
                        }) ;
                    if(p) promises.push(p );
                }
                var items = [], pool={},item,fid;
                rst.data.items.forEach( function(v, i){
                    fid=v.name.replace(/\.json$/,"");
                    var p=api.readItem(requestId+":"+fid, repo, objectName, fid, function(req, objectName, json, itemId){
                        xui.merge( pool[itemId], json, 'without');
                        return false;
                    }, function(e){
                        xui.log("No item file: " + fid+ " - " +e);
                        return false;
                    });
                    if(p){
                        promises.push(p);
                        item = {
                            // object id
                            __o__id:fid
                        };
                        pool[fid] = item;
                        // keep order
                        items.push(item);
                    }
                });
                Promise.all(promises).then(function(){
                     var args = [requestId, objectName, items, schema, rst.data.total_count||0, cur_page, page_size];
                     if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onItemsList", args);
                    api.fireEvent("afterDBAction", ["listItems",requestId]);
                }).catch(e=>{
                     api.fireEvent("onError", ["listItems",requestId, xui.getErrMsg(e),e]);
                    api.fireEvent("afterDBAction", ["listItems",requestId]);
                });
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["listItems",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["listItems",requestId]);
            }); 
        },
        
        // uset getContents
        // weakness: limit to 1000, no order, can't query
        // strenthness: almost real time
        listItemsByContents : function(requestId, repo, objectName, withSchema, cur_page, page_size, wordIn, order, onSuccess, onFail){
            var api=this, user = api.getGithubUser(),
                clientWithAuth = api.getGithubClient();
            if(false===api.fireEvent("beforeDBAction", ["listItems",requestId,arguments])){
                return;
            }
            var total_count = 0;
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH +"/"+objectName,
                rand:xui.rand()
            }).then(function(rst){
                total_count = rst.data.length;
                
                var promises = [],schema={};
                if(withSchema){
                    var p = api.readItem(requestId, repo, objectName, api.OBJ_SCHEMA_FILE,function(req, objectName, json, itemId){
                            xui.merge(schema, json, 'all');
                            return false;
                        }, function(e){
                            xui.log("No schema file "+api.OBJ_SCHEMA_FILE+":"+e);
                            return false;
                        }) ;
                    if(p) promises.push(p );
                }
                var items = [], pool={},item,fid;

                for(var i=(cur_page - 1)*page_size, l=Math.min(total_count, cur_page*page_size); i<l; i++){
                    var v = rst.data[i];
                    if(!v){
                        break;
                    }
                    if(v.type!="file" || v.name==".gitkeep" || !xui.str.endWith(v.name,".json") ){
                        l++;
                        continue;
                    }
                    fid=v.name.replace(/\.json$/,"");
                    var p=api.readItem(requestId+":"+fid, repo, objectName, fid, function(req, objectName, json, itemId){
                        xui.merge( pool[itemId], json, 'without');
                        return false;
                    }, function(e){
                        xui.log("No item file: " + fid+ " - " +e);
                        return false;
                    });
                    if(p){
                        promises.push(p);
                        item = {
                            // object id
                            __o__id:fid
                        };
                        pool[fid] = item;
                        // keep order
                        items.push(item);
                    }
                }
                Promise.all(promises).then(function(){
                     var args = [requestId, objectName, items, schema, total_count||0, cur_page, page_size];
                     if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onItemsList", args);
                    api.fireEvent("afterDBAction", ["listItems",requestId]);
                }).catch(e=>{
                     api.fireEvent("onError", ["listItems",requestId, xui.getErrMsg(e),e]);
                    api.fireEvent("afterDBAction", ["listItems",requestId]);
                });
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["listItems",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["listItems",requestId]);
            }); 
        },
        
        itemExist:function(requestId, repo, objectName, itemId, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient();  
            itemId = xui.isHash(itemId)?itemId.__o__id:itemId;
            if(false===api.fireEvent("beforeDBAction", ["itemExist",requestId,arguments])){
                return;
            }
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH+"/"+objectName+"/"+itemId + ".json",
                rand:xui.rand()
            }).then(function(rst){
                if(rst.data.type=="file")
                    xui.tryF(onSuccess, [requestId, rst.data.sha, objectName, itemId]);
                else{
                    var e=new Error("Not an item file");
                    if(false!==xui.tryF(onFail,[e] ))
                        api.fireEvent("onError", ["itemExist",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["itemExist",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["itemExist",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["itemExist",requestId]);
            });
        },
        readItem : function(requestId, repo, objectName, itemId, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient();
            itemId = xui.isHash(itemId)?itemId.__o__id:itemId;
            if(false===api.fireEvent("beforeDBAction", ["readItem",requestId,arguments])){
                return;
            }
            // return a promise
            return clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH+"/"+objectName+"/"+(itemId==api.OBJ_SCHEMA_FILE?itemId:(itemId + ".json")),
                rand:xui.rand()
            }).then(function(rst){
                // folder
                if(rst.data[0]){
                    var e="This's a dir, not a file!";
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", ["readItem",requestId, xui.getErrMsg(e),e]);
                    }
                }
                else{
                    var content = Base64.decode( rst.data.content );
                        item = false;
                    try{
                        item = JSON.parse(content);
                    }catch(e){
                        item = xui.unserialize(content);
                    }
                    if(item===false){
                        api.fireEvent("afterDBAction", ["readItem",requestId]);
                        throw new Error("Not JSON: " + content);
                    }
                    item.__o__id=itemId;
                    var args = [requestId, objectName, item, itemId, rst.data.sha];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onItemRead", args);                           
                }
                api.fireEvent("afterDBAction", ["readItem",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["readItem",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["readItem",requestId]);
            });
        },
        createItem : function(requestId, repo, objectName, item, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient(),
                content = JSON.stringify(item),
                itemId = xui.rand();
            if(false===api.fireEvent("beforeDBAction", ["createItem",requestId,arguments])){
                return;
            }
            clientWithAuth.repos.createFile({
                owner:api.getGithubUser(),
                repo:repo,
                path: api.DB_ROOT_PATH+"/"+objectName+"/"+itemId + ".json",
                message:"Created by CrossUI GitHub DB",
                content: Base64.encode( content||"" )
            }).then(function(rsp){
                var info = rsp.data.content;
                var args = [requestId, objectName, item,  itemId, info.sha, {
                    id: info.path,
                    path: info.path,
                    objectName:objectName,
                    caption: info.name,
                    type: info.type,
                    sha: info.sha,
                    tagVar:info
                }, info.path.replace(/[^\/]*$/,'').replace(/\/$/,'')];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onItemCreate", args);      
                api.fireEvent("afterDBAction", ["createItem",requestId]);
            }).catch(function(e){
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["createItem",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["createItem",requestId]);
            });            
        },
        updateItem : function(requestId, repo, objectName, item, itemId, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient(),
                content = JSON.stringify(item);
            itemId = itemId || item.__o__id;
            delete item.__o__id;
            
            if(false===api.fireEvent("beforeDBAction", ["updateItem",requestId,arguments])){
                return;
            }
            api.itemExist(requestId, repo, objectName, itemId, function(req, sha){
                clientWithAuth.repos.updateFile({
                    owner:api.getGithubUser(),
                    repo:repo,
                    path: api.DB_ROOT_PATH+"/"+objectName+"/"+itemId + ".json",
                    sha:sha,                    
                    message:"Updated by CrossUI GitHub DB",
                    content: Base64.encode( content )
                }).then(function(rsp){
                    item.__o__id = itemId;
                    var args = [requestId, objectName, item, itemId];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onItemUpdate", args);     
                    api.fireEvent("afterDBAction", ["updateItem",requestId]);
                }).catch(function(e){
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", ["updateItem",requestId, xui.getErrMsg(e),e]);
                    }
                    api.fireEvent("afterDBAction", ["updateItem",requestId]);
                });
            },function(req, msg){
                var e =  new Error(msg);
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["updateItem",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["updateItem",requestId]);
            });
        },
        deleteItem : function(requestId, repo, objectName, itemId, onSuccess, onFail){
            var api=this,
                clientWithAuth = api.getGithubClient();
            itemId = xui.isHash(itemId)?itemId.__o__id:itemId;
            if(false===api.fireEvent("beforeDBAction", ["deleteItem",requestId,arguments])){
                return;
            }
            api.itemExist(requestId, repo, objectName, itemId, function(req, sha){
                clientWithAuth.repos.deleteFile({
                    owner:api.getGithubUser(),
                    repo:repo,
                    path: api.DB_ROOT_PATH+"/"+objectName+"/"+itemId + ".json",
                    sha:sha,                    
                    message:"Deleted by CrossUI GitHub DB"
                }).then(function(rsp){
                    var args = [requestId, objectName, itemId];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onItemDelete", args);     
                    api.fireEvent("afterDBAction", ["deleteItem",requestId]);
                }).catch(function(e){
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", ["deleteItem",requestId, xui.getErrMsg(e),e]);
                    }
                    api.fireEvent("afterDBAction", ["deleteItem",requestId]);
                });
            },function(req, msg){
                var e=new Error(msg);
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", ["deleteItem",requestId, xui.getErrMsg(e),e]);
                }
                api.fireEvent("afterDBAction", ["deleteItem",requestId]);
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
            ensureGithubAuth : function(){},
            githubLogout : function(){},
            setLastActionConf : function(lastActionConf/*Object, {fun:Function, scope:Object, params:Array}*/){},
            
            // two for repo
            listRepos : function(requestId /*String, the given request id*/, 
                                  cur_page /*Number, current page*/,
                                  page_size /*Number, per page count*/,
                                  nameIn /*String, search word*/, 
                                  order/*String, desc, asc*/, 
                                  onSuccess /*Function, function(requestId, repos:[{id,caption,tagVar}], total_count, cur_page, page_size){}*/, 
                                  onFail/*Function, function(errorMessage){}*/){},
            repoExist: function(requestId /*String, the given request id*/, 
                                repo /*String, repo name */, 
                                onExist/*Function, function(requestId, repo){}*/, 
                                onNotExist/*Function, function(requestId, repo){}*/){},
             // 4 for table/object
            objectExist:function(requestId /*String, the given request id*/, 
                                repo /*String, repo name */, 
                                objectName /*String, object name*/, 
                                onSuccess /*Function, function(requestId, objectName){}*/, 
                                onFail/*Function, function(errorMessage){}*/){},
            listObjects: function(requestId /*String, requestid*/, 
                                  repo /*String, repo name */, 
                                  filter /*Function, function(obj:{}, key){}*/, 
                                  onSuccess /*Function, function(requestId, objects:[objectName]){} */, 
                                  onFail/*Function*/){},
            createObject:function(requestId /*String, the given request id*/, 
                                 repo /*String, repo name */, 
                                 objectName /*String, object name*/, 
                                 schema /*Object, {prop:[],...}*/, 
                                 onSuccess /*Function, function(requestId, objectName){} */, 
                                 onFail/*Function, function(errorMessage){}*/){},
            deleteObject:function(requestId /*String, the given request id*/, 
                                 repo /*String, repo name */, 
                                 objectName /*String, object name*/, 
                                 onSuccess /*Function, function(requestId, objectName){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){},
            // 6 for record / item
            listItems : function(requestId /*String, the given request id*/, 
                                  repo /*String, repo name */, 
                                  objectName /*String, object name*/, 
                                  withSchema /*Boolean, get schema or not*/,
                                  cur_page /*Number, current page*/,
                                  page_size /*Number, per page count*/,
                                  wordIn /*String, search word*/, 
                                  order/*String, desc, asc*/, 
                                  onSuccess /*Function, function(requestId, objectName, items:[{}], schema:{prop:[],...}, total_count, cur_page, page_size){}*/, 
                                  onFail/*Function, function(errorMessage){}*/){},
            itemExist:function(requestId /*String, the given request id*/, 
                                repo /*String, repo name */, 
                                objectName /*String, object name*/, 
                                itemId/*String, item id*/, 
                                onSuccess /*Function, function(requestId, sha, objectName, itemId){}*/, 
                                onFail/*Function, function(errorMessage){}*/){},
            readItem:function(requestId /*String, the given request id*/, 
                               repo /*String, repo name */, 
                               objectName /*String, object name*/, 
                               itemId/*String, item id*/, 
                               onSuccess /*Function, function(requestId , objectName, item, itemId, sha){} */, 
                               onFail/*Function, function(errorMessage){}*/){},
            createItem:function(requestId /*String, the given request id*/, 
                                 repo /*String, repo name */, 
                                 objectName /*String, object name*/, 
                                 item /*Object, item object*/, 
                                 onSuccess /*Function, function(requestId, objectName, item, itemId, sha, itemInfo:{id,path,caption,type,objectName,tagVar}){} */, 
                                 onFail/*Function, function(errorMessage){}*/){},
            updateItem:function(requestId /*String, the given request id*/, 
                                 repo /*String, repo name */, 
                                 objectName /*String, object name*/, 
                                 item /*Object, item object*/, 
                                 itemId/*String, item id*/, 
                                 onSuccess /*Function, function(requestId, objectName, item, itemId){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){},
            deleteItem:function(requestId /*String, the given request id*/, 
                                 repo /*String, repo name */, 
                                 objectName /*String, object name*/, 
                                 itemId/*String/Object, item id/item*/, 
                                 onSuccess /*Function, function(requestId, objectName, itemId){}*/, 
                                 onFail/*Function, function(errorMessage){}*/){}
        },
        // export prop
        $DataModel:{
            // repo name
            // repoName: "",
            // object(table) name
            // objectName: ""
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
            onGithubLogin : function(username /*String, user name*/, 
                              avatar /*String, user avatar url*/, 
                              user /*Object, user object*/,
                              token /*String, token*/
                             ){},
            onGithubLogout : function(username /*String, user name*/, token /*String, token*/){},
 
            onReposList : function(requestId /*String, requestid*/, 
                  repos /*Array, [{id,caption,tagVar}], result list*/, 
                  total_count /*Number, total count*/,
                  cur_page /*Number, current page*/,
                  page_size /*Number, per page count*/
                 ){},
            
            onObjectsList: function(requestId /*String, requestid*/, 
                  objs /*Array, [objectName], result list*/
                 ){},

            onObjectCreate : function(requestId /*String, the given request id*/, 
                                             objectName /*String, object name*/
                                            ){},
            onObjectDelete : function(requestId /*String, the given request id*/, 
                                             objectName /*String, object name*/
                                            ){},

            onItemsList : function(requestId /*String, the given request id*/, 
                                          objectName/*String, object name*/, 
                                          items /*Array, result list [{}]*/, 
                                          schema /*Object, schema object {prop[],...}*/, 
                                          total_count /*Number, total count*/,
                                          cur_page /*Number, current page*/,
                                          page_size /*Number, per page count*/
                                         ){},
            onItemRead : function(requestId /*String, the given request id*/, 
                                         objectName/*String, object name*/, 
                                         item /*Object, item object*/,
                                         itemId/*String, item id*/, 
                                         sha/*String, GitHub file sha*/
                                        ){},
            onItemCreate : function(requestId /*String, the given request id*/, 
                                          objectName/*String, object name*/, 
                                          item /*Object, item object*/,
                                          itemId/*String, item id*/, 
                                          sha/*String, GitHub file sha*/, 
                                          itemInfo /*Object, {id,path,caption,type,objectName,tagVar}*/
                                          ){},
            onItemUpdate : function(requestId /*String, the given request id*/, 
                                          objectName/*String, object name*/, 
                                          item /*Object, item object*/,
                                          itemId/*String, item id*/
                                          ){},
            onItemDelete : function(requestId /*String, the given request id*/, 
                                          objectName/*String, object name*/, 
                                          itemId/*String, item id*/
                                          ){}
        }
    }
});