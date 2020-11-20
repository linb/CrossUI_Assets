/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";

const Module = props => {
    const [defaultState, setDefaultState] = React.useState({ });

    return html`
        <${React.Fragment}>
        </${React.Fragment}>
    `;
};

export default Module;
