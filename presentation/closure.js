// ENCAPSULATION
function closureFunction () {
  const myPrivateNumber = 3
  return function () {
    return myPrivateNumber
  }
}

const getPrivateNumber = closureFunction()

console.log(getPrivateNumber())

const sum = (a, fn) => {
  return a + fn()
}
console.log(sum(1, getPrivateNumber))

function mySingleProcess () {
  let count = 0
  return function () {
    if (count === 0) {
      count++
      console.log('I ran')
    }
  }
}

const runProcess = mySingleProcess()
runProcess()
runProcess()
runProcess()
runProcess()

// MEMORY EFFICIENT
const findSomethingInBigArray = () => {
  const massiveArray = new Array(6000).fill('BIG')
  return (idx) => massiveArray[idx]
}
const findEfficient = findSomethingInBigArray()
console.log(findEfficient(5000))
