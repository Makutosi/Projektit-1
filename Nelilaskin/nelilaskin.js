const numbersEl = document.querySelectorAll('.number');
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last-entity-clear');

let haveDot = false;
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';

//Numeropainikkeille click event, tarkistaa myös onko pistettä painettu vai ei.
numbersEl.forEach(number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot) {
            return;
        }

        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    })
});
//Funktio operaattoreille. Käynnistää mathOperationin jos on kaksi eri lukua sekä laskuoperaattori painettu. Muuttaa stringinä saadun arvon floatiksi ja sijoittaa sen muuttujaan result.
operations.forEach(operation => {
    operation.addEventListener('click', (e) =>{
        if(!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1.innerText = dis1Num;
    display2.innerText = '';
    dis2Num = '';
    tempResult.innerText = result;
}
//Laskufunktio joka määrittää ehdot lastOperationille. parseFloat muuntaa stringinä saadut arvot numeroiksi.
function mathOperation(){
    if(lastOperation === '*') {
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
//Yhtäsuurikuin-painikkeen click event.
equals.addEventListener('click', (e) =>{
    if(!dis1Num || !dis2Num) return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = '';
});
//C-painikkeen click-event. Alustaa laskimen.
clear.addEventListener('click', (e)=>{
    display1.innerText = '0';
    display2.innerText = '0';
    haveDot=false;
    dis1Num = '';
    dis2Num = '';
    tempResult.innerText = '';
    result = '';
})
//CE-painikkeen click-event. Ei vielä toimi jostain syystä.
clearLast.addEventListener('click', (e) =>{
    display2.innerText = '';
    dis2Num = '';
});