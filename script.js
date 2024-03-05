
let firstValue;
let secondValue;
let operator = "";

let display = document.querySelector('.display-screen > p')
let numberButtons = document.querySelectorAll('.number');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let operatorButtons = document.querySelectorAll('.operator-button');

clear.addEventListener('click', () => {
    firstValue = undefined;
    secondValue = undefined;
    operator = "";
    updateDisplay(0);
})

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {

        let value = display.textContent;
        if (value === "0") {
            value = button.textContent;
        } else {
            value += button.textContent;
        }
        updateDisplay(value);
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {

        let value = display.textContent;
        if (firstValue === undefined) {
            firstValue = value;
        }

        operator = operatorButton.textContent;
    });
})

equal.addEventListener('click', () => {
    secondValue = display.textContent;

    if (firstValue !== undefined & secondValue !== undefined && operator !== "") {
        operate(firstValue, secondValue, operator);
    } else {
        updateDisplay(0);
    }
    firstValue = undefined;
    secondValue = undefined;
    operator = "";
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    let result = 0;
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '%':
            if (b === 0) {
                result = 0;
            }
            result = divide(a, b);
            break;
    }

    updateDisplay(result.toFixed(2));
    return result;
}

function updateDisplay(number = 0) {
    display.textContent = number;
}
