let volumeAnswer; 
let densityAnswer;
let massaAnswer;

function formatNumber(number) {
    if (Number.isInteger(Number(number))) {
        return Math.round(number).toString();
    }
    return Number(number).toFixed(3);
}

// Add loading state handling
function setLoadingState(buttonElement, isLoading) {
    if (isLoading) {
        buttonElement.disabled = true;
        buttonElement.textContent = 'Проверка...';
    } else {
        buttonElement.disabled = false;
        buttonElement.textContent = 'Ответить';
    }
}

function showFeedback(isCorrect, correctAnswer) {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = `feedback ${isCorrect ? 'success' : 'error'}`;
    feedbackElement.textContent = isCorrect ? 
        `Верно! Ответ: ${correctAnswer}` : 
        `Неверно. Правильный ответ: ${correctAnswer}`;
    
    document.body.appendChild(feedbackElement);
    
    setTimeout(() => {
        feedbackElement.remove();
    }, 3000);
}

function generatevolume(){
    let density = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    let massa = (Math.random() * (100 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th1');
    densityConst.innerHTML = "| " + density + ' кг/м3|    ' + massa + ' кг';

    volumeAnswer = formatNumber(massa/density);
}

function GetAnswerVolume() {
    const button = event.target;
    setLoadingState(button, true);

    setTimeout(() => {
        const userAnswer = document.getElementById('th2').value;
        const isCorrect = Math.abs(Number(userAnswer) - Number(volumeAnswer)) < 0.001;
        
        if(isCorrect) {
            alert('Верно, ответ был: ' + volumeAnswer + ' м3');
        } else {
            alert('НЕ верно, ответ был: ' + volumeAnswer + ' м3');
        }

        generatevolume();
        document.getElementById('th2').value = '';
        setLoadingState(button, false);
    }, 500);
}

function generateMassa(){
    let density = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    let volume = (Math.random() * (20 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th3');
    densityConst.innerHTML = "| " + density + ' кг/м3|    ' + volume + ' м3';

    massaAnswer = formatNumber(density * volume);
}

function GetAnswerMassa() {
    const button = event.target;
    setLoadingState(button, true);

    setTimeout(() => {
        const userAnswer = document.getElementById('th4').value;
        const isCorrect = Math.abs(Number(userAnswer) - Number(massaAnswer)) < 0.001;
        
        if(isCorrect) {
            alert('Верно, ответ был: ' + massaAnswer + ' кг');
        } else {
            alert('НЕ верно, ответ был: ' + massaAnswer + ' кг');
        }

        generateMassa();
        document.getElementById('th4').value = '';
        setLoadingState(button, false);
    }, 500);
}


function generateDensity(){
    let massa = Math.floor(Math.random() * (0.5 - 500 + 1)) + 1000;
    let volume = (Math.random() * (20 - 0.1) + 0.1).toFixed(1);

    const densityConst = document.getElementById('th5');
    densityConst.innerHTML = "| " + massa + ' кг|    ' + volume + ' м3';

    densityAnswer = formatNumber(massa/volume);
}

function GetAnswerDensity() {
    const button = event.target;
    setLoadingState(button, true);

    setTimeout(() => {
        const userAnswer = document.getElementById('th6').value;
        const isCorrect = Math.abs(Number(userAnswer) - Number(densityAnswer)) < 0.001;
        
        if(isCorrect) {
            alert('Верно, ответ был: ' + densityAnswer + ' кг/м3');
        } else {
            alert('НЕ верно, ответ был: ' + densityAnswer + ' кг/м3');
        }

        generateDensity();
        document.getElementById('th6').value = '';
        setLoadingState(button, false);
    }, 500);
}

document.querySelectorAll('.input-answer').forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value && isNaN(value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    generatevolume();
    generateMassa();
    generateDensity();
})