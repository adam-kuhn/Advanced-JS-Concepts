const multiplyBasic = (a, b) => a * b
// Currying
// currying wants to change the above function so we only need to pass one argument
const curryMultiplyBase = (a) => (b) => a * b
const multiplyBy3 = curryMultiplyBase(3)
const multiplyBy10 = curryMultiplyBase(10)
console.log(multiplyBy3(8)) // logs 24
console.log(multiplyBy10(8)) // logs 80

// Partial Application
// use some of the parameters, but expects all the parameter in the second call
const multiplyComplex = (a, b, c) => a * b * c
const curriedComplex = (a) => (b) => (c) => a * b * c
// currying results in 3 functions each taking 1 argument
console.log(curriedComplex(2)(5)(3)) // output is 30

const partialComplexWith4 = multiplyComplex.bind(null, 4)
console.log(partialComplexWith4(2, 3)) // logs 24
// partial application allows for the modification of the original function, whereas
// currying required a new definition and functions had to be returned from the original calls
