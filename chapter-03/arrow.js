const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };

  console.log(power(2,10));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(3));
console.log(square2(2));