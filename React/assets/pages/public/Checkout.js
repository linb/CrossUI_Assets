/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import { If } from "../web_modules/react-hook-module/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { Paper } from "../web_modules/material-ui/index.js";
import { Stepper } from "../web_modules/material-ui/index.js";
import { Step } from "../web_modules/material-ui/index.js";
import { StepLabel } from "../web_modules/material-ui/index.js";
import { Button } from "../web_modules/material-ui/index.js";
import { Link } from "../web_modules/material-ui/index.js";
import { Typography } from "../web_modules/material-ui/index.js";
import { Grid } from "../web_modules/material-ui/index.js";
import { TextField } from "../web_modules/material-ui/index.js";
import { FormControlLabel } from "../web_modules/material-ui/index.js";
import { Checkbox } from "../web_modules/material-ui/index.js";

const useStyles = makeStyles(theme => ({
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
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    },
    stepper: {
        padding: theme.spacing(3, 0, 5)
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    }
}));

const Copyright = props => {
    return html`
    <${Typography} variant="body2" color="textSecondary" align="center">
      ${'Copyright © '}
      <${Link} color="inherit" href="https://material-ui.com/">
        CrossUI.com
      </${Link}>${' '}
      ${new Date().getFullYear()}
      ${'.'}
    </${Typography}>
  `;
};

export const AddressForm = props => {
    return html`
    <${React.Fragment}>
      <${Typography} variant="h6" gutterBottom>
        Shipping address
      </${Typography}>
      <${Grid} container spacing=${3}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </${Grid}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </${Grid}>
        <${Grid} item xs=${12}>
          <${TextField}
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </${Grid}>
        <${Grid} item xs=${12}>
          <${TextField}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </${Grid}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </${Grid}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField} id="state" name="state" label="State/Province/Region" fullWidth />
        </${Grid}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </${Grid}>
        <${Grid} item xs=${12} sm=${6}>
          <${TextField}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </${Grid}>
        <${Grid} item xs=${12}>
          <${FormControlLabel}
          control=${html`<${Checkbox} color="secondary" name="saveAddress" value="yes" />`}
            label="Use this address for payment details"
          />
        </${Grid}>
      </${Grid}>
    </${React.Fragment}>
  `;
};

export const PaymentForm = props => {
    return html`
    <${React.Fragment}>
      <${Typography} variant="h6" gutterBottom>
        Payment method
      </${Typography}>
      <${Grid} container spacing=${3}>
        <${Grid} item xs=${12} md=${6}>
          <${TextField} required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
        </${Grid}>
        <${Grid} item xs=${12} md=${6}>
          <${TextField}
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </${Grid}>
        <${Grid} item xs=${12} md=${6}>
          <${TextField} required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </${Grid}>
        <${Grid} item xs=${12} md=${6}>
          <${TextField}
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </${Grid}>
        <${Grid} item xs=${12}>
          <${FormControlLabel}
            control=${html`<${Checkbox} color="secondary" name="saveCard" value="yes" />`}
            label="Remember credit card details for next time"
          />
        </${Grid}>
      </${Grid}>
    </${React.Fragment}>
  `;
};

export const Review = props => {
    return html`
        <div>
            <${Typography} variant="h6" gutterBottom>
                Order summary
            </${Typography}>
            <${Typography} variant="body1" key="76gf8amy">
                ...
            </${Typography}>
            <${Typography} variant="h6" gutterBottom>
                Address
            </${Typography}>
            <${Typography} variant="body1" key="73hl2xy9">
                ...
            </${Typography}>
            <${Typography} variant="h6" gutterBottom>
                Payment
            </${Typography}>
            <${Typography} variant="body1" key="73hl2xy9">
                ...
            </${Typography}>
        </div>
    `;
};

export const Thanks = props => {
    return html`
        <${React.Fragment}>
            <${Typography} variant="h5" gutterBottom>
                Thank you for your order.
            </${Typography}>
            <${Typography} variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
          send you an update when your order has shipped.
            </${Typography}>
        </${React.Fragment}>    
    `;
};

const Checkout = props => {
    const classes = useStyles();

    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "state" : {
        "activeStep" : 0
      }
    });

    return html`
        <${React.Fragment}>
            <main className=${ classes.layout }>
                <${Paper} className=${ classes.paper }>
                    <${Typography} component="h1" variant="h4" align="center">
                        Checkout
                    </${Typography}>
                    <${Stepper} activeStep=${ module.state.activeStep } className=${ classes.stepper }>
                        <${Step} key="AddressForm">
                            <${StepLabel}>
                                AddressForm
                            </${StepLabel}>
                        </${Step}>
                        <${Step} key="PaymentForm">
                            <${StepLabel}>
                                PaymentForm
                            </${StepLabel}>
                        </${Step}>
                        <${Step} key="Review">
                            <${StepLabel}>
                                Review
                            </${StepLabel}>
                        </${Step}>
                    </${Stepper}>
                    <div>
                        <${If} condition=${ module.state.activeStep === 0 }>
                            <${AddressForm}>
                            </${AddressForm}>
                        </${If}>
                        <${If} condition=${ module.state.activeStep === 1 }>
                            <${PaymentForm}>
                            </${PaymentForm}>
                        </${If}>
                        <${If} condition=${ module.state.activeStep === 2 }>
                            <${Review}
                            </${Review}>
                        </${If}>
                        <${If} condition=${ module.state.activeStep > 2 }>
                            <${Thanks}>
                            </${Thanks}>
                        </${If}>
                        <${If} condition=${ module.state.activeStep <= 2 }>
                            <div className=${ classes.buttons }>
                                <${If} condition=${ module.state.activeStep !== 0 }>
                                    <${Button} onClick=${ () => module.updateState('activeStep', module.state.activeStep - 1) } className=${ classes.button }>
                                        Back
                                    </${Button}>
                                </${If}>
                                <${Button} variant="contained" color="primary" onClick=${ () => module.updateState('activeStep', module.state.activeStep + 1) } className=${ classes.button }>
                                    ${ module.state.activeStep === 2 ? "Place order" : "Next" }
                                </${Button}>
                            </div>
                        </${If}>
                    </div>
                </${Paper}>
                <${Copyright}>
                </${Copyright}>
            </main>
        </${React.Fragment}>
    `;
};

export default Checkout;
