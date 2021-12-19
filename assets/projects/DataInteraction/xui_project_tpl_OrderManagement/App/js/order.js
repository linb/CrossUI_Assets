// The default code is a com class (inherited from xui.Com)
xui.Class('App.order', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_get")
                .setName("api_get")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "orders",
                    "paras" : {
                        "OrderID" : "xxx",
                        "action" : "get"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_set")
                .setName("api_set")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "orders",
                    "paras" : {
                        "OrderID" : "xxx",
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
                    "key" : "orders",
                    "paras" : {
                        "action" : "create"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_shipping")
                .setName("api_shipping")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "shippingmethods",
                    "paras" : {
                        "action" : "getList"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_payment")
                .setName("api_payment")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "paymentmethods",
                    "paras" : {
                        "action" : "getList"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("2.5em")
                .setTop("1.6666666666666667em")
                .setWidth("57.916666666666664em")
                .setHeight("39.25em")
                .setResizer(false)
                .setCaption("Order")
                .setImage("{/}img/app.png")
                .setImagePos("left top")
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
                                },
                                {
                                    "left" : "{page.grid.isDirtied()}",
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
                            "okFlag" : "_confirm_yes",
                            "koFlag" : "_confirm_no",
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
                                    "left" : "{temp._confirm_no}",
                                    "symbol" : "defined",
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
                .setTop("0em")
                .setWidth("56.25em")
                .setHeight("32.5em")
                .setBorderType("inset")
                .setOverflow("visible")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane21")
                .setLeft("0em")
                .setTop("21.666666666666668em")
                .setWidth("55em")
                .setHeight("10.833333333333334em")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel303")
                .setLeft("35em")
                .setTop("1.3333333333333333em")
                .setCaption("Order SubTotal")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel304")
                .setLeft("37.5em")
                .setTop("3.8333333333333335em")
                .setCaption("Taxes")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel305")
                .setLeft("35em")
                .setTop("6.333333333333333em")
                .setCaption("Shipping & Handling")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel300")
                .setLeft("0.8333333333333334em")
                .setTop("6.166666666666667em")
                .setCaption("Shipping Date")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"iSubTotal")
                .setReadonly(true)
                .setIsFormField(false)
                .setShowDirtyMark(false)
                .setLeft("46.666666666666664em")
                .setTop("1em")
                .setWidth("7.5em")
                .setType("currency")
                .setExcelCellId("A1")
                .setExcelCellFormula("=B1")
                .setValue(0)
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel302")
                .setLeft("35em")
                .setTop("8.666666666666666em")
                .setCaption("Order Total")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"iTotal")
                .setReadonly(true)
                .setIsFormField(false)
                .setShowDirtyMark(false)
                .setLeft("46.666666666666664em")
                .setTop("8.333333333333334em")
                .setWidth("7.5em")
                .setType("currency")
                .setExcelCellFormula("=SUM(A:A)")
                .setValue(0)
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel58")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setCaption("Shipping Method")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel51")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("Payment Method")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput17")
                .setName("PaymentMethodID:PaymentMethod")
                .setLeft("10em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setTabindex(7)
                .setType("listbox")
                .setDropListWidth(150)
                .setInputReadonly(true)
                .beforePopShow([
                    {
                        "desc" : "call api",
                        "type" : "control",
                        "target" : "api_payment",
                        "args" : [ ],
                        "method" : "invoke",
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "conditions" : [
                            {
                                "left" : "{args[2]}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "set items",
                        "type" : "control",
                        "target" : "ctl_comboinput17",
                        "args" : [
                            {
                            },
                            {
                                "items" : "{temp.okData.data}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{temp._DI_succeed}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput56")
                .setName("ShippingMethodID:ShippingMethod")
                .setLeft("10em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setTabindex(8)
                .setType("listbox")
                .setDropListWidth(150)
                .setInputReadonly(true)
                .beforePopShow([
                    {
                        "desc" : "call api",
                        "type" : "control",
                        "target" : "api_shipping",
                        "args" : [ ],
                        "method" : "invoke",
                        "onOK" : 0,
                        "onKO" : 1,
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "conditions" : [
                            {
                                "left" : "{args[2]}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "set items",
                        "type" : "control",
                        "target" : "ctl_comboinput56",
                        "args" : [
                            {
                            },
                            {
                                "items" : "{temp.okData.data}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{temp._DI_succeed}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput23")
                .setName("ShipDate")
                .setLeft("10em")
                .setTop("5.833333333333333em")
                .setWidth("9.166666666666666em")
                .setTabindex(9)
                .setType("date")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ctl_scheckbox3")
                .setName("PaymentReceived")
                .setLeft("20.833333333333332em")
                .setTop("0.8333333333333334em")
                .setTabindex(10)
                .setCaption("Payment Received?")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"iTax")
                .setName("Taxes")
                .setLeft("46.666666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("7.5em")
                .setTabindex(11)
                .setType("currency")
                .setExcelCellId("A2")
            );
            
            host.ctl_pane21.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"iExtra")
                .setName("FreightCharge")
                .setLeft("46.666666666666664em")
                .setTop("5.833333333333333em")
                .setWidth("7.5em")
                .setTabindex(12)
                .setType("currency")
                .setExcelCellId("A3")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel299")
                .setLeft("0.8333333333333334em")
                .setTop("1.1666666666666667em")
                .setCaption("Customer")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel301")
                .setLeft("0.8333333333333334em")
                .setTop("5.833333333333333em")
                .setCaption("Comments")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel47")
                .setLeft("23.333333333333332em")
                .setTop("1.1666666666666667em")
                .setCaption("Order Date")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel48")
                .setLeft("44.166666666666664em")
                .setTop("1.1666666666666667em")
                .setCaption("Order ID")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input41")
                .setName("OrderID")
                .setReadonly(true)
                .setLeft("50em")
                .setTop("0.8333333333333334em")
                .setWidth("4.166666666666667em")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel49")
                .setLeft("23.333333333333332em")
                .setTop("3.6666666666666665em")
                .setCaption("PO Number")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel50")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setCaption("Employee")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block22")
                .setLeft("0.8333333333333334em")
                .setTop("10em")
                .setWidth("53.333333333333336em")
                .setHeight("11.666666666666666em")
                .setBorderType("inset")
            );
            
            host.ctl_block22.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block23")
                .setDock("top")
                .setHeight("1.5833333333333333em")
                .setHtml("<div style=\"text-align: center;\"><b><font size=\"3\">Order Detail</font></b></div>")
                .setBorderType("none")
                .setCustomStyle({
                    "KEY" : {
                        "text-align" : "center"
                    }
                })
            );
            
            host.ctl_block22.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"grid")
                .setShowDirtyMark(false)
                .setTabindex(6)
                .setRowNumbered(true)
                .setEditable(true)
                .setRowHandlerWidth("2.1666666666666665em")
                .setColSortable(false)
                .setHeader([
                    {
                        "id" : "ProductID:ProductName",
                        "caption" : "Product",
                        "type" : "cmdbox",
                        "flexSize" : true,
                        "width" : "18.742857142857144em"
                    },
                    {
                        "id" : "Quantity",
                        "caption" : "Quantity",
                        "type" : "spin",
                        "defaultValue" : "1",
                        "width" : "5.0285714285714285em",
                        "min" : 1
                    },
                    {
                        "id" : "UnitPrice",
                        "caption" : "Unit Price",
                        "type" : "currency",
                        "width" : "6.019047619047619em",
                        "readonly" : true
                    },
                    {
                        "id" : "Discount",
                        "caption" : "Discount",
                        "type" : "spin",
                        "defaultValue" : "0",
                        "width" : "6.019047619047619em",
                        "precision" : 2,
                        "min" : 0,
                        "max" : 100,
                        "numberTpl" : "* %"
                    },
                    {
                        "id" : "ExtendedPrice",
                        "caption" : "Extended Price",
                        "type" : "currency",
                        "formula" : "=B?*C?*(1-D?/100)",
                        "width" : "8em",
                        "readonly" : true
                    }
                ])
                .setTagCmds([
                    {
                        "id" : "delete",
                        "location" : "right",
                        "itemClass" : "xuicon xui-uicmd-close"
                    }
                ])
                .setTreeMode(false)
                .setHotRowMode("after")
                .setExcelCellId("B1")
                .setGridValueFormula("=SUM(E:E)")
                .setHotRowRequired("ProductID:ProductName")
                .beforeHotRowAdded({
                    "return" : "{temp.returnvalue}"
                })
                .onCmd([
                    {
                        "desc" : "deleterow",
                        "type" : "control",
                        "target" : "grid",
                        "args" : [
                            "{args[1]}"
                        ],
                        "method" : "removeRows",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "return" : false,
                        "event" : 3
                    },
                    {
                        "desc" : "clear",
                        "type" : "control",
                        "target" : "grid",
                        "args" : [ ],
                        "method" : "removeAllRows"
                    }
                ])
                .beforeComboPop([
                    {
                        "desc" : "post messag",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [
                            "{page.postMessage()}",
                            undefined,
                            undefined,
                            "needSelector",
                            "for_order",
                            "product"
                        ],
                        "method" : "postMessage",
                        "redirection" : "page::",
                        "event" : 4
                    },
                    {
                        "desc" : "pop",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [
                            "{page.popUp()}",
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method" : "popUp",
                        "event" : 2,
                        "redirection" : "page::"
                    }
                ])
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput14")
                .setName("CustomerID:CompanyName")
                .setLeft("9.166666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("11.666666666666666em")
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
                .setType("cmdbox")
                .beforeComboPop([
                    {
                        "desc" : "post messag",
                        "type" : "page",
                        "target" : "App.customers",
                        "args" : [
                            "{page.postMessage()}",
                            undefined,
                            undefined,
                            "needSelector",
                            "for_order",
                            "customer"
                        ],
                        "method" : "postMessage",
                        "redirection" : "page::",
                        "event" : 2
                    },
                    {
                        "desc" : "pop",
                        "type" : "page",
                        "target" : "App.customers",
                        "args" : [
                            "{page.popUp()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method" : "popUp",
                        "event" : 2,
                        "redirection" : "page::"
                    }
                ])
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput15")
                .setName("OrderDate")
                .setLeft("30.833333333333332em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setTabindex(2)
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
                .setType("date")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput16")
                .setName("EmployeeID:EmployeeName")
                .setLeft("9.166666666666666em")
                .setTop("3.3333333333333335em")
                .setWidth("11.666666666666666em")
                .setTabindex(3)
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
                .setType("cmdbox")
                .beforeComboPop([
                    {
                        "desc" : "post message",
                        "type" : "page",
                        "target" : "App.employees",
                        "args" : [
                            "{page.postMessage()}",
                            undefined,
                            undefined,
                            "needSelector",
                            "for_order",
                            "employee"
                        ],
                        "method" : "postMessage",
                        "redirection" : "page::",
                        "event" : 2
                    },
                    {
                        "desc" : "pop",
                        "type" : "page",
                        "target" : "App.employees",
                        "args" : [
                            "{page.popUp()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method" : "popUp",
                        "event" : 2,
                        "redirection" : "page::"
                    }
                ])
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input42")
                .setName("PurchaseOrderNumber")
                .setLeft("30.833333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("9.166666666666666em")
                .setTabindex(4)
                .setTipsErr("Required")
                .setValueFormat("[^.*]")
            );
            
            host.ctl_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input7")
                .setName("Comment")
                .setLeft("9.166666666666666em")
                .setTop("5.833333333333333em")
                .setWidth("45em")
                .setHeight("3.3333333333333335em")
                .setTabindex(5)
                .setMultiLines(true)
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"btnSave")
                .setLeft("14.166666666666666em")
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
                            },
                            {
                                "left" : "{page.grid.isDirtied()}",
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
                            "paras.OrderID"
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
                        "desc" : "update -set api details",
                        "type" : "control",
                        "target" : "api_set",
                        "args" : [
                            "{page.api_set.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{page.grid.getRawData()}",
                            "paras.details"
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
                            "orders",
                            "set",
                            "{page.properties.recordId}",
                            "{page.ctl_form.getFormValues(true,null,null,true)}"
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
                        "desc" : "create - set api details",
                        "type" : "control",
                        "target" : "api_new",
                        "args" : [
                            "{page.api_new.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{page.grid.getRawData()}",
                            "paras.details"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{page.properties.recordId}",
                                "symbol" : "undefined",
                                "right" : ""
                            }
                        ]
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
                            "orders",
                            "create",
                            "",
                            "{temp.okData.data.fields}"
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
                        "desc" : "create -set record id",
                        "type" : "page",
                        "target" : "App.customer",
                        "args" : [
                            {
                                "recordId" : "{temp.okData.data.OrderID}"
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
                        "desc" : "update form (updata&create)",
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
                    },
                    {
                        "desc" : "update grid (updata&create)",
                        "type" : "control",
                        "target" : "grid",
                        "args" : [ ],
                        "method" : "updateGridValue",
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
                .setHost(host,"btnClose")
                .setLeft("37.5em")
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
                .setRecipientType("for_order")
                .onMessageReceived([
                    {
                        "desc" : "set custom",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{page.functions.customer_callback}",
                            undefined,
                            undefined,
                            "{args[2]}",
                            "{args[3]}"
                        ],
                        "method" : "call",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "=",
                                "right" : "customer"
                            }
                        ]
                    },
                    {
                        "desc" : "set employee",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{page.functions.employee_callback}",
                            undefined,
                            undefined,
                            "{args[2]}",
                            "{args[3]}"
                        ],
                        "method" : "call",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "=",
                                "right" : "employee"
                            }
                        ]
                    },
                    {
                        "desc" : "modify hot row",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{page.functions.product_callback}",
                            undefined,
                            undefined,
                            "{args[2]}",
                            "{args[3]}",
                            "{args[4]}"
                        ],
                        "method" : "call",
                        "conditions" : [
                            {
                                "left" : "{args[1]}",
                                "symbol" : "=",
                                "right" : "product"
                            }
                        ]
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {
                    "desc":"set get api",
                    "type":"control",
                    "target":"api_get",
                    "args":[
                        "{page.api_get.setQueryArgs()}",
                        undefined,
                        undefined,
                        "{page.properties.recordId}",
                        "paras.OrderID"
                    ],
                    "method":"setQueryArgs",
                    "redirection":"other:callback:call",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                },
                {
                    "desc":"call get api",
                    "type":"control",
                    "target":"api_get",
                    "args":[ ],
                    "method":"invoke",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"defined",
                            "right":""
                        }
                    ],
                    "okFlag":"_DI_succeed",
                    "koFlag":"_DI_fail",
                    "onOK":0,
                    "onKO":1
                },
                {
                    "desc":"fill form",
                    "type":"control",
                    "target":"ctl_form",
                    "args":[
                        "{temp.okData.data.fields}"
                    ],
                    "method":"setFormValues",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"defined",
                            "right":""
                        },
                        {
                            "left":"{temp.okData.data}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                },
                {
                    "desc":"fill grid",
                    "type":"control",
                    "target":"grid",
                    "args":[
                        "{temp.okData.data.details}",
                        "",
                        "",
                        false
                    ],
                    "method":"insertRows",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"defined",
                            "right":""
                        },
                        {
                            "left":"{temp.okData.data}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                },
                {
                    "desc":"do formula",
                    "type":"control",
                    "target":"grid",
                    "args":[ ],
                    "method":"triggerFormulas",
                    "conditions":[
                        {
                            "left":"{page.properties.recordId}",
                            "symbol":"defined",
                            "right":""
                        },
                        {
                            "left":"{temp.okData.data}",
                            "symbol":"defined",
                            "right":""
                        }
                    ]
                },
                {
                    "desc":"clear grid dirty",
                    "type":"control",
                    "target":"grid",
                    "args":[ ],
                    "method":"updateGridValue"
                }
            ],
            "onMessage":[
                {
                    "desc":"setValue",
                    "type":"control",
                    "target":"ctl_comboinput14",
                    "args":[
                        "{page.ctl_comboinput14.setUIValue()}",
                        undefined,
                        undefined,
                        "{args[2]}"
                    ],
                    "method":"setUIValue",
                    "redirection":"other:callback:call",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"=",
                            "right":"selectCustomer"
                        }
                    ]
                }
            ]
        },
        functions:{
            "employee_callback":{
                "desc":"",
                "params":[
                    {
                        "id":"value",
                        "type":"String",
                        "desc":""
                    },
                    {
                        "id":"caption",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"update value",
                        "type":"control",
                        "target":"ctl_comboinput16",
                        "args":[
                            "{page.ctl_comboinput16.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"update caption",
                        "type":"control",
                        "target":"ctl_comboinput16",
                        "args":[
                            "{page.ctl_comboinput16.setCaption()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"setCaption",
                        "redirection":"other:callback:call"
                    }
                ]
            },
            "customer_callback":{
                "desc":"",
                "params":[
                    {
                        "id":"value",
                        "type":"String",
                        "desc":""
                    },
                    {
                        "id":"caption",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"update value",
                        "type":"control",
                        "target":"ctl_comboinput14",
                        "args":[
                            "{page.ctl_comboinput14.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"update caption",
                        "type":"control",
                        "target":"ctl_comboinput14",
                        "args":[
                            "{page.ctl_comboinput14.setCaption()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"setCaption",
                        "redirection":"other:callback:call"
                    }
                ]
            },
            "product_callback":{
                "desc":"",
                "params":[
                    {
                        "id":"cells",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"update row",
                        "type":"control",
                        "target":"grid",
                        "args":[
                            "{page.grid.setRowMap()}",
                            undefined,
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method":"setRowMap",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"update editor",
                        "type":"control",
                        "target":"grid",
                        "args":[
                            "{page.grid.updateEditor()}",
                            undefined,
                            undefined,
                            "{args[0]}",
                            "{args[1]}"
                        ],
                        "method":"updateEditor",
                        "redirection":"other:callback:call"
                    }
                ]
            }
        }
    }

});