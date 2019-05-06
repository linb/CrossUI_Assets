xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group1")
                .setLeft(30)
                .setTop(290)
                .setWidth(680)
                .setHeight(140)
                .setCaption("Number & Currency")
                .setToggleBtn(false)
            );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label37")
                .setLeft(320)
                .setTop(31)
                .setWidth(104)
                .setCaption("US currency")
                );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label38")
                .setLeft(320)
                .setTop(61)
                .setWidth(104)
                .setCaption("Germany currency")
                );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label39")
                .setLeft(320)
                .setTop(91)
                .setWidth(104)
                .setCaption("Sweden currency")
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput23")
                .setLeft(440)
                .setTop(30)
                .setLabelCaption("ctl_comboinput23")
                .setType("currency")
                .setValue(12345.67)
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput25")
                .setLeft(440)
                .setTop(60)
                .setLabelCaption("ctl_comboinput23")
                .setType("currency")
                .setGroupingSeparator(".")
                .setDecimalSeparator(",")
                .setCurrencyTpl("DEM *")
                .setValue(12345.67)
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput26")
                .setLeft(440)
                .setTop(90)
                .setLabelCaption("ctl_comboinput23")
                .setType("currency")
                .setGroupingSeparator(" ")
                .setCurrencyTpl("SEK *")
                .setValue(12345.67)
                );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label41")
                .setLeft(10)
                .setTop(31)
                .setWidth(104)
                .setCaption("US number")
                );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label42")
                .setLeft(10)
                .setTop(61)
                .setWidth(104)
                .setCaption("Germany number")
                );

            host.ctl_group1.append(
                (new xui.UI.Label())
                .setHost(host,"ctl_label43")
                .setLeft(10)
                .setTop(91)
                .setWidth(104)
                .setCaption("Sweden number")
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput28")
                .setLeft(130)
                .setTop(30)
                .setLabelCaption("ctl_comboinput23")
                .setType("number")
                .setValue(12345.67)
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput29")
                .setLeft(130)
                .setTop(60)
                .setLabelCaption("ctl_comboinput23")
                .setType("number")
                .setGroupingSeparator(".")
                .setDecimalSeparator(",")
                .setCurrencyTpl("DEM *")
                .setValue(12345.67)
                );

            host.ctl_group1.append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput30")
                .setLeft(130)
                .setTop(90)
                .setLabelCaption("ctl_comboinput23")
                .setType("number")
                .setGroupingSeparator(" ")
                .setCurrencyTpl("SEK *")
                .setValue(12345.67)
                );

            append(
                (new xui.UI.Label())
                .setHost(host,"label6")
                .setLeft(44)
                .setTop(200)
                .setWidth(104)
                .setCaption("ongetshowvalue")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label11")
                .setLeft(20)
                .setTop(66)
                .setWidth(136)
                .setHeight(52)
                .setCaption("combobox (textarea)")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label3")
                .setLeft(320)
                .setTop(110)
                .setWidth(104)
                .setCaption("getter")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label2")
                .setLeft(20)
                .setTop(144)
                .setWidth(136)
                .setCaption("combobox (integer only)")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label12")
                .setLeft(320)
                .setTop(80)
                .setWidth(104)
                .setCaption("listbox(disabled)")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label5")
                .setLeft(320)
                .setTop(140)
                .setWidth(104)
                .setCaption("pop box")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label1")
                .setLeft(52)
                .setTop(16)
                .setWidth(104)
                .setCaption("combobox")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label10")
                .setLeft(320)
                .setTop(48)
                .setWidth(104)
                .setCaption("helfinput")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label9")
                .setLeft(304)
                .setTop(19)
                .setCaption("listbox(shadow/resizer)")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label4")
                .setLeft(44)
                .setTop(170)
                .setWidth(104)
                .setCaption("command box")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label44")
                .setLeft(44)
                .setTop(230)
                .setWidth(104)
                .setCaption("time ")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label45")
                .setLeft(44)
                .setTop(260)
                .setWidth(104)
                .setCaption("color ")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label46")
                .setLeft(320)
                .setTop(200)
                .setWidth(104)
                .setCaption("date ")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label47")
                .setLeft(320)
                .setTop(260)
                .setWidth(104)
                .setCaption("uploader")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label48")
                .setLeft(320)
                .setTop(170)
                .setWidth(104)
                .setCaption("with save button")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label21")
                .setLeft(320)
                .setTop(230)
                .setWidth(104)
                .setCaption("spin")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput4")
                .setLeft(160)
                .setTop(16)
                .setLabelCaption("comboinput4")
                .setItems([{
                    "id" : "value1",
                    "caption" : "value1"
                },{
                    "id" : "value2",
                    "caption" : "value2"
                }])
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput11")
                .setDock("bottom")
                .setLabelCaption("comboinput11")
                .setItems([{
                    "id" : "itema",
                    "caption" : "itema",
                    "tips" : "item a"
                },{
                    "id" : "itemb",
                    "caption" : "itemb",
                    "tips" : "item b"
                },{
                    "id" : "itemc",
                    "caption" : "itemc",
                    "tips" : "item c"
                },{
                    "id" : "itemd",
                    "caption" : "itemd",
                    "tips" : "item d"
                }])
                .setValue("dock:bottom")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput9")
                .setDisabled(true)
                .setLeft(430)
                .setTop(80)
                .setLabelCaption("comboinput9")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput7")
                .setLeft(430)
                .setTop(48)
                .setTabindex("10")
                .setLabelCaption("comboinput7")
                .setType("helpinput")
                .setItems([{
                    "id" : "value1",
                    "caption" : "caption1"
                },{
                    "id" : "value2",
                    "caption" : "caption2"
                },{
                    "id" : "value3",
                    "caption" : "caption3"
                }])
                .setCommandBtn("save")
                .onCommand("_comboinput28_onsave")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput13")
                .setLeft(430)
                .setTop(110)
                .setTabindex("11")
                .setLabelCaption("comboinput13")
                .setType("getter")
                .setCommandBtn("save")
                .beforeComboPop("_comboinput13_beforeComboPop")
                .onClick([{
                    "desc" : "action1",
                    "type" : "control",
                    "target" : "comboinput13",
                    "params" : [{
                        "value" : "result"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput152")
                .setLeft(430)
                .setTop(140)
                .setTabindex("12")
                .setLabelCaption("comboinput15")
                .setType("popbox")
                .setCommandBtn("save")
                .onCommand("_comboinput28_onsave")
                .beforeComboPop("_comboinput14_beforeComboPop")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput28")
                .setLeft(430)
                .setTop(170)
                .setTabindex("13")
                .setLabelCaption("comboinput28")
                .setType("none")
                .setCommandBtn("save")
                .onCommand([{
                    "desc" : "action1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : [null,"You clicked save  command button",200,5000],
                    "method" : "message"
                }])
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput35")
                .setLeft(430)
                .setTop(200)
                .setTabindex("14")
                .setLabelCaption("comboinput35")
                .setType("date")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput26")
                .setLeft(430)
                .setTop(230)
                .setTabindex("15")
                .setLabelCaption("comboinput26")
                .setType("spin")
                .setValue(0)
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput41")
                .setLeft(430)
                .setTop(260)
                .setWidth(240)
                .setTabindex("16")
                .setLabelCaption("comboinput41")
                .setType("file")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput8")
                .setLeft(160)
                .setTop(50)
                .setHeight(80)
                .setTabindex("3")
                .setLabelCaption("comboinput8")
                .setMultiLines(true)
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput12")
                .setTips("input integer only")
                .setLeft(160)
                .setTop(140)
                .setTabindex("4")
                .setTipsErr("Format error")
                .setLabelCaption("comboinput12")
                .setValueFormat("^-?\\d\\d*$")
                .setItems([{
                    "id" : "1",
                    "caption" : "1"
                },{
                    "id" : "2",
                    "caption" : "2"
                }])
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput14")
                .setLeft(160)
                .setTop(170)
                .setTabindex("5")
                .setLabelCaption("comboinput14")
                .setType("cmdbox")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput16")
                .setLeft(160)
                .setTop(200)
                .setTabindex("6")
                .setLabelCaption("comboinput16")
                .setItems([{
                    "id" : "value1",
                    "caption" : "value1"
                },{
                    "id" : "value2",
                    "caption" : "value2"
                }])
                .setCustomFunction({
                    "getShowValue" : function (profile, value){
                        value = value || "";
                        return"[" + value.replace(/[\[\]]*/g,"") + "]";
                    }
                })
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput151")
                .setLeft(160)
                .setTop(230)
                .setTabindex("7")
                .setLabelCaption("comboinput15")
                .setType("time")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput17")
                .setLeft(160)
                .setTop(260)
                .setTabindex("8")
                .setLabelCaption("comboinput17")
                .setType("color")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"comboinput5")
                .setLeft(430)
                .setTop(14)
                .setHeight(27)
                .setTabindex("9")
                .setShadow(true)
                .setResizer(true)
                .setLabelCaption("comboinput5")
                .setType("listbox")
                .setItems([{
                    "id" : "value1",
                    "caption" : "caption1"
                },{
                    "id" : "value2",
                    "caption" : "caption2"
                }])
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});