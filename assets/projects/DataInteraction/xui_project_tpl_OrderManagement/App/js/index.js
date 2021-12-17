// The default code is a com class (inherited from xui.Com)
xui.Class('App', 'xui.Module',{
    // Ensure that all the value of "key/value pair" does not refer to external variables
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
                    "key" : "orders",
                    "paras" : {
                        "action" : "list"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_del")
                .setQueryURL("{xui.constant.request_url")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "orders",
                    "paras" : {
                        "action" : "delete"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel11")
                .setDock("right")
                .setWidth("16.88888888888889em")
                .setOverflow("overflow-x:hidden;overflow-y:auto")
                .setCaption("Setup")
                .setImageClass("xui-uicmd-opt")
            );
            
            host.ctl_panel11.append(
                xui.create("xui.UI.StatusButtons")
                .setHost(host,"ctl_statusbuttons1")
                .setItems([
                    {
                        "id" : "info",
                        "caption" : "Company Information",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-112px 0 "
                    },
                    {
                        "id" : "shipping",
                        "caption" : "Shipping Methods",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-64px 0 "
                    },
                    {
                        "id" : "payment",
                        "caption" : "Payment Methods",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-80px 0 "
                    },
                    {
                        "id" : "employee",
                        "caption" : "Employees",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-16px 0 "
                    },
                    {
                        "id" : "prd",
                        "caption" : "Products",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-48px 0 "
                    },
                    {
                        "id" : "customer",
                        "caption" : "Customers",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-32px 0 "
                    },
                    {
                        "id" : "feedback",
                        "caption" : "Provide Feedback",
                        "itemStyle" : "font-weight:bold",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-96px 0 "
                    }
                ])
                .setLeft("0.5333333333333333em")
                .setTop("0.8888888888888888em")
                .setWidth("15.2em")
                .setHeight("22.22222222222222em")
                .setSelMode("none")
                .setBorderType("none")
                .setItemMargin("2px 4px")
                .setItemWidth("13.333333333333334em")
                .setValue("")
                .onClick([
                    {
                        "desc" : "info",
                        "type" : "page",
                        "target" : "App.companyInfo",
                        "args" : [ ],
                        "method" : "show",
                        "event" : 2,
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "info"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "shipping",
                        "type" : "page",
                        "target" : "App.shippingMethods",
                        "args" : [ ],
                        "method" : "show",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "shipping"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "payment",
                        "type" : "page",
                        "target" : "App.paymentMethods",
                        "args" : [ ],
                        "method" : "show",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "payment"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "employee",
                        "type" : "page",
                        "target" : "App.employees",
                        "args" : [ ],
                        "method" : "show",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "employee"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "prd",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [ ],
                        "method" : "show",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "prd"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "customer",
                        "type" : "page",
                        "target" : "App.customers",
                        "args" : [ ],
                        "method" : "show",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "customer"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "feedback",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "support@crossui.com",
                            {
                                "subject" : "Feedback on CrossUI Order Management"
                            }
                        ],
                        "method" : "mailTo",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "feedback"
                            }
                        ],
                        "timeout" : 0,
                        "return" : false
                    }
                ])
                .setCustomStyle({
                    "ITEM" : {
                        "text-align" : "left"
                    }
                })
            );
            
            host.ctl_panel11.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image24")
                .setLeft("2.7555555555555555em")
                .setTop("22.333333333333332em")
                .setSrc("{/}img/setup.png")
            );
            
            host.ctl_panel11.append(
                xui.create("xui.UI.Link")
                .setHost(host,"ctl_link1")
                .setLeft("2.7555555555555555em")
                .setTop("33.31111111111111em")
                .setWidth("12.444444444444445em")
                .setHeight("1.7777777777777777em")
                .setCaption("Download source code")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "http://www.crossui.com/download.html"
                        ],
                        "method" : "open--_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "font-style" : "italic"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block3")
                .setDock("top")
                .setHeight("4.444444444444445em")
                .setOverflow("hidden")
            );
            
            host.ctl_block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane13")
                .setTop("0em")
                .setWidth("47.82222222222222em")
                .setHeight("4.444444444444445em")
                .setRight("0.35555555555555557em")
                .setPanelBgClr("transparent")
            );
            
            host.ctl_pane13.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel53")
                .setLeft("32.888888888888886em")
                .setTop("2.4em")
                .setCaption("Powered by ")
                .setCustomStyle({
                    "KEY" : {
                        "font-style" : "italic"
                    }
                })
            );
            
            host.ctl_pane13.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image25")
                .setLeft("39.111111111111114em")
                .setTop("1.511111111111111em")
                .setSrc("http://www.crossui.com/img/logo2.png")
                .onClick([
                    {
                        "desc" : "open",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "http://www.crossui.com"
                        ],
                        "method" : "open--_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "cursor" : "pointer"
                    }
                })
            );
            
            host.ctl_pane13.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel103")
                .setLeft("16.88888888888889em")
                .setTop("2.2222222222222223em")
                .setCaption("Theme:")
            );
            
            host.ctl_pane13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput29")
                .setDirtyMark(false)
                .setLeft("21.6em")
                .setTop("1.8666666666666667em")
                .setWidth("8em")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "default",
                        "caption" : "Default"
                    },
                    {
                        "id" : "vista",
                        "caption" : "Vista"
                    },
                    {
                        "id" : "moonify",
                        "caption" : "Moonify"
                    },
                    {
                        "id" : "army",
                        "caption" : "Army"
                    }
                ])
                .setValue("default")
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{xui.setTheme()}",
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method" : "call"
                    }
                ])
            );
            
            host.ctl_block3.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image3")
                .setLeft("0.8888888888888888em")
                .setTop("0.8888888888888888em")
                .setSrc("{/}img/order.png")
                .setCustomStyle({
                    "KEY" : {
                        "$gradient" : {
                            "stops" : [
                                {
                                    "pos" : "52%",
                                    "clr" : "#FFFF00"
                                },
                                {
                                    "pos" : "100%",
                                    "clr" : "#FFFFFF",
                                    "opacity" : 0
                                }
                            ],
                            "type" : "radial",
                            "orient" : "C"
                        },
                        "transform" : "rotate(331deg) scale(1,1) skew(0deg,0deg) translate(0px,0px)"
                    }
                })
            );
            
            host.ctl_block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel28")
                .setLeft("3.2916666666666665em")
                .setTop("0.7916666666666666em")
                .setCaption("Manage Orders")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "18pt",
                        "font-weight" : "normal",
                        "color" : "#000080",
                        "text-shadow" : "0px 0px 8px #20B2AA"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"blkMain")
                .setDock("fill")
                .setBorderType("none")
            );
            
            host.blkMain.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"module_grideditor1")
                .setProperties({
                    "__inner_coms_prf__" : {
                        "xui_msgs1" : {
                            "properties" : {
                                "msgType" : "orders"
                            }
                        },
                        "grid" : {
                            "properties" : {
                                "header" : [
                                    {
                                        "id" : "OrderID",
                                        "caption" : "Order ID",
                                        "width" : "4em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "CustomerID",
                                        "caption" : "CustomerID",
                                        "width" : "3em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "CompanyName",
                                        "caption" : "Company Name",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "EmployeeID",
                                        "caption" : "EmployeeID",
                                        "width" : "3em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "EmployeeName",
                                        "caption" : "Employee Name",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "OrderDate",
                                        "caption" : "Order Date",
                                        "width" : "8em",
                                        "type" : "date"
                                    },
                                    {
                                        "id" : "PurchaseOrderNumber",
                                        "caption" : "Purchase Order Number",
                                        "width" : "8em",
                                        "type" : "number"
                                    },
                                    {
                                        "id" : "ShipDate",
                                        "caption" : "Ship Date",
                                        "width" : "8em",
                                        "type" : "date"
                                    },
                                    {
                                        "id" : "ShippingMethodID",
                                        "caption" : "ShippingMethodID",
                                        "width" : "8em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "ShippingMethod",
                                        "caption" : "Shipping Method",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "PaymentMethodID",
                                        "caption" : "PaymentMethodID",
                                        "width" : "8em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "PaymentMethod",
                                        "caption" : "Payment Method",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "FreightCharge",
                                        "caption" : "Freight Charge",
                                        "width" : "8em",
                                        "type" : "currency"
                                    },
                                    {
                                        "id" : "Taxes",
                                        "caption" : "Taxes",
                                        "width" : "8em",
                                        "type" : "currency"
                                    },
                                    {
                                        "id" : "PaymentReceived",
                                        "caption" : "Payment Received",
                                        "width" : "8em",
                                        "type" : "checkbox"
                                    },
                                    {
                                        "id" : "Comment",
                                        "caption" : "Comment",
                                        "width" : "12em",
                                        "type" : "textarea"
                                    }
                                ],
                                "uidColumn" : "OrderID",
                                "freezedColumn" : 3,
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
                            "target" : "App.order",
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
                            "target" : "App.order",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set hook",
                            "type" : "page",
                            "target" : "App.order",
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
                    "onCreateRecords" : [
                        {
                            "desc" : "set prop",
                            "type" : "page",
                            "target" : "App.order",
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
                            "target" : "App.order",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set create hook",
                            "type" : "page",
                            "target" : "App.order",
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
                            "target" : "App.order",
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
                    ]
                })
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
                } 
            ]
        }
    }
});