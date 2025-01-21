// Функция для расчета средней кинетической энергии молекул идеального газа
function CalculateKineticEnergy() {
    let T = parseFloat(document.getElementById('f1').value); // Температура в Кельвинах
    let k_B = 1.38e-23; // Постоянная Больцмана в Дж/К

    if (isNaN(T)) {
        alert("Пожалуйста, введите корректную температуру");
        return;
    }

    if (T <= 0) {
        alert("Температура должна быть больше нуля");
        return;
    }

    let E_k = (3 / 2) * k_B * T; // Средняя кинетическая энергия молекулы в Дж
    alert("Средняя кинетическая энергия молекулы: " + E_k + " Дж");
}

// Функция для расчета средней скорости молекул газа
function CalculateAverageSpeed() {
    let T = parseFloat(document.getElementById('f2').value); // Температура в Кельвинах
    let m = parseFloat(document.getElementById('f3').value); // Масса молекулы в килограммах

    if (isNaN(T) || isNaN(m)) {
        alert("Пожалуйста, введите корректные числовые значения для температуры и массы");
        return;
    }

    if (T <= 0 || m <= 0) {
        alert("Значения температуры и массы должны быть больше нуля");
        return;
    }

    let k_B = 1.38e-23; // Постоянная Больцмана в Дж/К
    let result = (3 * k_B * T) / m; // Частичная средняя скорость
    let v_avg = Math.sqrt(result); // Средняя квадратная скорость молекул в м/с

    console.log("Результат частичного вычисления: " + result);  // Для отладки

    alert("Средняя скорость молекул: " + v_avg.toFixed(2) + " м/с");
}

// Функция для расчета числа молекул в газе по уравнению состояния идеального газа
function CalculateNumberOfMolecules() {
    let p = parseFloat(document.getElementById('f4').value); // Давление в паскалях
    let V = parseFloat(document.getElementById('f5').value); // Объем в кубических метрах
    let T = parseFloat(document.getElementById('f6').value); // Температура в Кельвинах

    if (isNaN(p) || isNaN(V) || isNaN(T)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (p <= 0 || V <= 0 || T <= 0) {
        alert("Значения давления, объема и температуры должны быть больше нуля");
        return;
    }

    let R = 8.31; // Универсальная газовая постоянная в Дж/(моль·К)
    let n = (p * V) / (R * T); // Количество вещества в молях
    let N = n * 6.022e23; // Число молекул в газе (по числу Авогадро)
    alert("Число молекул в газе: " + N.toFixed(2));
}

// Функция для расчета плотности газа (по МКТ)
function CalculateDensityFromMKT() {
    let p = parseFloat(document.getElementById('f7').value); // Давление в паскалях
    let T = parseFloat(document.getElementById('f8').value); // Температура в Кельвинах
    let m = parseFloat(document.getElementById('f9').value); // Масса молекулы газа в килограммах

    if (isNaN(p) || isNaN(T) || isNaN(m)) {
        alert("Пожалуйста, введите корректные числовые значения");
        return;
    }

    if (p <= 0 || T <= 0 || m <= 0) {
        alert("Значения давления, температуры и массы должны быть больше нуля");
        return;
    }

    let k_B = 1.38e-23; // Постоянная Больцмана в Дж/К
    let n = p / (k_B * T); // Плотность молекул в м⁻³
    let density = n * m; // Плотность газа в кг/м³
    alert("Плотность газа по МКТ: " + density.toFixed(2) + " кг/м³");
}
