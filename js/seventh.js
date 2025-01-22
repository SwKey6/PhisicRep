let volumeAnswer; // Делаем переменную глобальной

function generatevolume(){
    // Генерируем случайную плотность между 1000 и 9000
    let density = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    // Генерируем случайную массу между 0.1 и 100 кг с одним знаком после запятой
    let massa = (Math.random() * (100 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th1');

    densityConst.innerHTML = density + ' плотность     ' + massa + ' кг';

    volumeAnswer = (massa/density).toFixed(3); // Округляем до 3 знаков после запятой
}

function GetAnswerVolume(){
    const userAnswer = document.getElementById('th2').value; // Получаем значение из input
    if(Number(userAnswer) === Number(volumeAnswer)){ // Сравниваем числа
        alert('Верно, ответ был: ' + volumeAnswer);
        generatevolume();
    }
    else{
        alert('НЕ верно, ответ был: ' + volumeAnswer);
        generatevolume();
    }
}

document.addEventListener('DOMContentLoaded', () => generatevolume());