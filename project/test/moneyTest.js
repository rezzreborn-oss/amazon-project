import {formatCurrency} from '../scripts/utils/money.js';

//basic test cases (tes normal)
if (formatCurrency(1899) === '18.99') {
    console.log('passed')
} else {
    console.log('failed');
}

//edge cases (tes kelebihan)
if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed');
}

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed');
}

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed')
} else {
    console.log('failed');
}