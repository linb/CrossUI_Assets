xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Pane())
                .setHost(host,"ctl_pane77")
                .setLeft(30)
                .setTop(30)
                .setWidth(340)
                .setHeight(280)
            );

            host.ctl_pane77.append(
                (new xui.UI.Stacks())
                .setHost(host,"ctl_stacks22")
                .setItems([{
                    "id" : "a",
                    "caption" : "page1",
                    "image" : "{/}img/16-heart-red-m.png",
                    "panelBgClr" : "#FFDAB9"
                },{
                    "id" : "b",
                    "caption" : "page2",
                    "image" : "",
                    "panelBgClr" : "#BC8F8F"
                },{
                    "id" : "c",
                    "caption" : "page3",
                    "image" : "",
                    "panelBgClr" : "#40E0D0"
                },{
                    "id" : "d",
                    "caption" : "page4",
                    "image" : "",
                    "closeBtn" : true,
                    "optBtn" : true,
                    "popBtn" : true,
                    "panelBgClr" : "#00BFFF"
                }])
                .setValue("a")
                );

            host.ctl_stacks22.append(
                (new xui.UI.Panel())
                .setHost(host,"ctl_panel95")
                .setZIndex(1)
                .setCaption("ctl_panel95")
                , "a");

            append(
                (new xui.UI.Pane())
                .setHost(host,"ctl_pane79")
                .setLeft(390)
                .setTop(30)
                .setWidth(340)
                .setHeight(280)
            );

            host.ctl_pane79.append(
                (new xui.UI.Stacks())
                .setHost(host,"ctl_stacks24")
                .setItems([{
                    "id" : "a",
                    "caption" : "page1",
                    "image" : "{/}img/16-heart-red-m.png",
                    "panelBgClr" : "#FFDAB9"
                },{
                    "id" : "b",
                    "caption" : "page2",
                    "image" : "",
                    "panelBgClr" : "#BC8F8F"
                },{
                    "id" : "c",
                    "caption" : "page3",
                    "image" : "",
                    "panelBgClr" : "#40E0D0"
                },{
                    "id" : "d",
                    "caption" : "page4",
                    "image" : "",
                    "closeBtn" : true,
                    "optBtn" : true,
                    "popBtn" : true,
                    "panelBgClr" : "#00BFFF"
                }])
                .setValue("c")
                );

            host.ctl_stacks24.append(
                (new xui.UI.Layout())
                .setHost(host,"ctl_layout112")
                .setItems([{
                    "id" : "before",
                    "pos" : "before",
                    "min" : 10,
                    "size" : 80,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "after",
                    "pos" : "after",
                    "min" : 10,
                    "size" : 80,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                }])
                , "c");

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});