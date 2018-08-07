(function () {
    /*
    1、	随机产生20个100-200之间的正整数存放到数组中，并求数组中的所有元素最大值、最小值、平均值，然后将各元素的与平均值的差组成一个新数组。
提示：Math.random() 方法用于获取 0~1之间的随机数；


2、定义一个数组，数组里面包含五名学生的信息（学号，姓名，专业，成绩），按如下要求：
a、根据学生成绩按降序排序
b、求平均成绩
c、打印输出成绩最高和成绩最低的学生信息
d、打印输出成绩不及格的学生信息


3、有一行英文语句，统计其中的单词个数（单词之间以空格分隔），并将每一个单词的第一个字母改为大写。
     */
    var ma = [];
    var count = 0;
    var th = [];
    for (var i=0;i<20;i++){
        ma[i] = Math.floor(Math.random()*100)+100;
        count+=ma[i];
    }
    for (var i = 0;i<ma.length;i++){
        th[i] = ma[i]-count/20;
    }
    var m = ma.sort(function(a1, a2) {
        return a2 - a1;
    })
    console.log("平均值："+count/20+"\n最大值"+m[0]+"\n最小值"+m[m.length-1]);
    console.log(th);

    var students = [
        {id:1,name:'linda',mm:'math',grade:80},
        {id:2,name:'bob',mm:'English',grade:57},
        {id:3,name:'lisa',mm:'math',grade:90},
        {id:4,name:'bill',mm:'Chinese',grade:50},
        {id:5,name:'kaer',mm:'English',grade:70},
        ];
    var grades = students.sort(function (a, b2){
        return b2.grade-a.grade;
    });
    for (var i = 0;i<grades.length;i++) {
        console.log(grades[i]);
    }
    var count = 0;
    for (var i = 0;i<students.length;i++){
        count +=students[i].grade;
    }
    console.log("\n平均成绩"+count/5);

    var max = students.sort(function (a, b) {
        return a.grade-b.grade;
    });
    console.log("最高分:")
    console.log(max[4]);
    console.log("最低分:")
    console.log(max[0]);
    for(var i=0;i<students.length;i++){
        if(students[i].grade<60){
            console.log(students[i]);
        }
    }

    var str = 'aaa bbb ccc ddd eee fff';
    var array =str.toLowerCase().split(" ");
    var arrs = str.split(' ');
    var sums = 0;
    for (var i = 0;i<arrs.length;i++){
        sums++;
    }
    console.log("单词个数："+sums);

    for (var i = 0; i < array.length; i++){
        array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    var string = array.join(" ");
    console.log(string);

})();