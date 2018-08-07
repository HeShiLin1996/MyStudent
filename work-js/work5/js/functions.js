function sum(arr,len,callback) {
    arr.sort(function (a, b) {
        return a-b;
    });
    callback && callback(arr[0],arr[len-1]);
}
