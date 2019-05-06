xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel13")
                .setDock("none")
                .setLeft("7.5em")
                .setTop("3.3333333333333335em")
                .setWidth("16.666666666666668em")
                .setHeight("25em")
                .setCaption("Message Service 1")
            );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton1")
                .setLeft("1.5em")
                .setTop("1.6666666666666667em")
                .setWidth("12.5em")
                .setHtml("Send Message")
                .onClick([
                    {
                        "desc":"send",
                        "type":"control",
                        "target":"xui_msg1",
                        "args":[
                            "{page.xui_msg1.broadcast()}",
                            undefined,
                            undefined,
                            "msg2",
                            "The message is from message service 1",
                            "",
                            "",
                            "",
                            ""
                        ],
                        "method":"broadcast",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
                );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input28")
                .setReadonly(true)
                .setShowDirtyMark(false)
                .setLeft("1.5em")
                .setTop("4.916666666666667em")
                .setWidth("12.5em")
                .setHeight("15.833333333333334em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Received Messag")
                .setLabelHAlign("left")
                .setMultiLines(true)
                );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel14")
                .setDock("none")
                .setLeft("35.833333333333336em")
                .setTop("3.3333333333333335em")
                .setWidth("16.666666666666668em")
                .setHeight("25em")
                .setCaption("Message Service 2")
            );
            
            host.xui_ui_panel14.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton2")
                .setLeft("1.5em")
                .setTop("1.5833333333333333em")
                .setWidth("12.5em")
                .setHtml("Send Message")
                .onClick([
                    {
                        "desc":"broadcast",
                        "type":"control",
                        "target":"xui_msg2",
                        "args":[
                            "{page.xui_msg2.broadcast()}",
                            undefined,
                            undefined,
                            "msg1",
                            "The message is from message service 2"
                        ],
                        "method":"broadcast",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
                );
            
            host.xui_ui_panel14.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input29")
                .setLeft("1.5em")
                .setTop("4.833333333333333em")
                .setWidth("12.5em")
                .setHeight("15.833333333333334em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Received Messag")
                .setLabelHAlign("left")
                .setMultiLines(true)
                .setReadonly(true)
                .setShowDirtyMark(false)
                );
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper5")
                .setLeft("25em")
                .setTop("3.3333333333333335em")
                .setWidth("10.333333333333334em")
            );
            
            host.xui_ui_svgpaper5.append(
                xui.create("xui.svg.path")
                .setHost(host,"xui_svg_path17")
                .setSvgTag("Arrow:11")
                .setAttr({
                    "path":"M,-3.384575819609381e-8,64.99632013547027L,31.991663085585873,49.99999998326193L,31.991663085585873,57.49814012125741L,78.35595130371675,57.49814012125741L,78.35595130371675,49.99999998326193L,110.347599628647,64.99632013547027L,78.3559513037168,79.99256053524387L,78.3559513037168,72.49443946848278L,31.991663085585913,72.49443946848278L,31.991663085585913,79.99256053524387L,-3.384575819609381e-8,64.99632013547027Z",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2
                })
                );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_msg1")
                .setRecipientType("msg1")
                .onMessageReceived([
                    {
                        "desc":"set",
                        "type":"control",
                        "target":"xui_ui_input28",
                        "args":[
                            "{page.xui_ui_input28.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_msg2")
                .setRecipientType("msg2")
                .onMessageReceived([
                    {
                        "desc":"set",
                        "type":"control",
                        "target":"xui_ui_input29",
                        "args":[
                            "{page.xui_ui_input29.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});