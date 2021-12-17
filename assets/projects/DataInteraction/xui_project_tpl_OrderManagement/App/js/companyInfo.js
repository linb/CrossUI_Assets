xui.Class('App.companyInfo', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_get")
                .setResponseDataTarget([
                    {
                        "type" : "form",
                        "name" : "form1",
                        "path" : "data"
                    }
                ])
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "companyinfo",
                    "paras" : {
                        "SetupID" : 1,
                        "action" : "get"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_set")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "companyinfo",
                    "paras" : {
                        "SetupID" : 1,
                        "action" : "set"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("5.833333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("40em")
                .setHeight("24.166666666666668em")
                .setResizer(false)
                .setCaption("Company Informatioin")
                .setImage("{/}img/app.png")
                .setImagePos("-112px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
                .beforeClose({
                    "return" : "{false}",
                    "actions" : [
                        {
                            "desc" : "close it",
                            "type" : "control",
                            "target" : "mainDlg",
                            "args" : [ ],
                            "method" : "destroy",
                            "conditions" : [
                                {
                                    "left" : "{page.form1.isDirtied()}",
                                    "symbol" : "=",
                                    "right" : "{false}"
                                }
                            ],
                            "return" : false
                        },
                        {
                            "desc" : "confirm",
                            "type" : "other",
                            "target" : "msg",
                            "args" : [
                                "Confirm",
                                "Do you consider to save the changes you have made first?"
                            ],
                            "method" : "confirm",
                            "conditions" : [
                                {
                                    "left" : "{page.form1.isDirtied()}",
                                    "symbol" : "=",
                                    "right" : "{true}"
                                }
                            ],
                            "return" : false,
                            "onOK" : 2,
                            "onKO" : 3
                        },
                        {
                            "desc" : "confirm-no: close",
                            "type" : "control",
                            "target" : "mainDlg",
                            "args" : [ ],
                            "method" : "destroy",
                            "conditions" : [
                                {
                                    "left" : "{temp.koData}",
                                    "symbol" : "non-empty",
                                    "right" : ""
                                }
                            ]
                        }
                    ]
                })
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"form1")
                .setLeft("0.4166666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("38.333333333333336em")
                .setHeight("16.666666666666668em")
                .setBorderType("inset")
                .setFormTarget("api_set")
                .setFormDataPath("paras.fields")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel299")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("Company Name")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel301")
                .setLeft("17.5em")
                .setTop("3.6666666666666665em")
                .setCaption("Address")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel302")
                .setLeft("0.8333333333333334em")
                .setTop("6.166666666666667em")
                .setCaption("State/Province")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel303")
                .setLeft("0.8333333333333334em")
                .setTop("8.666666666666666em")
                .setCaption("Postal Code")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel304")
                .setLeft("0.8333333333333334em")
                .setTop("11.166666666666666em")
                .setCaption("Phone Number")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel305")
                .setLeft("0.8333333333333334em")
                .setTop("13.666666666666666em")
                .setCaption("Fax Number")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_CompanyName")
                .setName("CompanyName")
                .setLeft("9.166666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("27.5em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_Address")
                .setName("Address")
                .setLeft("22.5em")
                .setTop("3.3333333333333335em")
                .setWidth("14.166666666666666em")
                .setHeight("11.666666666666666em")
                .setMultiLines(true)
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_City")
                .setName("City")
                .setLeft("9.166666666666666em")
                .setTop("3.3333333333333335em")
                .setWidth("7.5em")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_StateOrProvince")
                .setName("StateOrProvince")
                .setLeft("9.166666666666666em")
                .setTop("5.833333333333333em")
                .setWidth("7.5em")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_ZIPCode")
                .setName("ZIPCode")
                .setLeft("9.166666666666666em")
                .setTop("8.333333333333334em")
                .setWidth("7.5em")
                .setMask("1111-11111")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_PhoneNumber")
                .setName("PhoneNumber")
                .setLeft("9.166666666666666em")
                .setTop("10.833333333333334em")
                .setWidth("7.5em")
                .setMask("(111)111-1111")
            );
            
            host.form1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_FaxNumber")
                .setName("FaxNumber")
                .setLeft("9.166666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("7.5em")
                .setMask("(111)111-1111")
            );
            
            host.form1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel300")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setCaption("City")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton14")
                .setLeft("9.083333333333334em")
                .setTop("18.333333333333332em")
                .setWidth("8.083333333333334em")
                .setHeight("2em")
                .setCaption("Save")
                .onClick([
                    {
                        "desc" : "check",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "There are no modified fields",
                            "No modified",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "conditions" : [
                            {
                                "left" : "{page.form1.isDirtied()}",
                                "symbol" : "!=",
                                "right" : "{true}"
                            }
                        ],
                        "return" : false,
                        "event" : 1
                    },
                    {
                        "desc" : "submit form",
                        "type" : "control",
                        "target" : "form1",
                        "args" : [ ],
                        "method" : "formSubmit"
                    }
                ])
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("24.916666666666668em")
                .setTop("18.333333333333332em")
                .setWidth("8.083333333333334em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "close",
                        "type" : "control",
                        "target" : "mainDlg",
                        "args" : [ ],
                        "method" : "close",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onReady":[
                {
                    "desc":"Action 1",
                    "type":"control",
                    "target":"api_get",
                    "args":[ ],
                    "method":"invoke",
                    "onOK":0,
                    "onKO":1
                }
            ]
        }
    }
});