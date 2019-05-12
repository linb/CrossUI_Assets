// 默認的代碼是一個從xui.Module 派生來的類
// 要確保鍵值對的值不能包含外部引用
xui.Class('App', 'xui.Module',{
    Instance:{
        // 依賴的類
        Dependencies:[],
        // 需要的模塊
        Required:[],

        // 初始化屬性
        properties : {},

        //  初始化函數
        initialize : function(){
        },

        // 初始化內部控件（通過界面編輯器生成的代碼，大部分是界面控件）
        // *** 如果您不是非常熟悉XUI框架，請慎重手工改變本函數的代碼***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // 可以自定義哪些界面控件將會被加到父容器中
        customAppend : function(parent, subId, left, top){
            // "return false" 表示默認情況下所有的第一層內部界面控件會被加入到父容器
            return false;
        },
        /*,
        // 屬性影響本模塊的部分
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    // 制定義模塊的默認屬性和事件聲明
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});