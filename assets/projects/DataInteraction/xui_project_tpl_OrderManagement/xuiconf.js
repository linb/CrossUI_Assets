

// [[Page Appearance
xui.ini.$PageAppearance = {
    "theme" : "default"
};
// ]]Page Appearance

// [[Font Icons CDN

// ]]Font Icons CDN

// [[Develop Env Setting
xui.ini.$DevEnv = {
    "designViewConf" : {
        "width" : 960,
        "height" : 600
    }
};
// ]]Develop Env Setting
// [[Global Functions
xui.$cache.functions = {
    "$APICaller:beforeData":{
        "desc":"exception handler",
        "params":[
            {
                "id":"rspData",
                "type":"Hash",
                "desc":""
            }
        ],
        "actions":[
            {
                "desc":"if returns exception",
                "type":"other",
                "target":"msg",
                "args":[
                    "API returns exception",
                    "{args[0].error.message}"
                ],
                "method":"alert",
                "conditions":[
                    {
                        "left":"{args[0].error}",
                        "symbol":"non-empty",
                        "right":""
                    }
                ],
                "timeout":0,
                "onOK":2
            }
        ]
    },
    "$APICaller:onError":{
        "desc":"error handler",
        "params":[
            {
                "id":"rspData",
                "type":"Hash",
                "desc":""
            }
        ],
        "actions":[
            {
                "desc":"if API raises error",
                "type":"other",
                "target":"msg",
                "args":[
                    "API raises error",
                    "{args[0]}"
                ],
                "method":"alert",
                "onOK":2,
                "timeout":0
            }
        ]
    } 
};
// ]]Global Functions

// [[Constant Data
xui.constant = {
    "request_url":"https://www.crossui.com/demo/OrderManagement/request.php"
};
// ]]Constant Data


// [[Global Data
xui.$cache.data = {
    "$DATE_FORMAT":"gmt"
};
// ]]Global Data
