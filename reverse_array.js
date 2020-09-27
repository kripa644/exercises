"use strict";
function reverseArray(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        let temp;
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
      
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(["A", "B", "C"]));
reverseArrayInPlace(arrayValue);
console.log(arrayValue);