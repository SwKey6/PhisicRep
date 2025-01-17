function CalculatePlotnost(){
    let m = parseFloat(document.getElementById('f1').value)
    let V = parseFloat(document.getElementById('f2').value)

    if (isNaN(m) || isNaN(V)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (m <= 0 || V <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = m/V

    alert("Плотность: " + result + "кг/м³");
}