import { maxNum } from './math.mjs';


const display = document.querySelector('#display');
document.getElementById('display').disabled = true;

function appendToDisplay(value) {
    if (display.value[0] === '0') {
        display.value = value;
    } else {
        maxNum(value)
    }
}

function clearDisplay() {
    display.value = '0';
}

function toggle() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
}

export { display, appendToDisplay, clearDisplay, toggle };