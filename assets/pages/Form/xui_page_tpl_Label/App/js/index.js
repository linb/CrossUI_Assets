xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Group())
                .setHost(host,"group1")
                .setLeft(50)
                .setTop(20)
                .setWidth(690)
                .setHeight(90)
                .setCaption("xui.UI.SLabel (recommended)")
                .setToggleBtn(false)
            );

            host.group1.append(
                (new xui.UI.Span())
                .setHost(host,"ctl_span21")
                .setLeft(489)
                .setTop(10)
                .setWidth(160)
                .setHeight(16)
                .setHtml("Use normal Span as a label")
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"slabel5")
                .setLeft(10)
                .setTop(10)
                .setWidth(220)
                .setCaption("Align - left")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #DEB887 1px"
                    }
                })
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"slabel6")
                .setLeft(10)
                .setTop(30)
                .setWidth(220)
                .setCaption("Align - center")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #DEB887 1px"
                    }
                })
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"slabel7")
                .setLeft(10)
                .setTop(50)
                .setWidth(220)
                .setCaption("Align - right")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #DEB887 1px"
                    }
                })
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"ctl_slabel46")
                .setLeft(280)
                .setTop(10)
                .setCaption("Auto size label")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #DEB887 1px"
                    }
                })
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"ctl_slabel47")
                .setLeft(489)
                .setTop(50)
                .setCaption("Click event on SLabel")
                .setHAlign("left")
                .onClick([{
                    "desc" : "action1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["Click Event","You clicked SLable"],
                    "method" : "alert",
                    "onOK" : 2
                }])
                .setCustomStyle({
                    "KEY" : {
                        "cursor" : "pointer"
                    }
                })
                );

            host.group1.append(
                (new xui.UI.SLabel())
                .setHost(host,"ctl_slabel75")
                .setLeft(280)
                .setTop(30)
                .setCaption("Auto size label <br /> muiti-lines")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "solid #DEB887 1px"
                    }
                })
                );

            append(
                (new xui.UI.Group())
                .setHost(host,"group2")
                .setLeft(50)
                .setTop(120)
                .setWidth(690)
                .setHeight(310)
                .setCaption("xui.UI.Label")
                .setToggleBtn(false)
            );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label6")
                .setLeft(10)
                .setTop(222)
                .setWidth(232)
                .setHeight(42)
                .setCaption("<strong>label</strong> (left/bottom)")
                .setHAlign("left")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label2")
                .setLeft(10)
                .setTop(50)
                .setWidth(224)
                .setHeight(32)
                .setCaption("label with border")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label7")
                .setLeft(530)
                .setTop(50)
                .setWidth(110)
                .setHeight(117)
                .setCaption("resizable label<br/> You can DD to modify my size")
                .setHAlign("center")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label9")
                .setLeft(282)
                .setTop(50)
                .setWidth(224)
                .setHeight(32)
                .setCaption("label (exStyle:'cursor:pointer')")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : "cursor:pointer"
                })
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label10")
                .setLeft(282)
                .setTop(94)
                .setWidth(224)
                .setHeight(32)
                .setCaption("label with image")
                .setImage("img/demo.gif")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label11")
                .setLeft(226)
                .setTop(170)
                .setWidth(280)
                .setHeight(50)
                .setZIndex("2")
                .setCaption("label (zIndex:2)")
                .setCustomClass({
                    "KEY" : "xui-uibg-bar"
                })
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label1")
                .setLeft(11)
                .setTop(10)
                .setWidth(224)
                .setHeight(32)
                .setCaption("an advanced label")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label3")
                .setLeft(10)
                .setTop(140)
                .setWidth(224)
                .setHeight(22)
                .setCaption("label with shadow text")
                .setFontSize("16px")
                .setFontWeight("bold")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label4")
                .setLeft(10)
                .setTop(178)
                .setWidth(232)
                .setHeight(32)
                .setCaption("<strong>label</strong> (center/middle)")
                .setHAlign("center")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"label5")
                .setLeft(10)
                .setTop(94)
                .setWidth(224)
                .setHeight(32)
                .setCaption("label with border&shadow")
                .setHAlign("left")
                );

            host.group2.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label146")
                .setLeft(510)
                .setTop(240)
                .setWidth(140)
                .setHeight(32)
                .setCaption("Click event on Label")
                .setHAlign("center")
                .onClick([{
                    "desc" : "action1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["Click event","You clicked me"],
                    "method" : "alert",
                    "onOK" : 2
                }])
                .setCustomStyle({
                    "KEY" : {
                        "cursor" : "pointer"
                    }
                })
                );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});