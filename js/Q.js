function SearchQ1(){
    let first = parseFloat(document.getElementById('f1').value)
    let second = parseFloat(document.getElementById('f2').value)
    let third = parseFloat(document.getElementById('f3').value)

    if(isNaN(second) || isNaN(first) || isNaN(third)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0 || third <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second*third
    alert("Количество теплоты = " +result+ " Дж");
}

function SearchQ2(){
    let first = parseFloat(document.getElementById('f4').value)
    let second = parseFloat(document.getElementById('f5').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Количество теплоты = " +result+ " Дж");
}

function SearchQ3(){
    let first = parseFloat(document.getElementById('f6').value)
    let second = parseFloat(document.getElementById('f7').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Количество теплоты = " +result+ " Дж");
}

function SearchQ4(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first*second
    alert("Количество теплоты = " +result+ " Дж");
}