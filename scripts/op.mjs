import { display, appendToDisplay, clearDisplay, toggle } from './display.mjs';
import { history } from './history.mjs';


document.querySelectorAll('.calc-buttons-container button').forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.value) {
            case '=':
                try {
                    let nums = display.value;
                    if (eval(display.value) < 1000000000) {
                        display.value = eval(display.value);
                        nums += '=' + eval(display.value);
                        history(nums);
                    } else {
                        alert('слишком большое число');
                    }
                } catch (e) {
                    console.error(e);
                }
                break;
            case '+/-':
                toggle();
                break;
            case '%':
                calcPercentage();
                break;
            case 'AC':
                clearDisplay();
                break;
            default:
                appendToDisplay(button.dataset.value);
        }
    });
});