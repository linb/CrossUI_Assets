/*jshint esversion: 8 */
import { React, html } from "../../web_modules/preact-htm/index.js";
import { useModule } from "../../web_modules/react-hook-module/index.js";
import { Typography } from "../../web_modules/material-ui/index.js";
import { Link } from "../../web_modules/material-ui/index.js";
import { Button } from "../../web_modules/material-ui/index.js";
import { makeStyles } from "../../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Copyright = props => {
    const styles_basic = useStyles4basic(props || {});
    return html`
        <${Typography} variant="body2" color="textSecondary" align="center">
            <img src=${useModule.resolveURL("./logo4.png")} />
            ${ 'Copyright © ' }
            <${Link} color="inherit" href="javascript:;">
                CrossUI.com
            </${Link}>
            ${ ' ' }
            ${ new Date().getFullYear() }
            ${'.'}
        </${Typography}>
    `;
};

export default Copyright;
