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
function CalculateMassa2(){
    let power = parseFloat(document.getElementById('f3').value)
    let speed = parseFloat(document.getElementById('f4').value)

    if (isNaN(power) || isNaN(speed)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (power <= 0 || speed <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = power/speed

    alert("Масса равна: " + result + "кг");
}
function CalculateMassa3(){
    let F = parseFloat(document.getElementById('f5').value)
    let g = parseFloat(document.getElementById('f6').value)

    if (isNaN(F) || isNaN(g)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (F <= 0 || g <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = F/g

    alert("Масса равна: " + result + "кг");
}
function CalculateMassa4(){
    let speedFirts = parseFloat(document.getElementById('f7').value)
    let massaBro = parseFloat(document.getElementById('f8').value)
    let speedBro = parseFloat(document.getElementById('f9').value)

    if (isNaN(speedFirts) || isNaN(massaBro) || isNaN(speedBro)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (speedFirts <= 0 || massaBro <= 0 || speedBro <= 0) {
        alert("Значения должны быть больше нуля");
        return;
    }

    let result = (speedBro/speedFirts)*massaBro

    alert("Масса равна: " + result + "кг");
}