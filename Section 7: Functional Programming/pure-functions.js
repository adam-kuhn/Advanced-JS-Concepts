// Pure functions have no side effects
// and always return the same value given the same inputs

const simpleArray = [1, 2, 3]

// these two functions have side effects because they change the value
// of the array that is outside of there function
const mutateArray = array => array.pop()
const mutateArray2 = array => array.forEach(item => array.push('new'))

mutateArray(simpleArray)
mutateArray2(simpleArray)
console.log(simpleArray)
// having shared state like this can lead to problems because different functions are able
// to modify the original array, so depending on the order in which they were called the array
// will change in different ways

// WITHOUT side effects
const original = [1, 2, 3]

const removeLastItem = array => {
  const tempArr = [].concat(array) // creates copy of the array and allows us to make changes, without modify the original
  tempArr.pop()
  return tempArr
}

const addTextToArray = array => {
  const tempArr = [...array] // creates copy of the array and allows us to make changes, without modify the original
  array.forEach(item => tempArr.push(`hi ${item}`))
  return tempArr
}

const doubleArray = array => [...array].map(item => item * 2)

const array1 = removeLastItem(original)
const array2 = addTextToArray(original)
const array3 = doubleArray(original)

console.log(original)
console.log(array1)
console.log(array2)
console.log(array3)

// Referential Transparency
const sum = (num1, num2) => num1 + num2
const double = (num) => num * 2

const number = double(sum(3, 4))
// referential transparency says that we should be able to use a value inplace of a function and we expect to get the same anwer
// given the same inputs we always get the same output
const number2 = double(7)

console.log(number, number2, number === number2)
