(function () {
    var id = document.querySelector("#idCard");
    var sub = document.querySelector("#sub");
    var bir = document.querySelector("#birthday");

    sub.onclick = function () {
        var idc = id.value;
        if (idc.length<18 || idc.length>18 ||isNaN(idc)){
            bir.value = "输入错误";
        }else{
            var year = idc.slice(6,10);
            var month = idc.slice(10,12);
            var day = idc.slice(12,14);
            bir.value = year+"年"+month+"月"+day+"日";
        }
    }
    var arr = [4,5,1,2,45,78];
    sum(arr,arr.length,function (min,max) {
        console.log("最大值："+max+"最小值："+min);
    })



})();