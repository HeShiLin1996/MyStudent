//把内容串起来
var results="";
var calresults="";
var lastkey="",
    flg = 1,
    results2 = '';
var re1=/^[\*|\/].+/;
var re2=/.+[\*|\/]$/;
var re3=/(\+|-|\*|\/)/;
var re4=/.+[\+|-|\*|\/]{1,99}.+/
var re5=/\d.+/;
function calculater(){
    //避免先进行运算再获取结果
    if (event.srcElement.innerText=="=") {
        //使点击“=”单元格触发的calculater()函数得不到任何结果
        return;
    }
    //获取被点击的单元格的内容并进行累加
    results+=event.srcElement.innerText;
    lastkey=event.srcElement.innerText;
    //输出这个点击的值
    display.innerText=results;
    //c键的清除功能
    if (event.srcElement.innerText=="c") {
        results="";
        display.innerText="0";
        return;
    }

    //只能输入一个运算符
    if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
        return;
    }
    //取反
    if (event.srcElement.innerText=="+/-"&&results!="") {
        if (flg==-1) {
            results=String(results2);
            display.innerText=results;
            flg=-flg;
            return;
        }
        results2=results;
        results = "-"+"("+results+")";
        flg=-flg;
        display.innerText=results;
        return;
    }
    //运算后再运算
    if(lastkey=="="&&event.srcElement.innerText.match(re3)){
        results=calresults;
    }

    if (event.srcElement.id=="display") {
        return;
    }

    if (results.match(re1)) {
        display.innerText="输入错误";
        results="";
        return;
    }
}
function resultscalcaulte(){
    //第一位字符为数字 以=号结尾
    if (results.match(re1)||results.match(re2)) {
        display.innerText="输入错误";
        results="";
        return;
    }
    //计算输入的值 eval计算字符串的值
    calresults=eval(results);
    display.innerText=calresults;
    results="";
    lastkey="=";
}