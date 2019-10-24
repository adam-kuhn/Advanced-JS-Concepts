// the below only works because we are not using 'use strict', if use 'use strict' we would get a reference error
// but anyway this is what's happening
// JS does not see var, let or const infront of height, and is not sure what to do
// it checks the parent scope of weird to look for the variable and will continue till it finds it
// or until it reaches the global scope, if it reaches global scope and it is still not defined JS
// will create the height variable for us on global scope
function weird () {
  height = 50
  return height
}
// console.log(height) // reference error becuase weird() has not run yet
console.log(weird()) // output: 50
console.log(height) // output: 50

const alsoWeird = function what () {
  // what() // this will cause a stack overflow :P
  return 'what?'
}
console.log(alsoWeird()) // output: "what"
// console.log(what()) // reference error.
// What is not on global scope but gets defined to its own execution context variable environment
// which is why we can call what inside of what
