
/*jshint esversion: 8 */
import { React, html } from "../../web_modules/preact-htm/index.js";
import { useModule } from "../../web_modules/react-hook-module/index.js";
import { Typography } from "../../web_modules/material-ui/index.js";
import { Icon } from "../../web_modules/material-ui/index.js";
import { Table } from "../../web_modules/material-ui/index.js";
import { TableBody } from "../../web_modules/material-ui/index.js";
import { TableCell } from "../../web_modules/material-ui/index.js";
import { TableHead } from "../../web_modules/material-ui/index.js";
import { TableRow } from "../../web_modules/material-ui/index.js";
import { Button } from "../../web_modules/material-ui/index.js";
import { makeStyles } from "../../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    } 
}));

export const Order = props => {
    return html`
        <${TableRow} key=${props.id}>
          <${TableCell}>${props.fname}</${TableCell}>
          <${TableCell}>${props.lname}</${TableCell}>
          <${TableCell}>${props.age}</${TableCell}>
        </${TableRow}>    
    `;
};

export const Orders = props => {
    const styles_basic = useStyles4basic(props || {});
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "state" : {
        "rows" : [
        ]
      }
    });

    const XOrder = module.enhanceCom(Order);

    return html`
        <${React.Fragment}>
            <${Typography} component="h2" variant="h6" color="primary" gutterBottom align="center">
                <${Button} variant="contained" className=${ styles_basic.item } key="b4n7nmgz" onClick=${ async ( e ) => {
    module.updateState("rows", []);
    await useModule.dispatchAsyncActionTo( module.parent, "getFirst10Rows", [ ]);
    } } startIcon=${ html`<${Icon}>cloud_download</${Icon}>` } color="default">
                    Click to fetch first 10 rows from FireStore
                </${Button}>
            </${Typography}>
            <${Table} size="small">
                <${TableHead}>
                    <${TableRow} hover=${ true }>
                        <${TableCell} style=${ {"fontWeight":"bold"} }>
                            First Name
                        </${TableCell}>
                        <${TableCell} style=${ {"fontWeight":"bold"} }>
                            Last Name
                        </${TableCell}>
                        <${TableCell} style=${ {"fontWeight":"bold"} }>
                            Age
                        </${TableCell}>
                    </${TableRow}>
                </${TableHead}>
                <${TableBody}>
                    <${XOrder} x_id="order" x_iterator=${ module.state.rows }>
                    </${XOrder}>
                </${TableBody}>
            </${Table}>
        </${React.Fragment}>
    `;
};

export default Orders;