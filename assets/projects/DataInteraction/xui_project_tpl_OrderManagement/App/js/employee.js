// The default code is a com class (inherited from xui.Com)
xui.Class('App.employee', 'xui.Module',{
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
                    "key" : "employees",
                    "paras" : {
                        "EmployeeID" : "xxx",
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
                    "key" : "employees",
                    "paras" : {
                        "EmployeeID" : "xxx",
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
                    "key" : "employees",
                    "paras" : {
                        "action" : "create"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("5.833333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("40em")
                .setHeight("14.166666666666666em")
                .setResizer(false)
                .setCaption("Employee")
                .setImage("{/}img/app.png")
                .setImagePos("-16px 0")
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
                .setLeft("0.4166666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("38.333333333333336em")
                .setHeight("6.666666666666667em")
                .setBorderType("inset")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel299")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("First Name")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel302")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setCaption("Title")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel304")
                .setLeft("20em")
                .setTop("3.6666666666666665em")
                .setCaption("Work Phone")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input4")
                .setName("FirstName")
                .setLeft("8.333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input8")
                .setName("LastName")
                .setLeft("27.5em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input9")
                .setName("Title")
                .setLeft("8.333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_workphone")
                .setName("WorkPhone")
                .setLeft("27.5em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setMask("(111)111-1111")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel300")
                .setLeft("20em")
                .setTop("1.1666666666666667em")
                .setCaption("Last Name")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton71")
                .setLeft("9.166666666666666em")
                .setTop("8.333333333333334em")
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
                            "paras.EmployeeID"
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
                        "desc" : "update - set back to grid",
                        "type" : "page",
                        "target" : "App.employee",
                        "args" : [
                            "{page.notifyHooks()}",
                            undefined,
                            undefined,
                            "updateCallback",
                            "{page.properties.recordId}",
                            "{page.ctl_form.getFormValues(true)}"
                        ],
                        "method" : "notifyHooks",
                        "redirection" : "page::",
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
                        "desc" : "create - set back to grid",
                        "type" : "page",
                        "target" : "App.employee",
                        "args" : [
                            "{page.notifyHooks()}",
                            undefined,
                            undefined,
                            "createCallback",
                            undefined,
                            "{temp.okData.data}"
                        ],
                        "method" : "notifyHooks",
                        "redirection" : "page::",
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
                        "desc" : "create -set id",
                        "type" : "page",
                        "target" : "App.employee",
                        "args" : [
                            {
                                "recordId" : "{temp.okData.data.EmployeeID}"
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
                .setHost(host,"ctl_sbutton72")
                .setLeft("27.416666666666668em")
                .setTop("8.333333333333334em")
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
                        "{page.properties.recordId}",
                        "paras.EmployeeID"
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