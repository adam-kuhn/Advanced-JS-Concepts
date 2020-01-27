// there are three error constructors Error, SyntaxError, ReferenceError
// all errors have 3 properties => message, name, stack (stack shows the trace to whhat lead to the error)
const myError = new Error('my new error')
console.log(myError.message) // my new error
console.log(myError.name) // Error
console.log(myError.stack) // shows the stack the lead to the error

// throw myError

// can throw anything
// throw 'som string'
// console.log('hi') // this won't be logged because of the throw above it

const someFunc = () => {
  const syn = new SyntaxError('dang typo')
  console.log(syn.message)
  console.log(syn.name)
  console.log(syn.stack) // stack shows that the error occurrec insside some func
}

someFunc()

const doubleInside = () => {
  const inside = () => {
    const ref = new ReferenceError('make sure things are defined')
    console.log(ref.message)
    console.log(ref.name)
    console.log(ref.stack) // stack shows that the err
  }
  inside()
}
doubleInside()
