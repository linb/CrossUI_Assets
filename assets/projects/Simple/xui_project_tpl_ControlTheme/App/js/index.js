xui.Class('App', 'xui.Module',{
    Instance:{
        //Com events
        events:{}, 
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"list3")
                .setShowDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"This is a standard"
                    },
                    {
                        "id":"b",
                        "caption":"list control"
                    }
                ])
                .setLeft("0.8333333333333334em")
                .setTop("5em")
                .setWidth("17.5em")
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"list4")
                .setTheme("custom")
                .setShowDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"This is a list control"
                    },
                    {
                        "id":"b",
                        "caption":"with theme='custom'"
                    }
                ])
                .setLeft("19.166666666666668em")
                .setTop("5em")
                .setWidth("17.5em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setClassName("xui-css-aix")
                .setLeft("19.166666666666668em")
                .setTop("0.8333333333333334em")
                .setWidth("17.166666666666668em")
                .setHeight("2.8333333333333335em")
                .setCaption("Use CSSBox to modify a specific control's style")
                .setHAlign("center")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setClassName("xui-css-aix")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("17.166666666666668em")
                .setHeight("2.8333333333333335em")
                .setCaption("Use CSSBox to modify all list controls' style")
                .setHAlign("center")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox28")
                .setClassName("xui-list-item")
                .setNormalStatus({
                    "color":"#483D8B",
                    "font-size":"1.5em",
                    "font-style":"italic",
                    "line-height":"2"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox1")
                .setClassName("xui-list-custom-item")
                .setNormalStatus({
                    "font-weight":"bold",
                    "border-bottom":"dotted 1px #FFFF00"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox2")
                .setClassName("xui-list-custom-items")
                .setNormalStatus({
                    "border-top":"dashed 2px #6A5ACD",
                    "border-right":"dashed 2px #6A5ACD",
                    "border-bottom":"dashed 2px #6A5ACD",
                    "border-left":"dashed 2px #6A5ACD",
                    "border-radius":"6px 6px 6px 6px"
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox38")
                .setClassName("xui-css-aix")
                .setNormalStatus({
                    "background-color":"#FFD700",
                    "font-family":"comic sans ms,cursive",
                    "font-weight":"bold",
                    "border-top":"dashed 2px #FF4500",
                    "border-right":"dashed 2px #FF4500",
                    "border-bottom":"dashed 2px #FF4500",
                    "border-left":"dashed 2px #FF4500",
                    "border-radius":"4px 4px 4px 4px",
                    "padding":"6px 0px 0px 0px"
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});