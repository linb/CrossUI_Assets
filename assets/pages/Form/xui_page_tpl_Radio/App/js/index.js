xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block36")
                .setLeft(20)
                .setTop(20)
                .setWidth(210)
                .setHeight(80)
                .setBorderType("ridge")
            );

            host.ctl_block36.append(
                (new xui.UI.RadioBox())
                .setHost(host,"ctl_radiobox3")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setDock("fill")
                .setValue("a")
                .beforeUIValueSet([{
                    "desc" : "Action 1",
                    "type" : "none",
                    "target" : "none",
                    "params" : [],
                    "method" : "none",
                    "conditions" : [{
                        "left" : "{args.2}",
                        "symbol" : "=",
                        "right" : "b"
                    }],
                    "return" : false
                }])
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block38")
                .setLeft(20)
                .setTop(110)
                .setWidth(210)
                .setHeight(80)
                .setBorderType("ridge")
            );

            host.ctl_block38.append(
                (new xui.UI.RadioBox())
                .setHost(host,"ctl_radiobox6")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png",
                    "disabled" : true
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setDock("fill")
                .setItemRow(true)
                .setValue("a")
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block39")
                .setLeft(250)
                .setTop(20)
                .setWidth(210)
                .setHeight(80)
                .setBorderType("ridge")
            );

            host.ctl_block39.append(
                (new xui.UI.RadioBox())
                .setHost(host,"ctl_radiobox7")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setDock("fill")
                .setSelMode("multi")
                .setValue("a;c")
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block49")
                .setLeft(250)
                .setTop(110)
                .setWidth(210)
                .setHeight(80)
                .setBorderType("ridge")
            );

            host.ctl_block49.append(
                (new xui.UI.RadioBox())
                .setHost(host,"ctl_radiobox17")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setDock("fill")
                .setSelMode("multi")
                .setCheckBox(true)
                .setValue("a;c")
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block65")
                .setLeft(20)
                .setTop(200)
                .setWidth(210)
                .setHeight(80)
                .setBorderType("ridge")
            );

            host.ctl_block65.append(
                (new xui.UI.RadioBox())
                .setHost(host,"ctl_radiobox33")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setDock("fill")
                .setItemRow(true)
                .setCheckBox(true)
                .setValue("a")
                );

            append(
                (new xui.UI.StatusButtons())
                .setHost(host,"ctl_statusbuttons1")
                .setItems([{
                    "id" : "a",
                    "caption" : "status 1",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "status 2",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "status 3",
                    "image" : "{/}img/reply.png"
                }])
                .setLeft(260)
                .setTop(200)
                .setWidth(97)
                .setHeight(90)
                .setBorderType("none")
                .setItemMargin("2px 4px")
                .setItemWidth(80)
                .setValue("a")
            );

            append(
                (new xui.UI.StatusButtons())
                .setHost(host,"ctl_statusbuttons3")
                .setItems([{
                    "id" : "a",
                    "caption" : "status 1"
                },{
                    "id" : "b",
                    "caption" : "status 2"
                },{
                    "id" : "c",
                    "caption" : "status 3"
                },{
                    "id" : "d",
                    "caption" : "status 4"
                },{
                    "id" : "e",
                    "caption" : "status 5"
                }])
                .setLeft(25)
                .setTop(294)
                .setWidth(570)
                .setHeight(30)
                .setBorderType("none")
                .setItemWidth(100)
                .setItemAlign("center")
                .setValue("a")
            );

            append(
                (new xui.UI.StatusButtons())
                .setHost(host,"ctl_statusbuttons50")
                .setItems([{
                    "id" : "a",
                    "caption" : "status 1",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "status 2",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "status 3",
                    "image" : "{/}img/reply.png"
                }])
                .setLeft(360)
                .setTop(200)
                .setWidth(100)
                .setHeight(90)
                .setSelMode("multi")
                .setBorderType("none")
                .setItemMargin("2px 4px")
                .setItemWidth(80)
                .setValue("a;c")
            );

            append(
                (new xui.UI.StatusButtons())
                .setHost(host,"ctl_statusbuttons62")
                .setItems([{
                    "id" : "a",
                    "caption" : "status 1"
                },{
                    "id" : "b",
                    "caption" : "status 2"
                },{
                    "id" : "c",
                    "caption" : "status 3"
                },{
                    "id" : "d",
                    "caption" : "status 4"
                },{
                    "id" : "e",
                    "caption" : "status 5"
                }])
                .setLeft(25)
                .setTop(334)
                .setWidth(570)
                .setHeight(30)
                .setSelMode("multi")
                .setBorderType("none")
                .setItemWidth(100)
                .setItemAlign("center")
                .setValue("a;c;e")
            );

            append(
                (new xui.UI.List())
                .setHost(host,"ctl_list31")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setLeft(470)
                .setTop(20)
                .setHeight(120)
                .setValue("a")
            );

            append(
                (new xui.UI.List())
                .setHost(host,"ctl_list40")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "b",
                    "caption" : "item b",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "c",
                    "caption" : "item c",
                    "image" : "{/}img/reply.png"
                }])
                .setLeft(470)
                .setTop(160)
                .setHeight(120)
                .setSelMode("multibycheckbox")
                .setValue("a")
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});