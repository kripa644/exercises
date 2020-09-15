let power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

let checkFermat = function(a, b, c, n) {
    if (n ==2 ) {
        console.log("Fermat's theorem holds");
    }
    else if (n >= 2 && (power(a, n) + power(b, n) == power(c, n))) {
        console.log("Holy smokes, Fermat was wrong!");
    }
    else {
        console.log("No, that doesn’t work.");
    }
}

checkFermat(2, 3, 4, 3);