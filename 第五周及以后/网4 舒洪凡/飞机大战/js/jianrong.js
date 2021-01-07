/* ********获取样式****************  获取样式 ************获取样式****************获取样式***********获取样式*****   */

//获取元素样式的兼容函数--注：这里ie支持的写前面，因为ie如果遇见不支持的，就不会执行后面；
        function getStyle(obj,attr){
            return  obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];;
        };

/* ********类名****************  类名 ************类名*****************类名***********类名***********类名******     */
//ie9以下给一次对象添加多个类名（如果检测到有，就不管，若果没有这个类名，则添加进去）
        function addClassName2(obj,attr){
            var aClassName=obj.className,
                arr=aClassName.split(" ");
            console.log(aClassName)
            console.log(arr)//返回值：[""] length：1；
            /* 注：1、当一个空字符串被切成数组时，这个空字符串会作为数组中的唯一的一个值；
                 2、一个字符串如果被切成数组，在split()方法的参数在字符串中没有找到，数组的值是有整个字符串组成的唯一个值；
            */
            var target=attr.split(" ");
            var Len=target.length;
            for(var i=0;i<Len;i++){
                var val=target[i];
                if(arr.indexOf(val)!=-1){continue;}
                arr.push(val);
            };
            var newClassName=arr.join(" ");
            obj.className=newClassName;
        };
//ie9以下移除类名
        function removeClassName(obj,attr){
            var aClassName=obj.className,
                arr=aClassName.split(" ");
            arrLen=arr.length;
            var target=attr.split(" "),
                targetLen=target.length;
            for(var i=arrLen-1;i>=0;i--){
                /*这里的循环使用从后往前因为：
                如果是从前往后，被查找到的元素被删除后，
                后一位值就补位，当i++时候，就跳过了刚才补位的值；
                */
                for(var j=0;j<targetLen;j++){
                    if(arr[i]===target[j]){
                        arr.splice(i,1);
                        break;
                        /*这里使用跳出循环：1、找到了这个类名，删除了任务就完成了，
                                           因为用户不会一次添加两个相同的类名，就不需要继续查找；
                                           2、因为数据被删除了，外层循环的数据就不存在了；
                        * */
                    };
                }
            }
            var str=arr.join(" ");
            obj.className=str;
        }

/* ********事件****************  事件 ************事件*****************事件***********事件***********事件******     */
//引入注册事件的兼容函数
        function addEvent(obj,eType,eCallback) {
            return obj.attachEvent?obj.attachEvent("on"+eType,eCallback):obj.addEventListener(eType,eCallback);
        };
//处理兼容封装注册事件的函数
        function removeEvent(obj,eType,eCallback) {
            return obj.detachEvent?obj.detachEvent("on"+eType,eCallback):obj.removeEventListener(eType,eCallback);
        };
/* ********动画****************  动画 ************动画*****************动画***********动画***********动画******     */
//请求动画的兼容
        window.requestAnimationFrame = window.requestAnimationFrame || function(fn){
            return setTimeout(fn,1000/60);
        };
//停止动画的兼容
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
//获取元素到文档边沿的距离
        function offsetVal(ele) {
            var obj={
                top:0,
                left:0
            };
            while(ele!=document.body){
                obj.left+=ele.offsetLeft+ele.offsetParent.clientLeft;
                obj.top+=ele.offsetTop+ele.offsetParent.clientTop;
                ele=ele.offsetParent;
            };
            return obj;
        };
        /*老师的兼容
        function getOffset(ele){
            var obj = {
                top : 0,
                left : 0
            };
            while (ele != document.body) {
                obj.left += ele.offsetLeft + ele.offsetParent.clientLeft;
                obj.top += ele.offsetTop + ele.offsetParent.clientTop;
                ele = ele.offsetParent;
            }
            return obj;
        };
        */
//滚轮时间的兼容写法
        function mouseWheel(dom,eFn) {
            var type;
            //判断浏览器是不是火狐 dom.onmousewheel===null的意思是找到了这个属性但是没有赋值，在dom0级事件没有赋值就是null;
            dom.onmousewheel===null? type="mousewheel":type="DOMMouseScroll";
            function fn(e){
                e=e||window.event;
                //判断滚轮的方向并同步值
                var d=e.wheelDelta/120||-e.detail/3;
                // eFn(e,d);//因为这里的this指向window，但是我们需要给谁注册就指向谁
                if(Fn.call(dom,e,d)==false){//这一步是为什么判断是否需要阻止事件源的默认滚轮事件，这里指的是document;
                    e.preventDefault?e.preventDefault():returnValue=false;
                } ;
            };
            // //判断IE浏览器，好决定使用哪一种绑定方式

            dom.addEventListener? dom.addEventListener(type,fn): dom.attachEvent("on"+type,fn);
        };
//深浅拷贝的封装
    function copy(obj,deep) {
        var o;
        o=Array.isArray(obj)?[]:{};//判断这个需要拷贝的对象数数组还是对象
        for(let key in obj){//遍历获取里面的值
            if(deep&& typeof obj[key]==="object"){//如果是深拷贝，并且里面的依旧是引用的数据类型，就反复执行这个函数。知道类型是基础的
                o[key]= copy(obj[key],deep)
            }else {
                o[key]=obj[key]//浅拷贝只要里面的第一层就可以了
            }
        }
        return o;
    };

