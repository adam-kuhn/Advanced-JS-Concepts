
const a = () => {
  const old = 'grandpa'
  return () => {
    const aged = 'dad'
    const notKept = 'asdfaf'
    return () => {
      const young = 'kid'
      return `${old} ${aged} ${young}`
    }
  }
}

// Closure allows functions to access variables even once it has left the environment from which it was declared
console.log(a()()()) // 'grandpa dad kid'
const second = a() // function a() has been called and popped off the stack
const last = second() // the return function is called and popped off the stack
console.log(last()) // 'grandpa dad kid'
// even though the first functions have been called and been popped off the stack because they returned
// the variables are still referenced by lower functions and are accessible to them
// only reference variables are kept around, the notKept variable above will be garbage collected

const delayedFunction = () => {
  setTimeout(() => {
    console.log(text)
  }, 5000)
  const text = 'this works'
}
// becuase of clouser, and setTimeout being async, we are able to define "text"
// after we call setTimeout, because text will be defined by the time the function inside setTimeout will run
// and closure provides access to this variable

delayedFunction()

// MEMORY EFFICIENCY
const heavyDuty = (index) => {
  const bigArray = new Array(6000).fill('this is big')
  console.log('created a massive array')
  return bigArray[index]
}
const heavyDutyEfficent = () => {
  const bigArray = new Array(6000).fill('this is big')
  console.log('created a massive array but only once')
  return (index) => bigArray[index]
}
console.log(heavyDuty(5893))
console.log(heavyDuty(2))
console.log(heavyDuty(244))
const findItemInBigArray = heavyDutyEfficent()
console.log(findItemInBigArray(5893))
console.log(findItemInBigArray(2))
console.log(findItemInBigArray(244))
// with our heavyDutyEfficient function we can use closure to create the big array only once

// CLOSURE EXERCISE
// goal is only set the view once with closure
let view
function initialize () {
  view = 'view is set'
  console.log('created view')
  // return { view }
}
initialize()
initialize()
initialize()

// solution
let viewS
function initializeSolution () {
  let callCount = 0
  return () => {
    if (callCount === 0) {
      viewS = 'solution'
      callCount++
      console.log('solution set')
    }
  }
}
const startOnce = initializeSolution()
startOnce()
startOnce()
startOnce()

// Exercise

const array = [1, 2, 3, 4]

for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('index ' + i) // can't do array[i] because var will be equal it 4 at the end of the last loop, and array[4] is undefined
  }, 3000)
}
// output is item 4, item 4, item 4, item 4
// challenge is to log correct item -> simple solution is to change var to let,
// let creates block scoped variables which works
// but use var and closure to create a solution

// solution

// wrap setTimeout in a function, that is invoked with the current index
for (var j = 0; j < array.length; j++) {
  var item = (index) => {
    setTimeout(function () {
      console.log('item solution at ' + index)
    }, 3000)
  }
  item(j)
}
