// functions in JS can be referred to are sometimes referred to as first class citizens
// 1) functions can be assigned to variables
// 2) functions can be passed as arguements to other functions
// 3) functions can be returned as values from other functions
// these properties lead to or allow for Functional programmin in JS

// functions can be assigned to variables
const varFunction = function () {
  console.log('i am a variable')
}
varFunction()

// functions can be passed as arguements to other functions
function giveMeAFunction (fn) {
  fn()
}
const hereIsAFunction = () => console.log('pass me around')
giveMeAFunction(hereIsAFunction)

// functinos can be returned as values from other functions
function iGiveYouAFunction () {
  return function () {
    console.log('do you want me?')
  }
}
const x = iGiveYouAFunction()
x()
