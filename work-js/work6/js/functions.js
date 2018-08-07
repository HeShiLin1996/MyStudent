function FreshTime() {
    var endtime = new Date("2018,10,1");
    var nowtime = new Date();
    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    d = parseInt(lefttime / 3600 / 24);
    h = parseInt((lefttime / 3600) % 24);
    m = parseInt((lefttime / 60) % 60);
    s = parseInt(lefttime % 60);

    document.querySelector('#day').innerHTML = d;
    document.querySelector('#hour').innerHTML = h;
    document.querySelector('#min').innerHTML = m;
    document.querySelector('#sec').innerHTML = s;
};

function getEl(sel){
    return document.querySelector(sel);
};


function register(admin,password) {
    if(!admin || !password){
        alert("请输入账号或密码");
        return;
    }
    var lgArr ;

    var str = '';
    var rootArr = JSON.parse(localStorage.sms);
    for (var i = 0; i<rootArr.length;i++){
        str += rootArr[i].admin+',';
    }
    if(!localStorage.getItem('sms')){
        lgArr = [];
    }else if(str.match(admin) == admin){
        alert("账号已注册");
        return;
    }else{
        lgArr = JSON.parse(localStorage.getItem('sms'));
        location.href="./index.html";
    }
    lgArr.push({
        admin:admin,
        password:password
    });

    var jsonOb = JSON.stringify(lgArr);
    localStorage.setItem('sms',jsonOb);
}

function login(admin,password) {
    var str = '';
    var par = '';
    var rootArr = JSON.parse(localStorage.sms);
    for (var i = 0; i<rootArr.length;i++){
        str = rootArr[i].admin;
        par = rootArr[i].password;
        var lo = str+par+','
        console.log(lo);
    }
     if (!admin || !password){
        alert("请输入账号或密码");
    }else if(lo.match(admin+password) == admin+password){
         alert("登录成功");
         // location.href="./index.html";
     }else {
        alert("账号或密码不对");
    }

}