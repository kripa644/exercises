let evenPower = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

let power = function(x, n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n % 2 == 0 ? evenPower(evenPower(x, n/2), 2) : x * power(x, n-1);
    }
}

console.log(power(2,4));