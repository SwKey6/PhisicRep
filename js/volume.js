function Number1(){
    let value = parseFloat(document.getElementById('f2').value);
    let value2 = parseFloat(document.getElementById('f1').value);

    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value/value2
    alert("Объем = " + result + " м3");
}
function Number2(){
    let value = parseFloat(document.getElementById('f3').value);
    let value2 = parseFloat(document.getElementById('f4').value);
    let value3 = parseFloat(document.getElementById('f5').value);

    if (isNaN(value) || isNaN(value2) || isNaN(value3)) {
        alert('Введите число');
        return;
    }
    let result = value/value2 * value3
    alert("Объем = " + result + " м3");
}
function Number3(){
    let value = parseFloat(document.getElementById('f6').value);
    let value2 = parseFloat(document.getElementById('f7').value);

    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value2-value
    alert("Объем = " + result + " м3");
}
function Number4(){
    let value = parseFloat(document.getElementById('f8').value);
    let value2 = parseFloat(document.getElementById('f9').value);

    if (isNaN(value) || isNaN(value2)) {
        alert('Введите число');
        return;
    }
    let result = value2*value
    alert("Объем = " + result + " м3");
}