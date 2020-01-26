setTimeout(() => console.log('I was written first'), 0) // prints 3rd
setTimeout(() => console.log('what I am last'), 10) // prints last
Promise.resolve('hehe').then(data => console.log(data)) // prints 2nd
console.log('what up') // prints first
