xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer1")
                .setAutoStart(false)
                .onTime([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_ui_comboinput97",
                        "args":[
                            "{page.xui_ui_comboinput97.setUIValue()}",
                            undefined,
                            undefined,
                            "{Date.now()}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
                .onStart([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_ui_comboinput97",
                        "args":[
                            "{page.xui_ui_comboinput97.setUIValue()}",
                            undefined,
                            undefined,
                            "{Date.now()}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput97")
                .setShowDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("20em")
                .setLabelSize("8em")
                .setLabelCaption("Timer")
                .setType("datetime")
                .setDateEditorTpl("yyyy-mm-dd nn:ss")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton2")
                .setLeft("13.833333333333334em")
                .setTop("6.666666666666667em")
                .setWidth("4.583333333333333em")
                .setHtml("Start")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer1",
                        "args":[ ],
                        "method":"start",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("21.166666666666668em")
                .setTop("6.666666666666667em")
                .setWidth("4.583333333333333em")
                .setHtml("Pause")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer1",
                        "args":[ ],
                        "method":"suspend",
                        "event":1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});