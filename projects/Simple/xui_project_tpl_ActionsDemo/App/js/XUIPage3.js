xui.Class('App.XUIPage3', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"ctl_dialog40")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("50.833333333333336em")
                .setHeight("35em")
                .setCaption("XUI Page 3")
                .setCloseBtn(false)
            );
            
            host.ctl_dialog40.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton824")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("2.5em")
                .setTop("14.166666666666666em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setHtml("<< Previous Page")
                .onClick([{
                    "desc":"Action 1",
                    "type":"page",
                    "target":"App.XUIPage2",
                    "params":[true],
                    "method":"switch"
                }])
                );
            
            host.ctl_dialog40.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image99")
                .setLeft("37.5em")
                .setTop("0.8333333333333334em")
                .setSrc("{/}img/20_128x128.png")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});