const btnNumbers = document.querySelectorAll(".num");
const display = document.querySelector('.display p');
const operator = document.querySelectorAll('.operator');
const operators = document.querySelectorAll('.operators button');
let secondVariable = '';
let firstVariable = '';
let answer;
let operation = '';

btnNumbers.forEach((button) => {
    button.addEventListener('click',(e) => {
        if (display.textContent.length < 20) {
            if (operation.length == 2) {
                display.textContent = '';
                operation = operation.slice(0,1);
            } 
            display.textContent += e.target.textContent;
        } 
        if (e.target.textContent == '0' && !firstVariable ) {
            firstVariable = 0;
        }
    });
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '') {
            return;
        }
        if (button.textContent == 'AC') {
            display.textContent = '';
            secondVariable = '';
            firstVariable = '';
        } else if (button.textContent == '1/x') {
            display.textContent = 1 / (+display.textContent);
        } else {
            display.textContent = Math.sqrt(+display.textContent);
        }
    });
});

operators.forEach ((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '' && firstVariable == '') {
            return;
        }
        else if (button.textContent == '=') {
            if (operation.includes('÷')) {
                display.textContent = firstVariable / (+display.textContent);
                answer = +display.textContent;
            } else if (operation.includes('x')) {
                display.textContent = firstVariable * (+display.textContent);
                answer = +display.textContent;
            } else if (operation.includes('-')) {
                display.textContent = firstVariable - (+display.textContent);
                answer = +display.textContent;
            } else if (operation.includes('+')) {
                display.textContent = firstVariable + (+display.textContent);
                answer = +display.textContent;
            }
            operation = '';
            firstVariable = '';
        }
        else if (button.textContent == '÷' && firstVariable == '') {
            firstVariable = +display.textContent;
            display.textContent = '';
            operation = '÷';
        }
        else if (button.textContent == 'x' && firstVariable == '') {
            firstVariable = +display.textContent;
            display.textContent = '';
            operation = 'x';

        }
        else if (button.textContent == '-' && firstVariable == '') {
            firstVariable = +display.textContent;
            display.textContent = '';
            operation = '-';
        }
        else if (button.textContent == '+' && firstVariable == '') {
            firstVariable = +display.textContent;
            display.textContent = '';
            operation = '+'; 
        }
        else if (firstVariable != '') {
            if (operation.includes('+')) {
                display.textContent = firstVariable + (+display.textContent);
                operation = `${button.textContent}2`;
            }
            if (operation.includes('-')) {
                display.textContent = firstVariable - (+display.textContent);
                operation = `${button.textContent}2`;
            }
            if (operation.includes('x')) {
                display.textContent = firstVariable * (+display.textContent);
                operation = `${button.textContent}2`;
            }
            if (operation.includes('÷')) {
                display.textContent = firstVariable / (+display.textContent);
                operation = `${button.textContent}2`;
            }
            firstVariable = +display.textContent;
        }
    });
});
