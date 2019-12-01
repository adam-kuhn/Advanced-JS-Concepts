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
