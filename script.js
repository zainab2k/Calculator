let display = document.getElementById('display');

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    display.textContent += ` ${operator} `;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
    } catch {
        display.textContent = 'Error';
    }
}
