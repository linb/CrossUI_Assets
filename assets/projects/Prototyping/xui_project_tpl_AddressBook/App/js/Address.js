xui.Class('App.Address', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_main")
                .setDock("fill")
                .setShowEffects({
                    "params":{
                        "translateX":[
                            "-100%","0%"
                        ]
                    },
                    "type":"circOut",
                    "duration":200
                })
                .setHideEffects({
                    "params":{
                        "translateX":[
                            "0%","-100%"
                        ]
                    },
                    "type":"circIn",
                    "duration":200
                })
                .setPanelBgClr("#FFFFFF")
            );
            
            host.ctl_main.append(
                xui.create("xui.UI.StatusButtons")
                .setHost(host,"xui_ui_statusbuttons1")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"accounts",
                        "caption":"ACCOUNTS"
                    },
                    {
                        "id":"contacts",
                        "caption":"CONTACTS"
                    },
                    {
                        "id":"leads",
                        "caption":"LEADS"
                    }
                ])
                .setDock("center")
                .setLeft("2.9375em")
                .setTop("0.625em")
                .setWidth("auto")
                .setHeight("1.875em")
                .setSelMode("multi")
                .setBorderType("none")
                .setLabelHAlign("center")
                .setItemMargin("2px 4px")
                .setItemPadding("4px 10px")
                .setConnected(true)
                .setValue("accounts;contacts;leads")
                .beforeUIValueSet({
                    "return":"{temp.RTN}",
                    "actions":[
                        {
                            "desc":"avoid empty",
                            "type":"other",
                            "target":"var",
                            "method":"temp",
                            "conditions":[
                                {
                                    "left":"{args[2]}",
                                    "symbol":"empty",
                                    "right":""
                                }
                            ],
                            "return":false,
                            "args":[
                                "RTN",
                                "{false}"
                            ]
                        }
                    ]
                })
                .onItemSelected([
                    {
                        "desc":"filter fun",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "filterFun",function anonymous(item,value
                            /*``*/
                            ){
                                if(item.type){
                                    var arr=value.split(';');
                                    for(var i=0,l=arr.length;i<l;i++){
                                        if(xui.arr.indexOf(item.type,arr[i])!==-1){
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            }
                        ],
                        "method":"temp",
                        "event":2
                    },
                    {
                        "desc":"do filter",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.xui_ui_list4.doFilter()}",undefined,undefined,"{temp.filterFun}","{args[0].boxing().getValue()}"
                        ],
                        "method":"call"
                    }
                ])
                );
            
            host.ctl_main.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list4")
                .setDirtyMark(false)
                .setDock("fill")
                .setDockMargin({
                    "left":0,
                    "top":50,
                    "right":0,
                    "bottom":0
                })
                .setLeft("7.5em")
                .setTop("10.625em")
                .setWidth("26.666666666666668em")
                .setSelMode("none")
                .setBorderType("none")
                .setOptBtn("xui-icon-singleright")
                .setLabelSize("8.333333333333334em")
                .setLabelPos("none")
                .setLabelCaption("List")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc":"set var",
                        "type":"other",
                        "target":"var",
                        "params":[
                            "detailVar","{args[1]}"
                        ],
                        "method":"global"
                    },
                    {
                        "desc":"destroy first",
                        "type":"page",
                        "target":"App.DetailInfo",
                        "params":[
                        ],
                        "method":"destroy"
                    },
                    {
                        "desc":"show detail",
                        "type":"page",
                        "target":"App.DetailInfo",
                        "params":[
                            "{page.ctl_main}"
                        ],
                        "method":"show"
                    }
                ])
                .setCustomStyle({
                    "ITEM":{
                        "padding":".5em 0"
                    }
                })
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onReady":[
                {
                    "desc":"get json",
                    "type":"other",
                    "target":"var",
                    "params":["list","[data]Data/demo.json","list"],
                    "method":"global"
                },
                {
                    "desc":"set list",
                    "type":"other",
                    "target":"callback",
                    "params":["{page.xui_ui_list4.setItems}",undefined,undefined,"{global.list}"],
                    "method":"call"
                }
            ]
        }
    }
});