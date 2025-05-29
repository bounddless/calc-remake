import { display } from './display.mjs';


function maxNum(value) {
    let parts = display.value.split(/([+\-*/])/);

    let lastNumber = parts[parts.length - 1];

    let currentValue = parseInt(lastNumber + value, 10);

    if (currentValue <= 10000000) {
        display.value += value;
    }
}

function calcPercentage() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let pers = display.value + '%'
        display.value = (currentValue / 100).toString();
        history(pers + '=' + display.value)
    }
}

export { maxNum, calcPercentage };