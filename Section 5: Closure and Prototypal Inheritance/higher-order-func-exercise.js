const multiplyBy = (num1) => (num2) => num1 * num2
// same as above just not one lined
const multiplyByA = function (num1) {
  // multipleBy is a function that returns a function
  // the function that is returned is what does the calculation
  return function (num2) {
    return num1 * num2
  }
}

const multiplyByTwo = multiplyBy(2) // multiplyBy returns a function
// therefore multiplyByTwo is equal to function (num2) {return 2 * num2} at this point and needs to be invoked to run the multiplcation
// example of multiplyByTwo current value
// const multiplyBytwo = function (num2) {
//   return 2 * num2 // the 2 has been assigned from the generic multiplyBy function
// }
const multipleBySix = multiplyBy(6)
console.log(multiplyByTwo(4)) // 8
console.log(multipleBySix(4)) // 24
console.log(multiplyBy(3)(10)) //30, multiplyBy returns a function so can directly call it again

// this is currying as described in section 7
