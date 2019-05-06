xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Div())
                .setHost(host,"div36")
                .setLeft(30)
                .setTop(50)
                .setWidth(120)
                .setHeight(20)
                .setHtml("select mode : single")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div37")
                .setLeft(200)
                .setTop(50)
                .setWidth(120)
                .setHeight(20)
                .setHtml("select mode : multi")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div38")
                .setLeft(30)
                .setTop(230)
                .setWidth(100)
                .setHeight(20)
                .setHtml("disabled")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div39")
                .setLeft(170)
                .setTop(230)
                .setWidth(120)
                .setHeight(20)
                .setHtml("custom item")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div27")
                .setLeft(350)
                .setTop(230)
                .setWidth(120)
                .setHeight(20)
                .setHtml("command buttons")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"div46")
                .setLeft(380)
                .setTop(50)
                .setWidth(170)
                .setHeight(20)
                .setHtml("select mode : none")
            );

            append(
                (new xui.UI.Div())
                .setHost(host,"ctl_div94")
                .setLeft(560)
                .setTop(50)
                .setWidth(170)
                .setHeight(20)
                .setHtml("native icon classes")
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list2")
                .setItems([{
                    "id" : "item a",
                    "caption" : "item a",
                    "tips" : "item a"
                },{
                    "id" : "item b1",
                    "caption" : "item b1",
                    "tips" : "item b1"
                },{
                    "id" : "item b2",
                    "caption" : "item b2",
                    "tips" : "item b2"
                },{
                    "id" : "item b3",
                    "caption" : "item b3",
                    "tips" : "item b3"
                }])
                .setDisabled(true)
                .setLeft(30)
                .setTop(250)
                .setHeight(110)
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list3")
                .setItems([{
                    "id" : "item a",
                    "caption" : "<b>long</b> long long item a",
                    "tips" : "item a"
                },{
                    "id" : "item b",
                    "caption" : "<span style='color:red'>long</span> long long item b",
                    "tips" : "item b"
                },{
                    "id" : "item c",
                    "caption" : "<span style='font-size:20px'>long</span> long long item c",
                    "tips" : "item c"
                }])
                .setLeft(180)
                .setTop(250)
                .setWidth(140)
                .setHeight(110)
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list1")
                .setItems([{
                    "id" : "item a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item b",
                    "caption" : "item b",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item c",
                    "caption" : "item c",
                    "image" : "{/}img/accept.png"
                }])
                .setLeft(200)
                .setTop(80)
                .setHeight(110)
                .setSelMode("multi")
                .setValue("")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You selected {args.2}"],
                    "method" : "message"
                }])
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list4")
                .setItems([{
                    "id" : "item a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item b",
                    "caption" : "item b",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item c",
                    "caption" : "item c",
                    "image" : "{/}img/accept.png",
                    "disabled" : true
                }])
                .setLeft(30)
                .setTop(80)
                .setHeight(110)
                .setMaxHeight("200")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You selected {args.2}"],
                    "method" : "message"
                }])
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list23")
                .setItems([{
                    "id" : "item a",
                    "caption" : "item a",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item b",
                    "caption" : "item b",
                    "image" : "{/}img/accept.png"
                },{
                    "id" : "item c",
                    "caption" : "item c",
                    "image" : "{/}img/accept.png"
                }])
                .setLeft(380)
                .setTop(80)
                .setHeight(110)
                .setSelMode("none")
                .onChange([{
                    "desc" : "Action 1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You selected {args.2}"],
                    "method" : "message"
                }])
            );

            append(
                (new xui.UI.List())
                .setHost(host,"ctl_list1")
                .setItems([{
                    "id" : "ar",
                    "caption" : "xui-uicmd-none",
                    "imageClass" : "xui-uicmd-none"
                },{
                    "id" : "as",
                    "caption" : "xui-uicmd-empty",
                    "imageClass" : "xui-uicmd-empty"
                },{
                    "id" : "aq",
                    "caption" : "xui-icon-loading",
                    "imageClass" : "xui-icon-loading"
                },{
                    "id" : "ax",
                    "caption" : "xui-uicmd-toggle",
                    "imageClass" : "xui-uicmd-toggle"
                },{
                    "id" : "ay",
                    "caption" : "xui-uicmd-toggle2",
                    "imageClass" : "xui-uicmd-toggle2"
                },{
                    "id" : "at",
                    "caption" : "xui-uicmd-opt",
                    "imageClass" : "xui-uicmd-opt"
                },{
                    "id" : "au",
                    "caption" : "xui-uicmd-pop",
                    "imageClass" : "xui-uicmd-pop"
                },{
                    "id" : "av",
                    "caption" : "xui-uicmd-land",
                    "imageClass" : "xui-uicmd-land"
                },{
                    "id" : "aw",
                    "caption" : "xui-uicmd-refresh",
                    "imageClass" : "xui-uicmd-refresh"
                },{
                    "id" : "az",
                    "caption" : "xui-uicmd-min",
                    "imageClass" : "xui-uicmd-min"
                },{
                    "id" : "ca",
                    "caption" : "xui-uicmd-max",
                    "imageClass" : "xui-uicmd-max"
                },{
                    "id" : "cb",
                    "caption" : "xui-uicmd-restore",
                    "imageClass" : "xui-uicmd-restore"
                },{
                    "id" : "cc",
                    "caption" : "xui-uicmd-pin",
                    "imageClass" : "xui-uicmd-pin"
                },{
                    "id" : "cd",
                    "caption" : "xui-uicmd-check",
                    "imageClass" : "xui-uicmd-check"
                },{
                    "id" : "ce",
                    "caption" : "xui-uicmd-radio",
                    "imageClass" : "xui-uicmd-radio"
                },{
                    "id" : "cf",
                    "caption" : "xui-uicmd-add",
                    "imageClass" : "xui-uicmd-add"
                },{
                    "id" : "cg",
                    "caption" : "xui-uicmd-remove",
                    "imageClass" : "xui-uicmd-remove"
                }])
                .setLeft(560)
                .setTop(80)
                .setWidth(200)
                .setHeight(280)
                .setValue("ar")
            );

            append(
                (new xui.UI.List())
                .setHost(host,"list7")
                .setItems([{
                    "id" : "a",
                    "caption" : "item a"
                },{
                    "id" : "b",
                    "caption" : "item b"
                },{
                    "id" : "c",
                    "caption" : "item c"
                },{
                    "id" : "d",
                    "caption" : "item d"
                }])
                .setLeft(350)
                .setTop(250)
                .setWidth(150)
                .setHeight(110)
                .setTagCmds([{
                    "id" : "delete",
                    "type" : "image",
                    "image" : "{/}img/action_delete.png"
                },{
                    "id" : "edit",
                    "type" : "image",
                    "image" : "{/}img/reply.png"
                }])
                .onCmd([{
                    "desc" : "Action 1",
                    "type" : "other",
                    "target" : "msg",
                    "params" : ["You want to \"{args.2}\" the \"{args.1.caption}\""],
                    "method" : "message"
                }])
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});