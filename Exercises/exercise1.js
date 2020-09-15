let totalLength = 70; 
let rightJustify = function(s) {
    let len = s.length;
    for (let i = 0; i <= (totalLength - len); i++) {
        s = ' ' + s;
    }
    return s;
};

console.log(rightJustify('monty'));