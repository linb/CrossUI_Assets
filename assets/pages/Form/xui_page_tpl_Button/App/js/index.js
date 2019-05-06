xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group2")
                .setLeft("2.5em")
                .setTop("0.8333333333333334em")
                .setWidth("46.666666666666664em")
                .setHeight("8em")
                .setCaption("xui.UI.HTMLButton")
                .setToggleBtn(false)
            );
            
            host.group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton2")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("7.5em")
                .setHeight("2.1666666666666665em")
                .setHtml("Native Button")
                );
            
            host.group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton3")
                .setLeft("29.166666666666668em")
                .setTop("0.8333333333333334em")
                .setWidth("16.583333333333332em")
                .setHeight("2.1666666666666665em")
                .setHtml("<img style='vertical-align:text-bottom' src={/}img/accept.png> Native Button Click Event")
                .onClick([{
                    "desc":"action1",
                    "type":"other",
                    "target":"msg",
                    "params":["Click Event","You just clicked Native Button"],
                    "method":"pop"
                }])
                );
            
            host.group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton46")
                .setLeft("10.833333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("13.333333333333334em")
                .setHeight("4.166666666666667em")
                .setHtml("<img style='vertical-align:text-bottom' src={/}img/accept.png> <br/>Native Button")
                );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group3")
                .setLeft("2.5em")
                .setTop("10.833333333333334em")
                .setWidth("46.666666666666664em")
                .setHeight("21.666666666666668em")
                .setCaption("xui.UI.Button")
                .setToggleBtn(false)
            );
            
            host.group3.append(
                xui.create("xui.UI.Group")
                .setHost(host,"group4")
                .setLeft("2.5em")
                .setTop("14.166666666666666em")
                .setWidth("40em")
                .setHeight("4.166666666666667em")
                .setCaption("Align")
                .setToggleBtn(false)
                );
            
            host.group4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button21")
                .setDirtyMark(false)
                .setLeft("1.6666666666666667em")
                .setTop("0.25em")
                .setWidth("8.333333333333334em")
                .setCaption("align:left")
                .setHAlign("left")
                );
            
            host.group4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button223")
                .setDirtyMark(false)
                .setLeft("13.333333333333334em")
                .setTop("0.25em")
                .setWidth("8.333333333333334em")
                .setCaption("align:right")
                .setHAlign("right")
                );
            
            host.group4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button30")
                .setDirtyMark(false)
                .setLeft("26.666666666666668em")
                .setTop("0.25em")
                .setWidth("8.333333333333334em")
                .setImage("{/}img/accept.png")
                .setCaption("with image")
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button20")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("18.25em")
                .setCaption("a disabled button")
                .setType("status")
                .onChecked("_button28_ontoggle")
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button28")
                .setDirtyMark(false)
                .setLeft("26.75em")
                .setTop("0.8333333333333334em")
                .setWidth("15.833333333333334em")
                .setImage("{/}img/accept.png")
                .setCaption("a toggle button")
                .setType("status")
                .onChange([{
                    "desc":"action1",
                    "type":"other",
                    "target":"msg",
                    "params":["onChange Event","The button was checked: {args.2}"],
                    "method":"alert",
                    "onOK":2
                }])
                .onChecked("_button28_ontoggle")
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button29")
                .setDirtyMark(false)
                .setLeft("1.6666666666666667em")
                .setTop("3.3333333333333335em")
                .setWidth("18.25em")
                .setHeight("2.5em")
                .setShadow(true)
                .setCaption("with shadow")
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button12")
                .setDirtyMark(false)
                .setLeft("26.75em")
                .setTop("3.3333333333333335em")
                .setWidth("15.833333333333334em")
                .setImage("{/}img/accept.png")
                .setCaption("drop button with image")
                .setType("drop")
                .onClick([{
                    "desc":"action1",
                    "type":"other",
                    "target":"msg",
                    "params":["You clicked button's body","Click Event"],
                    "method":"message"
                }])
                .onClickDrop([{
                    "desc":"action1",
                    "type":"other",
                    "target":"msg",
                    "params":["You clicked button's drop button","Click Event"],
                    "method":"message"
                }])
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button13")
                .setDirtyMark(false)
                .setLeft("1.6666666666666667em")
                .setTop("7.5em")
                .setWidth("18.333333333333332em")
                .setHeight("5em")
                .setRenderer(function anonymous(){
                    return"<img src={/}img/accept.png /><br />renderer";
                }
                )
                .setCaption("button13")
                );
            
            host.group3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button14")
                .setDirtyMark(false)
                .setLeft("26.666666666666668em")
                .setTop("7.583333333333333em")
                .setWidth("15.916666666666666em")
                .setHeight("5em")
                .setRenderer(function anonymous(){
                    return"renderer<br /><img src={/}img/accept.png />";
                }
                )
                .setCaption("button13")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});