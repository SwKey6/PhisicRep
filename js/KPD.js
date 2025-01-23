function KPD1(){
    let value = parseFloat(document.getElementById('f1').value);
    let value2 = parseFloat(document.getElementById('f2').value);
    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value/value2 * 100
    alert("КПД = " + result + "%");
}

function KPD2(){
    let value = parseFloat(document.getElementById('f3').value);
    let value2 = parseFloat(document.getElementById('f4').value);
    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = (value-value) / value * 100
    alert("КПД = " + result + "%");
}

function KPD3(){
    let value = parseFloat(document.getElementById('f5').value);
    let value2 = parseFloat(document.getElementById('f6').value);
    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value/value2 * 100
    alert("КПД = " + result + "%");
}

function KPD4(){
    let value = parseFloat(document.getElementById('f7').value);
    let value2 = parseFloat(document.getElementById('f8').value);
    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value/value2 * 100
    alert("КПД = " + result + "%");
}