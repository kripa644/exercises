let oddSum = function (n) {
    if (n % 2 == 0) {
        console.log("The number is even");
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return n + oddSum(n-2);
    }
};

console.log(oddSum(7));