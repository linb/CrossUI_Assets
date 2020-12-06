/*jshint esversion: 8 */
import {utils} from "../../web_modules/react-hook-module/index.js";
import firebase from "../../web_modules/firebase/index.js";

// Add your Firebase credentials
firebase.initializeApp({
    "apiKey":"AIzaSyC2Bqk0ddNtUa4UOhgJS9fpUq_3bRG1rck",
    "authDomain":"crossui.firebaseapp.com",
    "databaseURL":"//crossui.firebaseio.com",
    "projectId":"crossui",
    "storageBucket":"crossui.appspot.com",
    "messagingSenderId":"20598955141",
    "appId":"1:20598955141:web:f86e98e32c1ffcdaf61dec"
});
const signIn = function(){
    const auth = this;
    return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(response => {
            auth.setUser(response.user);
            auth.setToken(response.user.uid);
            return response.user;
        })
        .catch(e=>{
            alert(e);
        });
};
const singUp = function(){
    // do nothing    
};

const signOut = function(){
    const auth = this;
    return firebase
        .auth()
        .signOut()
        .then(() => {
            auth.setUser(null);
            auth.setToken(null);
        })
        .catch(e=>{
            alert(e);
        });
};
const authInit = function( setUser,setToken ){
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        setUser(user || null);
        setToken(user && user.uid || null);
    });
    return unsubscribe;
};
 
export default { signIn, signOut, authInit, user:false, firebase };