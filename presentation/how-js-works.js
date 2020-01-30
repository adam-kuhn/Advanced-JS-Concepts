setTimeout(() => console.log('A'), 0)
Promise.resolve('P1').then((result) => console.log(result))
setTimeout(() => console.log('B'), 3000)
Promise.reject('P2').catch((result) => console.log(result))
console.log('C')

// OUTPUT => 

// Callstack

// Web API

// Job Queue

// Callback Queue
