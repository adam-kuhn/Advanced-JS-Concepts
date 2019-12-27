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