(function () {
  try {
    throw new Error('hi')
  } catch (err) {
    var boo = 10
    var err = 5
    // Guess what the output is here:
    console.log(boo) // 10
    console.log(err)// 5
  }
  // Guess what the output is here:
  console.log(err) // undefined // err is undefined because it is bound to the catch block because it's being passed in as an argument and does not exist
  // outside of the catch block scope The use of var gives us undefined because of hoisting. If we use const we get a reference error
  // see below for reference error with const and with just using a different name as the argument
  console.log(boo) // 10
})();
// different name
(function () {
  try {
    throw new Error('hi')
  } catch (err) {
    var boo1 = 10
    var err1 = 5
    // Guess what the output is here:
    console.log(err.message)
    console.log('b', boo1) // 10
    console.log('b', err1)// 5
  }
  // Guess what the output is here:
  console.log('b', err1) // 5
  console.log('b', boo1) // 10

// CONST
(function () {
  try {
    throw new Error('hi')
  } catch (err) {
    const boo1 = 10
    const err1 = 5
    // Guess what the output is here:
    console.log('c', boo1) // 10
    console.log('c', err1)// 5
  }
  // Guess what the output is here:
  console.log('c', err1) // reference error
  console.log('c', boo1) // reference error because of block scope
})()
