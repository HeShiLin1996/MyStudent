(function () {
    var s = "asdfasdfasdf";
    var s1 = "a";
    console.log(sta(s,s1));
    function sta(string , char)
    {
        var index = 0 , index1 = 0 , count = 0;
        for(var i = 0; i < string.length && ( index1 != -1 ); i++ )
        {
            index1 = string.indexOf(char, index);
            index += 1;
            count = i;
        }
        return count;
    }

    var a = '49238028424';
    var a1 = "";
    console.log(a.replace(/2/g,a1));

    var b = "hello";
    var b1 = '';
    for (var i=b.length;i>=0;i--){
        b1 += b.charAt(i);
    }
    console.log(b1);

        /*4、定义一个网址完整的网址，实现以下需求：
            （1）、取出网址中的网络传输协议的类型（可能为：ftp、http、https等）；
            （2）、取出网址中当前的文件名及后缀名（假设不知道当前的文件名“index”和文件后缀名“html”）；
            （3）、取出网址中的域名部分（baidu.com）。
        */
    var c = "https://zhidao.baidu.com/question/446524975.html";
    if (/http/.test(c)){
        console.log("协议为："+"http");
    }else if (/ftp/.test(c)) {
        console.log("协议为："+"ftp");
    }else if(/https/.test(c)){
        console.log("协议为："+"https");
    }

    if (/.index/.test(c)){
        console
            .log("文件为："+".index");
    }else if(/.html/.test(c)){
        console.log("文件为:"+".html");
    }
    console.log(c.slice(c.search('//')+2,c.search('.com'))+".com");

})();