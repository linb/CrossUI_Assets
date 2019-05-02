xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel3")
                .setDock("none")
                .setLeft("5.833333333333333em")
                .setTop("0.8333333333333334em")
                .setWidth("45em")
                .setHeight("49.166666666666664em")
                .setCaption("Monthly Sales Summary")
            );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div113")
                .setClassName("xui-uibase")
                .setLeft("0em")
                .setHeight("3em")
                .setBottom("18.5em")
                .setZIndex(1002)
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"ctl_fusionchartsxt1")
                .setDock("fill")
                .setWidth("44em")
                .setHeight("27.166666666666668em")
                .setChartType("Pie2D")
                .setJSONData({
                    "chart":{
                        "caption":"Monthly Sales Summary",
                        "subcaption":"For the year 2006",
                        "xaxisname":"Month",
                        "yaxisname":"Sales",
                        "logoScale":"50",
                        "logoURL":"http://www.crossui.com/img/logo.png",
                        "numberprefix":"$",
                        "useroundedges":"1",
                        "bgcolor":"FFFFFF,FFFFFF",
                        "showborder":"0",
                        "placevaluesinside":"1",
                        "enablerotation":"0",
                        "animation":"0"
                    },
                    "data":[
                        {
                            "label":"January",
                            "value":"17400"
                        },
                        {
                            "label":"February",
                            "value":"19800"
                        },
                        {
                            "label":"March",
                            "value":"21800"
                        },
                        {
                            "label":"April",
                            "value":"23800"
                        },
                        {
                            "label":"May",
                            "value":"29600"
                        },
                        {
                            "label":"June",
                            "value":"27600"
                        }
                    ],
                    "styles":{
                        "definition":[
                            {
                                "name":"CanvasAnim",
                                "type":"animation",
                                "param":"_xScale",
                                "start":"0",
                                "duration":"1"
                            }
                        ],
                        "application":[
                            {
                                "toobject":"Canvas",
                                "styles":"CanvasAnim"
                            }
                        ]
                    }
                })
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block7")
                .setDock("bottom")
                .setHeight("18.583333333333332em")
                .setOverflow("hidden")
                );
            
            host.ctl_block7.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel27")
                .setLeft("25em")
                .setTop("6.666666666666667em")
                .setCaption("Data Source")
                );
            
            host.xui_ui_panel27.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid24")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"label",
                        "caption":"Month",
                        "type":"input",
                        "flexSize":true,
                        "width":"8em"
                    },
                    {
                        "id":"value",
                        "caption":"Sales",
                        "type":"currency",
                        "flexSize":true,
                        "width":"16em"
                    }
                ])
                .setTreeMode("none")
                .afterCellUpdated([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"ctl_fusionchartsxt1",
                        "args":[
                            "{page.ctl_fusionchartsxt1.fillData()}",
                            undefined,
                            undefined,
                            "{page.xui_ui_treegrid24.getRawData()}"
                        ],
                        "method":"fillData",
                        "redirection":"other:callback:call"
                    }
                ])
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _ctl_fusionchartsxt1_ondataclick:function (prf, value){
            var ns=this;
            ns.ctl_l.setDisabled(false).setValue(value.categoryLabel);
            ns.ctl_v.setDisabled(false).setValue(value.value);
           
            
            ns._curIndex=value.index;
            
            ns.ctl_sbutton6.setDisabled(false);
        },
        _ctl_sbutton6_onclick:function (profile, e, src, value){
            var ns = this,
                l=ns.ctl_l.getValue(),
                v=ns.ctl_v.getValue(),
                data = ns.ctl_fusionchartsxt1.getJSONData();
            
            xui.set(data,["chart","animation"],"0");
            xui.set(data,["data",ns._curIndex], {label:l,value:v});
            
             ns.ctl_fusionchartsxt1.setJSONData(data,true);
        },
        events:{
            "onReady":[
                {
                    "desc":"Action 1",
                    "type":"control",
                    "target":"xui_ui_treegrid24",
                    "args":[
                        "{page.xui_ui_treegrid24.setRawData()}",
                        undefined,
                        undefined,
                        "{page.ctl_fusionchartsxt1.getJSONData().data}"
                    ],
                    "method":"setRawData",
                    "redirection":"other:callback:call"
                }
            ]
        }
    }
});