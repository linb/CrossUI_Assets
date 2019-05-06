xui.Class('App', 'xui.Module',{
    Instance:{
        _treebar1_onitemselected:function (profile, item, src) {
            var value=profile.boxing().getUIValue();
            //for selMode='none'
            if(!value)value=item.id;
            xui.message(value + ' selected');
        },
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"panel2")
                .setLeft("23.333333333333332em")
                .setTop("10.833333333333334em")
                .setWidth("17.5em")
                .setHeight("16.666666666666668em")
            );
            
            host.panel2.append(
                xui.create("xui.UI.TreeBar")
                .setHost(host,"treebar3")
                .setItems([
                    {
                        "id":"a",
                        "caption":"itema",
                        "tips":"item a",
                        "sub":[
                            {
                                "id":"aa",
                                "caption":"suba"
                            },
                            {
                                "id":"ab",
                                "caption":"subb"
                            }
                        ]
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
                    },
                    {
                        "id":"d",
                        "caption":"itemd",
                        "tips":"item d",
                        "group":true,
                        "iniFold":true,
                        "sub":[
                            {
                                "id":"da",
                                "caption":"suba"
                            },
                            {
                                "id":"db",
                                "caption":"subb"
                            },
                            {
                                "id":"dc",
                                "caption":"subc"
                            }
                        ]
                    }
                ])
                .setTabindex("5")
                .setIniFold(false)
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"panel3")
                .setLeft("23.333333333333332em")
                .setTop("30.833333333333332em")
                .setWidth("17.5em")
                .setHeight("8.333333333333334em")
            );
            
            host.panel3.append(
                xui.create("xui.UI.TreeBar")
                .setHost(host,"treebar5")
                .setItems([
                    {
                        "id":"a",
                        "caption":"itema",
                        "tips":"item a",
                        "sub":[
                            {
                                "id":"aa",
                                "caption":"suba"
                            },
                            {
                                "id":"ab",
                                "caption":"subb"
                            }
                        ]
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
                    }
                ])
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"panel1")
                .setLeft("23.333333333333332em")
                .setTop("0.8333333333333334em")
                .setWidth("17.5em")
            );
            
            host.panel1.append(
                xui.create("xui.UI.TreeBar")
                .setHost(host,"treebar1")
                .setItems([
                    {
                        "id":"a",
                        "caption":"itema",
                        "tips":"item a",
                        "sub":[
                            {
                                "id":"aa",
                                "caption":"suba"
                            },
                            {
                                "id":"ab",
                                "caption":"subb"
                            }
                        ]
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
                    }
                ])
                .setSelMode("none")
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel3")
                .setDock("none")
                .setLeft("43.333333333333336em")
                .setTop("0.8333333333333334em")
                .setWidth("21.666666666666668em")
                .setHeight("29.166666666666668em")
                .setCaption("TreeView Demo")
            );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"ctl_treeview1")
                .setItems([
                    {
                        "id":"folder1",
                        "caption":"folder1",
                        "image":"{/}img/application_split.png",
                        "sub":true
                    },
                    {
                        "id":"folder2",
                        "caption":"folder2",
                        "sub":true
                    },
                    {
                        "id":"file1",
                        "caption":"file1"
                    }
                ])
                .setDropKeys("hihi")
                .setDragKey("hihi")
                .onGetContent({
                    "return":"{temp.getItems()}",
                    "actions":[
                        {
                            "desc":"make items",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "getItems",
                                function anonymous(
                                /*``*/
                                ){
                                    var id="item_"+xui.id();
                                    return[
                                        {
                                            id:"file_1_"+id,
                                            caption:'file_1_'+id,
                                            image:"{/}img/application_split.png"
                                        },
                                        {
                                            id:"file_2_"+id,
                                            caption:'file_2_'+id,
                                            image:"{/}img/application_split.png"
                                        },
                                        {
                                            id:id+"_1",
                                            caption:id+"_1",
                                            sub:true
                                        },
                                        {
                                            id:id+"_2",
                                            caption:id+"_2",
                                            sub:true,
                                            image:"{/}img/application_split.png"
                                        },
                                        {
                                            id:id+"_3",
                                            caption:id+"_3",
                                            sub:true
                                        }
                                    ]
                                    ;
                                }
                            ],
                            "method":"temp"
                        }
                    ]
                })
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                .afterFold([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "{args[1].id} is folded"
                        ],
                        "method":"message"
                    }
                ])
                .afterExpand([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "{args[1].id} is expanded"
                        ],
                        "method":"message"
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("20.833333333333332em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.TreeBar")
                .setHost(host,"treebar2")
                .setItems([
                    {
                        "id":"a",
                        "caption":"itema",
                        "tips":"item a",
                        "sub":[
                            {
                                "id":"aa",
                                "caption":"suba"
                            },
                            {
                                "id":"ab",
                                "caption":"subb"
                            }
                        ]
                    },
                    {
                        "id":"b",
                        "caption":"itemb",
                        "image":"{/}img/application_split.png",
                        "tips":"item b"
                    },
                    {
                        "id":"c",
                        "caption":"itemc",
                        "tips":"item c"
                    }
                ])
                .setGroup(true)
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setLeft("0.8333333333333334em")
                .setTop("16.666666666666668em")
                .setWidth("20.833333333333332em")
                .setHeight("13.333333333333334em")
                .setResizer(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.TreeBar")
                .setHost(host,"treebar4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"itema",
                        "tips":"item a",
                        "sub":[
                            {
                                "id":"aa",
                                "caption":"suba"
                            },
                            {
                                "id":"ab",
                                "caption":"subb"
                            }
                        ]
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
                    }
                ])
                .setSelMode("multi")
                .setValue("")
                .onItemSelected([
                    {
                        "desc":"act",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "{args[1].id} is selected"
                        ],
                        "method":"message",
                        "event":2
                    }
                ])
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});