// PROBLEM: how would you compare two objects that have the same properties but different locations in memory

const user1 = {name: 'joe', password: 123}
const user2 = {name: 'joe', password: 123}

console.log(user1 === user2) // returns false

// SOLUTION
// just compare the properties
console.log (user1.name === user2.name && user1.password === user2.password) // returns true

// the solution they propose is
console.log(JSON.stringify(user1) === JSON.stringify(user2)) // returns true
// this solution requires that the properties be written in the correct order
// if we have a new user with properties in a different order this will fail

const reversedUser = {password: 123, name: 'joe'}

console.log(JSON.stringify(user1) === JSON.stringify(reversedUser)) // returns false
