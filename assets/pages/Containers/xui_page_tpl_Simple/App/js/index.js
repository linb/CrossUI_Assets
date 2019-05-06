xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane15")
                .setLeft("2.5em")
                .setTop("13.333333333333334em")
                .setWidth("8.333333333333334em")
                .setHeight("8.333333333333334em")
                .setHtml("xui.UI.Pane")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"pane4")
                .setLeft("2.5em")
                .setTop("25em")
                .setWidth("20em")
                .setHeight("28.333333333333332em")
            );
            
            host.pane4.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panelbar2")
                .setDock("width")
                .setWidth("17.5em")
                .setHeight("auto")
                .setPosition("relative")
                .setCaption("relative auto-adjust height 1")
                .setToggleBtn(true)
                );
            
            host.panelbar2.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button9")
                .setDirtyMark(false)
                .setLeft("5.583333333333333em")
                .setPosition("relative")
                .setCaption("button9")
                );
            
            host.pane4.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panelbar3")
                .setDock("width")
                .setWidth("17.5em")
                .setHeight("auto")
                .setPosition("relative")
                .setCaption("relative auto-adjust height 1")
                );
            
            host.panelbar3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button11")
                .setDirtyMark(false)
                .setLeft("5.583333333333333em")
                .setPosition("relative")
                .setCaption("button9")
                );
            
            host.pane4.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panel7")
                .setDock("width")
                .setWidth("17.5em")
                .setHeight("8em")
                .setPosition("relative")
                .setCaption("relative auto-adjust height 1")
                );
            
            host.panel7.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button10")
                .setDirtyMark(false)
                .setLeft("5.583333333333333em")
                .setPosition("relative")
                .setCaption("button9")
                );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"panel5")
                .setLeft("25em")
                .setTop("25em")
                .setWidth("22.5em")
                .setHeight("11.25em")
            );
            
            host.panel5.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panelbar6")
                .setCaption("in container dock=fill")
                .setToggleBtn(true)
                );
            
            host.panelbar6.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button15")
                .setDirtyMark(false)
                .setDock("fill")
                .setLeft("5.166666666666667em")
                .setCaption("button15")
                );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panelbar7")
                .setDock("none")
                .setLeft("25em")
                .setTop("36.666666666666664em")
                .setWidth("22.5em")
                .setHeight("15em")
                .setCaption("absolute dock=none")
                .setToggle(false)
                .setOptBtn(true)
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setPopBtn(true)
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setLeft("25.833333333333332em")
                .setTop("13.333333333333334em")
                .setShadow(true)
                .setHtml("shadow")
                .setBorderType("none")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setLeft("14.166666666666666em")
                .setTop("13.333333333333334em")
                .setHtml("border")
                .setBorderType("none")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setLeft("37.5em")
                .setTop("13.333333333333334em")
                .setResizer(true)
                .setHtml("resizer")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block6")
                .setLeft("2.5em")
                .setTop("2.5em")
                .setWidth("9.166666666666666em")
                .setHtml("borderType:inset")
                .setBorderType("inset")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block7")
                .setLeft("14.166666666666666em")
                .setTop("2.5em")
                .setHtml("borderType:outset")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block8")
                .setLeft("25.833333333333332em")
                .setTop("2.5em")
                .setHtml("borderType:groove")
                .setBorderType("groove")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block9")
                .setLeft("37.5em")
                .setTop("2.5em")
                .setHtml("borderType:ridge")
                .setBorderType("ridge")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});