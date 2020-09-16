let checkFermat = function(a, b, c, n) {
    if (n > 2 && (a ** n + b ** n == c ** n)) {
        console.log("Holy smokes, Fermat was wrong!");
    }
    else {
        console.log("No, that doesn’t work.");
    }
};

checkFermat(2, 3, 4, 3);