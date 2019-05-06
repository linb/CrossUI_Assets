xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append((new xui.UI.Layout())
            .setHost(host,"ctl_layout5")
            .setItems([{"id":"before", "pos":"before", "size":150, "min":70, "max":400, "locked":false, "folded":false, "hidden":false, "cmd":true}, {"id":"main", "min":10, "size":650}, {"id":"after", "pos":"after", "size":80, "min":10, "locked":false, "folded":false, "hidden":true, "cmd":true, "itemDisplay":"display:none;"}])
            .setType("vertical")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});