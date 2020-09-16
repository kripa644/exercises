let oddSum = function (n) {
    if (n % 2 == 0) {
        console.log("The number is even");
    }
    else {
        return n == 1 ? 1 : n + oddSum(n-2);
    }
};

console.log(oddSum(7));