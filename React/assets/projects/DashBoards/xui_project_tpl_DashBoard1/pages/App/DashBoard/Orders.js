
/*jshint esversion: 8 */
import { React, html } from "../../../web_modules/preact-htm/index.js";
import { useModule } from "../../../web_modules/react-hook-module/index.js";
import { Box } from "../../../web_modules/material-ui/index.js";
import { Typography } from "../../../web_modules/material-ui/index.js";
import { Link } from "../../../web_modules/material-ui/index.js";
import { Avatar } from "../../../web_modules/material-ui/index.js";
import { Table } from "../../../web_modules/material-ui/index.js";
import { TableBody } from "../../../web_modules/material-ui/index.js";
import { TableCell } from "../../../web_modules/material-ui/index.js";
import { TableHead } from "../../../web_modules/material-ui/index.js";
import { TableRow } from "../../../web_modules/material-ui/index.js";
import PluginMUI from "../../../web_modules/react-hook-module/plugin_mui.js";
import { useRequest } from "../../../web_modules/react-hook-module/plugin_request.js";

export const Order = props => {
    return html`
        <${TableRow} key=${props.id}>
          <${TableCell}>${props.date}</${TableCell}>
          <${TableCell}>${props.name}</${TableCell}>
          <${TableCell}>${props.shipTo}</${TableCell}>
          <${TableCell}>${props.paymentMethod}</${TableCell}>
          <${TableCell} align="right">${props.amount}</${TableCell}>
        </${TableRow}>    
    `;
};

export const Orders = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "props" : {
        "req_url" : "recentOrders"
      }
    });

    const XOrder = module.enhanceCom(Order);

    return html`
        <${React.Fragment}>
            <${Typography} component="h2" variant="h6" color="primary" gutterBottom>
                Recent Orders
            </${Typography}>
            <${Table} size="small">
                <${TableHead}>
                    <${TableRow}>
                        <${TableCell}>
                            Date
                        </${TableCell}>
                        <${TableCell}>
                            Name
                        </${TableCell}>
                        <${TableCell}>
                            Ship To
                        </${TableCell}>
                        <${TableCell}>
                            Payment Method
                        </${TableCell}>
                        <${TableCell} align="right">
                            Sale Amount
                        </${TableCell}>
                    </${TableRow}>
                </${TableHead}>
                <${TableBody}>
                <${XOrder} x_id="order" x_iterator=${ request && request.response && request.response.orders }>
                    </${XOrder}>
                </${TableBody}>
            </${Table}>
            <${Box} mt=${ 4 }>
                <${Link} color="primary" href="javascript:;" onClick=${ e => e.preventDefault() }>
                    See more orders
                </${Link}>
            </${Box}>
        </${React.Fragment}>
    `;
};

export default Orders;