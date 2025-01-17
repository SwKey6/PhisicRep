function TranslateEaseCantiMetersOnMeters(){
    let first = parseFloat(document.getElementById('f1').value)
    let second = parseFloat(document.getElementById('f2').value)
    let third = parseFloat(document.getElementById('f3').value)

    if(isNaN(first)){
        alert('Введите число');
        return;
    }
    if(!isNaN(second) || !isNaN(third)){
        alert('Введите только 1 значение');
        return;
    }

    let result = first/100
    alert("В системе СИ = " + result + " метров");
}
function TranslateEaseMiliMetersOnMeters(){
    let first = parseFloat(document.getElementById('f1').value)
    let second = parseFloat(document.getElementById('f2').value)
    let third = parseFloat(document.getElementById('f3').value)

    if(isNaN(second)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(third)){
        alert('Введите только 1 значение');
        return;
    }

    let result = second/1000
    alert("В системе СИ = " + result + " метров");
}
function TranslateEaseKiloMetersOnMeters(){
    let first = parseFloat(document.getElementById('f1').value)
    let second = parseFloat(document.getElementById('f2').value)
    let third = parseFloat(document.getElementById('f3').value)

    if(isNaN(third)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(second)){
        alert('Введите только 1 значение');
        return;
    }

    let result = third*1000
    alert("В системе СИ = " + result + " метров");
}


function TranslateMediumSantiMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f4').value)
    let second = parseFloat(document.getElementById('f5').value)
    let third = parseFloat(document.getElementById('f6').value)
    let fourth = parseFloat(document.getElementById('f7').value)

    if(isNaN(first)){
        alert('Введите число');
        return;
    }
    if(!isNaN(second) || !isNaN(third) || !isNaN(fourth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = first*0.0001
    alert("В системе СИ = " + result + " метров2");
}
function TranslateMediumMiliMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f4').value)
    let second = parseFloat(document.getElementById('f5').value)
    let third = parseFloat(document.getElementById('f6').value)
    let fourth = parseFloat(document.getElementById('f7').value)

    if(isNaN(second)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(third) || !isNaN(fourth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = second*0.000001
    alert("В системе СИ = " + result + " метров2");
}
function TranslateMediumKiloMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f4').value)
    let second = parseFloat(document.getElementById('f5').value)
    let third = parseFloat(document.getElementById('f6').value)
    let fourth = parseFloat(document.getElementById('f7').value)

    if(isNaN(third)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(second) || !isNaN(fourth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = third*1000000
    alert("В системе СИ = " + result + " метров2");
}
function TranslateMediumGektarsOnMetersKV(){
    let first = parseFloat(document.getElementById('f4').value)
    let second = parseFloat(document.getElementById('f5').value)
    let third = parseFloat(document.getElementById('f6').value)
    let fourth = parseFloat(document.getElementById('f7').value)

    if(isNaN(fourth)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(second) || !isNaN(third)){
        alert('Введите только 1 значение');
        return;
    }

    let result = fourth*10000
    alert("В системе СИ = " + result + " метров2");
}


function TranslateHardSantiMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)
    let third = parseFloat(document.getElementById('f10').value)
    let fourth = parseFloat(document.getElementById('f11').value)
    let fiveth = parseFloat(document.getElementById('f12').value)

    if(isNaN(first)){
        alert('Введите число');
        return;
    }
    if(!isNaN(fourth) || !isNaN(second) || !isNaN(third) || !isNaN(fiveth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = first*0.000001
    alert("В системе СИ = " + result + " метров3");
}
function TranslateHardMiliMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)
    let third = parseFloat(document.getElementById('f10').value)
    let fourth = parseFloat(document.getElementById('f11').value)
    let fiveth = parseFloat(document.getElementById('f12').value)

    if(isNaN(second)){
        alert('Введите число');
        return;
    }
    if(!isNaN(fourth) || !isNaN(first) || !isNaN(third) || !isNaN(fiveth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = second*0.000000001
    alert("В системе СИ = " + result + " метров3");
}
function TranslateHardDmMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)
    let third = parseFloat(document.getElementById('f10').value)
    let fourth = parseFloat(document.getElementById('f11').value)
    let fiveth = parseFloat(document.getElementById('f12').value)

    if(isNaN(third)){
        alert('Введите число');
        return;
    }
    if(!isNaN(fourth) || !isNaN(second) || !isNaN(first) || !isNaN(fiveth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = third*0.001
    alert("В системе СИ = " + result + " метров3");
}
function TranslateHardLitersMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)
    let third = parseFloat(document.getElementById('f10').value)
    let fourth = parseFloat(document.getElementById('f11').value)
    let fiveth = parseFloat(document.getElementById('f12').value)

    if(isNaN(fourth)){
        alert('Введите число');
        return;
    }
    if(!isNaN(third) || !isNaN(second) || !isNaN(first) || !isNaN(fiveth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = fourth*0.001
    alert("В системе СИ = " + result + " метров3");
}
function TranslateHardKiloMetersOnMetersKV(){
    let first = parseFloat(document.getElementById('f8').value)
    let second = parseFloat(document.getElementById('f9').value)
    let third = parseFloat(document.getElementById('f10').value)
    let fourth = parseFloat(document.getElementById('f11').value)
    let fiveth = parseFloat(document.getElementById('f12').value)

    if(isNaN(fiveth)){
        alert('Введите число');
        return;
    }
    if(!isNaN(third) || !isNaN(second) || !isNaN(first) || !isNaN(fourth)){
        alert('Введите только 1 значение');
        return;
    }

    let result = fiveth*1000000000
    alert("В системе СИ = " + result + " метров3");
}


function TranslatekNtoN(){
    let first = parseFloat(document.getElementById('f13').value)
    let second = parseFloat(document.getElementById('f14').value)
    let third = parseFloat(document.getElementById('f15').value)

    if(isNaN(first)){
        alert('Введите число');
        return;
    }
    if(!isNaN(second) || !isNaN(third)){
        alert('Введите только 1 значение');
        return;
    }

    let result = first*1000
    alert("В системе СИ = " + result + " Ньютонов");
}
function TranslateMNtoN(){
    let first = parseFloat(document.getElementById('f13').value)
    let second = parseFloat(document.getElementById('f14').value)
    let third = parseFloat(document.getElementById('f15').value)

    if(isNaN(second)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(third)){
        alert('Введите только 1 значение');
        return;
    }

    let result = second*1000000
    alert("В системе СИ = " + result + " Ньютонов");
}
function TranslateGNtoN(){
    let first = parseFloat(document.getElementById('f13').value)
    let second = parseFloat(document.getElementById('f14').value)
    let third = parseFloat(document.getElementById('f15').value)

    if(isNaN(third)){
        alert('Введите число');
        return;
    }
    if(!isNaN(first) || !isNaN(second)){
        alert('Введите только 1 значение');
        return;
    }

    let result = third*100
    alert("В системе СИ = " + result + " Ньютонов");
}