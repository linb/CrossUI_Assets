// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog9")
                .setLeft("3.3333333333333335em")
                .setTop("1.6666666666666667em")
                .setWidth("54.166666666666664em")
                .setHeight("47.5em")
                .setCaption("Video")
                .setMinBtn(false)
            );
            
            host.xui_ui_dialog9.append(
                xui.create("xui.UI.Video")
                .setHost(host,"xui_ui_video2")
                .setAutoTips(false)
                .setDock("fill")
                .setLeft("11.666666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("53.333333333333336em")
                .setHeight("35em")
                .setAutoplay(true)
                .onMediaEvent([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_video2",
                        "args":[ ],
                        "method":"busy",
                        "conditions":[
                            {
                                "left":"{args[1].type}",
                                "symbol":"=",
                                "right":"loadstart"
                            }
                        ]
                    },
                    {
                        "desc":"Action 2",
                        "type":"control",
                        "target":"xui_ui_video2",
                        "args":[ ],
                        "method":"free",
                        "conditions":[
                            {
                                "left":"{args[1].type}",
                                "symbol":"=",
                                "right":"loadeddata"
                            }
                        ]
                    },
                    {
                        "desc":"Action 3",
                        "type":"control",
                        "target":"xui_ui_video2",
                        "args":[ ],
                        "method":"free",
                        "conditions":[
                            {
                                "left":"{args[1].type}",
                                "symbol":"=",
                                "right":"canplay"
                            }
                        ]
                    }
                ])
                );
            
            host.xui_ui_dialog9.append(
                xui.create("xui.UI.Gallery")
                .setHost(host,"xui_ui_gallery7")
                .setDirtyMark(false)
                .setImgWidth('auto')
                .setImgHeight('auto')
                .setItems([
                    {
                        "id":"ad",
                        "caption":"",
                        "comment":"A commercial piece",
                        "image":"{/}img/ad.png"
                    },
                    {
                        "id":"boy",
                        "caption":"",
                        "comment":"Cute Boy",
                        "image":"{/}img/boy.png"
                    },
                    {
                        "id":"egg",
                        "caption":"",
                        "comment":"Hen eggs",
                        "image":"{/}img/egg.png"
                    },
                    {
                        "id":"cartoon",
                        "caption":"",
                        "comment":"Cartoon Clip",
                        "image":"{/}img/cartoon.png"
                    }
                ])
                .setDock("bottom")
                .setLeft("14.166666666666666em")
                .setTop("20.833333333333332em")
                .setHeight("9em")
                .setItemMargin(4)
                .setItemPadding(4)
                .setColumns(4)
                .setValue("a")
                .onItemSelected([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_video2",
                        "args":[
                            "{page.xui_ui_video2.setSrc()}",
                            undefined,
                            undefined,
                            "{/}mp4/{args[1].id}.mp4",
                            "{true}"
                        ],
                        "method":"setSrc",
                        "redirection":"other:callback:call",
                        "event":2
                    }
                ])
                .setCustomStyle({
                    "ITEMS":{
                        "overflow":"overflow-x:auto;overflow-y:hidden"
                    }
                })
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{
            "onRender":[
                {
                    "desc":"Action 1",
                    "type":"control",
                    "target":"xui_ui_gallery7",
                    "args":[
                        "ad"
                    ],
                    "method":"fireItemClickEvent"
                }
            ]
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});