xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.DatePicker())
                .setHost(host,"ctl_datepicker1")
                .setDirtyMark(false)
                .setLeft(20)
                .setTop(20)
                .setTimeInput(true)
                .setCloseBtn(false)
                .setValue(new Date(2014,9,26,0,0,0,0))
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "btn",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.TimePicker())
                .setHost(host,"ctl_timepicker1")
                .setDirtyMark(false)
                .setLeft(20)
                .setTop(196)
                .setCloseBtn(false)
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "btn",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.ColorPicker())
                .setHost(host,"ctl_colorpicker8")
                .setDirtyMark(false)
                .setLeft(280)
                .setTop(140)
                .setBarDisplay(false)
                .setCloseBtn(false)
                .setAdvance(true)
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "btn",
                    "params" : [{
                        "html" : "{args.2}"
                    }],
                    "method" : "setProperties"
                }])
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput149")
                .setDirtyMark(false)
                .setLeft(540)
                .setTop(110)
                .setWidth(150)
                .setType("color")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput153")
                .setDirtyMark(false)
                .setLeft(540)
                .setTop(80)
                .setWidth(150)
                .setType("datetime")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput157")
                .setDirtyMark(false)
                .setLeft(540)
                .setTop(50)
                .setWidth(150)
                .setType("time")
            );

            append(
                (new xui.UI.ComboInput())
                .setHost(host,"ctl_comboinput161")
                .setDirtyMark(false)
                .setLeft(540)
                .setTop(20)
                .setWidth(150)
                .setType("date")
            );

            append(
                (new xui.UI.HTMLButton())
                .setHost(host,"btn")
                .setLeft(280)
                .setTop(20)
                .setWidth(230)
                .setHeight(110)
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});