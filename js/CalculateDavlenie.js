function CalculateDavlenie(){
    let Power = parseFloat(document.getElementById('f1').value)
    let S = parseFloat(document.getElementById('f2').value)

    if (isNaN(Power) || isNaN(S)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (Power <= 0 || S <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = Power/S

    alert("Давление: " + result + "Паскалей");
}
function CalculateDavlenie2(){
    let Ro = parseFloat(document.getElementById('f3').value)
    let S2 = parseFloat(document.getElementById('f4').value)
    let h = parseFloat(document.getElementById('f5').value)

    if (isNaN(Ro) || isNaN(S2) || isNaN(h)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (Ro <= 0 || S2 <= 0 || h <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = Ro*S2*h

    alert("Давление: " + result + "Паскалей");
}