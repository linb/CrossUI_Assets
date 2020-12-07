
/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import { useAuth } from "../web_modules/react-hook-module/plugin_auth.js";
import { If } from "../web_modules/react-hook-module/index.js";

import SignInUp from "../pages/App/SignInUp.js";
import DashBoard from "../pages/App/DashBoard.js";

const Module = props => {
    const [defaultState, setDefaultState] = React.useState({
    });
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        props:{
            "enableAuth": true
        }
    });
    
    const XDashBoard = module.enhanceCom(DashBoard);
    const XSignInUp = module.enhanceCom(SignInUp);
    
return html`
        <${React.Fragment}>
            <${If} condition=${ auth.user===false } key="105wvmxp">
                Checking status ...
            </${If}>
            <${If} condition=${ !auth.user && auth.user!==false } key="k0r0o5yd">
                <${XSignInUp} usemodule_alias="XSignInUp_1" usemodule_parent=${ module } x_id="xid_dupn1izc">
                </${XSignInUp}>
            </${If}>
            <${If} condition=${ auth.user } key="a9s3df61">
                <${XDashBoard} usemodule_alias="XDashBoard_1" usemodule_parent=${ module } x_id="xid_3rbpp0xo">
                </${XDashBoard}>
            </${If}>
        </${React.Fragment}>
    `;
};

export default Module;