/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js"; 
import { useModule } from "../web_modules/react-hook-module/index.js";


const Module = props => {
    const [defaultState, setDefaultState] = React.useState({ });
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
    });
    
    return html`
        <${React.Fragment}>
        </${React.Fragment}>
    `;
};

export default Module;
