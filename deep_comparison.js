"use strict";
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if ((typeof obj1 !== "object" && obj1 === null) || (typeof obj2 !== "object" && obj2 === null)) {
        return false;
    }
    let obj1Key = Object.keys(obj1), obj2Key = Object.keys(obj2);
    if (obj1Key.length !== obj2Key.length) {
        return false;
    }
    for (let key of obj1Key) {
        if (!obj2Key.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));