xui.Class('App.products', 'xui.Module',{
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
                    "key" : "products",
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
                    "key" : "products",
                    "paras" : {
                        "action" : "delete"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("4.166666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("40.833333333333336em")
                .setHeight("24.166666666666668em")
                .setResizer(false)
                .setCaption("Products")
                .setImage("{/}img/app.png")
                .setImagePos("-48px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"mainPane")
                .setLeft("0.5em")
                .setTop("0.5833333333333334em")
                .setWidth("38.666666666666664em")
                .setHeight("16.916666666666668em")
                .setBorderType("inset")
            );
            
            host.mainPane.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"module_grideditor1")
                .setProperties({
                    "valueColumn" : "ProductID",
                    "captionExpression" : "ProductName",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "header" : [
                                    {
                                        "id" : "ProductID",
                                        "caption" : "Product ID",
                                        "width" : "8em",
                                        "type" : "number"
                                    },
                                    {
                                        "id" : "ProductName",
                                        "caption" : "Product Name",
                                        "width" : "12em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "UnitPrice",
                                        "caption" : "Unit Price",
                                        "width" : "6em",
                                        "type" : "currency"
                                    },
                                    {
                                        "id" : "InStock",
                                        "caption" : "In Stock",
                                        "width" : "6em",
                                        "type" : "checkbox"
                                    }
                                ],
                                "uidColumn" : "ProductID"
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
                            "desc" : "postMessage",
                            "type" : "page",
                            "target" : "App.product",
                            "args" : [
                                "{page.postMessage()}",
                                undefined,
                                undefined,
                                "set",
                                "{args[0]}"
                            ],
                            "method" : "postMessage",
                            "redirection" : "page::"
                        },
                        {
                            "desc" : "show",
                            "type" : "page",
                            "target" : "App.product",
                            "args" : [ ],
                            "method" : "show"
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
                            "desc" : "postmessage",
                            "type" : "page",
                            "target" : "App.product",
                            "args" : [
                                "{page.postMessage()}",
                                undefined,
                                undefined,
                                "create"
                            ],
                            "method" : "postMessage",
                            "redirection" : "page::"
                        },
                        {
                            "desc" : "crete order",
                            "type" : "page",
                            "target" : "App.product",
                            "args" : [ ],
                            "method" : "show"
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
                                "{args[2]}"
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
                .setLeft("15.833333333333334em")
                .setTop("18.333333333333332em")
                .setWidth("7.5em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "destroy",
                        "type" : "page",
                        "target" : "App.products",
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
                    "desc":"set",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.updateRow()}",
                        undefined,
                        undefined,
                        "{args[2]}",
                        "{args[3]}"
                    ],
                    "method":"callFunction",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"=",
                            "right":"set"
                        }
                    ],
                    "redirection":"other:callback:call"
                },
                {
                    "desc":"create",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.addRow()}",
                        undefined,
                        undefined,
                        undefined,
                        "{args[2]}"
                    ],
                    "method":"callFunction",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"=",
                            "right":"create"
                        }
                    ],
                    "redirection":"other:callback:call"
                },
                {
                    "desc":"selection - check",
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
                    "target":"App.products",
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