(function () {
    var lad = getEl("#admin-l"),
        lpw = getEl("#password-l"),
        dio = getEl("#dio"),
        lg = getEl("#login")

        lg.onclick = function () {
        login(lad.value,lpw.value);

        if (dio.checked){
            lpw.textContent = lpw.value;
        }
    }

})();