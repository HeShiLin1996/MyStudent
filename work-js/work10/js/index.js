setTimeout(function () {
    var mainDiv = document.getElementById('i1'),
        mainDoc = mainDiv.contentDocument,
        footDiv = document.getElementById('i2'),
        footDoc = footDiv.contentDocument;

    footDoc.getElementById('t4').onclick = function () {
        footDoc.getElementById('t1').value = mainDoc.getElementById('m1').value;
        footDoc.getElementById('t2').value = mainDoc.getElementById('m2').value;
        footDoc.getElementById('t3').value = mainDoc.getElementById('m3').value;
    }
},1000)