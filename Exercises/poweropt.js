let power = function(x, n) {
    if (n == 0) {
        return 1;
    }
    else {
        return x * power(x, n-1);
    }
}

console.log(power(2,5));