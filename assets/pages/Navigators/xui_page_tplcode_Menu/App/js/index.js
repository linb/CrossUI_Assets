xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"popmenu1")
                .setItems([
                    {
                        "id":"itema",
                        "caption":"itema",
                        "image":"{/}img/App.gif",
                        "imagePos":"-32px top",
                        "tips":"item a"
                    },
                    {
                        "id":"ce",
                        "caption":"ce",
                        "type":"split"
                    },
                    {
                        "id":"itemb",
                        "caption":"itemb",
                        "type":"checkbox",
                        "value":true,
                        "tips":"item b"
                    },
                    {
                        "id":"itemc",
                        "caption":"itemc",
                        "type":"checkbox",
                        "tips":"item c"
                    },
                    {
                        "id":"itemd",
                        "caption":"itemd",
                        "tips":"item d"
                    },
                    {
                        "id":"iteme",
                        "caption":"iteme",
                        "type":"radiobox",
                        "value":true,
                        "tips":"item e"
                    },
                    {
                        "id":"itemf",
                        "caption":"itemf",
                        "type":"radiobox",
                        "tips":"item f"
                    }
                ])
                .setShadow(false)
                .onMenuSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].caption} was selected",
                            "msg"
                        ],
                        "method":"message"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"popmenu2")
                .setItems([
                    {
                        "id":"itema",
                        "caption":"itema",
                        "image":"{/}img/App.gif",
                        "imagePos":"-32px top",
                        "tips":"item a"
                    },
                    {
                        "id":"itemb",
                        "caption":"itemb",
                        "tips":"item b",
                        "sub":[
                            {
                                "id":"itema1",
                                "caption":"itema",
                                "tips":"item a"
                            },
                            {
                                "id":"itemb1",
                                "caption":"itemb",
                                "tips":"item b",
                                "sub":[
                                    {
                                        "id":"itemc11",
                                        "caption":"itemc",
                                        "tips":"item c"
                                    },
                                    {
                                        "id":"itemd11",
                                        "caption":"itemd",
                                        "tips":"item d"
                                    }
                                ]
                            },
                            {
                                "id":"itemc1",
                                "caption":"itemc",
                                "tips":"item c"
                            },
                            {
                                "id":"itemd1",
                                "caption":"itemd",
                                "tips":"item d",
                                "sub":[
                                    {
                                        "id":"itemc11",
                                        "caption":"itemc",
                                        "tips":"item c"
                                    },
                                    {
                                        "id":"itemd11",
                                        "caption":"itemd",
                                        "tips":"item d"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"itemc",
                        "caption":"itemc",
                        "tips":"item c"
                    },
                    {
                        "id":"itemd",
                        "caption":"itemd",
                        "tips":"item d"
                    },
                    {
                        "id":"iteme",
                        "caption":"iteme"
                    },
                    {
                        "id":"itemf",
                        "caption":"itemf"
                    },
                    {
                        "id":"itemg",
                        "caption":"itemg"
                    },
                    {
                        "id":"itemh",
                        "caption":"itemh"
                    },
                    {
                        "id":"itemi",
                        "caption":"itemi"
                    },
                    {
                        "id":"itemj",
                        "caption":"itemj"
                    },
                    {
                        "id":"itemk",
                        "caption":"itemk"
                    },
                    {
                        "id":"iteml",
                        "caption":"iteml"
                    },
                    {
                        "id":"itemm",
                        "caption":"itemm"
                    },
                    {
                        "id":"itemn",
                        "caption":"itemn"
                    },
                    {
                        "id":"itemo",
                        "caption":"itemo"
                    },
                    {
                        "id":"itemp",
                        "caption":"itemp"
                    }
                ])
                .onMenuSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].caption} was selected",
                            "msg"
                        ],
                        "method":"message"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setLeft("3.3333333333333335em")
                .setTop("1.6666666666666667em")
                .setWidth("43.333333333333336em")
                .setResizer(true)
                .setBorderType("inset")
            );
            
            host.block1.append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"menubar1")
                .setItems([
                    {
                        "id":"file",
                        "caption":"File",
                        "sub":[
                            {
                                "id":"newproject",
                                "caption":"New Project",
                                "image":"{/}img/App.gif",
                                "imagePos":"-32px top"
                            },
                            {
                                "id":"openproject",
                                "caption":"Open Project",
                                "add":"Ctrl+Alt+O",
                                "image":"{/}img/App.gif",
                                "imagePos":"-48px top"
                            },
                            {
                                "id":"closeproject",
                                "caption":"Close Project"
                            },
                            {
                                "id":"s11",
                                "type":"split"
                            },
                            {
                                "id":"save",
                                "caption":"Save",
                                "image":"{/}img/App.gif",
                                "imagePos":"-80px top"
                            },
                            {
                                "id":"saveall",
                                "caption":"Save All",
                                "add":"Ctrl+Alt+S",
                                "image":"{/}img/App.gif",
                                "imagePos":"-96px top"
                            }
                        ]
                    },
                    {
                        "id":"tools",
                        "caption":"Tools",
                        "sub":[
                            {
                                "id":"command",
                                "caption":"Command Window",
                                "image":"{/}img/App.gif",
                                "imagePos":"-112px top"
                            },
                            {
                                "id":"spy",
                                "caption":"Components Spy",
                                "image":"{/}img/App.gif",
                                "imagePos":"-128px top"
                            }
                        ]
                    },
                    {
                        "id":"build",
                        "caption":"Build",
                        "sub":[
                            {
                                "id":"debug",
                                "caption":"Debug",
                                "add":"F9",
                                "image":"{/}img/App.gif",
                                "imagePos":"top left"
                            },
                            {
                                "id":"release",
                                "caption":"Release",
                                "add":"Ctrl+F9",
                                "image":"{/}img/App.gif",
                                "imagePos":"-64px top"
                            },
                            {
                                "id":"s31",
                                "type":"split"
                            },
                            {
                                "id":"setting",
                                "caption":"Build Setting"
                            }
                        ]
                    },
                    {
                        "id":"help",
                        "caption":"Help",
                        "sub":[
                            {
                                "id":"Forum",
                                "caption":"forum"
                            },
                            {
                                "id":"s41",
                                "type":"split"
                            },
                            {
                                "id":"License",
                                "caption":"License"
                            },
                            {
                                "id":"s42",
                                "type":"split"
                            },
                            {
                                "id":"about",
                                "caption":"About"
                            }
                        ]
                    },
                    {
                        "id":"tips",
                        "caption":"[Click to pop menu]",
                        "disabled":true
                    }
                ])
                .setAutoShowTime(0)
                .onMenuSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[2].caption} was selected",
                            "msg"
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button3")
                .setLeft("30em")
                .setTop("5em")
                .setCaption("Pop Menu3")
                .onClick([
                    {
                        "desc":"act 1",
                        "type":"control",
                        "target":"popmenu1",
                        "args":[
                            "{page.popmenu1.pop()}",
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
                );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button2")
                .setLeft("15.833333333333334em")
                .setTop("5em")
                .setCaption("Pop menu2")
                .onClick([
                    {
                        "desc":"act 1",
                        "type":"control",
                        "target":"popmenu2",
                        "args":[
                            "{page.popmenu2.pop()}",
                            undefined,
                            undefined,
                            "{args[0]}",
                            "outerleft-outertop"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
                );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"button1")
                .setLeft("2.5em")
                .setTop("5em")
                .setCaption("Pop menu 1")
                .onClick([
                    {
                        "desc":"act",
                        "type":"control",
                        "target":"popmenu1",
                        "args":[
                            "{page.popmenu1.pop()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
                );
            
            host.block1.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"ctl_toolbar13")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"a1",
                                "caption":"button"
                            },
                            {
                                "id":"a2",
                                "type":"split"
                            },
                            {
                                "id":"a3",
                                "caption":"drop button",
                                "type":"dropButton"
                            },
                            {
                                "id":"a4",
                                "caption":"status button",
                                "type":"statusButton"
                            }
                        ],
                        "caption":"grp1"
                    },
                    {
                        "id":"grp2",
                        "sub":[
                            {
                                "id":"b1",
                                "caption":"",
                                "image":"{/}img/App.gif",
                                "imagePos":"-32px top"
                            },
                            {
                                "id":"b2",
                                "caption":"image button",
                                "label":"label:",
                                "image":"{/}img/App.gif",
                                "imagePos":"-32px -16px"
                            }
                        ],
                        "caption":"grp2"
                    }
                ])
                .onClick([
                    {
                        "desc":"act",
                        "type":"control",
                        "target":"popmenu1",
                        "args":[
                            "{page.popmenu1.pop()}",
                            undefined,
                            undefined,
                            "{args[4]}"
                        ],
                        "method":"popUp",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"a3"
                            }
                        ],
                        "redirection":"other:callback:call",
                        "event":3
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block26")
                .setLeft("3.3333333333333335em")
                .setTop("13.333333333333334em")
                .setWidth("43.333333333333336em")
                .setResizer(true)
                .setBorderType("inset")
            );
            
            host.block26.append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"menubar5")
                .setItems([
                    {
                        "id":"file",
                        "caption":"File",
                        "sub":[
                            {
                                "id":"newproject",
                                "caption":"New Project",
                                "image":"{/}img/App.gif",
                                "imagePos":"-32px top"
                            },
                            {
                                "id":"openproject",
                                "caption":"Open Project",
                                "add":"Ctrl+Alt+O",
                                "image":"{/}img/App.gif",
                                "imagePos":"-48px top"
                            },
                            {
                                "id":"closeproject",
                                "caption":"Close Project"
                            },
                            {
                                "id":"s11",
                                "type":"split"
                            },
                            {
                                "id":"save",
                                "caption":"Save",
                                "image":"{/}img/App.gif",
                                "imagePos":"-80px top"
                            },
                            {
                                "id":"saveall",
                                "caption":"Save All",
                                "add":"Ctrl+Alt+S",
                                "image":"{/}img/App.gif",
                                "imagePos":"-96px top"
                            }
                        ]
                    },
                    {
                        "id":"tools",
                        "caption":"Tools",
                        "sub":[
                            {
                                "id":"command",
                                "caption":"Command Window",
                                "image":"{/}img/App.gif",
                                "imagePos":"-112px top"
                            },
                            {
                                "id":"spy",
                                "caption":"Components Spy",
                                "image":"{/}img/App.gif",
                                "imagePos":"-128px top"
                            }
                        ]
                    },
                    {
                        "id":"build",
                        "caption":"Build",
                        "sub":[
                            {
                                "id":"debug",
                                "caption":"Debug",
                                "add":"F9",
                                "image":"{/}img/App.gif",
                                "imagePos":"top left"
                            },
                            {
                                "id":"release",
                                "caption":"Release",
                                "add":"Ctrl+F9",
                                "image":"{/}img/App.gif",
                                "imagePos":"-64px top"
                            },
                            {
                                "id":"s31",
                                "type":"split"
                            },
                            {
                                "id":"setting",
                                "caption":"Build Setting"
                            }
                        ]
                    },
                    {
                        "id":"help",
                        "caption":"Help",
                        "sub":[
                            {
                                "id":"Forum",
                                "caption":"forum"
                            },
                            {
                                "id":"s41",
                                "type":"split"
                            },
                            {
                                "id":"License",
                                "caption":"License"
                            },
                            {
                                "id":"s42",
                                "type":"split"
                            },
                            {
                                "id":"about",
                                "caption":"About"
                            }
                        ]
                    },
                    {
                        "id":"tips",
                        "caption":"[Hover to pop menu]",
                        "disabled":true
                    }
                ])
                .onMenuSelected("_menubar1_onmenuselected")
                );
            
            host.block26.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button22")
                .setHoverPop("popmenu2")
                .setLeft("30em")
                .setTop("5em")
                .setCaption("Pop Menu3")
                );
            
            host.block26.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button23")
                .setHoverPop("popmenu1")
                .setLeft("15.833333333333334em")
                .setTop("5em")
                .setCaption("Pop menu2")
                );
            
            host.block26.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_button24")
                .setHoverPop("popmenu1")
                .setLeft("2.5em")
                .setTop("5em")
                .setCaption("Pop menu 1")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});