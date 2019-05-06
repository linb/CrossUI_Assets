xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Pane())
                .setHost(host,"panel9")
                .setLeft(20)
                .setTop(20)
                .setWidth(390)
                .setHeight(190)
            );

            host.panel9.append(
                (new xui.UI.PageBar())
                .setHost(host,"pagebar4")
                .setLeft(36)
                .setTop(100)
                .setWidth(330)
                .setHeight(23)
                .setTabindex("5")
                .setCaption("To : ")
                .setTextTpl("[*]")
                .setValue("1:300:300")
                .onClick([{
                    "desc" : "动作 1",
                    "type" : "control",
                    "target" : "pagebar4",
                    "params" : [{
                        "value" : "{args.1}"
                    }],
                    "method" : "setProperties"
                }])
                );

            host.panel9.append(
                (new xui.UI.PageBar())
                .setHost(host,"pagebar3")
                .setLeft(24)
                .setTop(60)
                .setWidth(330)
                .setHeight(23)
                .setTabindex("5")
                .setTextTpl("p *")
                .setValue("1:6:20")
                .onClick([{
                    "desc" : "动作 1",
                    "type" : "control",
                    "target" : "pagebar3",
                    "params" : [{
                        "value" : "{args.1}"
                    }],
                    "method" : "setProperties"
                }])
                );

            host.panel9.append(
                (new xui.UI.PageBar())
                .setHost(host,"pagebar1")
                .setLeft(24)
                .setTop(20)
                .setWidth(330)
                .setHeight(23)
                .setTabindex("5")
                .setValue("1:3:32383")
                .onClick([{
                    "desc" : "action 1",
                    "type" : "control",
                    "target" : "pagebar1",
                    "params" : [{
                        "value" : "{args.1}"
                    }],
                    "method" : "setProperties"
                }])
                );

            host.panel9.append(
                (new xui.UI.PageBar())
                .setHost(host,"pagebar5")
                .setLeft(56)
                .setTop(140)
                .setWidth(330)
                .setHeight(23)
                .setTabindex("5")
                .setCaption("")
                .setPrevMark("previous")
                .setNextMark("next")
                .setValue("1:300:600")
                .onClick([{
                    "desc" : "动作 1",
                    "type" : "control",
                    "target" : "pagebar5",
                    "params" : [{
                        "value" : "{args.1}"
                    }],
                    "method" : "setProperties"
                }])
                );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});