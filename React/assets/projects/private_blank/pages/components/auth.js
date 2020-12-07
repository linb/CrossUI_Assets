/*jshint esversion: 8 */
import CONF from "../../config.js";
import {utils} from "../../web_modules/react-hook-module/index.js";
import {axios} from "../../web_modules/react-hook-module/plugin_request.js";

// default status - need checking: user/token is false
// nologin status: user/token is null
// login status: user/token is not null/undefiend/empty

const fetchTool = CONF && CONF.mockFetch ? { request : CONF.mockFetch } : axios;

const signIn = function(params){
    const auth = this;
    const rsp = {token:'token', name:'name'};

    auth.setUser(rsp.user);
    auth.setToken(rsp.user.token);

    utils.setCookie("user", rsp.user);
    utils.setCookie("token", rsp.user.token);
};
const signUp = function(params){
    const auth = this;
    const rsp = {token:'token', name:'name'};

    auth.setUser(rsp.user);
    auth.setToken(rsp.user.token);

    utils.setCookie("user", rsp.user);
    utils.setCookie("token", rsp.user.token);
};

const signOut = function(token){
    const auth = this;
    auth.setUser(null);
    auth.setToken(null);

    utils.removeCookie("user");
    utils.removeCookie("token");
};
const authInit = function(){
    const auth = this;
    // to init things
    return function(){
        // to clear things
    };
};
const user = utils.getCookie("user") || false;
const token = user && user.token || false;

export default {signIn, signUp, user, token, signOut, authInit};
