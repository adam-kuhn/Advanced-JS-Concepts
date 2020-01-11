// new keyword binding this
// the new keyword binds this to the newly created object
function Person (name, age) {
  this.name = name
  this.age = age
}

const adam = new Person('Adam', 29)
console.log(adam)

// implicit binding
const person = {
  name: 'Joe',
  age: 50,
  greeting () {
    console.log(this.name + ' says hello')
  }
}
person.greeting()

// explicit binding
const personWithoutAName = {
  age: 20,
  greeting: function () {
    console.log('Wow I have a name, it is ' + this.name)
  }.bind(person)
}

console.log(personWithoutAName.greeting())

// arrow function, lexical scoping of this

const anotherPerson = {
  name: 'Ginger',
  age: 10,
  greeting: function () {
    console.log(this.name + ' said hello')
    const response = () => {
      console.log(this.name + ' said I am talking to myself')
    }
    response()
  }
}
anotherPerson.greeting()
