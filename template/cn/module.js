// 默认的代码是一个从 xui.Module 派生来的类
// 要确保键值对的值不能包含外部引用
// 子模块不支持 support Dependencies, Required, 以及异步函数和事件
xui.Class('App', 'xui.Module',{
    Instance:{
        // 初始化属性
        properties : {},

        // 初始化函数
        initialize : function(){
        },

        // 初始化内部控件（通过界面编辑器生成的代码，大部分是界面控件）
        // *** 如果您不是非常熟悉XUI框架，请慎重手工改变本函数的代码 ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            return children;
            // ]]Code created by CrossUI RAD Studio
        },
         // 属性影响本模块的部分
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});