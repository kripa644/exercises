let power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

let checkFermat = function(a, b, c, n) {
    if (n > 2 && (power(a, n) + power(b, n) == power(c, n))) {
        console.log("Holy smokes, Fermat was wrong!");
    } else {
        console.log("No, that doesn’t work.");
    }
};

checkFermat(1, 2, 3, 4);