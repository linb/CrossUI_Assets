
/*jshint esversion: 8 */
import { React, html } from "../../web_modules/preact-htm/index.js";
import { useModule } from "../../web_modules/react-hook-module/index.js";
import { RelativeRouter } from "../../web_modules/react-hook-module/plugin_router.js";
import { makeStyles } from "../../web_modules/material-ui/index.js";
import { CssBaseline } from "../../web_modules/material-ui/index.js";
import { Drawer } from "../../web_modules/material-ui/index.js";
import { Box } from "../../web_modules/material-ui/index.js";
import { AppBar } from "../../web_modules/material-ui/index.js";
import { Toolbar } from "../../web_modules/material-ui/index.js";
import { List } from "../../web_modules/material-ui/index.js";
import { Typography } from "../../web_modules/material-ui/index.js";
import { Divider } from "../../web_modules/material-ui/index.js";
import { IconButton } from "../../web_modules/material-ui/index.js";
import { Badge } from "../../web_modules/material-ui/index.js";
import { Container } from "../../web_modules/material-ui/index.js";
import { Grid } from "../../web_modules/material-ui/index.js";
import { Paper } from "../../web_modules/material-ui/index.js";
import { Link } from "../../web_modules/material-ui/index.js";
import { Icon } from "../../web_modules/material-ui/index.js";
import { ListItem } from "../../web_modules/material-ui/index.js";
import { ListItemIcon } from "../../web_modules/material-ui/index.js";
import { ListItemText } from "../../web_modules/material-ui/index.js";
import { ListSubheader } from "../../web_modules/material-ui/index.js";
import { Avatar } from "../../web_modules/material-ui/index.js";
import { Table } from "../../web_modules/material-ui/index.js";
import { TableBody } from "../../web_modules/material-ui/index.js";
import { TableCell } from "../../web_modules/material-ui/index.js";
import { TableHead } from "../../web_modules/material-ui/index.js";
import { TableRow } from "../../web_modules/material-ui/index.js";
import PluginMUI from "../../web_modules/react-hook-module/plugin_mui.js";
import CopyRight from "../../pages/components/CopyRight.js";
import PageVisitorChart from "../../pages/App/DashBoard/PageVisitorChart.js";
import Orders from "../../pages/App/DashBoard/Orders.js";
import { useAuth } from "../../web_modules/react-hook-module/plugin_auth.js";

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
        height: 240,
        overflow: 'hidden'
    },
    depositContext: {
        flex: 1
    }
}));

