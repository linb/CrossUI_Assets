xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Span())
                .setHost(host,"ctl_span5")
                .setLeft(270)
                .setTop(20)
                .setWidth(140)
                .setHeight(16)
                .setHtml("Click the span element")
                .onClick([{
                    "desc" : "action",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["Click event","You just clicked the Span."],
                    "method" : "alert",
                    "onOK" : 2
                }])
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #BA55D3 1px"
                    }
                })
            );

            append(
                (new xui.UI.Image())
                .setHost(host,"ctl_image12")
                .setLeft(270)
                .setTop(90)
                .setWidth(140)
                .setHeight(120)
                .setSrc("{/}img/25_128x128.png")
                .setCursor("pointer")
                .onClick([{
                    "desc" : "action",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["Click event","You just clicked the Image"],
                    "method" : "alert",
                    "onOK" : 2
                }])
            );

            append(
                (new xui.UI.HTMLButton())
                .setHost(host,"ctl_htmlbutton2")
                .setLeft(270)
                .setTop(50)
                .setWidth(140)
                .setHeight(30)
                .setHtml("HTML Button")
                .onClick([{
                    "desc" : "action1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["Click Event","You just clicked the Button"],
                    "method" : "alert",
                    "onOK" : 2
                }])
            );

            append(
                (new xui.UI.Link())
                .setHost(host,"link1")
                .setLeft(20)
                .setTop(60)
                .setCaption("Prevent the link to open the href")
                .setHref("http://www.google.com")
                .setTarget("_blank")
                .onClick([{
                    "desc" : "action1",
                    "type" : "none",
                    "target" : "none",
                    "params" : [],
                    "method" : "none",
                    "return" : false
                }])
            );

            append(
                (new xui.UI.Link())
                .setHost(host,"link2")
                .setLeft(20)
                .setTop(100)
                .setCaption("A link with onClick event")
                .onClick([{
                    "desc" : "action1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You clicked me","Click event",200,5000],
                    "method" : "message",
                    "return" : false
                }])
            );

            append(
                (new xui.UI.Link())
                .setHost(host,"link3")
                .setDisabled(true)
                .setLeft(20)
                .setTop(150)
                .setCaption("a disabled link")
            );

            append(
                (new xui.UI.Link())
                .setHost(host,"link6")
                .setLeft(20)
                .setTop(20)
                .setCaption("A link can open the href")
                .setHref("http://www.google.com")
                .setTarget("_blank")
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});