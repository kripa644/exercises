"use strict";
function range(start, end, step = 1) {
    let numberArray = [];
    if (step > 0) {  
        for (let i = start; i <= end; i += step) {
            numberArray.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            numberArray.push(i);
        }
    }
    return numberArray;
}
function sum(arr) {
    let sum = 0;
    for(let val of arr) {
        sum += val;
    }
    return sum;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));