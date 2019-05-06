xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton6")
                .setClassName("xui-css-alz")
                .setLeft("2.5em")
                .setTop("1.6666666666666667em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton7")
                .setLeft("11.666666666666666em")
                .setTop("1.6666666666666667em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz1")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton8")
                .setLeft("20.833333333333332em")
                .setTop("1.6666666666666667em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz11")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton9")
                .setLeft("2.5em")
                .setTop("13.333333333333334em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz31")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton10")
                .setLeft("2.5em")
                .setTop("7.5em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz2")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton11")
                .setLeft("11.666666666666666em")
                .setTop("7.5em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz21")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton12")
                .setLeft("20.833333333333332em")
                .setTop("7.5em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz22")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton13")
                .setLeft("11.666666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz32")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton14")
                .setLeft("20.833333333333332em")
                .setTop("13.333333333333334em")
                .setWidth("7.666666666666667em")
                .setHeight("4.333333333333333em")
                .setHtml("Style Button")
                .setClassName("xui-css-alz33")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox2")
                .setClassName("xui-css-alz1")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #87C1DD",
                    "text-shadow":"none",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#4BA3CC"
                            },
                            {
                                "pos":"70%",
                                "clr":"#3289B2"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #3899C6  1px",
                    "border-right":"solid #3899C6  1px",
                    "border-bottom":"solid #3899C6  1px",
                    "border-left":"solid #3899C6  1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"3%",
                                "clr":"#3899C6 "
                            },
                            {
                                "pos":"95%",
                                "clr":"#2D7A9E"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #297192",
                    "background-image":"none",
                    "background-color":"#4BA3CC"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-alz11")
                .setNormalStatus({
                    "color":"#222222",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #ffffff",
                    "text-shadow":"0 -1px 0 #ffffff",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#cef8ff"
                            },
                            {
                                "pos":"51%",
                                "clr":"#7fe0f8"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #9bf1ff 1px",
                    "border-right":"solid #9bf1ff 1px",
                    "border-bottom":"solid #9bf1ff 1px",
                    "border-left":"solid #9bf1ff 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#9bf1ff"
                            },
                            {
                                "pos":"51%",
                                "clr":"#4fd4f5"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #239397 ",
                    "background-image":"none",
                    "background-color":"#cef8ff"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox4")
                .setClassName("xui-css-alz2")
                .setNormalStatus({
                    "color":"#222222",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #F8D980",
                    "text-shadow":"0 -1px 0 #F8D980",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#c79810"
                            },
                            {
                                "pos":"100%",
                                "clr":"#cf9f15"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #cf9f15 1px",
                    "border-right":"solid #cf9f15 1px",
                    "border-bottom":"solid #cf9f15 1px",
                    "border-left":"solid #cf9f15 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#cf9f15"
                            },
                            {
                                "pos":"100%",
                                "clr":"#98740c"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #524600 ",
                    "background-image":"none",
                    "background-color":"#eab92d"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox5")
                .setClassName("xui-css-alz21")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #F8D980",
                    "text-shadow":"0 -1px 0 #524600 ",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#eab92d"
                            },
                            {
                                "pos":"50%",
                                "clr":"#c79810"
                            },
                            {
                                "pos":"100%",
                                "clr":"#cf9f15"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #cf9f15 1px",
                    "border-right":"solid #cf9f15 1px",
                    "border-bottom":"solid #cf9f15 1px",
                    "border-left":"solid #cf9f15 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#cf9f15"
                            },
                            {
                                "pos":"50%",
                                "clr":"#98740c"
                            },
                            {
                                "pos":"100%",
                                "clr":"#524600 "
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #524600 ",
                    "background-image":"none",
                    "background-color":"#eab92d"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox6")
                .setClassName("xui-css-alz22")
                .setNormalStatus({
                    "color":"#222222",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #F8D980",
                    "text-shadow":"0 1px 0 #F8D980",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#eab92d"
                            },
                            {
                                "pos":"51%",
                                "clr":"#c79810"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #cf9f15 1px",
                    "border-right":"solid #cf9f15 1px",
                    "border-bottom":"solid #cf9f15 1px",
                    "border-left":"solid #cf9f15 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#cf9f15"
                            },
                            {
                                "pos":"51%",
                                "clr":"#98740c"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #524600 ",
                    "background-image":"none",
                    "background-color":"#eab92d"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox7")
                .setClassName("xui-css-alz31")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #C9C9CD",
                    "text-shadow":"none",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#0e0e0e"
                            },
                            {
                                "pos":"100%",
                                "clr":"#646464"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #646464 1px",
                    "border-right":"solid #646464 1px",
                    "border-bottom":"solid #646464 1px",
                    "border-left":"solid #646464 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#646464"
                            },
                            {
                                "pos":"100%",
                                "clr":"#282828"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #121212",
                    "background-image":"none",
                    "background-color":"#7d7e7d"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox8")
                .setClassName("xui-css-alz32")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #A7AEC2",
                    "text-shadow":"0 -1px 0 #272742",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#606c88"
                            },
                            {
                                "pos":"50%",
                                "clr":"#3f4c6b"
                            },
                            {
                                "pos":"100%",
                                "clr":"#4b546a"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #4b546a 1px",
                    "border-right":"solid #4b546a 1px",
                    "border-bottom":"solid #4b546a 1px",
                    "border-left":"solid #4b546a 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#4b546a"
                            },
                            {
                                "pos":"50%",
                                "clr":"#2c354b"
                            },
                            {
                                "pos":"100%",
                                "clr":"#272742"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #272742",
                    "background-image":"none",
                    "background-color":"#606c88"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox9")
                .setClassName("xui-css-alz33")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #D9D961",
                    "text-shadow":"none",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#a90329"
                            },
                            {
                                "pos":"51%",
                                "clr":"#6d0019"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #77021d 1px",
                    "border-right":"solid #77021d 1px",
                    "border-bottom":"solid #77021d 1px",
                    "border-left":"solid #77021d 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"50%",
                                "clr":"#77021d"
                            },
                            {
                                "pos":"51%",
                                "clr":"#3a000d"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #000000",
                    "background-image":"none",
                    "background-color":"#a90329"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox1")
                .setClassName("xui-css-alz")
                .setNormalStatus({
                    "color":"#eeeeee",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #87C1DD",
                    "text-shadow":"none",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#3289B2"
                            },
                            {
                                "pos":"100%",
                                "clr":"#3899C6 "
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #3899C6  1px",
                    "border-right":"solid #3899C6  1px",
                    "border-bottom":"solid #3899C6  1px",
                    "border-left":"solid #3899C6  1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#3899C6 "
                            },
                            {
                                "pos":"100%",
                                "clr":"#2D7A9E"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #297192",
                    "background-image":"none",
                    "background-color":"#4BA3CC"
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});