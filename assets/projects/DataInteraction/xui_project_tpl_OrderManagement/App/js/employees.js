// The default code is a com class (inherited from xui.Com)
xui.Class('App.employees', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_list")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "employees",
                    "paras" : {
                        "action" : "list"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_del")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "employees",
                    "paras" : {
                        "action" : "delete"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("1.6666666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("52.25em")
                .setHeight("30.416666666666668em")
                .setResizer(false)
                .setCaption("Employees")
                .setImage("{/}img/app.png")
                .setImagePos("-16px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"mainPane")
                .setLeft("0.5333333333333333em")
                .setTop("0.6222222222222222em")
                .setWidth("50.25em")
                .setHeight("23.583333333333332em")
                .setBorderType("inset")
            );
            
            host.mainPane.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"module_grideditor1")
                .setProperties({
                    "valueColumn" : "EmployeeID",
                    "captionExpression" : "LastName FirstName",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "header" : [
                                    {
                                        "id" : "EmployeeID",
                                        "caption" : "Employee ID",
                                        "width" : "4em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "FirstName",
                                        "caption" : "First Name",
                                        "width" : "10em",
                                        "hidden" : false,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "LastName",
                                        "caption" : "Last Name",
                                        "width" : "10em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "Title",
                                        "caption" : "Title",
                                        "flexSize" : true,
                                        "width" : "14em",
                                        "hidden" : false,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "WorkPhone",
                                        "caption" : "WorkPhone",
                                        "flexSize" : false,
                                        "width" : "8em",
                                        "type" : "input"
                                    }
                                ],
                                "uidColumn" : "EmployeeID",
                                "freezedColumn" : 1,
                                "colHidable" : false
                            }
                        }
                    }
                })
                .setEvents({
                    "onListRecords" : [
                        {
                            "desc" : "set page",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [
                                "{page.api_list.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[0]}",
                                "paras.page"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "set size",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [
                                "{page.api_list.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[1]}",
                                "paras.size"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "call",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [ ],
                            "method" : "invoke",
                            "onOK" : 0,
                            "onKO" : 1
                        },
                        {
                            "desc" : "if ok, callback",
                            "type" : "other",
                            "target" : "callback",
                            "args" : [
                                "{args[2]()}",
                                undefined,
                                undefined,
                                "{temp.okData.data}"
                            ],
                            "method" : "call",
                            "conditions" : [
                                {
                                    "left" : "{temp.okData.data}",
                                    "symbol" : "non-empty",
                                    "right" : ""
                                }
                            ]
                        }
                    ],
                    "onOpenRecord" : [
                        {
                            "desc" : "set prop",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [
                                {
                                    "recordId" : "{args[0]}"
                                }
                            ],
                            "method" : "setProperties"
                        },
                        {
                            "desc" : "show",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set hook",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "updateCallback",
                                "{args[2]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        }
                    ],
                    "onDeleteRecords" : [
                        {
                            "desc" : "set api",
                            "type" : "control",
                            "target" : "api_del",
                            "args" : [
                                "{page.api_del.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[0]}",
                                "paras.ids"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "call api",
                            "type" : "control",
                            "target" : "api_del",
                            "args" : [ ],
                            "method" : "invoke",
                            "onOK" : 0,
                            "onKO" : 1
                        },
                        {
                            "desc" : "callback",
                            "type" : "other",
                            "target" : "callback",
                            "args" : [
                                "{args[1]()}"
                            ],
                            "method" : "call",
                            "conditions" : [
                                {
                                    "left" : "{temp.okData.data}",
                                    "symbol" : "non-empty",
                                    "right" : ""
                                }
                            ]
                        }
                    ],
                    "onCreateRecords" : [
                        {
                            "desc" : "set prop",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [
                                {
                                    "callback" : "{args[0]}"
                                }
                            ],
                            "method" : "setProperties"
                        },
                        {
                            "desc" : "crete order",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set create hook",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "createCallback",
                                "{args[0]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        },
                        {
                            "desc" : "set udpate hook",
                            "type" : "page",
                            "target" : "App.employee",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "updateCallback",
                                "{args[1]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        }
                    ],
                    "onSelectRecord" : [
                        {
                            "desc" : "callback",
                            "type" : "control",
                            "target" : "xui_msgsvr",
                            "args" : [
                                "{page.xui_msgsvr.broadcast()}",
                                undefined,
                                undefined,
                                "{page.properties.popfromkey}",
                                "{page.properties.popfromvalue}",
                                "{args[0]}",
                                "{args[1]}",
                                ""
                            ],
                            "method" : "broadcast",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "close",
                            "type" : "control",
                            "target" : "mainDlg",
                            "args" : [ ],
                            "method" : "destroy"
                        }
                    ]
                })
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton14")
                .setLeft("37.083333333333336em")
                .setTop("24.583333333333332em")
                .setWidth("8em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "destroy",
                        "type" : "page",
                        "target" : "App.employees",
                        "args" : [ ],
                        "method" : "destroy",
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
            "onMessage":[
                {
                    "desc":"check",
                    "type":"other",
                    "target":"msg",
                    "args":[ ],
                    "method":"free",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"!=",
                            "right":"needSelector"
                        }
                    ],
                    "return":false
                },
                {
                    "desc":"grid",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.setMode()}",
                        undefined,
                        undefined,
                        "selection"
                    ],
                    "method":"callFunction",
                    "redirection":"other:callback:call"
                },
                {
                    "desc":"dialog",
                    "type":"control",
                    "target":"mainDlg",
                    "args":[
                        {
                            "modal":false
                        },
                        { }
                    ],
                    "method":"setProperties"
                },
                {
                    "desc":"set prop",
                    "type":"page",
                    "target":"App.employees",
                    "args":[
                        {
                            "popfromkey":"{args[2]}",
                            "popfromvalue":"{args[3]}"
                        }
                    ],
                    "method":"setProperties"
                }
            ]
        }
    }
});