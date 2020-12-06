
/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import Copyright from "../pages/App/Copyright.js";
import { useAuth } from "../web_modules/react-hook-module/plugin_auth.js";
import { If } from "../web_modules/react-hook-module/index.js";
import { Box } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Button } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import DataTable from "../pages/App/DataTable.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Admin = props => {
    const styles_basic = useStyles4basic(props || {});
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
      "props" : {
        "router" : true,
        "auth" : true
      },
      "actions" : {
        "getFirst10Rows" : {
          "task" : async (  ) => {
            let data = null, rows = [ ],
            targetMdl = null;
            data = await auth.firebase.firestore(  ).collection( "StaffCard" ).limit( 10 ).get(  );
            // customized code: adjust data 
            data.forEach( doc => {
              rows.push( Object.assign( doc.data(  ), {
                id : doc.id
              }));
            });
            targetMdl = module.getModuleByAlias( "XDataTable_1" );
            useModule.updateStateFor( targetMdl, "rows", rows );
          },
          "params" : [ ]
        }
      }
    });

    const XDataTable = module.enhanceCom(DataTable);

    return html`
        <${React.Fragment}>
            <${If} condition=${ auth.user === false } key="dkakkdoe3">
                <${Box} className=${ styles_basic.container } textAlign="center">
                    Loading ...
                </${Box}>
            </${If}>
            <${If} condition=${ auth.user === null } key="f157c51t">
                <${Box} className=${ styles_basic.container } textAlign="right">
                    <${Button} variant="contained" color="Secondary" className=${ styles_basic.item } onClick=${ ( e ) => auth.signIn(  ) }>
                        SIGN IN
                    </${Button}>
                </${Box}>
            </${If}>
            <${If} condition=${ auth.user } key="h1vz34bl">
                <${Box} className=${ styles_basic.container } key="fpjc3hhv" textAlign="right">
                    <${Button} variant="contained" color="primary" className=${ styles_basic.item } key="h109ybqz" onClick=${ ( e ) => auth.signOut(  ) }>
                        SIGN OUT
                    </${Button}>
                </${Box}>
                <${XDataTable} usemodule_alias="XDataTable_1" usemodule_parent=${module} x_id="data_table">
                </${XDataTable}>
            </${If}>
            <${Copyright}>
            </${Copyright}>
        </${React.Fragment}>
    `;
};
export default Admin;