/*jshint esversion: 8 */
import { React, html } from "../../web_modules/preact-htm/index.js";
import { Typography } from "../../web_modules/material-ui/index.js";
import { Link } from "../../web_modules/material-ui/index.js";
import { makeStyles } from "../../web_modules/material-ui/index.js";
import { Box } from "../../web_modules/material-ui/index.js";
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
    <${Box} mt=${4}>
        <${Typography} color="textSecondary" align="center" style=${{"borderTop":"1px solid rgb(171, 171, 171)","marginTop":"24px"}} variant="body2">
            ${ 'Copyright © ' }
            <${Link} color="inherit" href="https://crossui.com">
                CrossUI.com
            </${Link}>
            ${ ' ' }
            ${ new Date().getFullYear() }
            ${ '.' }
        </${Typography}>
    </${Box}>
    `;
};

export default Copyright;