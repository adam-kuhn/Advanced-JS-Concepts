if ('1' == 1) {
  console.log('i converted a string to a number')
}

if ('1' === 1) {
} else {
  console.log('i did not converted a string to a number')
}
if (1) {
  console.log('I converted a positive number to true')
}

if (0) {
} else {
  console.log('i converted 0 to false')
}

// Excercise what's the output

console.log(false == '') // true
console.log([] == false) // true
console.log({} == false) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false

// cool I was right :D
