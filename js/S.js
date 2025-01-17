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