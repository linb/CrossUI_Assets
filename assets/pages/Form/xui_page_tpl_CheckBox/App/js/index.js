xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group2")
                .setLeft("30em")
                .setTop("1.6666666666666667em")
                .setWidth("27.5em")
                .setHeight("21.666666666666668em")
                .setCaption("xui.UI.CheckBox")
                .setToggleBtn(false)
            );
            
            host.group2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox5")
                .setLeft("2.5em")
                .setTop("4.166666666666667em")
                .setWidth("20.833333333333332em")
                .setHeight("2.5em")
                .setImage("{/}img/accept.png")
                .setCaption("an advanced checkbox with image")
                );
            
            host.group2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox4")
                .setLeft("2.5em")
                .setTop("7.5em")
                .setWidth("20.833333333333332em")
                .setHeight("2.5em")
                .setCaption("with shadow")
                );
            
            host.group2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox1")
                .setLeft("2.5em")
                .setTop("15.833333333333334em")
                .setWidth("20.833333333333332em")
                .setCaption("Cant check me")
                .beforeUIValueSet([
                    {
                        "desc":"action1",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Return [false] can stop [before] event",
                            "",
                            200,
                            5000
                        ],
                        "method":"message",
                        "return":false
                    }
                ])
                );
            
            host.group2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox3")
                .setLeft("2.5em")
                .setTop("11.666666666666666em")
                .setWidth("20.833333333333332em")
                .setHeight("2.25em")
                .setCaption("Right Alignment")
                );
            
            host.group2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox2")
                .setLeft("2.5em")
                .setTop("0.8333333333333334em")
                .setWidth("20.833333333333332em")
                .setHeight("2.25em")
                .setCaption("an advanced checkbox with border")
                );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group1")
                .setLeft("4.166666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("24.166666666666668em")
                .setHeight("21.666666666666668em")
                .setCaption("xui.UI.SCheckBox (recommended)")
                .setToggleBtn(false)
            );
            
            host.group1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"scheckbox1")
                .setLeft("2.5em")
                .setTop("1.6666666666666667em")
                .setCaption("a simple checkbox ")
                );
            
            host.group1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"ctl_scheckbox9")
                .setLeft("2.5em")
                .setTop("4.166666666666667em")
                .setWidth("17.833333333333332em")
                .setHeight("2.9166666666666665em")
                .setImage("{/}img/accept.png")
                .setCaption("with image")
                );
            
            host.group1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button33")
                .setLeft("1.6666666666666667em")
                .setTop("11.666666666666666em")
                .setWidth("20.083333333333332em")
                .setCaption("Status Button")
                .setType("status")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});