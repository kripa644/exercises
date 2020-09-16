"use strict";
function isEven(n) {
    return n == 0 ? true :  n == 1 ? false : isEven(n-2);  
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(1));