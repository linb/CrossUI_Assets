xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer1")
                .setAutoStart(false)
                .setInterval(300)
                .onTime([
                    {
                        "desc":"get value",
                        "type":"control",
                        "target":"progressbar1",
                        "args":[
                            "{page.progressbar1.getUIValue()}",
                            "temp",
                            "v"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"progressbar1",
                        "args":[
                            "{page.progressbar1.setUIValue()}",
                            "none",
                            "",
                            "=MIN(100, {temp.v} + 5)"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check",
                        "type":"control",
                        "target":"xui_timer1",
                        "args":[ ],
                        "method":"suspend",
                        "conditions":[
                            {
                                "left":"{temp.v}",
                                "symbol":">=",
                                "right":"{100}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer2")
                .setAutoStart(false)
                .setInterval(300)
                .onTime([
                    {
                        "desc":"get value",
                        "type":"control",
                        "target":"progressbar2",
                        "args":[
                            "{page.progressbar2.getUIValue()}",
                            "temp",
                            "v"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"progressbar2",
                        "args":[
                            "{page.progressbar2.setUIValue()}",
                            "none",
                            "",
                            "=MIN(100, {temp.v} + 5)"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check",
                        "type":"control",
                        "target":"xui_timer2",
                        "args":[ ],
                        "method":"suspend",
                        "conditions":[
                            {
                                "left":"{temp.v}",
                                "symbol":">=",
                                "right":"{100}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer3")
                .setAutoStart(false)
                .setInterval(300)
                .onTime([
                    {
                        "desc":"get value",
                        "type":"control",
                        "target":"progressbar3",
                        "args":[
                            "{page.progressbar3.getUIValue()}",
                            "temp",
                            "v"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"progressbar3",
                        "args":[
                            "{page.progressbar3.setUIValue()}",
                            "none",
                            "",
                            "=MIN(100, {temp.v} + 5)"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check",
                        "type":"control",
                        "target":"xui_timer3",
                        "args":[ ],
                        "method":"suspend",
                        "conditions":[
                            {
                                "left":"{temp.v}",
                                "symbol":">=",
                                "right":"{100}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer4")
                .setAutoStart(false)
                .setInterval(300)
                .onTime([
                    {
                        "desc":"get value",
                        "type":"control",
                        "target":"progressbar4",
                        "args":[
                            "{page.progressbar4.getUIValue()}",
                            "temp",
                            "v"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"progressbar4",
                        "args":[
                            "{page.progressbar4.setUIValue()}",
                            "none",
                            "",
                            "=MIN(100, {temp.v} + 5)"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check",
                        "type":"control",
                        "target":"xui_timer4",
                        "args":[ ],
                        "method":"suspend",
                        "conditions":[
                            {
                                "left":"{temp.v}",
                                "symbol":">=",
                                "right":"{100}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer5")
                .setAutoStart(false)
                .setInterval(300)
                .onTime([
                    {
                        "desc":"get value",
                        "type":"control",
                        "target":"progressbar5",
                        "args":[
                            "{page.progressbar5.getUIValue()}",
                            "temp",
                            "v"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"progressbar5",
                        "args":[
                            "{page.progressbar5.setUIValue()}",
                            "none",
                            "",
                            "=MIN(100, {temp.v} + 5)"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check",
                        "type":"control",
                        "target":"xui_timer5",
                        "args":[ ],
                        "method":"suspend",
                        "conditions":[
                            {
                                "left":"{temp.v}",
                                "symbol":">=",
                                "right":"{100}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"progressbar1")
                .setLeft("4.166666666666667em")
                .setTop("1.4166666666666667em")
                .setWidth("25.833333333333332em")
                .setHeight("2.5em")
                .setCaptionTpl("*% finished")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"progressbar2")
                .setLeft("4.166666666666667em")
                .setTop("5em")
                .setWidth("25.833333333333332em")
                .setHeight("2em")
                .setValue(60)
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"progressbar3")
                .setLeft("4.166666666666667em")
                .setTop("8.333333333333334em")
                .setWidth("25.833333333333332em")
                .setHeight("2em")
                .setShadow(true)
                .setResizer(true)
                .setFillBG("blue")
                .setValue(30)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"button21")
                .setLeft("30.833333333333332em")
                .setTop("8.333333333333334em")
                .setCaption("start")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer3",
                        "args":[ ],
                        "method":"start",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"progressbar4")
                .setLeft("4.166666666666667em")
                .setTop("11.833333333333334em")
                .setWidth("25.833333333333332em")
                .setHeight("1.6666666666666667em")
                .setCaptionTpl("")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"button7")
                .setLeft("30.833333333333332em")
                .setTop("5em")
                .setCaption("start")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer2",
                        "args":[ ],
                        "method":"start",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"button14")
                .setLeft("30.833333333333332em")
                .setTop("11.666666666666666em")
                .setCaption("start")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer4",
                        "args":[ ],
                        "method":"start",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"progressbar5")
                .setLeft("4.166666666666667em")
                .setTop("15.166666666666666em")
                .setWidth("25.833333333333332em")
                .setHeight("1.6666666666666667em")
                .setCaptionTpl("")
                .setValue(50)
                .setCustomStyle({
                    "FILL":{
                        "$gradient":{
                            "stops":[
                                {
                                    "pos":"0%",
                                    "clr":"#CEF8FF"
                                },
                                {
                                    "pos":"50%",
                                    "clr":"#7FE0F8"
                                },
                                {
                                    "pos":"100%",
                                    "clr":"#9BF1FF"
                                }
                            ],
                            "type":"linear",
                            "orient":"T"
                        }
                    },
                    "BORDER":{
                        "border":"none"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button40")
                .setLeft("30.833333333333332em")
                .setTop("15em")
                .setCaption("start")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"xui_timer5",
                        "args":[ ],
                        "method":"start",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button60")
                .setLeft("30.833333333333332em")
                .setTop("1.6666666666666667em")
                .setCaption("start")
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
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});