(function () {
    var rad = getEl("#admin-r"),
        rpw = getEl("#password-r"),
        rg = getEl("#register");

    rg.onclick = function () {
        register(rad.value,rpw.value);
    };

})();