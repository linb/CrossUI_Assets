xui.Class('App', 'xui.Module',{
    Instance:{

        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group2")
                .setLeft(10)
                .setTop(10)
                .setWidth(190)
                .setHeight(100)
                .setCaption("Normal")
                .setToggleBtn(false)
            );

            host.ctl_group2.append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group4")
                .setLeft(30)
                .setTop(10)
                .setWidth(130)
                .setHeight(58)
                .setCaption("")
                .setToggleBtn(false)
                .setImage("{/}img/reply.png")
                );

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group3")
                .setLeft(210)
                .setTop(10)
                .setWidth(190)
                .setHeight(100)
                .setCaption("Toggle")
            );

            host.ctl_group3.append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group5")
                .setLeft(30)
                .setTop(10)
                .setWidth(130)
                .setHeight(60)
                .setCaption("")
                .setImage("{/}img/reply.png")
                );

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group6")
                .setLeft(410)
                .setTop(10)
                .setWidth(190)
                .setHeight(290)
                .setOverflow("overflow-x:hidden;overflow-y:auto")
                .setCaption("Relative")
                .setToggleBtn(false)
            );

            host.ctl_group6.append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group8")
                .setLeft(10)
                .setWidth(170)
                .setHeight(110)
                .setPosition("relative")
                .setCaption("")
                );

            host.ctl_group6.append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group9")
                .setLeft(10)
                .setWidth(170)
                .setHeight(62)
                .setPosition("relative")
                .setCaption("")
                .setToggle(false)
                );

            host.ctl_group6.append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group10")
                .setLeft(10)
                .setWidth(170)
                .setHeight(62)
                .setPosition("relative")
                .setCaption("")
                .setToggle(false)
                );

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group173")
                .setLeft(210)
                .setTop(120)
                .setWidth(190)
                .setHeight(180)
                .setIframeAutoLoad("http://www.crossui.com")
                .setCaption("iFrame load content")
                .setToggleBtn(false)
            );

            append(
                (new xui.UI.Group())
                .setHost(host,"ctl_group175")
                .setLeft(10)
                .setTop(120)
                .setWidth(190)
                .setHeight(180)
                .setAjaxAutoLoad("{/}data/block.html")
                .setCaption("Ajax load content")
                .setToggleBtn(false)
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});