export const MainListItems = props => {
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
            <${ListItem} button selected=${props.selected === "/reports"} onClick=${e => props.onSelectItem && props.onSelectItem("/reports")}>
                <${ListItemIcon}>
                    <${Icon}>
                        insert_chart
                    </${Icon}>
                </${ListItemIcon}>
                <${ListItemText} primary="Reports">
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

export const SecondaryListItems = props => {
    return html`
      <div>
        <${ListSubheader} inset>Saved reports</${ListSubheader}>
        <${ListItem} button selected=${props.selected === "/report_currentmonth"} onClick=${e => props.onSelectItem && props.onSelectItem("/report_currentmonth")}>
          <${ListItemIcon}>
            <${Icon}>assignment</${Icon}>
          </${ListItemIcon}>
          <${ListItemText} primary="Current month" />
        </${ListItem}>
        <${ListItem} button selected=${props.selected === "/report_lastquarter"} onClick=${e => props.onSelectItem && props.onSelectItem("/report_lastquarter")}>
          <${ListItemIcon}>
            <${Icon}>assignment</${Icon}>
          </${ListItemIcon}>
          <${ListItemText} primary="Last quarter" />
        </${ListItem}>
        <${ListItem} button selected=${props.selected === "/report_yearendsale"} onClick=${e => props.onSelectItem && props.onSelectItem("/report_yearendsale")}>
          <${ListItemIcon}>
            <${Icon}>assignment</${Icon}>
          </${ListItemIcon}>
          <${ListItemText} primary="Year-end sale" />
        </${ListItem}>
      </div>
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

export const Dashboard = props => {
    const classes = useStyles();
    return html`
        <${React.Fragment}>
            <${Grid} container spacing=${3}>
                <${Grid} item xs=${12} md=${8} lg=${9}>
                    <${Paper} className=${classes.paper + " " + classes.fixedHeight}>
                        ${"Chart"}
                        <${PageVisitorChart}>
                        </${PageVisitorChart}>
                    </${Paper}>
                </${Grid}>
                <${Grid} item xs=${12} md=${4} lg=${3}>
                    <${Paper} className=${classes.paper + " " + classes.fixedHeight}>
                        <${Deposits} usemodule_alias="Deposits_1" >
                        </${Deposits}>
                    </${Paper}>
                </${Grid}>
                <${Grid} item xs=${12}>
                    <${Paper} className=${classes.paper}>
                        <${Orders} usemodule_alias="Orders_1"  >
                        </${Orders}>
                    </${Paper}>
                </${Grid}>
            </${Grid}>
        </${React.Fragment}>
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
        "enableRouter" : true,
        "enableAuth" : true
      },
      "state" : {
        "drawerOpen" : true
      }
    });

    console.log(router);
    
    const XPageVisitorChart = module.enhanceCom(PageVisitorChart);
    const XOrders = module.enhanceCom(Orders);

    return html`
        <${React.Fragment}>
            <${ CssBaseline }>
            </${ CssBaseline }>
            <div className=${ classes.root }>
                <${AppBar} position="absolute" className=${ classes.appBar + " " + (module.state.drawerOpen ? classes.appBarShift : '') }>
                    <${Toolbar} className=${ classes.toolbar }>
                        <${IconButton} edge="start" color="inherit" aria-label="open drawer" onClick=${ e => module.updateState("drawerOpen", true) } className=${ classes.menuButton + " " + (module.state.drawerOpen ? classes.menuButtonHidden : '') }>
                            <${Icon}>
                                dehaze
                            </${Icon}>
                        </${IconButton}>
                        <${Typography} component="h1" variant="h6" color="inherit" noWrap className=${ classes.title }>
                            Dashboard
                        </${Typography}>
                        <${IconButton} color="inherit">
                            <${Badge} badgeContent=${ 4 } color="secondary">
                                <${Icon}>
                                    notifications
                                </${Icon}>
                            </${Badge}>
                        </${IconButton}>
                        <${IconButton} color="inherit" key="fo6f7z58" onClick=${ ( e ) => auth.signOut( auth.user && auth.user.token ) }>
                            <${Icon} key="3dmzqc0p">
                                exit_to_app
                            </${Icon}>
                        </${IconButton}>
                    </${Toolbar}>
                </${AppBar}>
                <${Drawer} variant="permanent" classes=${ {
        paper: `${classes.drawerPaper} ${module.state.drawerOpen ? '' : classes.drawerPaperClose} `
    } } open=${ module.state.drawerOpen }>
                    <div className=${ classes.toolbarIcon }>
                        <${Avatar} key="6t5jxbkb" style=${ { "position": "absolute", "left": "6px" } }>
                            JL
                        </${Avatar}>
                        <${IconButton} onClick=${ e => module.updateState("drawerOpen", false) }>
                            <${Icon}>
                                chevron_left
                            </${Icon}>
                        </${IconButton}>
                    </div>
                    <${Divider}>
                    </${Divider}>
                    <${List}>
                        <${MainListItems} selected=${ router.relativePath } onSelectItem=${ key => router.navigate(key) }>
                        </${MainListItems}>
                    </${List}>
                    <${Divider}>
                    </${Divider}>
                    <${List}>
                        <${SecondaryListItems} selected=${ router.relativePath } onSelectItem=${ key => router.navigate(key) }>
                        </${SecondaryListItems}>
                    </${List}>
                </${Drawer}>
                <main className=${ classes.content }>
                    <div className=${ classes.appBarSpacer }>
                    </div>
                    <${Container} maxWidth="lg" className=${ classes.container }>
                        <${RelativeRouter} key="ey98gro1">
                            <router path="/" title="others">
                                <${Dashboard}>
                                </${Dashboard}>
                            </router>
                            <router path="/orders" title="orders">
                                <${XOrders} usemodule_alias="XOrders_1" usemodule_parent=${ module } x_id="xid_3b4pfhrz">
                                </${XOrders}>
                            </router>
                            <router path="/reports" title="reports" key="e8ltrnoq">
                                <${Paper} className=${ classes.paper + " " + classes.fixedHeight }>
                                    ${ "Chart" }
                                    <${XPageVisitorChart} usemodule_alias="XPageVisitorChart_1" usemodule_parent=${ module } x_id="xid_6wg56m9y">
                                    </${XPageVisitorChart}>
                                </${Paper}>
                            </router>
                            <router path="*" title="others" key="gx85eqqi">
                                Content for the relative path:
                                ${ " " }
                                ${ router.relativePath }
                            </router>
                        </${RelativeRouter}>
                    </${Container}>
                    <${CopyRight}>
                    </${CopyRight}>
                </main>
            </div>
        </${React.Fragment}>
    `;
};

export default Admin;