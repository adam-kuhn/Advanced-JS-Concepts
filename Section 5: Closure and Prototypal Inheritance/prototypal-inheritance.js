// functions and arrays are connected to objects through prototypal inheritance
// prototypal inheritance means that objects have access to the methods and properties of another object

/// // OBJECT /////
//  ^        ^  //
//  ^        ^  // prototype chain
//  ^        ^  //
// ARRAY     FUNCTION

const myArray = []

/// // OBJECT /////
//  ^        ^  //
//  ^        ^  // prototype chain
//  ^        ^  //
// ARRAY     FUNCTION
//  ^
//  ^   prototype chain
//  ^
// myArray

// use this code in browser console to visualize the properites. NodeJS does not display non-enumberable properties https://stackoverflow.com/questions/51233812/object-prototype-returns-empty-object-in-node
myArray.__proto__ // move up the chain to ARRAY, that all Arrays are created from. This is where all array methods/properties are (.map, .filter etc.,)
myArray.__proto__.__proto__// move up the chain to OBJECT with all methods and properties that all objects share

const myFunction = () => {}

/// // OBJECT /////
//  ^        ^  //
//  ^        ^  // prototype chain
//  ^        ^  //
// ARRAY     FUNCTION
//  ^        ^  //
//  ^        ^  // prototype chain
//  ^        ^  //
// myArray   myFunction

myFunction.__proto__ // move up the chain to FUNCTION which is where all functions are created
myFunction.__proto__.__proto__// move up the chain to OBJECT with all methods and properties that all objects share

const myObject = {}

/// // OBJECT /////
//  ^    ^    ^  //
//  ^    ^    ^  // prototype chain
// ^  myObject ^  //
// ARRAY     FUNCTION
//  ^        ^  //
//  ^        ^  // prototype chain
//  ^        ^  //
// myArray   myFunction

myObject.__proto__ // move up the chain to OBJECT with all the methods and properties that all objects share

// all of these point to the same Object in the prototype chain, from which all are created
// this is why a function, an array, and an object all have the .toString() propertie
myObject.__proto__
myArray.__proto__.__proto__
myFunction.__proto__.__proto__