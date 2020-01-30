const person = {
  age: 20,
  name: 'Joe',
  getName () {
    return this.name
  }
}

console.log(person.getName())

// arrow functions do not have their own this
// when functions are invoked there is an execution context which creates the "this" and binds it to that function
