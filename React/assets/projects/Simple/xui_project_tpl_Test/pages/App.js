
/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import { RelativeRouter } from "../web_modules/react-hook-module/plugin_router.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { CssBaseline } from "../web_modules/material-ui/index.js";
import { Drawer } from "../web_modules/material-ui/index.js";
import { Box } from "../web_modules/material-ui/index.js";
import { AppBar } from "../web_modules/material-ui/index.js";
import { Toolbar } from "../web_modules/material-ui/index.js";
import { List } from "../web_modules/material-ui/index.js";
import { Typography } from "../web_modules/material-ui/index.js";
import { Divider } from "../web_modules/material-ui/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";
import { Badge } from "../web_modules/material-ui/index.js";
import { Container } from "../web_modules/material-ui/index.js";
import { Grid } from "../web_modules/material-ui/index.js";
import { Paper } from "../web_modules/material-ui/index.js";
import { Link } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { ListItem } from "../web_modules/material-ui/index.js";
import { ListItemIcon } from "../web_modules/material-ui/index.js";
import { ListItemText } from "../web_modules/material-ui/index.js";
import { ListSubheader } from "../web_modules/material-ui/index.js";
import { Avatar } from "../web_modules/material-ui/index.js";
import { Table } from "../web_modules/material-ui/index.js";
import { TableBody } from "../web_modules/material-ui/index.js";
import { TableCell } from "../web_modules/material-ui/index.js";
import { TableHead } from "../web_modules/material-ui/index.js";
import { TableRow } from "../web_modules/material-ui/index.js";
import { LineChart } from "../web_modules/recharts/index.js";
import { ResponsiveContainer } from "../web_modules/recharts/index.js";
import { Line } from "../web_modules/recharts/index.js";
import { XAxis } from "../web_modules/recharts/index.js";
import { YAxis } from "../web_modules/recharts/index.js";
import { CartesianGrid } from "../web_modules/recharts/index.js";
import { Tooltip } from "../web_modules/recharts/index.js";
import { Legend } from "../web_modules/recharts/index.js";
import PluginMUI from "../web_modules/react-hook-module/plugin_mui.js";
import { Button } from "../web_modules/material-ui/index.js";
import Copyright2 from "../pages/App/Copyright.js";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: Object.assign({}, theme.mixins.toolbar, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px'
    }),
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: 240,
        width: "calc(100% - 240px)",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 240
    },
    seeMore: {
        marginTop: theme.spacing(3)
    },
    depositContext: {
        flex: 1
    }
}));

const recharts_demodata1 = [{
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400
}, {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210
}, {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290
}, {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000
}, {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181
}, {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500
}, {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100
}];

export const MainListItems = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        "props": {
            "selected": null,
            "onSelectItem": function () {}
        },
        "actions": {
            "test": {
                "task": a => console.log("info"),
                "params": [{
                    "id": "a",
                    "type": "String",
                    "desc": ""
                }]
            }
        }
    });

    return html`
        <div>
            <${ListItem} button selected=${props.selected === "/"} onClick=${e => props.onSelectItem && props.onSelectItem("/")}>
                <${ListItemIcon}>
                    <${Icon}>
                        dashboard
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Dashboard">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/orders"} onClick=${e => props.onSelectItem && props.onSelectItem("/orders")}>
                <${ListItemIcon}>
                    <${Icon}>
                        shopping_cart
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Orders">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/customers"} onClick=${e => props.onSelectItem && props.onSelectItem("/customers")}>
                <${ListItemIcon}>
                    <${Icon}>
                        people
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Customers">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/reports"} onClick=${e => props.onSelectItem && props.onSelectItem("/reports")}>
                <${ListItemIcon}>
                    <${Icon}>
                        insert_chart
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Reports">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/integrations"} onClick=${e => props.onSelectItem && props.onSelectItem("/integrations")}>
                <${ListItemIcon}>
                    <${Icon}>
                        layers
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Integrations">
                </${ListItemText}>
            </${ListItem}>
        </div>
    `;
};

const SecondaryListItems = props => {
    return html`
        <div>
            <${ListSubheader} inset>
                Saved reports
            </${ListSubheader}>
            <${ListItem} button selected=${props.selected === "/report_currentmonth"} onClick=${e => {
        if (props.onSelectItem) {
            props.onSelectItem("/report_currentmonth");
        }
    }}>
                <${ListItemIcon}>
                    <${Icon}>
                        assignment
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Current month">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/report_yearendsale"} onClick=${e => props.onSelectItem && props.onSelectItem("/report_yearendsale")}>
                <${ListItemIcon}>
                    <${Icon}>
                        assignment
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Year-end sale">
                </${ListItemText}>
            </${ListItem}>
            <${ListItem} button selected=${props.selected === "/report_lastquarter"} onClick=${e => props.onSelectItem && props.onSelectItem("/report_lastquarter")}>
                <${ListItemIcon}>
                    <${Icon}>
                        assignment
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Last quarter">
                </${ListItemText}>
            </${ListItem}>
        </div>
    `;
};

