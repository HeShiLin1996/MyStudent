(function () {
    var number1 = document.querySelector("#number1");
    var number2 = document.querySelector("#number2");
    var style = document.querySelector("#style");
    var oresult = document.querySelector("#result");

    number1.oninput = function () {
        calculate(number1, number2, style, function (result) {
            oresult.textContent = result;
        });
    }
    number2.oninput = function () {
        calculate(number1, number2, style, function (result) {
            oresult.textContent = result;
        });
    }
    style.onchange = function () {
        calculate(number1, number2, style, function (result) {
            oresult.textContent = result;
        });
    }

})();
function calculate(n1, n2, select, callBack) {
    var n1 = parseFloat(n1.value);
    var n2 = parseFloat(n2.value);

    var options = select.options;
    var idx = select.selectedIndex;
    var option = options[idx];
    var operator = option.textContent;

    switch(operator) {
        case '+': {
            result = n1+ n2;
        }break;
        case '-': {
            result = n1 - n2;
        }break;
        case 'x': {
            result = n1 * n2;
        }break;
        case '/': {
            result = n1 / n2;
        }break;
    }

    if(callBack) {
        callBack(result);
    }
}