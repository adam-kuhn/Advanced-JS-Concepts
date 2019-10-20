console.log(letVar) // Reference Error: letVar is not defined
console.log(constVar) // Reference Error: constVar is not defined
console.log(varVar) // undefined

let letVar = 1
const constVar = 3
var varVar = 'var'
console.log('-------')
console.log(letVar) // 1
console.log(constVar) // 3
console.log(varVar) // 'var'

console.log(arrowFunc) // Reference Error: arrowFunc is not defined
const arrowFunc = () => {
  console.log('arrow')
}
arrowFunc() // arrow

console.log(varFunc()) // varFunc is not a function
console.log(varFunc) // undefined
var varFunc = () => {
  console.log('var funky')
}
varFunc() // var funky

redefiningFunction() // last (this is interesting but should never happen with a simple linter)

function redefiningFunction () {
  return console.log('first')
}

function redefiningFunction () {
  console.log('last')
}
