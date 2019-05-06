xui.Class('App', 'xui.Module',{
    Instance:{
        events:{"onRender":"_onready"},
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Panel())
                .setHost(host,"panel3")
                .setDock("none")
                .setLeft(30)
                .setTop(30)
                .setWidth(480)
                .setHeight(320)
                .setZIndex(1)
                .setCaption("Paging")
                .setBorderType("none")
            );

            host.panel3.append(
                (new xui.UI.Pane())
                .setHost(host,"pane30")
                .setDock("bottom")
                .setHeight(30)
                );

            host.pane30.append(
                (new xui.UI.PageBar())
                .setHost(host,"pagebar2")
                .setLeft(10)
                .setTop(6)
                .onClick("_pagebar2_onclick")
                );

            host.pane30.append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput19")
                .setTop(5)
                .setWidth(40)
                .setRight(4)
                .setType("spin")
                .setPrecision(0)
                .setIncrement("1")
                .setMin(10)
                .setMax(20)
                .afterUIValueSet("_comboinput19_afteruivalueset")
                );

            host.panel3.append(
                (new xui.UI.TreeGrid())
                .setHost(host,"tg")
                .setAltRowsBg(true)
                .setRowHandler(false)
                .setCustomStyle({
                    "BORDER" : "border:solid 1px #aaa;"
                })
                );

            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _onready:function () {
            SPA=this;
            var tg=SPA.tg;
            tg.setHeader([{"caption":"no", "width":60, "type":"label"}, {"caption":"country", "width":60, "type":"label"}, {"caption":"customer", "width":50, "type":"label"}, {"caption":"employee", "width":70, "type":"label"}, {"caption":"bill2005", "type":"number", "width":50}, {"caption":"bill2006", "type":"number", "width":50}, {"caption":"bill2007", "type":"number", "width":50}, {"caption":"bill2008", "type":"number", "width":50}, {"caption":"orderDate",  "width":70}]);
            tg.busy();
            xui.Ajax('{/}data/data.js','',function(rsp){
                SPA._rows=rsp;
                SPA.setPageCount(10);
                tg.free();
            },function(msg){
                alert(msg);
                tg.free();
            }).start();
        },
        setPageCount:function(count){
            SPA.count=count;
            var page=parseInt((SPA._rows.length+(SPA.count-1))/SPA.count, 10);
            SPA.pagebar2.setValue([1,1,page].join(':')).setPage(1);
            SPA.comboinput19.setValue(count);
            SPA.setTg(1);
        },
        setTg:function(index){
            var rows=SPA._rows.slice((index-1)*SPA.count,index*SPA.count);
            SPA.tg.setRows(rows);
        },
        _pagebar2_onclick:function (profile, page) {
            profile.boxing().setPage(page);
            SPA.setTg(page);
        },
        _comboinput19_afteruivalueset:function (profile, oldValue, newValue) {
            if(parseInt(newValue,10)==SPA.count)return;
            profile.boxing().updateValue();
            SPA.setPageCount(newValue);
        }
    }
});