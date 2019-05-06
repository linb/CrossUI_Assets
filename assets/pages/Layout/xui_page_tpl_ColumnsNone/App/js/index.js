xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append((new xui.UI.Pane())
            .setHost(host,"ctl_pane10")
            .setDock("fill")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});