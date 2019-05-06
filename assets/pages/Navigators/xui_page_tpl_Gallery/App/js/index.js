xui.Class('App', 'xui.Module',{
    Instance:{


        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Gallery())
                .setHost(host,"ctl_iconlist5")
                .setIconOnly(true)
                .setItems([{
                    "id" : "a",
                    "image" : "{/}img/10_64x64.png"
                },{
                    "id" : "b",
                    "image" : "{/}img/11_64x64.png"
                },{
                    "id" : "c",
                    "image" : "{/}img/19_64x64.png"
                },{
                    "id" : "d",
                    "image" : "{/}img/1_64x64.png",
                    "disabled" : true
                },{
                    "id" : "e",
                    "image" : "{/}img/26_64x64.png"
                }])
                .setLeft(30)
                .setTop(240)
                .setWidth(440)
                .setHeight(130)
                .setValue("a")
                .onItemSelected([{
                    "desc" : "action",
                    "type" : "other",
                    "target" : "msg",
                    "params" : [null,"You selected {args.1.caption}"],
                    "method" : "pop"
                }])
            );

            append(
                (new xui.UI.Gallery())
                .setHost(host,"ctl_gallery3")
                .setItems([{
                    "id" : "a",
                    "caption" : "print",
                    "comment" : "desc...",
                    "image" : "{/}img/10_64x64.png"
                },{
                    "id" : "b",
                    "caption" : "box",
                    "comment" : "desc...",
                    "image" : "{/}img/11_64x64.png"
                },{
                    "id" : "c",
                    "caption" : "book",
                    "comment" : "desc...",
                    "image" : "{/}img/19_64x64.png"
                },{
                    "id" : "d",
                    "caption" : "camera",
                    "comment" : "desc...",
                    "image" : "{/}img/1_64x64.png",
                    "disabled" : true
                },{
                    "id" : "e",
                    "caption" : "cloud",
                    "comment" : "desc...",
                    "image" : "{/}img/26_64x64.png"
                },{
                    "id" : "f",
                    "caption" : "papers",
                    "comment" : "desc...",
                    "image" : "{/}img/27_128x128.png"
                },{
                    "id" : "g",
                    "caption" : "cellphone",
                    "comment" : "desc...",
                    "image" : "{/}img/30_128x128.png"
                }])
                .setLeft(30)
                .setTop(20)
                .setWidth(440)
                .setAutoItemSize(true)
                .setValue("a")
                .onItemSelected([{
                    "desc" : "action",
                    "type" : "other",
                    "target" : "msg",
                    "params" : [null,"You selected {args.1.caption}"],
                    "method" : "pop"
                }])
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});