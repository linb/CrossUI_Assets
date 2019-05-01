xui.Class('App.XUISubPage', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel28")
                .setDock("none")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("20.833333333333332em")
                .setHeight("11.666666666666666em")
                .setZIndex(1)
                .setOverflow("hidden")
                .setCaption("Page - XUIPage2")
                .setBorderType("none")
            );
            
            host.ctl_panel28.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ctl_scheckbox3")
                .setLeft("0.8333333333333334em")
                .setTop("0.9166666666666666em")
                .setCaption("CheckBox")
                );
            
            host.ctl_panel28.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input6")
                .setLeft("0.8333333333333334em")
                .setTop("5.833333333333333em")
                );
            
            host.ctl_panel28.append(
                xui.create("xui.UI.List")
                .setHost(host,"ctl_list2")
                .setItems([{
                    "id":"a",
                    "caption":"a"
                },
                {
                    "id":"b",
                    "caption":"b"
                },
                {
                    "id":"c",
                    "caption":"c"
                },
                {
                    "id":"d",
                    "caption":"d"
                }])
                .setLeft("12.5em")
                .setTop("0.25em")
                .setWidth("6.666666666666667em")
                .setHeight("7.5em")
                .setValue("a")
                );
            
            host.ctl_panel28.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button3")
                .setLeft("0.8333333333333334em")
                .setTop("3.5833333333333335em")
                .setWidth("7.5em")
                .setCaption("Button")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});