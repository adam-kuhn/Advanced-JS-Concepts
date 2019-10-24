function sum (a, b) {
  console.log('arguments', arguments) // {0: a, 1: b}
  return a + b
}

sum(1, 3)
arguments // undefined because we are in the global object here

const minus = (a, b) => {
  console.log('arguments minus', arguments) // this output is weird
  return a - b
}
minus(1, 3)

// we should not use the arguments key wword as is because it is difficult for
// compilers to optmize our code if we must iterate through the arguments of a function
// we first should convert it to an array. 2 Ways to do this are below

function sum2 (a, b) {
  console.log('sum2', Array.from(arguments)) // directly conver arguments object to an array
  return a + b
}

function sum3 (...args) { // use the spread operator to create an array
  console.log('sum3', args)
  return args[0] + args[1]
}
sum2(2, 4)
sum3(5, 6)
