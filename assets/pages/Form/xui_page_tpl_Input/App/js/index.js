xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Div())
                .setHost(host,"div10")
                .setLeft(224)
                .setTop(381)
                .setWidth(174)
                .setHeight(17)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div9")
                .setLeft(224)
                .setTop(341)
                .setWidth(174)
                .setHeight(17)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div11")
                .setLeft(30)
                .setTop(340)
                .setWidth(80)
                .setHeight(26)
                .setHtml("Input valid")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div12")
                .setLeft(30)
                .setTop(379)
                .setWidth(76)
                .setHeight(31)
                .setHtml("Input valid (real time)")
            );

            append(
                (new xui.UI.Group())
                .setHost(host,"group1")
                .setLeft(450)
                .setTop(20)
                .setWidth(250)
                .setHeight(160)
                .setCaption("mask input")
            );

            host.group1.append(
                (new xui.UI.Div())
                .setHost(host,"div14")
                .setLeft(10)
                .setTop(74)
                .setWidth(90)
                .setHeight(20)
                .setHtml("(111) 111-1111")
                );

            host.group1.append(
                (new xui.UI.Div())
                .setHost(host,"div13")
                .setLeft(10)
                .setTop(11)
                .setWidth(80)
                .setHeight(20)
                .setHtml("11/11/1111")
                );

            host.group1.append(
                (new xui.UI.Div())
                .setHost(host,"div16")
                .setLeft(10)
                .setTop(105)
                .setWidth(80)
                .setHeight(20)
                .setHtml("(111) a-a **")
                );

            host.group1.append(
                (new xui.UI.Div())
                .setHost(host,"div15")
                .setLeft(10)
                .setTop(43)
                .setWidth(80)
                .setHeight(20)
                .setHtml("~1.11")
                );

            host.group1.append(
                (new xui.UI.Input())
                .setHost(host,"iMask")
                .setLeft(100)
                .setTop(10)
                .setTabindex("17")
                .setMask("11/11/1111")
                );

            host.group1.append(
                (new xui.UI.Input())
                .setHost(host,"input18")
                .setLeft(100)
                .setTop(70)
                .setTabindex("18")
                .setMask("(111) 111-1111")
                );

            host.group1.append(
                (new xui.UI.Input())
                .setHost(host,"input19")
                .setLeft(100)
                .setTop(40)
                .setTabindex("19")
                .setMask("~1.11")
                );

            host.group1.append(
                (new xui.UI.Input())
                .setHost(host,"input20")
                .setLeft(100)
                .setTop(101)
                .setTabindex("20")
                .setMask("(111) a-a **")
                );

            append(
                (new xui.UI.Group())
                .setHost(host,"group2")
                .setLeft(20)
                .setTop(20)
                .setWidth(420)
                .setHeight(160)
                .setCaption("no border")
                .setToggleBtn(false)
            );

            host.group2.append(
                (new xui.UI.Input())
                .setHost(host,"input4")
                .setLeft(0)
                .setTop(0)
                .setWidth(197)
                .setLabelSize(100)
                .setLabelCaption("normal")
                .setValue("normal")
                );

            host.group2.append(
                (new xui.UI.Input())
                .setHost(host,"input2")
                .setLeft(210)
                .setTop(0)
                .setWidth(197)
                .setTabindex("2")
                .setLabelSize(100)
                .setLabelCaption("password")
                .setType("password")
                .setValue("password")
                );

            host.group2.append(
                (new xui.UI.Input())
                .setHost(host,"input3")
                .setLeft(0)
                .setTop(32)
                .setWidth(410)
                .setHeight(48)
                .setTabindex("3")
                .setLabelSize(100)
                .setLabelCaption("multi lines")
                .setMultiLines(true)
                .setValue("multi lines")
                );

            host.group2.append(
                (new xui.UI.Input())
                .setHost(host,"input6")
                .setReadonly(true)
                .setLeft(0)
                .setTop(90)
                .setWidth(197)
                .setTabindex("4")
                .setLabelSize(100)
                .setLabelCaption("readonly")
                .setValue("readonly")
                );

            host.group2.append(
                (new xui.UI.Input())
                .setHost(host,"input1")
                .setDisabled(true)
                .setLeft(210)
                .setTop(90)
                .setWidth(197)
                .setTabindex("5")
                .setLabelSize(100)
                .setLabelCaption("disabled")
                .setValue("disabled")
                );

            append(
                (new xui.UI.Label())
                .setHost(host,"label13")
                .setLeft(510)
                .setTop(340)
                .setWidth(180)
                .setHeight(30)
                .setCaption("Input 'allow' only, using 'beforeFormatCheck' event")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label10")
                .setLeft(230)
                .setTop(242)
                .setWidth(86)
                .setCaption("integer")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label7")
                .setLeft(0)
                .setTop(210)
                .setWidth(90)
                .setCaption("email")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label12")
                .setLeft(230)
                .setTop(274)
                .setWidth(86)
                .setCaption("MM/DD/YYYY")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label9")
                .setLeft(0)
                .setTop(242)
                .setWidth(90)
                .setCaption("alpha")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label8")
                .setLeft(230)
                .setTop(210)
                .setWidth(86)
                .setCaption("letter")
            );

            append(
                (new xui.UI.Label())
                .setHost(host,"label11")
                .setLeft(0)
                .setTop(274)
                .setWidth(90)
                .setCaption("number")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input9")
                .setLeft(326)
                .setTop(210)
                .setTabindex("10")
                .setValueFormat("^[a-zA-Z]*")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input11")
                .setLeft(326)
                .setTop(242)
                .setTabindex("12")
                .setValueFormat("^-?\\d\\d*$")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input13")
                .setLeft(326)
                .setTop(274)
                .setTabindex("13")
                .setValueFormat("^([0-1][0-9])/([0-3][0-9])/([0-9])")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input5")
                .setLeft(510)
                .setTop(380)
                .setWidth(180)
                .setTabindex("14")
                .beforeFormatCheck([{
                    "desc" : "动作1",
                    "type" : "none",
                    "target" : "none",
                    "params" : [],
                    "method" : "none",
                    "conditions" : [{
                        "left" : "{args.1}",
                        "symbol" : "!=",
                        "right" : "allow"
                    }],
                    "return" : false
                }])
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input29")
                .setTips("input number")
                .setLeft(100)
                .setTop(340)
                .setTabindex("15")
                .setTipsErr("tipsErr : number only")
                .setTipsOK("Yeah")
                .setValueFormat("(^-?\\d\\d*\\.\\d*$)|(^-?\\d\\d*$)|(^-?\\.\\d\\d*$)")
                .setTipsBinder("div9")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input15")
                .setTips("input number")
                .setLeft(100)
                .setTop(380)
                .setTabindex("16")
                .setTipsErr("tipsErr : number only")
                .setTipsOK("Yeah")
                .setDynCheck(true)
                .setValueFormat("(^-?\\d\\d*\\.\\d*$)|(^-?\\d\\d*$)|(^-?\\.\\d\\d*$)")
                .setTipsBinder("div10")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input7")
                .setTips("border/resizer/shadow")
                .setLeft(470)
                .setTop(220)
                .setWidth(230)
                .setHeight(60)
                .setTabindex("6")
                .setShadow(true)
                .setResizer(true)
                .setLabelSize(100)
                .setLabelCaption("border + resizer + shadow")
                .setMultiLines(true)
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input8")
                .setLeft(100)
                .setTop(210)
                .setTabindex("7")
                .setValueFormat("^[\\w\\.=-]+@[\\w\\.-]+\\.[\\w\\.-]{2,4}")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input10")
                .setLeft(100)
                .setTop(242)
                .setTabindex("8")
                .setValueFormat("^\\w*")
            );

            append(
                (new xui.UI.Input())
                .setHost(host,"input12")
                .setLeft(100)
                .setTop(274)
                .setTabindex("9")
                .setValueFormat("^-?(\\d\\d*\\.\\d*)|(^-?\\d\\d*)|(^-?\\.\\d\\d*)")
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});