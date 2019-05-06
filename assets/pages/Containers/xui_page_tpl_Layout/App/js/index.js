xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Block())
                .setHost(host,"block4")
                .setLeft(30)
                .setTop(10)
                .setWidth(256)
                .setHeight(158)
                .setResizer(true)
            );

            host.block4.append(
                (new xui.UI.Layout())
                .setHost(host,"layout12")
                .setItems([{
                    "id" : "b1",
                    "pos" : "before",
                    "size" : 50,
                    "cmd" : true,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "a1",
                    "pos" : "after",
                    "size" : 60,
                    "cmd" : true,
                    "height" : 60,
                    "folded" : true,
                    "min" : 10,
                    "locked" : false,
                    "hidden" : false
                }])
                );

            host.layout12.append(
                (new xui.UI.Button())
                .setHost(host,"button3")
                .setLeft(90)
                .setTop(20)
                .setCaption("button3")
                , "after");

            append(
                (new xui.UI.Block())
                .setHost(host,"block6")
                .setLeft(320)
                .setTop(10)
                .setWidth(338)
                .setHeight(160)
                .setResizer(true)
            );

            host.block6.append(
                (new xui.UI.Layout())
                .setHost(host,"layout13")
                .setItems([{
                    "id" : "b1",
                    "pos" : "before",
                    "size" : 50,
                    "cmd" : true,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "a1",
                    "pos" : "after",
                    "size" : 120,
                    "cmd" : true,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false
                }])
                .setType("horizontal")
                );

            host.layout13.append(
                (new xui.UI.Layout())
                .setHost(host,"layout8")
                .setItems([{
                    "id" : "b1",
                    "pos" : "before",
                    "size" : 60,
                    "cmd" : true,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "after",
                    "pos" : "after",
                    "size" : 60,
                    "cmd" : true,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false
                }])
                , "main");

            host.layout8.append(
                (new xui.UI.Button())
                .setHost(host,"button25")
                .setLeft(10)
                .setTop(10)
                .setCaption("button25")
                , "before");

            append(
                (new xui.UI.Block())
                .setHost(host,"Block3")
                .setLeft(34)
                .setTop(180)
                .setWidth(624)
                .setHeight(200)
                .setResizer(true)
            );

            host.Block3.append(
                (new xui.UI.Layout())
                .setHost(host,"layout8")
                .setItems([{
                    "id" : "before",
                    "pos" : "before",
                    "size" : 50,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "after",
                    "pos" : "after",
                    "size" : 50,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                }])
                );

            host.layout8.append(
                (new xui.UI.Layout())
                .setHost(host,"layout9")
                .setItems([{
                    "id" : "before",
                    "pos" : "before",
                    "size" : 50,
                    "min" : 10,
                    "locked" : true,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                },{
                    "id" : "before2",
                    "pos" : "before",
                    "size" : 50,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                },{
                    "id" : "main",
                    "min" : 10
                },{
                    "id" : "after1",
                    "pos" : "after",
                    "size" : 63,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : false
                },{
                    "id" : "after2",
                    "pos" : "after",
                    "size" : 63,
                    "min" : 10,
                    "locked" : false,
                    "folded" : false,
                    "hidden" : false,
                    "cmd" : true
                }])
                .setType("horizontal")
                , "main");

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});