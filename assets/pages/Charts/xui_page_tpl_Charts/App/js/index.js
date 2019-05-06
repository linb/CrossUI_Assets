xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Span")
                .setHost(host,"ctl_span35")
                .setLeft("10em")
                .setTop("0.8333333333333334em")
                .setWidth("40em")
                .setHeight("4.166666666666667em")
                .setHtml("<div>FusionCharts is available for free for personal non-commercial or non profit projects only. </div><div><br></div><div>Please go to <a href=\"http://www.fusioncharts.com\" target=\"_blank\">http://www.fusioncharts.com</a> for licensing and pricing info.</div>")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"ctl_panel3")
                .setLeft("10em")
                .setTop("5.833333333333333em")
                .setWidth("38.333333333333336em")
                .setHeight("36.666666666666664em")
                .setCaption("Dynamic Chart Switching")
            );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"ctl_fusionchartsxt1")
                .setDock("fill")
                .setWidth("37.5em")
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
                        "enablerotation":"0"
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
                .onDataClick("_ctl_fusionchartsxt1_ondataclick")
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block7")
                .setDock("top")
                .setWidth("auto")
                .setHeight("auto")
                .setOverflow("hidden")
                );
            
            host.ctl_block7.append(
                xui.create("xui.UI.StatusButtons")
                .setHost(host,"ctl_statusbuttons1")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"Column2D",
                        "caption":"Column2D"
                    },
                    {
                        "id":"Column3D",
                        "caption":"Column3D"
                    },
                    {
                        "id":"Line",
                        "caption":"Line"
                    },
                    {
                        "id":"Area2D",
                        "caption":"Area2D"
                    },
                    {
                        "id":"Bar2D",
                        "caption":"Bar2D"
                    },
                    {
                        "id":"Pie2D",
                        "caption":"Pie2D"
                    },
                    {
                        "id":"Pie3D",
                        "caption":"Pie3D"
                    },
                    {
                        "id":"Doughnut2D",
                        "caption":"Doughnut2D"
                    },
                    {
                        "id":"Doughnut3D",
                        "caption":"Doughnut3D"
                    },
                    {
                        "id":"Pareto2D",
                        "caption":"Pareto2D"
                    }
                ])
                .setLeft("0em")
                .setWidth("auto")
                .setPosition("relative")
                .setBorderType("none")
                .setItemMargin("2px 4px")
                .setItemWidth("6.25em")
                .setValue("Column2D")
                .afterUIValueSet("_ctl_statusbuttons1_afteruivalueset")
                .onItemSelected([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"callback",
                        "params":[
                            "{page.ctl_fusionchartsxt1.setChartType()}",
                            undefined,
                            undefined,
                            "{args.1.id}",
                            "{true}"
                        ],
                        "method":"call"
                    }
                ])
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});