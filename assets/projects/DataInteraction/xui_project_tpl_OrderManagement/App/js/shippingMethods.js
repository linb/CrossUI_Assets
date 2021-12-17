xui.Class('App.shippingMethods', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_create")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "shippingmethods",
                    "paras" : {
                        "action" : "create"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_list")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "shippingmethods",
                    "paras" : {
                        "action" : "getList"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_delete")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "shippingmethods",
                    "paras" : {
                        "action" : "delete"
                    }
                })
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_update")
                .setQueryURL("{xui.constant.request_url}")
                .setProxyType("auto")
                .setQueryArgs({
                    "key" : "shippingmethods",
                    "paras" : {
                        "action" : "update"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("5.833333333333333em")
                .setTop("1.6666666666666667em")
                .setWidth("20.833333333333332em")
                .setHeight("23.333333333333332em")
                .setResizer(false)
                .setCaption("Shipping Methods")
                .setImage("{/}img/app.png")
                .setImagePos("-64px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block159")
                .setLeft("0.5em")
                .setTop("0.5833333333333334em")
                .setWidth("18.583333333333332em")
                .setHeight("15.25em")
                .setBorderType("inset")
            );
            
            host.ctl_block159.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"ctl_treegrid91")
                .setShowDirtyMark(false)
                .setEditable(true)
                .setGridHandlerCaption("ID")
                .setRowHandlerWidth("2em")
                .setRowHandler(false)
                .setRowResizer(true)
                .setColResizer(false)
                .setColSortable(false)
                .setHeader([
                    {
                        "id" : "ShippingMethodID",
                        "caption" : "ID",
                        "width" : "1.980952380952381em",
                        "type" : "label"
                    },
                    {
                        "id" : "ShippingMethod",
                        "caption" : "Shipping Method",
                        "flexSize" : true,
                        "width" : "13.714285714285714em",
                        "type" : "input"
                    }
                ])
                .setTreeMode(false)
                .setHotRowMode("after")
                .setHotRowCellCap("( * )")
                .setHotRowRequired("ShippingMethod")
                .afterHotRowAdded([
                    {
                        "desc" : "adjust data",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.getRowMap()}",
                            "temp",
                            "rowMap",
                            "{args[1].id}"
                        ],
                        "method" : "getRowMap",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "set create API",
                        "type" : "control",
                        "target" : "api_create",
                        "args" : [
                            "{page.api_create.setQueryArgs()}",
                            "none",
                            "",
                            "{temp.rowMap}",
                            "paras.fields"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "call create API",
                        "type" : "control",
                        "target" : "api_create",
                        "args" : [ ],
                        "method" : "invoke",
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "update row data",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.setRowMap()}",
                            "none",
                            "",
                            "{args[1].id}",
                            {
                                "ShippingMethodID" : "{temp.okData.data}"
                            }
                        ],
                        "method" : "setRowMap",
                        "conditions" : [
                            {
                                "left" : "{temp.okData}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ],
                        "redirection" : "other:callback:call"
                    }
                ])
                .afterCellUpdated([
                    {
                        "desc" : "ignore hot row",
                        "type" : "none",
                        "target" : "none",
                        "args" : [ ],
                        "method" : "none",
                        "conditions" : [
                            {
                                "left" : "{args[3]}",
                                "symbol" : "=",
                                "right" : "{true}"
                            }
                        ],
                        "return" : false
                    },
                    {
                        "desc" : "1.get cells data",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.getRowMap()}",
                            "temp",
                            "cells"
                        ],
                        "method" : "getRowMap",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "1.get row",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.getRowbyCell()}",
                            "temp",
                            "row",
                            "{args[1]}"
                        ],
                        "method" : "getRowbyCell",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "2.set update API",
                        "type" : "control",
                        "target" : "api_update",
                        "args" : [
                            "{page.api_update.setQueryArgs()}",
                            "none",
                            "",
                            "{temp.cells.ShippingMethodID}",
                            "paras.id"
                        ],
                        "method" : "setQueryArgs",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ],
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "2.set update API 2",
                        "type" : "control",
                        "target" : "api_update",
                        "args" : [
                            "{page.api_update.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{temp.cells}",
                            "paras.fields"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "2.call update API",
                        "type" : "control",
                        "target" : "api_update",
                        "args" : [ ],
                        "method" : "invoke",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "update cell",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.updateCellValue()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method" : "updateCellValue",
                        "redirection" : "other:callback:call",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "non-empty",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "3.set delete API",
                        "type" : "control",
                        "target" : "api_delete",
                        "args" : [
                            "{page.api_delete.setQueryArgs()}",
                            undefined,
                            undefined,
                            "{temp.cells.ShippingMethodID}",
                            "paras.id"
                        ],
                        "method" : "setQueryArgs",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ],
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "3.call delete API",
                        "type" : "control",
                        "target" : "api_delete",
                        "args" : [ ],
                        "method" : "invoke",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "3.delete row",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{temp.row}"
                        ],
                        "method" : "removeRows",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "empty",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.error}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "reset cell",
                        "type" : "control",
                        "target" : "ctl_treegrid91",
                        "args" : [
                            "{page.ctl_treegrid91.resetCellValue()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method" : "resetCellValue",
                        "conditions" : [
                            {
                                "left" : "{args[1].value}",
                                "symbol" : "empty",
                                "right" : ""
                            },
                            {
                                "left" : "{temp.okData.data}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ],
                        "return" : false,
                        "redirection" : "other:callback:call"
                    }
                ])
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton14")
                .setLeft("6.666666666666667em")
                .setTop("16.666666666666668em")
                .setWidth("8.333333333333334em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.shippingMethods",
                        "args" : [ ],
                        "method" : "destroy",
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
                    "desc":"call API",
                    "type":"control",
                    "target":"api_list",
                    "args":[ ],
                    "method":"invoke",
                    "onOK":0,
                    "onKO":1
                },
                {
                    "desc":"set to grid",
                    "type":"control",
                    "target":"ctl_treegrid91",
                    "args":[
                        "{temp.okData.data}",
                        "",
                        "",
                        false
                    ],
                    "method":"insertRows",
                    "conditions":[
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