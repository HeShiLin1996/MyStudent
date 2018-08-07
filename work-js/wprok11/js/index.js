(function () {
    var add = getEl('.add_btn'),
        deth = getEl('#deth'),
        mask = getEl("#mask"),
        int = getEl('#int'),
        nam = getEl('#nam'),
        typ = getEl('#typ'),
        sto = getEl('#sto'),
        muc = getEl('#muc'),
        des = getEl("#des"),
        edi = getEl("#edi"),
        tbd = getEl(".tbd"),
        exc = getEl('.exc'),
        tb = getEl('.tb');

    var num = 0,
        day = new Date().getDate(),
        year = new Date().getFullYear(),
        month = new Date().getMonth(),
        hour = new Date().getHours(),
        min = new Date().getMinutes(),
        time = year+'年 '+month+'月 '+day+'日 '+hour+':'+min;

    add.onclick = function () {
        mask.style = 'display : block';
    }
    deth.onclick = function () {
        mask.style = 'display : none';
    };

    edi.onclick = function () {
        if(!int.value||!nam.value||!typ.value||!sto.value||!muc.value||!des.value){
            alert("请输入数据")
        }else {
            tbd.innerHTML += `
            <td>${++num}</td>
            <td>${int.value}</td>
            <td>${nam.value}</td>
            <td>${typ.value}</td>
            <td>${sto.value}</td>
            <td>${muc.value}</td>
            <td>${des.value}</td>
            <td>${time}</td>
            <td>
            <button type='button'class="del" >删除</button>
            <input type='button' value='编辑' class="exc" />
            </td>
`;
            }
            var del = getEl('.del');
            del.onclick = function () {
                tbd.deleteRow(num-1);
            }
    }


})();