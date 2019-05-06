xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"apicaller_json")
                .setName("apicaller_json")
                .setQueryURL("http://jsonip.com")
                .setRequestDataSource([ ])
                .setResponseDataTarget([
                    {
                        "type":"form",
                        "name":"db_json",
                        "path":""
                    }
                ])
                .setResponseCallback([ ])
                .onError([
                    {
                        "desc":"msg",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "error in {args[0].alias}",
                            "{args[1]}"
                        ],
                        "method":"pop"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"apicaller_xmlrpc")
                .setName("apicaller_xmlrpc")
                .setQueryURL("../../../backend/test/rpc/server.php")
                .setRequestType("XML")
                .setResponseType("XML")
                .setRequestDataSource([ ])
                .setResponseDataTarget([
                    {
                        "type":"form",
                        "name":"db_xmlrpc",
                        "path":""
                    }
                ])
                .setResponseCallback([ ])
                .setQueryArgs({
                    "methodName":"passThrough",
                    "params":[
                        2790,
                        1290320.2323,
                        null,
                        "Hello world ☺",
                        "Hello world2",
                        new Date(2011,
                        4,
                        9,
                        18,
                        4,
                        15,
                        586),
                        {
                            "Color":"Red",
                            "Truth":true
                        },
                        [
                            1,
                            2,
                            3,
                            4
                        ]
                    ]
                })
                .afterInvoke("_apicaller_xmlrpc_afterInvoke")
                .onError([
                    {
                        "desc":"msg",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "error in {args[0].alias}",
                            "{args[1]}"
                        ],
                        "method":"pop"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"apicaller_soap")
                .setName("apicaller_soap")
                .setQueryURL("../../../backend/test/soap/soap.php")
                .setRequestType("SOAP")
                .setResponseType("SOAP")
                .setRequestDataSource([ ])
                .setResponseDataTarget([
                    {
                        "type":"form",
                        "name":"db_soap",
                        "path":""
                    }
                ])
                .setResponseCallback([ ])
                .setQueryArgs({
                    "methodName":"getUserInfo",
                    "params":{
                        "bgin":"3",
                        "limit":"323"
                    }
                })
                .afterInvoke("_apicaller_soap_afterInvoke")
                .onError([
                    {
                        "desc":"msg",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "error in {args[0].alias}",
                            "{args[1]}"
                        ],
                        "method":"pop"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"db_json")
                .setLeft("3.3333333333333335em")
                .setTop("3.3333333333333335em")
                .setWidth("59.166666666666664em")
                .setHeight("6.666666666666667em")
                .setCaption("apicaller for <strong>http://jsonip.com</strong>")
                .setToggleBtn(false)
            );
            
            host.db_json.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel3")
                .setLeft("2.5em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("Your IP :")
                );
            
            host.db_json.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel4")
                .setLeft("25.833333333333332em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("Got IP from :")
                );
            
            host.db_json.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input1")
                .setName("ip")
                .setLeft("15em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("ip")
                );
            
            host.db_json.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input11")
                .setName("Pro!")
                .setLeft("36.666666666666664em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("from")
                );
            
            host.db_json.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("48.333333333333336em")
                .setTop("1em")
                .setWidth("8.333333333333334em")
                .setHtml("Call Restfual API")
                .onClick([
                    {
                        "desc":"call",
                        "type":"control",
                        "target":"apicaller_json",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"db_xmlrpc")
                .setLeft("3.3333333333333335em")
                .setTop("11.666666666666666em")
                .setWidth("59.166666666666664em")
                .setHeight("6.666666666666667em")
                .setCaption("apicaller for local <strong>XMLRPC service</strong>")
                .setToggleBtn(false)
            );
            
            host.db_xmlrpc.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel33")
                .setLeft("2.5em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("result 1 :")
                );
            
            host.db_xmlrpc.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel34")
                .setLeft("25.833333333333332em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("result 2 :")
                );
            
            host.db_xmlrpc.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input20")
                .setName("r1")
                .setLeft("15em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("ctl_input1")
                );
            
            host.db_xmlrpc.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input21")
                .setName("r2")
                .setLeft("36.666666666666664em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("ctl_input1")
                );
            
            host.db_xmlrpc.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton5")
                .setLeft("48.333333333333336em")
                .setTop("0.9166666666666666em")
                .setHtml("Call XMLRPC service")
                .setWidth("8.333333333333334em")
                .onClick([
                    {
                        "desc":"call",
                        "type":"control",
                        "target":"apicaller_xmlrpc",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"db_soap")
                .setLeft("3.3333333333333335em")
                .setTop("20em")
                .setWidth("59.166666666666664em")
                .setHeight("6.666666666666667em")
                .setCaption("apicaller for local <strong>SOAP service</strong>")
                .setToggleBtn(false)
            );
            
            host.db_soap.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel55")
                .setLeft("2.5em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("user :")
                );
            
            host.db_soap.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel56")
                .setLeft("25.833333333333332em")
                .setTop("2em")
                .setWidth("10.333333333333334em")
                .setCaption("msg :")
                );
            
            host.db_soap.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input42")
                .setName("user")
                .setLeft("15em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("ctl_input1")
                );
            
            host.db_soap.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input43")
                .setName("msg")
                .setLeft("36.666666666666664em")
                .setTop("1.6666666666666667em")
                .setLabelCaption("ctl_input1")
                );
            
            host.db_soap.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton6")
                .setLeft("48.333333333333336em")
                .setTop("0.8333333333333334em")
                .setHtml("Call SOAP service")
                .setWidth("8.333333333333334em")
                .setHeight("2.6666666666666665em")
                .onClick([
                    {
                        "desc":"call",
                        "type":"control",
                        "target":"apicaller_soap",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    }
                ])
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});