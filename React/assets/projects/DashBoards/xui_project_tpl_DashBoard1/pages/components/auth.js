/*jshint esversion: 8 */
import CONF from "../../config.js";
import {utils} from "../../web_modules/react-hook-module/index.js";
import {axios} from "../../web_modules/react-hook-module/plugin_request.js";

// default status - need checking: user/token is false
// nologin status: user/token is null
// login status: user/token is not null/undefiend/empty

const fetchTool = CONF && CONF.fetchMocker ? { request : CONF.fetchMocker } : axios;

const signIn = function(params){
    const auth = this;
    fetchTool.request({
        url: 'signIn',
        method: 'get',
        params
    }).then(rsp=>{
        if(rsp.ok){
            auth.setUser(rsp.user);
            auth.setToken(rsp.user.token);

            utils.setCookie("user", rsp.user);
            utils.setCookie("token", rsp.user.token);
        }else{
            auth.setUser(null);
            auth.setToken(null);
            
            utils.removeCookie("user");
            utils.removeCookie("token");            
        }
    }).catch( e =>{
        console.log(e);
        
        auth.setUser(null);
        auth.setToken(null);

        utils.removeCookie("user");
        utils.removeCookie("token");            
    });
};
const signUp = function(params){
    const auth = this;
    fetchTool.request({
        url: 'signUp',
        method: 'get',
        params
    }).then(rsp=>{
        if(rsp.ok){
            if(rsp.user){
                auth.setUser(rsp.user);
                auth.setToken(rsp.user.token);

                utils.setCookie("user", rsp.user);
                utils.setCookie("token", rsp.user.token);
            }
        }
    }).catch( e =>{
        console.log(e);
    });
};

const signOut = function(token){
    const auth = this;
    fetchTool.request({
        url: 'signOut',
        method: 'get',
        params:{token}
    }).then(rsp=>{
        auth.setUser(null);
        auth.setToken(null);

        utils.removeCookie("user");
        utils.removeCookie("token");
    }).catch( e =>{
        console.log(e);
    });
};
const authInit = function(){
    const auth = this;
    const user = utils.getCookie("user");
    if(user && user.token){
        fetchTool.request({
            url: 'checkToken',
            method: 'get',
            params:{
                token: user.token
            }
        }).then(rsp=>{
            if(rsp.ok){
                if(rsp.token && rsp.token!==user.token){
                    user.token = rsp.token;
                    utils.setCookie("user", user);
                    utils.setCookie("token", user.token);
                    auth.setUser(user);
                    auth.setToken(user && user.token);
                }
            }else{
                auth.setUser(null);
                auth.setToken(null);                
                utils.removeCookie("user");
                utils.removeCookie("token");            
            }
        }).catch( e =>{
            auth.setUser(null);
            auth.setToken(null);
            utils.removeCookie("user");
            utils.removeCookie("token");            
        });
    }
    else{
        auth.setUser(null);
        auth.setToken(null);
    }
    return function(){
        // to clear things
    };
};
const user = utils.getCookie("user") || false;
const token = user && user.token || false;

export default {signIn, signUp, user, token, signOut, authInit};
