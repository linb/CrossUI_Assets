// The default code is a com class (inherited from xui.Com)
xui.Class('App.customer', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_get")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "customers",
                    "paras" : {
                        "CustomerID" : "xxx",
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
                    "key" : "customers",
                    "paras" : {
                        "CustomerID" : "xxx",
                        "action" : "set"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_new")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "customers",
                    "paras" : {
                        "action" : "create"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("61.083333333333336em")
                .setHeight("39.166666666666664em")
                .setResizer(false)
                .setCaption("Customer")
                .setImage("{/}img/app.png")
                .setImagePos("-32px 0")
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
                                    "left" : "{page.ctl_form.isDirtied()}",
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
                                    "left" : "{page.ctl_form.isDirtied()}",
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
                .setHost(host,"ctl_form")
                .setLeft("0.8333333333333334em")
                .setTop("0.75em")
                .setWidth("58.666666666666664em")
                .setHeight("31.666666666666668em")
                .setBorderType("inset")
                .setOverflow("visible")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel299")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("Company Name")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel301")
                .setLeft("29.166666666666668em")
                .setTop("9.166666666666666em")
                .setCaption("Notes")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input7")
                .setName("Notes")
                .setLeft("29.166666666666668em")
                .setTop("10.833333333333334em")
                .setWidth("28.333333333333332em")
                .setHeight("20em")
                .setMultiLines(true)
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput14")
                .setName("CompanyName")
                .setLeft("9.166666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("29.166666666666668em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
                .setType("input")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel187")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setCaption("First Name")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput111")
                .setName("FirstName")
                .setLeft("9.166666666666666em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setType("input")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel188")
                .setLeft("21.666666666666668em")
                .setTop("3.6666666666666665em")
                .setCaption("Last Name")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput112")
                .setName("LastName")
                .setLeft("29.166666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setType("input")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel189")
                .setLeft("0.8333333333333334em")
                .setTop("6.166666666666667em")
                .setCaption("Email")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel190")
                .setLeft("33.333333333333336em")
                .setTop("6.166666666666667em")
                .setCaption("Website")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput114")
                .setName("CompanyWebsite")
                .setLeft("38.333333333333336em")
                .setTop("5.833333333333333em")
                .setWidth("19.166666666666668em")
                .setType("popbox")
                .beforeComboPop("_ctl_comboinput114_beforecombopop")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel37")
                .setLeft("41.666666666666664em")
                .setTop("1.1666666666666667em")
                .setCaption("Phone Number")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input17")
                .setName("PhoneNumber")
                .setLeft("49.166666666666664em")
                .setTop("0.8333333333333334em")
                .setWidth("8.333333333333334em")
                .setValueFormat("[^.*]")
                .setMask("(111)111-1111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel38")
                .setLeft("41.666666666666664em")
                .setTop("3.6666666666666665em")
                .setCaption("Fax Number")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input18")
                .setName("FaxNumber")
                .setLeft("49.166666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setMask("(111)111-1111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel123")
                .setLeft("9.166666666666666em")
                .setTop("9.166666666666666em")
                .setCaption("State/Province")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel124")
                .setLeft("18.333333333333332em")
                .setTop("9.166666666666666em")
                .setCaption("Postal Code")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input58")
                .setName("City")
                .setLeft("0.8333333333333334em")
                .setTop("10.833333333333334em")
                .setWidth("7.5em")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input59")
                .setName("StateOrProvince")
                .setLeft("9.166666666666666em")
                .setTop("10.833333333333334em")
                .setWidth("7.5em")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input60")
                .setName("ZIPCode")
                .setLeft("18.333333333333332em")
                .setTop("10.833333333333334em")
                .setWidth("7.5em")
                .setMask("1111-11111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel125")
                .setLeft("0.8333333333333334em")
                .setTop("9.166666666666666em")
                .setCaption("City")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block23")
                .setLeft("2.5em")
                .setTop("8.333333333333334em")
                .setWidth("53.333333333333336em")
                .setHeight("0.16666666666666666em")
                .setBorderType("inset")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel26")
                .setLeft("0.8333333333333334em")
                .setTop("13.333333333333334em")
                .setCaption("Billing Adress")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input25")
                .setName("BillingAddress")
                .setLeft("0.8333333333333334em")
                .setTop("15em")
                .setWidth("25em")
                .setHeight("3.3333333333333335em")
                .setMultiLines(true)
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel27")
                .setLeft("9.166666666666666em")
                .setTop("19.166666666666668em")
                .setCaption("State/Province")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel29")
                .setLeft("18.333333333333332em")
                .setTop("19.166666666666668em")
                .setCaption("Postal Code")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input26")
                .setName("ShipCity")
                .setLeft("0.8333333333333334em")
                .setTop("20.833333333333332em")
                .setWidth("7.5em")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input27")
                .setName("ShipStateOrProvince")
                .setLeft("9.166666666666666em")
                .setTop("20.833333333333332em")
                .setWidth("7.5em")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input28")
                .setName("ShipZIPCode")
                .setLeft("18.333333333333332em")
                .setTop("20.833333333333332em")
                .setWidth("7.5em")
                .setMask("1111-11111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel30")
                .setLeft("0.8333333333333334em")
                .setTop("19.166666666666668em")
                .setCaption("Ship City")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel31")
                .setLeft("0.8333333333333334em")
                .setTop("23.333333333333332em")
                .setCaption("Shipping Adress")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input29")
                .setName("ShipAddress")
                .setLeft("0.8333333333333334em")
                .setTop("25em")
                .setWidth("25em")
                .setHeight("3.3333333333333335em")
                .setMultiLines(true)
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel32")
                .setLeft("5em")
                .setTop("29.5em")
                .setCaption("Shipping Phone Number")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input33")
                .setName("ShipPhoneNumber")
                .setLeft("17.5em")
                .setTop("29.166666666666668em")
                .setWidth("8.333333333333334em")
                .setMask("(111)111-1111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput113")
                .setName("Email")
                .setLeft("9.166666666666666em")
                .setTop("5.833333333333333em")
                .setWidth("20em")
                .setType("popbox")
                .beforeComboPop("_ctl_comboinput113_beforecombopop")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton32")
                .setLeft("20em")
                .setTop("33.333333333333336em")
                .setWidth("5.833333333333333em")
                .setTabindex(13)
                .setCaption("Save")
                .onClick([
                    {
                        "desc" : "check",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "No change",
                            "No change"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "{page.ctl_form.isDirtied()}",
                                "symbol" : "=",
                                "right" : "{false}"
                            }
                        ],
                        "event" : 1,
                        "return" : false
                    },
                    {
                        "desc" : "update - set api id",
                        "type" : "control",
                        "target" : "api_set",
                        "args" : [
                            "{page.api_set.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{page.properties.recordId}",
                            "paras.CustomerID"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "update - set api fields",
                        "type" : "control",
                        "target" : "api_set",
                        "args" : [
                            "{page.api_set.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{page.ctl_form.getFormValues(true)}",
                            "paras.fields"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "update - call api",
                        "type" : "control",
                        "target" : "api_set",
                        "args" : [ ],
                        "method" : "invoke",
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "update - msg",
                        "type" : "control",
                        "target" : "xui_msgsvr",
                        "args" : [
                            "{page.xui_msgsvr.broadcast()}",
                            undefined,
                            undefined,
                            "customers",
                            "set",
                            "{page.properties.recordId}",
                            "{page.ctl_form.getFormValues(true)}"
                        ],
                        "method" : "broadcast",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "defined",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "create - set api fields",
                        "type" : "control",
                        "target" : "api_new",
                        "args" : [
                            "{page.api_new.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{page.ctl_form.getFormValues(true)}",
                            "paras.fields"
                        ],
                        "method" : "setQueryArgs",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            }
                        ],
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "create - call api",
                        "type" : "control",
                        "target" : "api_new",
                        "args" : [ ],
                        "method" : "invoke",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            }
                        ],
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "create -  msg",
                        "type" : "control",
                        "target" : "xui_msgsvr",
                        "args" : [
                            "{page.xui_msgsvr.broadcast()}",
                            undefined,
                            undefined,
                            "customers",
                            "create",
                            "",
                            "{temp.okData.data}"
                        ],
                        "method" : "broadcast",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "create -set id",
                        "type" : "page",
                        "target" : "App.customer",
                        "args" : [
                            {
                                "recordId" : "{temp.okData.data.CustomerID}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "update form",
                        "type" : "control",
                        "target" : "ctl_form",
                        "args" : [ ],
                        "method" : "updateFormValues",
                        "conditions" : [
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    }
                ])
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton31")
                .setLeft("36.666666666666664em")
                .setTop("33.333333333333336em")
                .setWidth("5.833333333333333em")
                .setTabindex(14)
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "mainDlg",
                        "args" : [ ],
                        "method" : "close",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_msgsvr")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {
                    "desc":"set edit api",
                    "type":"control",
                    "target":"api_get",
                    "args":[
                        "{page.api_get.setQueryArgs()}",
                        undefined,
                        undefined,
                        "{page.properties.recordId}",
                        "paras.CustomerID"
                    ],
                    "method":"setQueryArgs",
                    "redirection":"other:callback:call",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"non-empty",
                            "right":""
                        }
                    ]
                },
                {
                    "desc":"call edit api",
                    "type":"control",
                    "target":"api_get",
                    "args":[ ],
                    "method":"invoke",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"non-empty",
                            "right":""
                        }
                    ],
                    "onOK":0,
                    "onKO":1
                },
                {
                    "desc":"udpate callback",
                    "type":"control",
                    "target":"ctl_form",
                    "args":[
                        "{temp.okData.data}"
                    ],
                    "method":"setFormValues",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"non-empty",
                            "right":""
                        },
                        {
                            "left":"{temp.okData.data}",
                            "symbol":"non-empty",
                            "right":""
                        }
                    ]
                }
            ]
        }
    }
});