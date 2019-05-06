xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Pane())
                .setHost(host,"ctl_pane10")
                .setLeft(10)
                .setTop(10)
                .setWidth(580)
                .setHeight(240)
            );

            host.ctl_pane10.append(
                (new xui.UI.Tabs())
                .setHost(host,"ctl_tabs5")
                .setItems([{
                    "id" : "a",
                    "caption" : "page1",
                    "image" : "{/}img/16-image.png",
                    "panelBgClr" : "#FFDAB9",
                    "panelBgImg" : "{/}img/31_128x128.png",
                    "panelBgImgPos" : "top center",
                    "panelBgImgRepeat" : "no-repeat"
                },{
                    "id" : "b",
                    "caption" : "page2",
                    "image" : "",
                    "closeBtn" : true,
                    "panelBgClr" : "#F5DEB3"
                },{
                    "id" : "c",
                    "caption" : "page3",
                    "image" : "",
                    "closeBtn" : true
                },{
                    "id" : "d",
                    "caption" : "page4",
                    "image" : "",
                    "closeBtn" : true,
                    "optBtn" : true,
                    "popBtn" : true
                }])
                .setValue("a")
                .beforePageClose([{
                    "desc" : "message",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You cant close me!",null,200,5000],
                    "method" : "message"
                },{
                    "desc" : "stop",
                    "type" : "none",
                    "target" : "none",
                    "params" : [],
                    "method" : "none",
                    "conditions" : [{
                        "left" : "{args.1.id}",
                        "symbol" : "=",
                        "right" : "c"
                    }],
                    "return" : false
                }])
                );

            host.ctl_tabs5.append(
                (new xui.UI.Tabs())
                .setHost(host,"ctl_tabs20")
                .setItems([{
                    "id" : "a",
                    "caption" : "html",
                    "image" : "",
                    "html" : "<div style='padding:12px'>html content</div>"
                },{
                    "id" : "b",
                    "caption" : "widgets",
                    "image" : ""
                },{
                    "id" : "c",
                    "caption" : "ajax autoload",
                    "image" : "",
                    "ajaxAutoLoad" : "{/}data/block.html"
                },{
                    "id" : "d",
                    "caption" : "iframe autoload",
                    "image" : "",
                    "closeBtn" : false,
                    "optBtn" : false,
                    "popBtn" : false,
                    "iframeAutoLoad" : "http://www.crossui.com"
                }])
                .setDock("none")
                .setLeft(60)
                .setTop(64)
                .setWidth(450)
                .setHeight(140)
                .setValue("a")
                , "a");

            host.ctl_tabs20.append(
                (new xui.UI.SCheckBox())
                .setHost(host,"ctl_scheckbox1")
                .setLeft(40)
                .setTop(20)
                .setCaption("ctl_scheckbox1")
                , "b");

            host.ctl_tabs20.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput28")
                .setLeft(40)
                .setTop(50)
                .setItems([{
                    "id" : "a",
                    "caption" : "item a"
                },{
                    "id" : "b",
                    "caption" : "item b"
                },{
                    "id" : "c",
                    "caption" : "item c"
                },{
                    "id" : "d",
                    "caption" : "item d",
                    "disabled" : true
                }])
                , "b");

            append(
                (new xui.UI.Tabs())
                .setHost(host,"ctl_tabs6")
                .setItems([{
                    "id" : "a",
                    "caption" : "No container panel tabs",
                    "image" : ""
                },{
                    "id" : "b",
                    "caption" : "page2",
                    "image" : ""
                },{
                    "id" : "c",
                    "caption" : "page3",
                    "image" : ""
                }])
                .setDock("none")
                .setLeft(10)
                .setTop(270)
                .setWidth(580)
                .setHeight("auto")
                .setNoPanel(true)
                .setHAlign("center")
                .setValue("a")
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});