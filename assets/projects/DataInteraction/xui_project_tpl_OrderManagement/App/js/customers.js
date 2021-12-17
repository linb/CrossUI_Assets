// The default code is a com class (inherited from xui.Com)
xui.Class('App.customers', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_list")
                .setName("api_list")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "customers",
                    "paras" : {
                        "action" : "list",
                        "page" : 1,
                        "size" : 20
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_del")
                .setName("api_del")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "customers",
                    "paras" : {
                        "action" : "delete"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("4.416666666666667em")
                .setTop("1.75em")
                .setWidth("44.166666666666664em")
                .setHeight("27.5em")
                .setResizer(false)
                .setCaption("Customers")
                .setImage("{/}img/app.png")
                .setImagePos("-32px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
            );
            
            host.mainDlg.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"module_grideditor1")
                .setProperties({
                    "valueColumn" : "CustomerID",
                    "captionExpression" : "CompanyName",
                    "inMsgType" : "customers",
                    "outMsgType" : "customer",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "header" : [
                                    {
                                        "id" : "CustomerID",
                                        "caption" : "Customer ID",
                                        "type" : "number",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "CompanyName",
                                        "caption" : "Company Name",
                                        "type" : "input",
                                        "width" : "12em"
                                    },
                                    {
                                        "id" : "FirstName",
                                        "caption" : "First Name",
                                        "type" : "input",
                                        "width" : "6em"
                                    },
                                    {
                                        "id" : "LastName",
                                        "caption" : "Last Name",
                                        "type" : "input",
                                        "width" : "6em"
                                    },
                                    {
                                        "id" : "BillingAddress",
                                        "caption" : "Billing Address",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "City",
                                        "caption" : "City",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "StateOrProvince",
                                        "caption" : "State or Province",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "ZIPCode",
                                        "caption" : "ZIP Code",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "Email",
                                        "caption" : "Email",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "CompanyWebsite",
                                        "caption" : "Company Website",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "PhoneNumber",
                                        "caption" : "Phone Number",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "FaxNumber",
                                        "caption" : "Fax Number",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "Notes",
                                        "caption" : "Notes",
                                        "width" : "12em",
                                        "type" : "input"
                                    }
                                ],
                                "uidColumn" : "CustomerID"
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
                            "args" : [
                                function (){
                                    if( resumeFun )
                                        resumeFun( "okData", arguments, fun.okFlag );
                                },
                                function (){
                                    if( resumeFun )
                                        resumeFun( "koData", arguments, fun.koFlag );
                                }
                            ],
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
                    "onOpenRecord" : null,
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
                    "onCreateRecords" : null,
                    "onMessageServiceReceived" : [
                        {
                            "desc" : "set",
                            "type" : "module",
                            "target" : "module_grideditor1",
                            "args" : [
                                "{page.module_grideditor1.updateRow()}",
                                undefined,
                                undefined,
                                "{args[1]}",
                                "{args[2]}"
                            ],
                            "method" : "callFunction",
                            "conditions" : [
                                {
                                    "left" : "{args[0]}",
                                    "symbol" : "=",
                                    "right" : "set"
                                }
                            ],
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "create",
                            "type" : "module",
                            "target" : "module_grideditor1",
                            "args" : [
                                "{page.module_grideditor1.addRow()}",
                                undefined,
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method" : "callFunction",
                            "conditions" : [
                                {
                                    "left" : "{args[0]}",
                                    "symbol" : "=",
                                    "right" : "create"
                                }
                            ],
                            "redirection" : "other:callback:call"
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block84")
                .setDock("bottom")
                .setLeft("6.095238095238095em")
                .setTop("22.095238095238095em")
                .setHeight("2.8190476190476192em")
                .setBorderType("flat")
            );
            
            host.xui_ui_block84.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton14")
                .setLeft("18.81904761904762em")
                .setTop("0.38095238095238093em")
                .setWidth("8em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "destroy",
                        "type" : "page",
                        "target" : "App.customers",
                        "args" : [ ],
                        "method" : "destroy",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_msgsvr")
                .setRecipientType("customer")
                .onMessageReceived([
                    {
                        "desc" : "check",
                        "type" : "none",
                        "target" : "none",
                        "args" : [ ],
                        "method" : "none",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "!=",
                                "right" : "open"
                            },
                            {
                                "left" : "{args[1]}",
                                "symbol" : "!=",
                                "right" : "create"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "for update",
                        "type" : "page",
                        "target" : "App.customer",
                        "args" : [
                            {
                                "recordId" : "{args[2]}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "=",
                                "right" : "open"
                            }
                        ]
                    },
                    {
                        "desc" : "show",
                        "type" : "page",
                        "target" : "App.customer",
                        "args" : [ ],
                        "method" : "show"
                    }
                ])
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
                    "target":"App.customers",
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