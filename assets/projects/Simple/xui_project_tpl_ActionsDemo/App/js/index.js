xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a":1,
                    "b":2
                })
                .beforeInvoke([
                    {
                        "desc":"Busy",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"busy"
                    }
                ])
                .onData([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
                .onError([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("70em")
                .setHeight("66.66666666666667em")
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel7")
                .setDock("none")
                .setLeft("1.6666666666666667em")
                .setTop("31.666666666666668em")
                .setWidth("28.333333333333332em")
                .setHeight("14.166666666666666em")
                .setCaption("Panel")
                );
            
            host.ctl_panel7.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"ctl_treeview5")
                .setItems([
                    {
                        "id":"node1",
                        "caption":"node1",
                        "sub":[
                            {
                                "id":"node11",
                                "sub":[
                                    {
                                        "id":"node14"
                                    }
                                ]
                            },
                            {
                                "id":"node12",
                                "sub":[
                                    {
                                        "id":"node13"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"node2",
                        "caption":"node2",
                        "sub":[
                            {
                                "id":"a"
                            },
                            {
                                "id":"b"
                            },
                            {
                                "id":"c"
                            }
                        ]
                    },
                    {
                        "id":"node3",
                        "caption":"node3"
                    },
                    {
                        "id":"node4",
                        "caption":"node4"
                    }
                ])
                .setDock("left")
                .setLeft("0em")
                .setWidth("9.583333333333334em")
                .setRight("0em")
                .setBottom("0em")
                .setSelMode("multibycheckbox")
                .setValue("node1")
                .onChange([
                    {
                        "desc":"fda",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            null,
                            "node2"
                        ],
                        "method":"toggleNode"
                    }
                ])
                .onItemSelected("_ctl_treeview5_onitemselected")
                );
            
            host.ctl_panel7.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"ctl_treegrid5")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id":"col1",
                        "width":"6.666666666666667em",
                        "type":"input",
                        "caption":"col1"
                    },
                    {
                        "id":"col2",
                        "width":"6.666666666666667em",
                        "type":"input",
                        "caption":"col2"
                    },
                    {
                        "id":"col3",
                        "width":"6.666666666666667em",
                        "type":"input",
                        "caption":"col3"
                    },
                    {
                        "id":"col4",
                        "width":"6.666666666666667em",
                        "type":"input",
                        "caption":"col4"
                    }
                ])
                .setRows([
                    {
                        "id":"row1",
                        "cells":[
                            {
                                "value":"row1 col1"
                            },
                            {
                                "value":"row1 col2"
                            },
                            {
                                "value":"row1 col3"
                            },
                            {
                                "value":"row1 col4"
                            }
                        ]
                    },
                    {
                        "id":"row2",
                        "cells":[
                            {
                                "value":"row2 col1",
                                "dirty":true
                            },
                            {
                                "value":"row2 col2",
                                "dirty":true
                            },
                            {
                                "value":"row2 col3",
                                "dirty":true
                            },
                            {
                                "value":"row2 col4",
                                "dirty":true
                            }
                        ],
                        "sub":[
                            {
                                "firstCellStyle":"",
                                "firstCellClass":"",
                                "disabled":false,
                                "readonly":false,
                                "cells":[
                                    {
                                        "value":"sub1",
                                        "width":80,
                                        "type":"input",
                                        "caption":"sub1"
                                    },
                                    {
                                        "value":"sub2",
                                        "width":80,
                                        "type":"input",
                                        "caption":"sub2"
                                    },
                                    {
                                        "value":"sub3",
                                        "width":80,
                                        "type":"input",
                                        "caption":"sub3"
                                    },
                                    {
                                        "value":"sub4",
                                        "width":80,
                                        "cellDisplay":"",
                                        "type":"input",
                                        "caption":"sub4"
                                    }
                                ]
                            }
                        ]
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group1")
                .setLeft("1.6666666666666667em")
                .setTop("6.666666666666667em")
                .setWidth("28.333333333333332em")
                .setHeight("4.75em")
                .setOverflow("hidden")
                .setCaption("URL")
                .setToggleBtn(false)
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton6")
                .setDesc("URL Test 1")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setHtml("URL Test 1")
                .onClick([
                    {
                        "desc":"self",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "https://www.crossui.com"
                        ],
                        "method":"open--_self"
                    }
                ])
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton7")
                .setDesc("URL Test 2")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setHtml("URL Test 2")
                .onClick([
                    {
                        "desc":"blank",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "https://www.crossui.com"
                        ],
                        "method":"open--_blank"
                    }
                ])
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton8")
                .setDesc("URL Test 3")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setHtml("Email Test")
                .onClick([
                    {
                        "desc":"email",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "linb@crossui.com"
                        ],
                        "method":"mailTo"
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group2")
                .setLeft("1.6666666666666667em")
                .setTop("12.5em")
                .setWidth("28.333333333333332em")
                .setHeight("7.833333333333333em")
                .setOverflow("hidden")
                .setCaption("System Message")
                .setToggleBtn(false)
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton2")
                .setDesc("Alert Test")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setZIndex(1002)
                .setHtml("Alert Test")
                .onClick([
                    {
                        "desc":"alert",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Title",
                            "Alert Message"
                        ],
                        "method":"alert",
                        "onOK":2
                    },
                    {
                        "desc":"next",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Hi",
                            "You closed alert dialog"
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton115")
                .setDesc("Pop Message")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setHtml("Pop Message")
                .onClick([
                    {
                        "desc":"message",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Title",
                            "Pop Message"
                        ],
                        "method":"pop"
                    }
                ])
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton32")
                .setDesc("Floating Message")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setHtml("Floating Message")
                .onClick([
                    {
                        "desc":"action",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Body",
                            "Title",
                            400,
                            5000
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton63")
                .setDesc("Show Waiting")
                .setLeft("19.166666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setHtml("Show Waiting")
                .onClick([
                    {
                        "desc":"wait",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"busy"
                    },
                    {
                        "desc":"ok",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free",
                        "timeout":1000
                    }
                ])
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton120")
                .setDesc("Confirm Test")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setZIndex(1002)
                .setHtml("Confirm Test")
                .onClick([
                    {
                        "desc":"confirm",
                        "type":"other",
                        "target":"msg",
                        "method":"confirm",
                        "args":[
                            "Confirm",
                            "Continuew to exec?"
                        ],
                        "okFlag":"_confirm_yes",
                        "koFlag":"_confirm_no",
                        "event":1,
                        "onOK":2,
                        "onKO":3
                    },
                    {
                        "desc":"yes",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "args":[
                            "You confirmed it",
                            "Yes"
                        ],
                        "conditions":[
                            {
                                "left":"{temp._confirm_yes}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"no",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "You didn't confirm it",
                            "No"
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{temp._confirm_no}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    }
                ])
                );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton162")
                .setDesc("Prompt Test")
                .setLeft("10em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setZIndex(1002)
                .setHtml("Prompt Test")
                .onClick([
                    {
                        "desc":"prompt",
                        "type":"other",
                        "target":"msg",
                        "method":"prompt",
                        "args":[
                            "Title",
                            "Continuew to exec?",
                            "text"
                        ],
                        "okFlag":"_prompt_ok",
                        "koFlag":"_prompt_cancel",
                        "event":1,
                        "onOK":3,
                        "onKO":4
                    },
                    {
                        "desc":"ok",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{temp._prompt_ok}",
                                "symbol":"defined",
                                "right":""
                            }
                        ],
                        "args":[
                            "Your input is '{temp.okData}'",
                            "ok"
                        ]
                    },
                    {
                        "desc":"cancel",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "args":[
                            "You cancelled the prompt",
                            "cancel"
                        ],
                        "conditions":[
                            {
                                "left":"{temp._prompt_cancel}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group3")
                .setLeft("1.6666666666666667em")
                .setTop("21.666666666666668em")
                .setWidth("28.333333333333332em")
                .setHeight("9.166666666666666em")
                .setOverflow("hidden")
                .setCaption("Controls")
                .setToggleBtn(false)
                );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton14")
                .setDesc("Destroy Control")
                .setLeft("10em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("3.3333333333333335em")
                .setHtml("Destroy Control")
                .onClick([
                    {
                        "desc":"dest",
                        "type":"control",
                        "target":"ctl_image103",
                        "params":[ ],
                        "method":"destroy"
                    }
                ])
                );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton29")
                .setDesc("Show Control")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("3.3333333333333335em")
                .setHtml("Show / Hide Control")
                .onClick([
                    {
                        "desc":"hide",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[ ],
                        "method":"hide"
                    },
                    {
                        "desc":"show",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[ ],
                        "method":"show",
                        "timeout":500
                    }
                ])
                );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton30")
                .setDesc("Modify Control's properties")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("17.5em")
                .setHeight("2.5em")
                .setHtml("Modify Control's properties")
                .onClick([
                    {
                        "desc":"prop1",
                        "type":"control",
                        "target":"ctl_htmlbutton2",
                        "params":[
                            {
                                "html":"[Dialog Test]",
                                "CC":{
                                    "KEY":null
                                },
                                "CS":{
                                    "KEY":{
                                        "border-radius":"4px 4px 4px 4px",
                                        "$gradient":{
                                            "stops":[
                                                {
                                                    "pos":"0%",
                                                    "clr":"#FFD65E"
                                                },
                                                {
                                                    "pos":"50%",
                                                    "clr":"#FEBF04"
                                                },
                                                {
                                                    "pos":"100%",
                                                    "clr":"#FFC926"
                                                }
                                            ],
                                            "type":"linear",
                                            "orient":"T"
                                        }
                                    }
                                }
                            }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"dialog",
                        "type":"control",
                        "target":"ctl_dialog3",
                        "params":[
                            {
                                "minBtn":false,
                                "maxBtn":false,
                                "shadow":false
                            }
                        ],
                        "method":"setProperties"
                    }
                ])
                );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton39")
                .setDesc("Show Control to Container")
                .setLeft("19.166666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("3.3333333333333335em")
                .setHtml("Show Control to Container")
                .onClick([
                    {
                        "desc":"con",
                        "type":"control",
                        "target":"ctl_htmlbutton2",
                        "params":[
                            "{page.ctl_layout14}",
                            "main"
                        ],
                        "method":"show"
                    },
                    {
                        "desc":"con2",
                        "type":"control",
                        "target":"ctl_htmlbutton7",
                        "params":[
                            "{page.ctl_tabs4}",
                            "first"
                        ],
                        "method":"show"
                    }
                ])
                );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton96")
                .setDesc("Show Waiting")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setHtml("Panel Waiting")
                .onClick([
                    {
                        "desc":"wait",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[ ],
                        "method":"busy"
                    },
                    {
                        "desc":"ok",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[ ],
                        "method":"free",
                        "timeout":1000
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group10")
                .setLeft("30.833333333333332em")
                .setTop("27.5em")
                .setWidth("37.5em")
                .setHeight("18.333333333333332em")
                .setOverflow("hidden")
                .setCaption("Items and Rows")
                .setToggleBtn(false)
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton90")
                .setDesc("Clear Items in TreeView")
                .setLeft("28.333333333333332em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Clear Items in TreeView")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[ ],
                        "method":"clearItems"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton91")
                .setDesc("Clear Rows")
                .setLeft("28.333333333333332em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Clear Rows")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[ ],
                        "method":"removeAllRows"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton92")
                .setDesc("Clear Columns")
                .setLeft("28.333333333333332em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Clear Columns")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[ ],
                        "method":"setHeader"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton103")
                .setDesc("Remove Items in TreeView")
                .setLeft("19.166666666666668em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Remove Items in TreeView")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node1;node2"
                        ],
                        "method":"removeItems"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "first"
                        ],
                        "method":"removeItems"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton104")
                .setDesc("Remove Row")
                .setLeft("19.166666666666668em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Remove Rows")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row1;row2"
                        ],
                        "method":"removeRows"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "first"
                        ],
                        "method":"removeRows"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton105")
                .setDesc("Remove Columns")
                .setLeft("19.166666666666668em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Remove Columns")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "col3;col4"
                        ],
                        "method":"removeCols"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton164")
                .setDesc("Insert Items to TreeBar")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Insert Items to TreeBar")
                .onClick([
                    {
                        "desc":"first",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"first",
                                    "caption":"first",
                                    "sub":[
                                        {
                                            "id":"node2.51",
                                            "caption":"node2.5"
                                        }
                                    ]
                                }
                            ],
                            null,null,true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"last",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"last",
                                    "caption":"last"
                                }
                            ],
                            null,null,false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"a 1",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"a node2",
                                    "caption":"a node2"
                                }
                            ],
                            null,"node2",false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"a 2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"a last",
                                    "caption":"a last"
                                }
                            ],
                            null,"last",false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"b 1",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"b node1",
                                    "caption":"b node1"
                                }
                            ],
                            null,"node1",true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"b 2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"b last",
                                    "caption":"b  last"
                                }
                            ],
                            null,"last",true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"subfirst",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"subfirst",
                                    "caption":"subfirst"
                                }
                            ],
                            "node1",null,true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"sublast",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"sublast",
                                    "caption":"sublast"
                                }
                            ],
                            "node1",null,false
                        ],
                        "method":"insertItems"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton165")
                .setDesc("Insert Rows to TreeGrid")
                .setLeft("0.8333333333333334em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Insert Rows to TreeGrid")
                .onClick([
                    {
                        "desc":"first",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"first",
                                    "caption":"first",
                                    "cells":[
                                        {
                                            "value":"a"
                                        },
                                        {
                                            "value":"b"
                                        },
                                        {
                                            "value":"c"
                                        },
                                        {
                                            "value":"d"
                                        }
                                    ]
                                }
                            ],
                            null,null,true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"last",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"last",
                                    "caption":"last",
                                    "cells":[
                                        {
                                            "value":"d"
                                        },
                                        {
                                            "value":"d"
                                        },
                                        {
                                            "value":"w"
                                        },
                                        {
                                            "value":"s"
                                        }
                                    ]
                                }
                            ],
                            null,null,false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"b1",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"b row2",
                                    "caption":"b row2",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,"row2",true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"b2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"b last",
                                    "caption":"b last",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,"last",true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"a 1",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"a row2",
                                    "caption":"a row2",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,"row2",false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"a 2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"a first",
                                    "caption":"a first",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,"first",false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"subfirst",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"subfirst",
                                    "cells":[
                                        {
                                            "value":"subfirst"
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            "row2",null,true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"sublast",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"sublast",
                                    "cells":[
                                        {
                                            "value":"sublast"
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            "row2","",false
                        ],
                        "method":"insertRows"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton401")
                .setDesc("Update Item in  TreeView")
                .setLeft("10em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Update Item in TreeView")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            {
                                "caption":"NODE2"
                            }
                        ],
                        "method":"updateItem"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "last",
                            {
                                "caption":"[last]"
                            }
                        ],
                        "method":"updateItem"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton477")
                .setDesc("Update Row in Grid")
                .setLeft("10em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Update Row in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            {
                                "caption":"ROW2"
                            }
                        ],
                        "method":"updateRow"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "first",
                            {
                                "height":80
                            }
                        ],
                        "method":"updateRow"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton478")
                .setDesc("Update Column in Grid")
                .setLeft("10em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Update Column in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "col3",
                            {
                                "caption":"abva",
                                "width":30
                            }
                        ],
                        "method":"updateHeader"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton479")
                .setDesc("Update Cell in Grid")
                .setLeft("0.8333333333333334em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Update Cell in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "1:1",
                            {
                                "value":"1:1"
                            }
                        ],
                        "method":"updateCellByRowCol2"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "0:0",
                            {
                                "value":"0:0"
                            }
                        ],
                        "method":"updateCellByRowCol2"
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton67")
                .setDesc("Toggle Panel")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Toggle Panel")
                .onClick([
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[
                            false,
                            false
                        ],
                        "method":"setToggle"
                    },
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[
                            true,
                            true
                        ],
                        "method":"setToggle",
                        "timeout":500
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton68")
                .setDesc("Toggle TreeView")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Toggle TreeView")
                .onClick([
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            true
                        ],
                        "method":"toggleNode"
                    },
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            false
                        ],
                        "method":"toggleNode",
                        "timeout":800
                    }
                ])
                );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton114")
                .setDesc("Toggle TreeGrid")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setHtml("Toggle TreeGrid")
                .onClick([
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            true
                        ],
                        "method":"toggleRow"
                    },
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            false
                        ],
                        "method":"toggleRow",
                        "timeout":800
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group12")
                .setLeft("15em")
                .setTop("46.666666666666664em")
                .setWidth("53.333333333333336em")
                .setHeight("15.833333333333334em")
                .setOverflow("hidden")
                .setCaption("Pages")
                .setToggleBtn(false)
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane18")
                .setLeft("9.166666666666666em")
                .setTop("0.3333333333333333em")
                .setWidth("28.166666666666668em")
                .setHeight("13.5em")
                .setCustomStyle({
                    "KEY":{
                        "border":"dashed #483D8B 1px",
                        "border-radius":"4px 4px 4px 4px"
                    }
                })
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton108")
                .setDesc("Show Page")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setHtml("Show Page")
                .onClick([
                    {
                        "desc":"action",
                        "type":"page",
                        "target":"App.XUISubPage",
                        "params":[
                            "{page.ctl_pane18}"
                        ],
                        "method":"show"
                    }
                ])
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton43")
                .setDesc("Hide Page")
                .setLeft("38.333333333333336em")
                .setTop("1.6666666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setHtml("Hide Page")
                .onClick([
                    {
                        "desc":"Hide page",
                        "type":"page",
                        "target":"App.XUISubPage",
                        "params":[ ],
                        "method":"hide"
                    }
                ])
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton44")
                .setDesc("Destroy Page")
                .setLeft("38.333333333333336em")
                .setTop("5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setHtml("Destroy Page")
                .onClick([
                    {
                        "desc":"Destroy",
                        "type":"page",
                        "target":"App.XUISubPage",
                        "params":[ ],
                        "method":"destroy"
                    }
                ])
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton45")
                .setDesc("Fill Data")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setHtml("Fill Data")
                .onClick([
                    {
                        "desc":"action",
                        "type":"page",
                        "target":"App.XUISubPage",
                        "params":[
                            "[data]data/data.json"
                        ],
                        "method":"setData"
                    }
                ])
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton47")
                .setDesc("Switch to  another Page")
                .setLeft("46.666666666666664em")
                .setTop("0.8333333333333334em")
                .setWidth("6.166666666666667em")
                .setHeight("12.5em")
                .setHtml("&gt;&gt; <br><br>Switch to<div><br></div><div>another</div><div><br></div><div>Page</div>")
                .onClick([
                    {
                        "desc":"动作1",
                        "type":"page",
                        "target":"App.XUIPage2",
                        "params":[
                            true
                        ],
                        "method":"switch"
                    }
                ])
                );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton1367")
                .setDesc("Fill Profiles")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setHtml("Fill Profiles")
                .onClick([
                    {
                        "desc":"action",
                        "type":"page",
                        "target":"App.XUISubPage",
                        "params":[
                            "[data]data/prfs.json"
                        ],
                        "method":"setProfile"
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group21")
                .setLeft("1.6666666666666667em")
                .setTop("46.666666666666664em")
                .setWidth("11.666666666666666em")
                .setHeight("15.833333333333334em")
                .setCaption("Others")
                .setToggleBtn(false)
                );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton180")
                .setDesc("RPC Call")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setHtml("RPC Call")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"api_1",
                        "params":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"Adjust Data",
                        "type":"other",
                        "target":"var",
                        "params":[
                            "okData2",
                            "{temp.okData}"
                        ],
                        "method":"temp",
                        "adjust":"stringify"
                    },
                    {
                        "desc":"Show result",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "OK",
                            "{temp.okData2}"
                        ],
                        "method":"pop"
                    }
                ])
                );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton125")
                .setDesc("Conditions")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setHtml("Conditions")
                .onClick([
                    {
                        "desc":"=",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "1=1"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"1",
                                "symbol":"=",
                                "right":"1"
                            }
                        ]
                    },
                    {
                        "desc":"!=",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "2!=1"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"2",
                                "symbol":"!=",
                                "right":"1"
                            }
                        ]
                    },
                    {
                        "desc":">",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "2>1"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"2",
                                "symbol":">",
                                "right":"1"
                            }
                        ]
                    },
                    {
                        "desc":"<",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "1<2"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"1",
                                "symbol":"<",
                                "right":"2"
                            }
                        ]
                    },
                    {
                        "desc":"<=",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "2<=3"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"2",
                                "symbol":"<=",
                                "right":"3"
                            }
                        ]
                    },
                    {
                        "desc":">=",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "1>=1"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"1",
                                "symbol":">=",
                                "right":"1"
                            }
                        ]
                    },
                    {
                        "desc":"contains",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "'aa bb cc' contains 'bb'"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"aa bb cc",
                                "symbol":"include",
                                "right":"bb"
                            }
                        ]
                    },
                    {
                        "desc":"doesn't contain",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "'aa dd cc' doesn't contain 'bb'"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"aa dd cc",
                                "symbol":"exclude",
                                "right":"bb"
                            }
                        ]
                    },
                    {
                        "desc":"start with",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "'aa dd cc' starts with 'aa'"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"aa dd cc",
                                "symbol":"start",
                                "right":"aa"
                            }
                        ]
                    },
                    {
                        "desc":"end with",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "'aa dd cc' ends with 'cc'"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"aa dd cc",
                                "symbol":"end",
                                "right":"cc"
                            }
                        ]
                    }
                ])
                );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton210")
                .setDesc("Keyborad Event")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setHtml("Keyborad Event")
                .onHotKeydown([
                    {
                        "desc":"action1",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Key:{args.1.key}<br/>\nCtrl:{args.1.ctrlKey}<br/>\nShift:{args.1.shiftKey}<br/>\nAlt:{args.1.altKey}",
                            "Keyboard Event",
                            200,
                            5000
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"",
                                "symbol":"=",
                                "right":""
                            }
                        ],
                        "event":2
                    }
                ])
                .onClick([ ])
                );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton209")
                .setDesc("Mouse Event")
                .setLeft("0.8333333333333334em")
                .setTop("10.833333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setHtml("Mouse Event")
                .onClick([
                    {
                        "desc":"Mouse",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Mouse Event",
                            "button:{args.1.button}<br/>\npageX:{args.1.pageX}<br/>\npageY:{args.1.pageY}<br/>\n\n<br/><br/>\nCtrl:{args.1.ctrlKey}<br/>\nshiftKey:{args.1.shiftKey}<br/>\nAltKey:{args.1.AltKey}"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"",
                                "symbol":"=",
                                "right":""
                            }
                        ],
                        "event":1
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"ctl_dialog3")
                .setLeft("31.666666666666668em")
                .setTop("0.8333333333333334em")
                .setWidth("36.666666666666664em")
                .setHeight("21.916666666666668em")
                .setCaption("Stop close")
                .beforeClose([
                    {
                        "desc":"stop",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Cancel before event",
                            "Close Event was cancelled!"
                        ],
                        "method":"pop",
                        "return":false
                    }
                ])
                );
            
            host.ctl_dialog3.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"ctl_tabs4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"page1",
                        "image":""
                    },
                    {
                        "id":"b",
                        "caption":"page2",
                        "image":""
                    },
                    {
                        "id":"c",
                        "caption":"page3",
                        "image":""
                    }
                ])
                .setValue("a")
                );
            
            host.ctl_tabs4.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout14")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "min":10,
                        "size":80,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":80
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "cmd":false,
                        "min":10,
                        "size":80,
                        "locked":false,
                        "folded":false,
                        "hidden":false
                    }
                ])
                .setType("horizontal")
                , "a");
            
            host.ctl_layout14.append(
                xui.create("xui.UI.Image")
                .setHost(host,"ctl_image103")
                .setLeft("5em")
                .setTop("5.833333333333333em")
                .setWidth("11.666666666666666em")
                .setHeight("3.3333333333333335em")
                .setSrc("https://www.crossui.com/img/logo.png")
                , "main");
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel8")
                .setSpaceUnit("px")
                .setLeft("10px")
                .setTop("12px")
                .setWidth("334px")
                .setHeight("47px")
                .setCaption("UI Interaction<br>Without Code")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY":{
                        "color":"#4B0082",
                        "font-family":"comic sans ms,cursive",
                        "font-size":"2em",
                        "font-weight":"bold",
                        "text-shadow":"0px 0px 9px #DA70D6",
                        "opacity":0.8
                    }
                })
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton163")
                .setDesc("Insert Items to Tabs")
                .setLeft("31.666666666666668em")
                .setTop("23.666666666666668em")
                .setWidth("8.5em")
                .setHeight("3em")
                .setHtml("Insert Items to Tabs")
                .onClick([
                    {
                        "desc":"first",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"first",
                                    "caption":"first"
                                }
                            ],
                            "",true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"last",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"last",
                                    "caption":"last"
                                }
                            ],
                            "",false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"before 1",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"b0",
                                    "caption":"b-page2"
                                }
                            ],
                            "b",true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"before 2",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"b2",
                                    "caption":"b-last"
                                }
                            ],
                            "last",true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"after 1",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"a1",
                                    "caption":"a-page2"
                                }
                            ],
                            "b",false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"after 2",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            [
                                {
                                    "id":"a2",
                                    "caption":"a-last"
                                }
                            ],
                            "last",false
                        ],
                        "method":"insertItems"
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton213")
                .setDesc("Update Item in Tabsd")
                .setLeft("40.833333333333336em")
                .setTop("23.666666666666668em")
                .setWidth("8.5em")
                .setHeight("3em")
                .setHtml("Update Item in Tabs")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "a",
                            {
                                "caption":"[page1]",
                                "image":"{/}img/box.png"
                            }
                        ],
                        "method":"updateItem"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "last",
                            {
                                "caption":"[last one]"
                            }
                        ],
                        "method":"updateItem"
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton1179")
                .setDesc("Remove Items  in Tabs")
                .setLeft("50em")
                .setTop("23.666666666666668em")
                .setWidth("8.5em")
                .setHeight("3em")
                .setHtml("Remove Items  in Tabs")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "c"
                        ],
                        "method":"removeItems"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "first"
                        ],
                        "method":"removeItems"
                    }
                ])
                );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton1473")
                .setDesc("Remove Items  in Tabs")
                .setLeft("59.166666666666664em")
                .setTop("23.666666666666668em")
                .setWidth("8.5em")
                .setHeight("3em")
                .setHtml("Select Tab")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "b"
                        ],
                        "method":"fireItemClickEvent"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_tabs4",
                        "params":[
                            "a"
                        ],
                        "method":"fireItemClickEvent",
                        "timeout":1000
                    }
                ])
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});