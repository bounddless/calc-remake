import { display, appendToDisplay, clearDisplay, toggle } from './display.mjs';
import { maxNum, calcPercentage } from './math.mjs';
import { history } from './history.mjs';
import './op.mjs';
import { checkbox } from './utils.mjs';

document.getElementById('toogleTheme').addEventListener('click', checkbox)
// document.getElementById('toogleTheme').addEventListener('change', checkbox);