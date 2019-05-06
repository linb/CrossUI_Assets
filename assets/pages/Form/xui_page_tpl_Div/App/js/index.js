xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Div())
                .setHost(host,"div1")
                .setWidth("auto")
                .setHeight(68)
                .setPosition("relative")
                .setHtml("text string in Div")
                .setCustomStyle({
                    "KEY" : "border:solid 1px #888"
                })
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div2")
                .setWidth("auto")
                .setHeight("auto")
                .setPosition("relative")
                .setHtml("<strong>auto height Div</strong>")
                .setCustomStyle({
                    "KEY" : "background:#00ff00;border:solid 1px #888"
                })
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div3")
                .setWidth("auto")
                .setHeight(100)
                .setRenderer(function (data, uidata){
                    uidata.html = "[rederer content]";
                })
                .setPosition("relative")
                .setCustomStyle({
                    "KEY" : "border:solid 1px #888"
                })
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"ctl_div24")
                .setWidth("auto")
                .setHeight(100)
                .setPosition("relative")
                .setAjaxAutoLoad("{/}data/block.html")
                .setCustomStyle({
                    "KEY" : "border:solid 1px #888"
                })
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"ctl_div24")
                .setWidth("auto")
                .setHeight(100)
                .setPosition("relative")
                .setIframeAutoLoad("http://www.crossui.com")
                .setCustomStyle({
                    "KEY" : "border:solid 1px #888"
                })
            );

            append(
                (new xui.UI.SButton())
                .setHost(host,"sbutton1")
                .setLeft(10)
                .setTop(40)
                .setWidth(210)
                .setCaption("Add content to the following div")
                .onClick([{
                    "desc" : "append cotent",
                    "type" : "control",
                    "target" : "div2",
                    "params" : [{
                        "html" : "{page.div2.getHtml()}<br><div><strong>new line</strong></div>"
                    }],
                    "method" : "setProperties"
                }])
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});