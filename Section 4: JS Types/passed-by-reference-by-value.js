// primitive values are passed by value
// when used multiple times there value is simply copied to a new place in memory

const a = 1
let b = a

b++

console.log(a) // output 1
console.log(b) // output 2

// objects are passed by reference, there values are not copied in memory

const obj1 = {
  a: 1
}
const obj2 = obj1

// to create a copy of an object we can use Object.assign or the spread operator

const obj3 = Object.assign({}, obj1) // the first parameter is the new object to e assigned too, can already be an object with values, the second parameter is the source or the new values to be added
const obj4 = {...obj1}

obj2.a = 3

console.log(obj1) // output {a: 3}
console.log(obj2) // output {a: 3}
console.log(obj3) // output {a: 1}
console.log(obj4) // output {a: 1}

// because objs are passed by reference the object is not copied the original obj as been modified

// proof arrays are object and they are also passed by reference

const array1 = [1, 2, 3]
const array2 = array1

// to create a copy of an array we can use concat or the spread operator
const array3 = [].concat(array1)
const array4 = [...array1]
array2.push('I will change both')

console.log(array1) // outpust [1, 2, 3, I will changeboth]
console.log(array2) // outpust [1, 2, 3, I will changeboth]
console.log(array3) // outpust [1, 2, 3]
console.log(array4) // outpust [1, 2, 3]

// the above array and obj copy examples are only shallow copies.
// if we have nested objects or arrary these will still be passed by reference

const nestedArray = [1, [2, 3]]

const tryToCopyNestedArray = [...nestedArray]

const reallyCopyNestedArray = [nestedArray[0], ...nestedArray[1]] // need to copy the internal array

tryToCopyNestedArray[1][0] = 'new value'

console.log(nestedArray) // output [1, ['new value', 3]]
console.log(tryToCopyNestedArray) // output [1, ['new value', 3]]
console.log(reallyCopyNestedArray) // outpust [1, 2, 3]

const nestedObjects = {
  a: 'a',
  b: {
    boom: 'blam'
  }
}

const tryToCopyObject = {...nestedObjects}
const tryToCopyObjectByAssign = Object.assign({}, nestedObjects)
const reallyCopyNestedObjects = JSON.parse(JSON.stringify(nestedObjects))

tryToCopyObject.b.boom = 'hi'

console.log(nestedObjects) // output {a: 'a', b: {boom: 'hi'}}
console.log(tryToCopyObject) // output {a: 'a', b: {boom: 'hi'}}
console.log(tryToCopyObjectByAssign) // output {a: 'a', b: {boom: 'hi'}}
console.log(reallyCopyNestedObjects) // output {a: 'a', b: {boom: 'blam'}}
