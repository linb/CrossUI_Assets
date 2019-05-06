xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block25")
                .setLeft(10)
                .setTop(10)
                .setWidth(370)
                .setHeight(180)
                .setBorderType("flat")
            );

            host.ctl_block25.append(
                (new xui.UI.TreeGrid())
                .setHost(host,"ctl_treegrid4")
                .setRowNumbered(true)
                .setRowHandlerWidth(30)
                .setHeader([{
                    "id" : "col1",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col1"
                },{
                    "id" : "col2",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col2"
                },{
                    "id" : "col3",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col3"
                },{
                    "id" : "col4",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col4"
                }])
                .setRows([{
                    "cells" : [{
                        "value" : "row1 col1"
                    },{
                        "value" : "row1 col2"
                    },{
                        "value" : "row1 col3"
                    },{
                        "value" : "row1 col4"
                    }]
                },{
                    "cells" : [{
                        "value" : "row2 col1"
                    },{
                        "value" : "row2 col2"
                    },{
                        "value" : "row2 col3"
                    },{
                        "value" : "row2 col4"
                    }]
                },{
                    "cells" : [{
                        "value" : "row3 col1"
                    },{
                        "value" : "row3 col2"
                    },{
                        "value" : "row3 col3"
                    },{
                        "value" : "row3 col4"
                    }],
                    "sub" : [{
                        "cells" : ["sub1","sub2","sub3","sub4"]
                    }]
                }])
                .setTreeMode(false)
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block26")
                .setLeft(390)
                .setTop(10)
                .setWidth(400)
                .setHeight(180)
                .setBorderType("flat")
            );

            host.ctl_block26.append(
                (new xui.UI.TreeGrid())
                .setHost(host,"ctl_treegrid5")
                .setRowNumbered(true)
                .setEditable(true)
                .setHeader([{
                    "id" : "col1",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col1"
                },{
                    "id" : "col2",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col2"
                },{
                    "id" : "col3",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col3"
                },{
                    "id" : "col4",
                    "width" : 80,
                    "type" : "input",
                    "caption" : "col4"
                }])
                .setRows([{
                    "caption" : "",
                    "cells" : [{
                        "value" : "row1 col1"
                    },{
                        "value" : "row1 col2"
                    },{
                        "value" : "row1 col3"
                    },{
                        "value" : "row1 col4"
                    }]
                },{
                    "caption" : "",
                    "cells" : [{
                        "value" : "row2 col1"
                    },{
                        "value" : "row2 col2"
                    },{
                        "value" : "row2 col3"
                    },{
                        "value" : "row2 col4"
                    }]
                },{
                    "caption" : "",
                    "iniFold" : true,
                    "cells" : [{
                        "value" : "row3 col1"
                    },{
                        "value" : "row3 col2"
                    },{
                        "value" : "row3 col3"
                    },{
                        "value" : "row3 col4"
                    }],
                    "sub" : [{
                        "caption" : "d",
                        "cells" : [{
                            "value" : "a"
                        },{
                            "value" : "b"
                        },{
                            "value" : "c"
                        },{
                            "value" : "d"
                        }]
                    }]
                }])
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block68")
                .setLeft(10)
                .setTop(200)
                .setWidth(370)
                .setHeight(180)
                .setBorderType("flat")
            );

            host.ctl_block68.append(
                (new xui.UI.TreeGrid())
                .setHost(host,"ctl_treegrid65")
                .setRowNumbered(true)
                .setEditable(true)
                .setRowHandlerWidth(30)
                .setHeader([{
                    "id" : "col1",
                    "caption" : "input",
                    "width" : 70,
                    "type" : "input"
                },{
                    "id" : "col2",
                    "caption" : "comboInput",
                    "width" : 70,
                    "type" : "combobox",
                    "editorListItems" : [{
                        "id" : "a"
                    },{
                        "id" : "b"
                    },{
                        "id" : "c"
                    }]
                },{
                    "id" : "col3",
                    "caption" : "listbox",
                    "width" : 70,
                    "type" : "listbox",
                    "editorListItems" : [{
                        "id" : "a"
                    },{
                        "id" : "b"
                    },{
                        "id" : "c"
                    }]
                },{
                    "id" : "col4",
                    "caption" : "checkbox",
                    "width" : 60,
                    "type" : "checkbox"
                },{
                    "id" : "col5",
                    "caption" : "button",
                    "width" : 50,
                    "type" : "button"
                }])
                .setRows([{
                    "cells" : [{
                        "value" : "row1 col1"
                    },{
                        "value" : "row1 col2"
                    },{
                        "value" : "row1 col3"
                    },{
                        "value" : true
                    },{
                        "value" : "button"
                    }]
                },{
                    "cells" : [{
                        "value" : "row2 col1"
                    },{
                        "value" : "row2 col2"
                    },{
                        "value" : "row2 col3"
                    },{
                        "value" : true
                    },{
                        "value" : "button"
                    }]
                },{
                    "cells" : [{
                        "value" : "sub1"
                    },{
                        "value" : "sub2"
                    },{
                        "value" : "sub3"
                    },{
                        "value" : true
                    },{
                        "value" : ""
                    }]
                }])
                .setTreeMode(false)
                );

            append(
                (new xui.UI.Block())
                .setHost(host,"ctl_block69")
                .setLeft(390)
                .setTop(200)
                .setWidth(400)
                .setHeight(180)
                .setBorderType("flat")
            );

            host.ctl_block69.append(
                (new xui.UI.TreeGrid())
                .setHost(host,"ctl_treegrid42")
                .setRowNumbered(true)
                .setEditable(true)
                .setRowHandlerWidth(30)
                .setHeader([{
                    "id" : "col1",
                    "caption" : "input",
                    "width" : 70,
                    "type" : "input",
                    "editMode" : "focus"
                },{
                    "id" : "col2",
                    "caption" : "comboInput",
                    "width" : 70,
                    "type" : "combobox",
                    "editMode" : "hover",
                    "editorListItems" : [{
                        "id" : "a"
                    },{
                        "id" : "b"
                    },{
                        "id" : "c"
                    }]
                },{
                    "id" : "col3",
                    "caption" : "listbox",
                    "width" : 70,
                    "type" : "listbox",
                    "editMode" : "inline",
                    "editorListItems" : [{
                        "id" : "a"
                    },{
                        "id" : "b"
                    },{
                        "id" : "c"
                    }]
                },{
                    "id" : "col4",
                    "caption" : "checkbox",
                    "width" : 60,
                    "type" : "checkbox"
                },{
                    "id" : "col5",
                    "caption" : "button",
                    "width" : 50,
                    "type" : "button"
                }])
                .setRows([{
                    "cells" : [{
                        "value" : "row1 col1"
                    },{
                        "value" : "row1 col2"
                    },{
                        "value" : "row1 col3"
                    },{
                        "value" : true
                    },{
                        "value" : "button"
                    }]
                },{
                    "cells" : [{
                        "value" : "row2 col1"
                    },{
                        "value" : "row2 col2"
                    },{
                        "value" : "row2 col3"
                    },{
                        "value" : true
                    },{
                        "value" : "button"
                    }]
                },{
                    "cells" : [{
                        "value" : "sub1"
                    },{
                        "value" : "sub2"
                    },{
                        "value" : "sub3"
                    },{
                        "value" : true
                    },{
                        "value" : ""
                    }]
                }])
                .setTreeMode(false)
                );

            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});