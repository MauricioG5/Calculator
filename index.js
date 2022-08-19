const display = document.getElementById("display");
let startText = true;
let firstNumber = '';
let secondNumber = '';

function clearDisplay() {
    display.textContent = '';
    startText = false;
}
function equal() {
    if (isValid()) {
        display.textContent = calculate();
    } else {
        display.textContent = 'Insert a valid expression';
        startText = true;
    }
}
function calculate() {

    getValues();
    switch (symbol) {
        case '+':
            return parseInt(firstNumber) + parseInt(secondNumber);
            break;
            case '-':
                return parseInt(firstNumber) - parseInt(secondNumber);
                break;
        default:
            startText = true;
            return 'error';
    }
}

function getValues(){
    const input = display.textContent;
    const symbols = ['+', '-', ',', '/'];

    let firstFound = false;
    let symbol;
    let cont = 0;
    for (let c of input) {
        if (symbols.includes(c)) {
            console.log('Encontre un simbolo en la posicion ' + cont);
            symbol = c;
            firstFound = true;
        } else {
            if (firstFound) {
                secondNumber += c;
            } else {
                firstNumber += c;
            }
        }
        cont++;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(symbol);
    calculate(firtstNumber, secondNumber, symbol);
}

//Es invalido si hay dos signos seguidos
//Es invalido si hay una division por cero
//Es invalido si se pasa de cierta longitud
function isValid() {
    return true;
}

function plus() {
    if (startText) {
        display.textContent = '+';
    } else {
        display.textContent += '+';
    }
    startText = false;
}
function minus() {
    if (startText) {
        display.textContent = '-';
    } else {
        display.textContent += '-';
    }
    startText = false;
}
function multiplicationSign() {
    if (startText) {
        display.textContent = '*';
    } else {
        display.textContent += '*';
    }
    startText = false;
}
function divisionSign() {
    if (startText) {
        display.textContent = '/';
    } else {
        display.textContent += '/';
    }
    startText = false;
}
function one() {
    if (startText) {
        display.textContent = '1';
    } else {
        display.textContent += '1';
    }
    startText = false;
}
function two() {
    if (startText) {
        display.textContent = '2';
    } else {
        display.textContent += '2';
    }
    startText = false;
}
function three() {
    if (startText) {
        display.textContent = '3';
    } else {
        display.textContent += '3';
    }
    startText = false;
}
function four() {
    if (startText) {
        display.textContent = '4';
    } else {
        display.textContent += '4';
    }
    startText = false;
}
function five() {
    if (startText) {
        display.textContent = '5';
    } else {
        display.textContent += '5';
    }
    startText = false;
}
function six() {
    if (startText) {
        display.textContent = '6';
    } else {
        display.textContent += '6';
    }
    startText = false;
}
function seven() {
    if (startText) {
        display.textContent = '7';
    } else {
        display.textContent += '7';
    }
    startText = false;
}
function eight() {
    if (startText) {
        display.textContent = '8';
    } else {
        display.textContent += '8';
    }
    startText = false;
}
function nine() {
    if (startText) {
        display.textContent = '9';
    } else {
        display.textContent += '9';
    }
    startText = false;
}
function zero() {
    if (startText) {
        display.textContent = '0';
    } else {
        display.textContent += '0';
    }
}
