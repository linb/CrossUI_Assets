xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Div())
                .setHost(host,"div14")
                .setLeft(610)
                .setTop(36)
                .setWidth(100)
                .setHeight(20)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div15")
                .setLeft(610)
                .setTop(76)
                .setWidth(100)
                .setHeight(24)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div20")
                .setLeft(610)
                .setTop(116)
                .setWidth(100)
                .setHeight(14)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div24")
                .setLeft(610)
                .setTop(160)
                .setWidth(100)
                .setHeight(30)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div25")
                .setLeft(610)
                .setTop(200)
                .setWidth(100)
                .setHeight(30)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div26")
                .setLeft(610)
                .setTop(240)
                .setWidth(100)
                .setHeight(30)
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div17")
                .setLeft(30)
                .setTop(280)
                .setWidth(100)
                .setHeight(30)
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider2")
                .setLeft(160)
                .setTop(190)
                .setWidth(440)
                .setHeight(40)
                .setValue("30:50")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div25",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider1")
                .setLeft(160)
                .setTop(20)
                .setWidth(440)
                .setIsRange(false)
                .setValue("0")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div14",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider16")
                .setLeft(160)
                .setTop(140)
                .setWidth(440)
                .setSteps(100)
                .setIsRange(false)
                .setValue("0")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div24",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider17")
                .setLeft(160)
                .setTop(230)
                .setWidth(440)
                .setSteps(20)
                .setValue("10:20")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div26",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider3")
                .setLeft(160)
                .setTop(60)
                .setWidth(440)
                .setSteps(10)
                .setIsRange(false)
                .setShowDecreaseHandle(false)
                .setValue("0")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div15",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider11")
                .setLeft(160)
                .setTop(100)
                .setWidth(440)
                .setSteps(7)
                .setIsRange(false)
                .setShowIncreaseHandle(false)
                .setValue("1")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div20",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.Slider())
                .setHost(host,"slider8")
                .setLeft(40)
                .setTop(20)
                .setWidth(90)
                .setHeight(260)
                .setSteps(20)
                .setType("vertical")
                .setValue("10:20")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "div17",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});