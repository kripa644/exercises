 let rightJustify = function(s) {
    let totalLength = 70;
    let len = s.length;
    for (let i = 0; i <= (totalLength - len); i++) {
        s = ' ' + s;
    }
    return s;
};

console.log(rightJustify('monty'));