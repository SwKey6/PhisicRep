function SearchFtyj(){
    let first = parseFloat(document.getElementById('f1').value)
    let second = parseFloat(document.getElementById('f2').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Сила тяжести = " +result+ " H");
}
function SearchFtr(){
    let first = parseFloat(document.getElementById('f3').value)
    let second = parseFloat(document.getElementById('f4').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Сила трения = " +result+ " H");
}
function SearchFupr(){
    let first = parseFloat(document.getElementById('f5').value)
    let second = parseFloat(document.getElementById('f6').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Сила упругости = " +result+ " H");
}
function SearchFarh(){
    let first = parseFloat(document.getElementById('f7').value)
    let second = parseFloat(document.getElementById('f8').value)
    let third = parseFloat(document.getElementById('f9').value)

    if(isNaN(second) || isNaN(first) || isNaN(third)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0 || third <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second*third
    alert("Сила архимеда = " +result+ " H");
}