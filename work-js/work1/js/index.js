(function () {
    //买手机
    var salary=0;
    if(salary > 10000){
        console.log("买个苹果吧");
    }else  if(salary <= 10000&&salary > 6000){
        console.log("买个三星吧");
    }else if(salary <= 6000&&salary>3000){
        console.log("买个蓝绿吧");
    }else  if(salary <=3000&&salary>1000){
        console.log("买个红米吧");
    }else if(salary <=1000&&salary>0){
        console.log("买锤子啊!!")
    }else {
        console.log("输错了吧")
    }

    //1-1000被三整除的数
    for( var i = 1; i<=1000;i++){
        if (i % 3 == 0){
            console.log(i);
        }
    }

    //1-1000被3整除偶数的个数
    var x=0;
    for (var  j = 1;j<=1000; j++) {
        if(j % 3 == 0){
            if(j % 2 == 0){
                x++;
            }
        }
    }
    console.log(x);

    //2000-3000所有闰年
    for (var k = 2000 ; k <= 3000 ; k++){
        if(k % 4 == 0){
            if(k % 100 !=0 || k % 400 ==0){
                console.log(k);
            }
        }
    }

    //9*9乘法表
    var  str='';
    for(var y = 1; y<10;y++){
        str='';
        for(var z = 1;z<=y;z++){
            str+=y+"*"+z+"="+y*z+" ";
        }
       console.log(str);
    }

    //金字塔
    var row=5;
    for(var r=1;r<=row;r++){
        var triangle="";
        for(var space=r;space<row;space++){
            triangle+=" ";
        }
        for(var star=1;star<=2*r-1;star++){
            triangle+="*";
        }
        console.log(triangle);
    }

    //菱形
    var  row=5;
    for(var r=1;r<=row;r++){
        var triangle="";
        for(var space=r;space<row;space++){
            triangle+=" ";
        }
        for(var star=1;star<=2*r-1;star++){
            triangle+="*";
        }
        console.log(triangle);
    }
    var row=5;
    for(var r=row;r>0;r--){
        var triangle="";
        for(var space=r;space<row;space++){
            triangle+=" ";
        }
        for(var star=1;star<=2*r-1;star++){
            triangle+="*";
        }
        console.log(triangle);
    }

    //计算第几天
    console.log(getDays(4,1));
    function  getDays(month,day){
        //先将每个月份的天数存入数组中
        var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //将输入月份之前月份的天数累加
        for (var i = 0; i < month - 1; i++) {
            day += arr[i];
        }
        return day;
        console.log()
    };


        var count=0,days=10,months=5;
        switch (months){
            case 12:{count+=31;};
            case 11:{count+=30;};
            case 10:{count+=31;};
            case 9:{count+=30;};
            case 8:{count+=31;};
            case 7:{count+=31;};
            case 6:{count+=30;};
            case 5:{count+=31;};
            case 4:{count+=30;};
            case 3:{count+=31;};
            case 2:{count+=28;};
            case 1:{count;};
            var  dayss=count+days;
            console.log(dayss);
        }

    })();
