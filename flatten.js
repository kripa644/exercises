"use strict";
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((acc, cur) => acc.concat(cur)));