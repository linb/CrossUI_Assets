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
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_dialog6")
                .setDock("right")
                .setLeft("4.166666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("18.333333333333332em")
                .setHeight("46.666666666666664em")
                .setCaption("Animal Sounds")
            );
            
            host.xui_ui_dialog6.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list4")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"bee",
                        "caption":"<img src={/}img/bee.png width=64 height=64 style='vertical-align: middle;'/> Bee",
                        "src":"{/}mp3/bee.mp3"
                    },
                    {
                        "id":"cat",
                        "caption":"<img src={/}img/cat.png width=64 height=64  style='vertical-align: middle;'/> Cat",
                        "src":"{/}mp3/cat.mp3"
                    },
                    {
                        "id":"chicken",
                        "caption":"<img src={/}img/chicken.png width=64 height=64  style='vertical-align: middle;'/> Chicken",
                        "src":"{/}mp3/chicken.mp3"
                    },
                    {
                        "id":"cow",
                        "caption":"<img src={/}img/cow.png width=64 height=64  style='vertical-align: middle;'/> Cow",
                        "src":"{/}mp3/cow.mp3"
                    },
                    {
                        "id":"dog",
                        "caption":"<img src={/}img/dog.png width=64 height=64  style='vertical-align: middle;'/> Dog",
                        "src":"{/}mp3/dog.mp3"
                    },
                    {
                        "id":"frog",
                        "caption":"<img src={/}img/frog.png width=64 height=64  style='vertical-align: middle;'/> Frog",
                        "src":"{/}mp3/frog.mp3"
                    },
                    {
                        "id":"pig",
                        "caption":"<img src={/}img/pig.png width=64 height=64  style='vertical-align: middle;'/> Pig",
                        "src":"{/}mp3/pig.mp3"
                    },
                    {
                        "id":"sheep",
                        "caption":"<img src={/}img/sheep.png width=64 height=64  style='vertical-align: middle;'/> Sheep",
                        "src":"{/}mp3/sheep.mp3"
                    }
                ])
                .setDock("fill")
                .setLeft("5.833333333333333em")
                .setTop("3em")
                .onItemSelected([
                    {
                        "desc":"pause",
                        "type":"control",
                        "target":"xui_ui_audio1",
                        "args":[ ],
                        "method":"pause",
                        "event":2
                    },
                    {
                        "desc":"set",
                        "type":"control",
                        "target":"xui_ui_audio1",
                        "args":[
                            "{page.xui_ui_audio1.setSrc()}",
                            undefined,
                            undefined,
                            "{args[1].src}",
                            "{true}"
                        ],
                        "method":"setSrc",
                        "redirection":"other:callback:call"
                    }
                ])
                .setCustomStyle({
                    "CAPTION":{
                        "font-size":"2em"
                    }
                })
                );
            
            host.xui_ui_dialog6.append(
                xui.create("xui.UI.Audio")
                .setHost(host,"xui_ui_audio1")
                .setAutoTips(false)
                .setDock("bottom")
                .setLeft("1.0833333333333333em")
                .setTop("24.833333333333332em")
                .setWidth("17.333333333333332em")
                .setHeight("2.6666666666666665em")
                .setAutoplay(true)
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
                    "desc":"select bee",
                    "type":"control",
                    "target":"xui_ui_list4",
                    "args":[
                        "bee"
                    ],
                    "method":"fireItemClickEvent"
                }
            ]
        }
    }
});