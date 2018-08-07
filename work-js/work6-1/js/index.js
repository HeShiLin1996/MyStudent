(function () {


    //1.随机产生20个100-200之间的正整数存放到数组中，并求数组中的所有元素最大值、最小值、平均值，然后将各元素的与平均值的差组成一个新数组。
    //提示：Math.random() 方法用于获取 0~1之间的随机数；

    var str = [];
    for (var i = 0; i < 20 ; i++){
        str.push(parseInt(Math.random() * 100 + 100));
    }
    console.log(str);
    var max = str[0],
        min = str[0],
        sum = 0,
        len = str.length;
    for (var j = 0; j < len; j++){
        max = str[j] > max ? str[j] : max;
        min = str[j] < min ? str[j] : min;
        sum += str[j];
    }
    var age = sum/len;
    var num = "";
    num += "最高分:" + max +"\n";
    num += "最低分:" + min +"\n";
    num += "平均分:" + age +"\n";
    console.log(num);

    var value = [];
    for (k = 0; k < len ;k++){
        value.push(parseInt(str[k] - age));
    }
    console.log(value)


    //2.定义一个数组，数组里面包含五名学生的信息（学号，姓名，专业，成绩），按如下要求：
    //a、根据学生成绩按降序排序



    var studens = [
        {number:1001,name:"李易峰",major:"计算机",grade:98},
        {number:1002,name:"黄子韬",major:"计算机",grade:48},
        {number:1003,name:"吴亦凡",major:"计算机",grade:56},
        {number:1004,name:"张杰",major:"计算机",grade:100},
        {number:1005,name:"谢娜",major:"计算机",grade:99}
    ];
    var score = studens.sort(function (a, b) {
        return b.grade - a.grade;
    });
    console.log(score);

    //b、求平均成绩
    var sum = 0;
    var len = studens.length;

    for (var i = 0; i< len ; i++){
        sum += studens[i].grade;
    }
    var average = sum/len;
    console.log(average);

    //c、打印输出成绩最高和成绩最低的学生信息
    var max = score[0];
    var min = score[4];
    console.log(max);
    console.log(min);

    //d、打印输出成绩不及格的学生信息

    var bad = [];

    for (var j = 0; j<len ;j++){

        if (studens[j].grade < 60){
            bad.push(studens[j])
        }
    }
    console.log(bad);




    //3.有一行英文语句，统计其中的单词个数（单词之间以空格分隔），并将每一个单词的第一个字母改为大写。
    var str = "Life is a line segment , the intersection after the separation ."
    var arr = str.split(" ");
    console.log(arr);
    var number = arr.length;
    console.log(number);
    //第一个字母改为大写。
    var en ="";
    for(i = 0; i < number; i++){

        en += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }
    console.log(en);









})()