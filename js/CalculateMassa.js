function CalculateMassa(){
    let density = parseFloat(document.getElementById('f1').value)
    let volume = parseFloat(document.getElementById('f2').value)

    if (isNaN(density) || isNaN(volume)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (density <= 0 || volume <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = density*volume

    alert("Масса равна: " + result + "кг");
}