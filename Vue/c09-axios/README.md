# ajax 请求方式：
1. XMLHttpRequest
2. $.ajax -> 
3. axios  -> 


# axios 默认接收form-data的格式
axios.get(url,options(params{})).then().catch()
axios.post(url,params).then().catch()

- urlencode ->form-data
 1. 引入qs库
 2.将请求的参数包裹在qs.stringify()