export const Chart = props => {
    return html`
        <${React.Fragment}>
            <${ResponsiveContainer} key="bd8xf94g">
                <${LineChart} width=${600} height=${300} data=${recharts_demodata1} margin=${{ "top": 5, "right": 30, "left": 20, "bottom": 5 }}>
                    <${XAxis} dataKey="name">
                    </${XAxis}>
                    <${YAxis}>
                    </${YAxis}>
                    <${CartesianGrid} strokeDasharray="3 3">
                    </${CartesianGrid}>
                    <${Legend}>
                    </${Legend}>
                    <${Line} type="monotone" dataKey="pv" stoke="#ff00ff" activeDot=${{ "r": 6 }}>
                    </${Line}>
                    <${Line} type="monotone" dataKey="uv" stoke="#82ca9d" activeDot=${{ "r": 6 }}>
                    </${Line}>
                    <${Tooltip}>
                    </${Tooltip}>
                </${LineChart}>
            </${ResponsiveContainer}>
        </${React.Fragment}>
    `;
};

export const Deposits = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {});

    const classes = useStyles();
    return html`
        <${React.Fragment}>
            <${Typography} component="h2" variant="h6" color="primary" gutterBottom>
                Recent Deposits
            </${Typography}>
            <${Typography} component="p" variant="h4">
                $3,024.00
            </${Typography}>
            <${Typography} color="textSecondary" className=${classes.depositContext}>
                on 15 March, 2019
            </${Typography}>
            <div>
                <${Link} color="primary" href="#" onClick=${e => module.showBackdrop()}>
                    View balance
                </${Link}>
            </div>
        </${React.Fragment}>
    `;
};

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
    const classes = useStyles();
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        "state": {
            "rows": [{
                "id": 0,
                "date": "16 Mar, 2019",
                "name": "Elvis Presley",
                "shipTo": "Tupelo, MS",
                "paymentMethod": "VISA ⠀•••• 3719",
                "amount": 312.44
            }, {
                "id": 1,
                "date": "16 Mar, 2019",
                "name": "Paul McCartney",
                "shipTo": "London, UK",
                "paymentMethod": "VISA ⠀•••• 2574",
                "amount": 866.99
            }, {
                "id": 2,
                "date": "16 Mar, 2019",
                "name": "Tom Scholz",
                "shipTo": "Boston, MA",
                "paymentMethod": "MC ⠀•••• 1253",
                "amount": 100.81
            }, {
                "id": 3,
                "date": "16 Mar, 2019",
                "name": "Michael Jackson",
                "shipTo": "Gary, IN",
                "paymentMethod": "AMEX ⠀•••• 2000",
                "amount": 654.39
            }, {
                "id": 4,
                "date": "15 Mar, 2019",
                "name": "Bruce Springsteen",
                "shipTo": "Long Branch, NJ",
                "paymentMethod": "VISA ⠀•••• 5919",
                "amount": 212.79
            }]
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
                <${TableCell}>Date</${TableCell}>
                <${TableCell}>Name</${TableCell}>
                <${TableCell}>Ship To</${TableCell}>
                <${TableCell}>Payment Method</${TableCell}>
                <${TableCell} align="right">Sale Amount</${TableCell}>
              </${TableRow}>
            </${TableHead}>
            <${TableBody}>
                <${XOrder} x_id="order" x_iterator="rows" />
            </${TableBody}>
        </${Table}>
        <div className=${classes.seeMore}>
            <${Link} color="primary" href="#" onClick=${e => e.preventDefault()}>
              See more orders
            </${Link}>
        </div>
    </${React.Fragment}>    
  `;
};

export const Dashboard = props => {
    const classes = useStyles();
    return html`
        <${Container} maxWidth="lg" className=${classes.container}>
            <${Grid} container spacing=${3}>
                <${Grid} item xs=${12} md=${8} lg=${9}>
                    <${Paper} className=${classes.paper + " " + classes.fixedHeight}>
                        ${"Chart"}
                        <${Chart}>
                        </${Chart}>
                    </${Paper}>
                </${Grid}>
                <${Grid} item xs=${12} md=${4} lg=${3}>
                    <${Paper} className=${classes.paper + " " + classes.fixedHeight}>
                        <${Deposits} />
                    </${Paper}>
                </${Grid}>
                <${Grid} item xs=${12}>
                    <${Paper} className=${classes.paper}>
                        <${Orders} />
                    </${Paper}>
                </${Grid}>
            </${Grid}>
            <${Box} pt=${4}>
                <${Copyright}>
                </${Copyright}>
            </${Box}>
        </${Container}>
    `;
};

const Admin = props => {
    const classes = useStyles();
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "props" : {
        "enableRouter" : true
      },
      "state" : {
        "drawerOpen" : true
      }
    });

    return html`
        <${React.Fragment}>
            <img src=${useModule.resolveURL("./logo4.png")} />
            <${ CssBaseline }>
            </${ CssBaseline }>
            <${Copyright2}>
            </${Copyright2}>
            <${Copyright2}>
            </${Copyright2}>
            <${Copyright2}>
            </${Copyright2}>
        </${React.Fragment}>
    `;
};

export default Admin;
