// The default code is a com class (inherited from xui.Com)
xui.Class('App.product', 'xui.Module',{
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
                    "key" : "products",
                    "paras" : {
                        "ProductID" : "xxx",
                        "action" : "get"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_set")
                .setName("api_set")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "products",
                    "paras" : {
                        "ProductID" : "xxx",
                        "action" : "set"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_new")
                .setName("api_new")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "products",
                    "paras" : {
                        "action" : "create"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("3.3333333333333335em")
                .setTop("3.3333333333333335em")
                .setWidth("41.666666666666664em")
                .setHeight("15em")
                .setResizer(false)
                .setCaption("Product")
                .setImage("{/}img/app.png")
                .setImagePos("-48px 0")
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
                .setTop("0.8333333333333334em")
                .setWidth("39.166666666666664em")
                .setHeight("7.5em")
                .setBorderType("inset")
                .setOverflow("visible")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel299")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("Product Name")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput14")
                .setName("ProductName")
                .setDataBinder("databinder_p")
                .setDataField("ProductName")
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
                .setCaption("Unit Price")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput111")
                .setName("UnitPrice")
                .setDataBinder("databinder_p")
                .setDataField("UnitPrice")
                .setLeft("9.166666666666666em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
                .setType("currency")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ctl_scheckbox1")
                .setName("InStock")
                .setDataBinder("databinder_p")
                .setDataField("InStock")
                .setLeft("25.833333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("11.666666666666666em")
                .setCaption("In Stock")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton23")
                .setLeft("10.833333333333334em")
                .setTop("9.166666666666666em")
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
                            "{page.MSG.recordId}",
                            "paras.ProductID"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{page.MSG.recordId}",
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
                                "left" : "{page.MSG.recordId}",
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
                                "left" : "{page.MSG.recordId}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "update - set back to grid",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [
                            "{page.postMessage()}",
                            undefined,
                            undefined,
                            "set",
                            "{page.MSG.recordId}",
                            "{page.ctl_form.getFormValues(true)}"
                        ],
                        "method" : "postMessage",
                        "redirection" : "page::",
                        "conditions" : [
                            {
                                "left" : "{page.MSG.recordId}",
                                "symbol" : "defined",
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
                                "left" : "{page.MSG.recordId}",
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
                                "left" : "{page.MSG.recordId}",
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
                        "desc" : "create - set back to grid",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [
                            "{page.postMessage()}",
                            undefined,
                            undefined,
                            "create",
                            "{temp.okData.data}"
                        ],
                        "method" : "postMessage",
                        "conditions" : [
                            {
                                "left" : "{page.MSG.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "redirection" : "page::"
                    },
                    {
                        "desc" : "create -set id",
                        "type" : "other",
                        "target" : "var",
                        "args" : [
                            "MSG.recordId",
                            "{temp.okData.data.ProductID}"
                        ],
                        "method" : "page",
                        "conditions" : [
                            {
                                "left" : "{page.MSG.recordId}",
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
                .setHost(host,"ctl_sbutton24")
                .setLeft("27.5em")
                .setTop("9.166666666666666em")
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
                        "{page.MSG.recordId}",
                        "paras.ProductID"
                    ],
                    "method":"setQueryArgs",
                    "redirection":"other:callback:call",
                    "conditions":[
                        {
                            "left":"{page.MSG.action}",
                            "symbol":"=",
                            "right":"set"
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
                            "left":"{page.MSG.action}",
                            "symbol":"=",
                            "right":"set"
                        }
                    ],
                    "okFlag":"_DI_succeed",
                    "koFlag":"_DI_fail",
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
                            "left":"{page.MSG.action}",
                            "symbol":"=",
                            "right":"set"
                        },
                        {
                            "left":"{temp.okData.data}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                }
            ],
            "onMessage":[
                {
                    "desc":"set action type",
                    "type":"other",
                    "target":"var",
                    "args":[
                        "MSG.action",
                        "{args[1]}"
                    ],
                    "method":"page"
                },
                {
                    "desc":"set recordId",
                    "type":"other",
                    "target":"var",
                    "args":[
                        "MSG.recordId",
                        "{args[2]}"
                    ],
                    "method":"page",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                }
            ]
        }
    }
});