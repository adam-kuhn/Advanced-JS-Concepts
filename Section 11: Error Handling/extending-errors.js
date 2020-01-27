// can extend error just like any other class/obj
// allows us to have more custom and reusable errors for our program

class DataBaseError extends Error {
  constructor (message) {
    super(message)
    this.message = message
  }
}

const dbError = new DataBaseError('broken db')
console.log(dbError.message) // broken db
console.log(dbError.name) // Error

// throw dbError

// or can set default messages to an error

class PermisionError extends Error {
  constructor () {
    super()
    this.message = 'Permission DENIED!!!'
  }
}

const permError = new PermisionError('this is not the message')
console.log(permError.message) // 'Permission DENIED!!!'
console.log(permError.name) // Error

throw permError
