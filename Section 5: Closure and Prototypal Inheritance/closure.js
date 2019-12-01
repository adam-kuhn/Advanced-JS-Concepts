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
const heavyDuty= (index) => {
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
