// we want a function that multiples by 3 and returns a positive number

const multipleBy3 = (num) => 3 * num
const makePositive = (num) => Math.abs(num)
const addBy2 = (num) => num + 2

const compose = (f, g) => (data) => f(g(data)) // this combines are simple functions above
const pipe = (f, g) => (data) => g(f(data)) // pipe is essentially the same as compose but runs the arguments left to right

const multiplyBy3AndMakePositive = compose(multipleBy3, makePositive)
const value = multiplyBy3AndMakePositive(-4)
console.log(value)
const composedAddAndMultiply = compose(addBy2, multipleBy3)
const pipedAddAndMultiple = pipe(addBy2, multipleBy3)
const composedValue = composedAddAndMultiply(5)
const pipedValue = pipedAddAndMultiple(5)

console.log('composed', composedValue) // 17
console.log('piped', pipedValue) // 21

// this pinciple allows us to string together small easily testible functions together to produce desired outputs
