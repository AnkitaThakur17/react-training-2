//JavaScript new math methods

//Math.trunc() maethod
console.log(Math.trunc(4.678))

//negative numbers
console.log(Math.trunc(-8.65))

//strings/non numbers
console.log(Math.trunc("42.5678"))
console.log(Math.trunc("Ankita"))

//Math.sign() method 
console.log(Math.sign(-24))
console.log(Math.sign(23))
console.log(Math.sign(0))

//Math.cbrt() method
console.log(Math.cbrt(27))
console.log(Math.cbrt(-64))

//Math.log2() method
console.log(Math.log2(2))

//isFinite () method
console.log(isFinite(100))

//isNaN methodjs
console.log(isNaN(100))
console.log(isNaN(2.3))
console.log(isNaN(NaN))

//strings
console.log(isNaN("hello"));   // true (not a number)
console.log(isNaN("123"));     // false (convertible to number)
console.log(isNaN("123abc"));  // true (not a valid number)

//special values
console.log(isNaN(undefined)); // true (convert to NaN )
console.log(isNaN(null));      // false (convert to 0)
console.log(isNaN(true));      // false (convert to 1)
console.log(isNaN(false));     // false (convert to 0)