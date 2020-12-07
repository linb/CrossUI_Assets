/*jshint esversion: 8 */
import { React, html } from "../../web_modules/preact-htm/index.js";
import { useModule } from "../../web_modules/react-hook-module/index.js";
import PluginMUI from "../../web_modules/react-hook-module/plugin_mui.js";
import { RelativeRouter } from "../../web_modules/react-hook-module/plugin_router.js";
import { Link as RouteLink } from "../../web_modules/react-hook-module/plugin_router.js";
import { RHForm } from "../../web_modules/react-hook-module/plugin_form.js";
import { Icon } from "../../web_modules/material-ui/index.js";
import { Avatar } from "../../web_modules/material-ui/index.js";
import { Button } from "../../web_modules/material-ui/index.js";
import { TextField } from "../../web_modules/material-ui/index.js";
import { FormControlLabel } from "../../web_modules/material-ui/index.js";
import { Checkbox } from "../../web_modules/material-ui/index.js";
import { Link } from "../../web_modules/material-ui/index.js";
import { Grid } from "../../web_modules/material-ui/index.js";
import { Box } from "../../web_modules/material-ui/index.js";
import { Typography } from "../../web_modules/material-ui/index.js";
import { makeStyles } from "../../web_modules/material-ui/index.js";
import { Container } from "../../web_modules/material-ui/index.js";
import { Paper } from "../../web_modules/material-ui/index.js";
import { Tabs } from "../../web_modules/material-ui/index.js";
import { AppBar } from "../../web_modules/material-ui/index.js";
import { Tab } from "../../web_modules/material-ui/index.js";
import { useAuth } from "../../web_modules/react-hook-module/plugin_auth.js";
import CopyRight from "../../pages/components/CopyRight.js";

const useStyles4Sign = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export const SignIn = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "props" : {
        "enableAuth" : true
      }
    });

    const classes = useStyles4Sign();

    return html`
        <${Container} component="main" maxWidth="xs">
            <div className=${ classes.paper }>
                <${Avatar} className=${ classes.avatar }>
                    <${Icon}>
                        lock
                    </${Icon}>
                </${Avatar}>
                <${Typography} component="h1" variant="h5">
                    Sign in
                </${Typography}>
                <${RHForm} className=${ classes.form } noValidate onSubmit=${ ( data ) => auth.signIn( data ) }>
                    <${TextField} variant="outlined" margin="normal" required fullWidth label="Email Address" name="email" autoComplete="email" autoFocus>
                    </${TextField}>
                    <${TextField} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password">
                    </${TextField}>
                    <${FormControlLabel} control=${ html`<${Checkbox} value="remember"  color="primary" />` } name="remember" label="Remember me">
                    </${FormControlLabel}>
                    <${Button} type="submit" fullWidth variant="contained" color="primary" className=${ classes.submit }>
                        Sign In
                    </${Button}>
                    <${Grid} container>
                        <${Grid} item xs>
                            <${Link} href="javascript:;" variant="body2" onClick=${ e => window.alert("Navigate to other page") }>
                                Forgot password?
                            </${Link}>
                        </${Grid}>
                        <${Grid} item>
                            <${Link} href="javascript:;" variant="body2">
                                <${RouteLink} to="signup" variant="body2">
                                    ${ "Don't have an account? Sign Up" }
                                </${RouteLink}>
                            </${Link}>
                        </${Grid}>
                    </${Grid}>
                </${RHForm}>
            </div>
        </${Container}>
    `;
};

export const SignUp = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        "props": {
            "enableAuth": true
        }
    });

    const classes = useStyles4Sign();

    return html`
        <${Container} component="main" maxWidth="xs">
            <div className=${classes.paper}>
                <${Avatar} className=${classes.avatar}>
                    <${Icon}>
                        lock
                    </${Icon}>
                </${Avatar}>
                <${Typography} component="h1" variant="h5">
                    Sign up
                </${Typography}>
                <${RHForm} className=${classes.form} noValidate onSubmit=${data => auth.signUp(data)}>
                    <${Grid} container spacing=${2}>
                        <${Grid} item xs=${12} sm=${6}>
                            <${TextField} autoComplete="fname" name="firstName" variant="outlined" required fullWidth label="First Name" autoFocus>
                            </${TextField}>
                        </${Grid}>
                        <${Grid} item xs=${12} sm=${6}>
                            <${TextField} variant="outlined" required fullWidth label="Last Name" name="lastName" autoComplete="lname">
                            </${TextField}>
                        </${Grid}>
                        <${Grid} item xs=${12}>
                            <${TextField} variant="outlined" required fullWidth label="Email Address" name="email" autoComplete="email">
                            </${TextField}>
                        </${Grid}>
                        <${Grid} item xs=${12}>
                            <${TextField} variant="outlined" required fullWidth name="password" label="Password" type="password" autoComplete="current-password">
                            </${TextField}>
                        </${Grid}>
                        <${Grid} item xs=${12}>
                            <${FormControlLabel} name="subscribe" control=${html`<${Checkbox} value="allowExtraEmails" color="primary" />`} label="I want to receive inspiration, marketing promotions and updates via email.">
                            </${FormControlLabel}>
                        </${Grid}>
                    </${Grid}>
                    <${Button} type="submit" fullWidth variant="contained" color="primary" className=${classes.submit}>
                        Sign Up
                    </${Button}>
                    <${Grid} container justify="flex-end">
                        <${Grid} item>
                            <${Link} href="javascript:;" variant="body2">
                                <${RouteLink} to="signin" variant="body2">
                                    Already have an account? Sign in
                                </${RouteLink}>
                            </${Link}>
                        </${Grid}>
                    </${Grid}>
                </${RHForm}>
            </div>
        </${Container}>
    `;
};

const SignInAndUp = props => {
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
        "props": {
            "enableRouter": true
        },
        "state": {
            "page": "signin"
        }
    });
    console.log(router);
    const classes = useStyles4Sign();
    return html`
        <${React.Fragment}>
            <main className=${classes.layout}>
                <${Paper} className=${classes.paper} style=${{ "marginTop": "16px", "marginBottom": "16px", "paddingBottom": "16px" }}>
                    <${Tabs} centered value=${router.location.pathname === "/signup" ? "signup" : "signin"} onChange=${(e, value) => router.navigate(value)}>
                        <${Tab} value="signin" label="log in">
                        </${Tab}>
                        <${Tab} value="signup" label="not a user yet">
                        </${Tab}>
                    </${Tabs}>
                    <${RelativeRouter} key="6zdrruh">
                        <router path="signup" title="sign up">
                            <${SignUp}>
                            </${SignUp}>
                        </router>
                        <router path="*" title="sign in">
                            <${SignIn} >
                            </${SignIn}>
                        </router>
                    </${RelativeRouter}>
                </${Paper}>
                <${CopyRight}>
                </${CopyRight}>                
            </main>
        </${React.Fragment}>
    `;
};

export default SignInAndUp;