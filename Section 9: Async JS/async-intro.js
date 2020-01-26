setTimeout(() => console.log('I was written first'), 0) // prints 4th
Promise.resolve('Job QUEUE!').then(data => console.log(data)) // prints 2nd
setTimeout(() => console.log('what I am last'), 10) // prints last
Promise.resolve('hehe').then(data => console.log(data)) // prints 3rd
console.log('what up') // prints first

// with the addition of Promises to ECMA script, came the Job Queue
// Promises are put to the Job Queue, which has a higher priority then the
// callback queue
