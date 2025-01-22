let volumeAnswer; 
let densityAnswer;
let massaAnswer;

function formatNumber(number) {
    if (Number.isInteger(Number(number))) {
        return Math.round(number).toString();
    }
    return Number(number).toFixed(3);
}

function generatevolume(){
    let density = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    let massa = (Math.random() * (100 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th1');
    densityConst.innerHTML = "| " + density + ' плотность|    ' + massa + ' кг';

    volumeAnswer = formatNumber(massa/density);
}

function GetAnswerVolume(){
    const userAnswer = document.getElementById('th2').value;
    // Добавляем проверку с погрешностью
    if(Math.abs(Number(userAnswer) - Number(volumeAnswer)) < 0.001){
        alert('Верно, ответ был: ' + volumeAnswer);
        generatevolume();
    }
    else{
        alert('НЕ верно, ответ был: ' + volumeAnswer);
        generatevolume();
    }
}

function generateMassa(){
    let density = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    let volume = (Math.random() * (20 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th3');
    densityConst.innerHTML = "| " + density + ' плотность|    ' + volume + ' м3';

    massaAnswer = formatNumber(density * volume);
}

function GetAnswerMassa(){
    const userAnswer = document.getElementById('th4').value;
    if(Math.abs(Number(userAnswer) - Number(massaAnswer)) < 0.001){
        alert('Верно, ответ был: ' + massaAnswer);
        generateMassa();
    }
    else{
        alert('НЕ верно, ответ был: ' + massaAnswer);
        generateMassa();
    }
}

function generateDensity(){
    let massa = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    let volume = (Math.random() * (20 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th5');
    densityConst.innerHTML = "| " + massa + ' масса|    ' + volume + ' м3';

    densityAnswer = formatNumber(massa/volume);
}

function GetAnswerDensity(){
    const userAnswer = document.getElementById('th6').value;
    if(Math.abs(Number(userAnswer) - Number(densityAnswer)) < 0.001){
        alert('Верно, ответ был: ' + densityAnswer);
        generateDensity();
    }
    else{
        alert('НЕ верно, ответ был: ' + densityAnswer);
        generateDensity();
    }
}

document.addEventListener('DOMContentLoaded', () => generatevolume());
document.addEventListener('DOMContentLoaded', () => generateMassa());
document.addEventListener('DOMContentLoaded', () => generateDensity());