// Exercise: extend the functionality of built in objects

// #1
// Extend the Date object, to have a new method called lastYear()
// lastYear should return the previous year of the date provided
// if no date is provided return, the previous year of the current year
function lastYear () {
  return this.getFullYear() - 1
}

Date.prototype.lastYear = lastYear // it is not advised to directly change the prototype, as it can have unintended affects
// https://stackoverflow.com/questions/53387813/array-prototype-is-read-only-properties-should-not-be-added-no-extend-native
const test1 = new Date()
const test2 = new Date('1900-10-10')

console.log(test1.lastYear())
console.log(test2.lastYear())

// #2
// Modify the .map() to print a ":)" infront of the mapped value
function map () {
  let mappedValues = []
  for (let value of this) {
    mappedValues.push(`:) ${value}`)
  }
  return mappedValues
}

Array.prototype.map = map
const test3 = [1, 2, 3]
console.log(test3.map())

// #3
// How would you be able to create your own .bind() methus using call or apply

// my attempt at solving...almost so my solution did work sort of. If used return
// in the myNameIs function instead of console log I return a value as demonstrated
// by whoAmI2. However bind is supposed to return a function, which is why my original solution
// is not correct
Function.prototype.bind2 = function (objWantingToBorrowMethods) {
  return this.call(objWantingToBorrowMethods, '')
}
// correct solution //
// Function.prototype.bind = function (objWantingToBorrowMethods) {
//   const self = this
//   return function () {
//     self.apply(objWantingToBorrowMethods)
//   }
// }
// OR with arrow function
Function.prototype.bind = function (objWantingToBorrowMethods) {
  return () => {
    this.apply(objWantingToBorrowMethods)
  }
}
const myBaseObject = {
  name: 'James',
  myNameIs () {
    console.log(this.name)
  }
}
const myBaseObject2 = {
  name: 'James',
  myNameIs () {
    return this.name
  }
}
const me = {
  name: 'Adam'
}

const whoAmI = myBaseObject.myNameIs.bind(me)
whoAmI()

const whoAmI2 = myBaseObject2.myNameIs.bind2(me)

console.log('2', whoAmI2)
