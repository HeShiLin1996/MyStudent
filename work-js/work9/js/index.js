function testPhone() {
    var link = document.getElementById('link');
    var navUserAgent = navigator.userAgent.toLowerCase();
    var ismobile = /Mobile/i.test(navUserAgent),
        isphone = /iphone/i.test(navUserAgent);
    if (isphone){
        link.href = './css/phone.css';
        console.log(link);
    }else if (ismobile){
        link.href = './css/mobile.css';
    }else{
        link.href = './css/index.css';
    }
}
testPhone();