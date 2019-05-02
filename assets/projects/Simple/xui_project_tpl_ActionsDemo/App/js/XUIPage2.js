xui.Class('App.XUIPage2', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"ctl_dialog32")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("50.833333333333336em")
                .setHeight("35em")
                .setCaption("XUI Page 2")
                .setCloseBtn(false)
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton810")
                .setLeft("2.5em")
                .setTop("14.166666666666666em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setHtml("<< Previous Page")
                .onClick([{
                    "desc":"Action 1",
                    "type":"page",
                    "target":"App",
                    "params":[true],
                    "method":"switch"
                }])
                );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton811")
                .setLeft("38.333333333333336em")
                .setTop("14.166666666666666em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setHtml("Next Page >>")
                .onClick([{
                    "desc":"Action 1",
                    "type":"page",
                    "target":"App.XUIPage3",
                    "params":[true],
                    "method":"switch"
                }])
                );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image101")
                .setLeft("20.833333333333332em")
                .setTop("10.833333333333334em")
                .setSrc("{/}img/22_128x128.png")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});