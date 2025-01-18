function SearchS(){
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
    alert("Расстояние = " +result+ " м");
}

function SearchV(){
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

    let result = first/second
    alert("Скорость = " +result+ "м/c");
}

function SearchVcr(){
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

    let result = (first+second)/2
    alert("Средняя скорость = " +result+ "м/c");
}
function SearchT(){
    let first = parseFloat(document.getElementById('f7').value)
    let second = parseFloat(document.getElementById('f8').value)

    if(isNaN(second) || isNaN(first)){
        alert('Введите числовые значения');
        return;
    }
    if(first <= 0 || second <= 0){
        alert("Введите число > 0")
        return;
    }

    let result = first/second
    alert("Время = " +result+ "с");
}