const number = 100
const string = 'Jay'
let obj1 = {
  value: 'a'
}
let obj2 = {
  value: 'b'
}
let obj3 = obj2

function change (number, string, obj1, obj2) {
  number = number * 10
  string = 'Pete'
  obj1 = obj2
  obj2.value = 'c'
}

change(number, string, obj1, obj2)

// Guess the outputs here before you run the code:
console.log(number) // My guess: 100
console.log(string) // My guess: Jay
console.log(obj1.value) // My Guess: 'a'
// my guesses were correct :) first number and string are primitive and therefore passed by value, and obj1 is never directly modified
// the obj1 inside the change function is a new ob1 in a differnt execution context/variable environment
