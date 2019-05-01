xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Tools
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append((new xui.UI.Layout())
            .setHost(host,"ctl_layout5")
            .setItems([{"id":"before", "pos":"before", "size":100, "min":50, "max":400, "locked":false, "folded":false, "hidden":false, "cmd":false}, {"id":"main", "min":10, "size":450}, {"id":"after", "pos":"after", "size":50, "min":20, "max":400, "locked":false, "folded":false, "hidden":false, "cmd":false}])
            );

            host.ctl_layout5.append((new xui.UI.Layout())
            .setHost(host,"ctl_layout13")
            .setItems([{"id":"before", "pos":"before", "size":150, "min":10, "locked":false, "folded":false, "hidden":false, "cmd":true}, {"id":"main", "min":10, "size":530}, {"id":"after", "pos":"after", "size":120, "min":10, "locked":false, "folded":false, "hidden":false, "cmd":false}])
            .setType("horizontal")
            , "main");

            return children;
            // ]]Code created by CrossUI RAD Tools
        }
    }
});