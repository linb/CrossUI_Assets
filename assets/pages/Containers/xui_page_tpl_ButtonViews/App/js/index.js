xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block6")
                .setLeft("49.166666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block6.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews8")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "imageClass":"xui-icon-number1",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "imageClass":"xui-icon-number2",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "imageClass":"xui-icon-number3",
                    "tips":"item c"
                }])
                .setBarLocation("left")
                .setBarVAlign("bottom")
                .setBarSize("7em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setLeft("17.5em")
                .setTop("3.3333333333333335em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews4")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "tips":"item c"
                }])
                .setBarHAlign("right")
                .setBarSize("2.5em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block9")
                .setLeft("1.6666666666666667em")
                .setTop("19.166666666666668em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block9.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews11")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "imageClass":"xui-icon-number1",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "imageClass":"xui-icon-number2",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "imageClass":"xui-icon-number3",
                    "tips":"item c"
                }])
                .setBarLocation("right")
                .setBarSize("7em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block10")
                .setLeft("17.5em")
                .setTop("19.166666666666668em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block10.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews12")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "imageClass":"xui-icon-number1",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "imageClass":"xui-icon-number2",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "imageClass":"xui-icon-number3",
                    "tips":"item c"
                }])
                .setBarLocation("right")
                .setBarVAlign("bottom")
                .setBarSize("7em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block11")
                .setLeft("33.333333333333336em")
                .setTop("19.166666666666668em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block11.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews13")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "tips":"item c"
                }])
                .setBarLocation("bottom")
                .setBarSize("2.5em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setLeft("1.6666666666666667em")
                .setTop("3.3333333333333335em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews3")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "tips":"item c"
                }])
                .setBarSize("2.5em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block5")
                .setLeft("33.333333333333336em")
                .setTop("3.3333333333333335em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block5.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews7")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "imageClass":"xui-icon-number1",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "imageClass":"xui-icon-number2",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "imageClass":"xui-icon-number3",
                    "tips":"item c"
                }])
                .setBarLocation("left")
                .setBarSize("7em")
                .setValue("a")
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block12")
                .setLeft("49.166666666666664em")
                .setTop("19.166666666666668em")
                .setWidth("15em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block12.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"buttonviews14")
                .setItems([{
                    "id":"a",
                    "caption":"itema",
                    "tips":"item a"
                },
                {
                    "id":"b",
                    "caption":"itemb",
                    "tips":"item b"
                },
                {
                    "id":"c",
                    "caption":"itemc",
                    "tips":"item c"
                }])
                .setBarLocation("bottom")
                .setBarHAlign("right")
                .setBarSize("2.5em")
                .setValue("a")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});