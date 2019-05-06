xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Panel())
                .setHost(host,"ctl_panel3")
                .setDock("none")
                .setLeft(100)
                .setTop(10)
                .setWidth(600)
                .setHeight(400)
                .setZIndex(1)
                .setCaption("Monthly Sales Summary")
            );

            host.ctl_panel3.append(
                (new xui.UI.FusionChartsXT())
                .setHost(host,"ctl_fusionchartsxt1")
                .setDock("fill")
                .setChartType("Pie2D")
                .setJSONData({
                    "chart" : {
                        "caption" : "Monthly Sales Summary",
                        "subcaption" : "For the year 2006",
                        "yaxisname" : "Sales",
                        "numberprefix" : "$",
                        "showborder" : "0",
                        "enablerotation" : "0"
                    },"data" : [{
                        "label" : "January",
                        "value" : "17400"
                    },{
                        "label" : "February",
                        "value" : "19800"
                    },{
                        "label" : "March",
                        "value" : "21800"
                    },{
                        "label" : "April",
                        "value" : "23800"
                    },{
                        "label" : "May",
                        "value" : "29600"
                    },{
                        "label" : "June",
                        "value" : "27600"
                    }],
                    "styles" : {
                        "definition" : [{
                            "name" : "CanvasAnim",
                            "type" : "animation",
                            "param" : "_xScale",
                            "start" : "0",
                            "duration" : "1"
                        }],
                        "application" : [{
                            "toobject" : "Canvas",
                            "styles" : "CanvasAnim"
                        }]
                    }
                })
                .onDataClick("_ctl_fusionchartsxt1_ondataclick")
                );

            host.ctl_panel3.append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block7")
                .setDock("top")
                .setHeight(41)
                );

            host.ctl_block7.append(
                (new xui.UI.Input())
                .setHost(host,"ctl_l")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft(10)
                .setTop(10)
                .setWidth(190)
                .setLabelSize(70)
                .setLabelCaption("Label")
                );

            host.ctl_block7.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_v")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft(200)
                .setTop(10)
                .setWidth(190)
                .setLabelSize(70)
                .setLabelCaption("Value")
                .setType("number")
                );

            host.ctl_block7.append(
                (new xui.UI.SButton())
                .setHost(host,"ctl_sbutton6")
                .setDisabled(true)
                .setLeft(440)
                .setTop(10)
                .setWidth(90)
                .setCaption("Apply")
                .onClick("_ctl_sbutton6_onclick")
                );

            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _ctl_fusionchartsxt1_ondataclick:function (prf, value, category){
            var ns=this;
            ns.ctl_l.setDisabled(false).setValue(value.categoryLabel);
            ns.ctl_v.setDisabled(false).setValue(value.dataValue);

            if(xui.isSet(ns._curIndex)){
                ns.ctl_fusionchartsxt1.callFC("togglePieSlice", [ns._curIndex]);
            }

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
             ns.ctl_fusionchartsxt1.callFC("togglePieSlice", [ns._curIndex]);
        }
    }
});