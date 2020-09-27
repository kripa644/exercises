"use strict";
function arrayToList(arr) {
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }  
    return arr;
}

function prepend(val, list) {
    let newList = {};
    newList = {value: val, rest: list};
    return newList;
}
function nth(list, num) {
    if (!list) return undefined;
    else if (num === 0) return list.value;
    else return nth(list.rest, num - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));