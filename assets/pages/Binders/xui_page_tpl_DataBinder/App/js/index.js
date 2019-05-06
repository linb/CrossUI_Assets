xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"databinder_1")
                .setName("databinder_1")
                .setData({
                    "ctl_input1":"",
                    "ctl_comboinput2":"",
                    "ctl_input9":"",
                    "Name":"",
                    "Gender":"",
                    "Memo":""
                })
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel3")
                .setDock("none")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("50.833333333333336em")
                .setHeight("37.5em")
                .setOverflow("hidden")
                .setCaption("DataBinder OverView")
                .setCustomStyle({
                    "PANEL":"background-color:#fff;"
                })
            );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group1")
                .setLeft("2em")
                .setTop("2.75em")
                .setWidth("35.333333333333336em")
                .setHeight("12.5em")
                .setCaption("The bound UI controls ( Optional )")
                .setToggleBtn(false)
                .setCustomStyle({
                    "KEY":{
                        "font-weight":"bold"
                    }
                })
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input1")
                .setDataBinder("databinder_1")
                .setDataField("Name")
                .setRequired(true)
                .setLeft("0.25em")
                .setTop("0.8333333333333334em")
                .setWidth("15.583333333333334em")
                .setLabelSize("6.666666666666667em")
                .setLabelCaption("Name")
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ctl_comboinput2")
                .setDataBinder("databinder_1")
                .setDataField("Gender")
                .setLeft("16.916666666666668em")
                .setTop("0.8333333333333334em")
                .setWidth("15.5em")
                .setLabelSize("6.666666666666667em")
                .setLabelCaption("Gender")
                .setType("listbox")
                .setItems([
                    {
                        "id":"male",
                        "caption":"Male"
                    },
                    {
                        "id":"female",
                        "caption":"Female"
                    }
                ])
                );
            
            host.ctl_group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ctl_input9")
                .setDataBinder("databinder_1")
                .setDataField("Memo")
                .setLeft("0.25em")
                .setTop("3.3333333333333335em")
                .setWidth("32.166666666666664em")
                .setHeight("6.333333333333333em")
                .setLabelSize("6.666666666666667em")
                .setLabelCaption("Memo")
                .setMultiLines(true)
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"ctl_svgpaper1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("48.166666666666664em")
                .setHeight("33.25em")
                .setZIndex(0)
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_updateValue")
                .setLeft("38.333333333333336em")
                .setTop("7.583333333333333em")
                .setWidth("7.833333333333333em")
                .setCaption("updateValue")
                .onClick([
                    {
                        "desc":"update value",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[ ],
                        "method":"updateValue",
                        "event":1
                    },
                    {
                        "desc":"message",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Values are updated and reflected onto UI.",
                            "Updated",
                            200,
                            5000
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_checkValue")
                .setLeft("38.333333333333336em")
                .setTop("12.916666666666666em")
                .setWidth("7.833333333333333em")
                .setCaption("checkValid")
                .onClick([
                    {
                        "desc":"valid",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "All inputs is valid!",
                            ""
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.databinder_1.checkValid()}",
                                "symbol":"=",
                                "right":"{true}"
                            }
                        ],
                        "event":1
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_getDirtied")
                .setLeft("38.333333333333336em")
                .setTop("10.166666666666666em")
                .setWidth("7.833333333333333em")
                .setCaption("getDirtied")
                .onClick([
                    {
                        "desc":"dirty",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "There's field is dirtied",
                            "Dirty"
                        ],
                        "method":"message",
                        "event":1,
                        "conditions":[
                            {
                                "left":"{page.databinder_1.isDirtied()}",
                                "symbol":"=",
                                "right":"{true}"
                            }
                        ],
                        "return":false
                    },
                    {
                        "desc":"no-dirty",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "No dirty",
                            "There's no field is dirtied"
                        ],
                        "method":"pop"
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Span")
                .setHost(host,"ctl_span39")
                .setLeft("5.5em")
                .setTop("26.666666666666668em")
                .setWidth("8.333333333333334em")
                .setHeight("1.6666666666666667em")
                .setHtml("onData / onError")
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_sbutton31")
                .setLeft("38.333333333333336em")
                .setTop("15.5em")
                .setWidth("7.833333333333333em")
                .setCaption("checkRequired")
                .onClick([
                    {
                        "desc":"check",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "",
                            "All required fields are filled"
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.databinder_1.checkRequired()}",
                                "symbol":"=",
                                "right":"{true}"
                            }
                        ],
                        "event":1
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button35")
                .setLeft("38.25em")
                .setTop("2.75em")
                .setWidth("7.833333333333333em")
                .setCaption("clearValue")
                .onClick([
                    {
                        "desc":"clear value",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[ ],
                        "method":"clearValue",
                        "event":1
                    },
                    {
                        "desc":"message",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Cleared",
                            "Cleared",
                            200,
                            5000
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button36")
                .setLeft("38.25em")
                .setTop("5.166666666666667em")
                .setWidth("7.833333333333333em")
                .setCaption("resetValue")
                .onClick([
                    {
                        "desc":"reset value",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[ ],
                        "method":"resetValue",
                        "event":1
                    },
                    {
                        "desc":"message",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Values are Resetted",
                            "Resetted",
                            200,
                            5000
                        ],
                        "method":"message"
                    }
                ])
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.rect")
                .setHost(host,"ctl_rect2")
                .setSvgTag("Shapes:Rect")
                .setAttr({
                    "x":30,
                    "y":220,
                    "width":529,
                    "height":154,
                    "stroke":"#004A7F",
                    "fill":"#ffffff"
                })
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"ctl_path1")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,12,290C,12,290,170.2898677998985,290,170.2898677998985,290",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "arrow-end":"open-narrow-short",
                    "arrow-start":"oval-midium-midium"
                })
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"ctl_path3")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,420.80304253023,290C,420.80304253023,290,572.0786063783031,290,572.0786063783031,290",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "arrow-end":"open-narrow-short",
                    "arrow-start":"oval-midium-midium"
                })
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"ctl_path4")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,180.4408244542666,249.63778465247472C,180.4408244542666,249.63778465247472,180.4408244542666,181.89378969922194,180.4408244542666,181.89378969922194",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "arrow-end":"open-narrow-short",
                    "arrow-start":"oval-midium-midium"
                })
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"ctl_path5")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,400.4408244542666,180.81209223601164C,400.4408244542666,180.81209223601164,400.4408244542666,251.69117549432602,400.4408244542666,251.69117549432602",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "arrow-end":"open-narrow-short",
                    "arrow-start":"oval-midium-midium"
                })
                );
            
            host.ctl_svgpaper1.append(
                xui.create("xui.svg.rect")
                .setHost(host,"ctl_rect4")
                .setSvgTag("Shapes:Rect")
                .setAttr({
                    "x":456,
                    "y":26,
                    "width":103,
                    "height":194,
                    "stroke":"#004A7F",
                    "fill":"#ffffff"
                })
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_updateDataToUI")
                .setLeft("10.666666666666666em")
                .setTop("17.25em")
                .setCaption("updateDataToUI")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[ ],
                        "method":"updateDataToUI",
                        "event":1
                    }
                ])
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_updateDataFromUI")
                .setLeft("28.166666666666668em")
                .setTop("17.25em")
                .setCaption("updateDataFromUI")
                .onClick([
                    {
                        "desc":"reflect data",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[ ],
                        "method":"updateDataFromUI",
                        "event":1
                    },
                    {
                        "desc":"make data",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "data",
                            "{page.databinder_1.getData()}"
                        ],
                        "method":"temp",
                        "event":1
                    },
                    {
                        "desc":"stringify",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "data2",
                            "{temp.data}"
                        ],
                        "method":"temp",
                        "adjust":"stringify"
                    },
                    {
                        "desc":"set to input",
                        "type":"control",
                        "target":"innerData",
                        "args":[
                            "{page.innerData.setUIValue()}",
                            undefined,
                            undefined,
                            "{temp.data2}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_getData")
                .setLeft("39.083333333333336em")
                .setTop("23.166666666666668em")
                .setHeight("2em")
                .setCaption("getData")
                .onClick([
                    {
                        "desc":"data",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "data",
                            "{page.databinder_1.getData()}"
                        ],
                        "method":"temp",
                        "adjust":"stringify",
                        "event":1
                    },
                    {
                        "desc":"msg",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Values in DataBinder",
                            "{temp.data}"
                        ],
                        "method":"pop"
                    }
                ])
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_setData")
                .setLeft("4.25em")
                .setTop("23.166666666666668em")
                .setCaption("setData")
                .onClick([
                    {
                        "desc":"make data",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "data",
                            {
                                "Name":"Jack Lee - lyb",
                                "Gender":"male",
                                "Memo":"The author of CrossUI Framework"
                            }
                        ],
                        "method":"temp",
                        "event":1
                    },
                    {
                        "desc":"set binder",
                        "type":"control",
                        "target":"databinder_1",
                        "args":[
                            "{page.databinder_1.setData()}",
                            undefined,
                            undefined,
                            "{temp.data}"
                        ],
                        "method":"setData",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"strigify",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "data2",
                            "{temp.data}"
                        ],
                        "method":"temp",
                        "adjust":"stringify"
                    },
                    {
                        "desc":"set to textarea",
                        "type":"control",
                        "target":"innerData",
                        "args":[
                            "{page.innerData.setUIValue()}",
                            undefined,
                            undefined,
                            "{temp.data2}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"innerData")
                .setReadonly(true)
                .setShowDirtyMark(false)
                .setLeft("14em")
                .setTop("20.666666666666668em")
                .setWidth("20.833333333333332em")
                .setHeight("7.75em")
                .setMultiLines(true)
                );
            
            host.ctl_panel3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel7")
                .setLeft("22.916666666666668em")
                .setTop("19.583333333333332em")
                .setCaption("Inner Data")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});