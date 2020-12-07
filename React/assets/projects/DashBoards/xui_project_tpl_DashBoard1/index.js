/*jshint esversion: 6 */
import { React, html } from "./web_modules/preact-htm/index.js";
import { ReactDOM } from "./web_modules/preact-htm/index.js";
import { BrowserRouter, HashRouter as Router, RelativeRouter } from "./web_modules/react-hook-module/plugin_router.js";
import { ProvideAuth } from "./web_modules/react-hook-module/plugin_auth.js";
import { setGlobalBaseURL, setMockFetch } from "./web_modules/react-hook-module/plugin_request.js";
import CONF from "./config.js";

import App from "./pages/App.js";
import configure from "./pages/components/auth.js";

if(CONF.baseUrl){
    setGlobalBaseURL(CONF.baseUrl);
}
if(CONF.mockFetch){
    setMockFetch(CONF.mockFetch);
}

ReactDOM.render( html`
    <${React.StrictMode}>
        <${ProvideAuth} ...${configure} >
            <${Router}>
                <${RelativeRouter}>
                    <router path="/*">
                        <${App} />
                    </router>
                </${RelativeRouter}>
            </${Router}>
        </${ProvideAuth}>
    </${React.StrictMode}>
`, document.getElementById("root"));

