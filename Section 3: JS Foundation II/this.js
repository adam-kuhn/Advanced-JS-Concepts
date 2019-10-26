// this: definition => is the object the function is a property of
// Two major benefits of this
// 1)  this gives methods access to their objects
// 2) We can execute the same code for multiple objects

// The this keyword is NOT lexically scope, it does not matter where it is written,
// but where it was called. This is dynamically is scoped
global.x = 'x'

function whatIsThisAPropertyOf () {
  console.log(this)
}

whatIsThisAPropertyOf() // output global/window because whatIsThisAPrpoerty of is a function that is a property of the global variable, therefore THIS is global

const singer = {
  name: 'Joe',
  sings: function () {
    return 'la de daa sings ' + this.name
  },
  singLouder () {
    return this.sings() + '!!!!!'
  }
}
const athlete = {
  sport: 'running',
  name: 'Adam',
  portfolio () { // I have not seen this syntax before
    return this.name + ' is interested in ' + this.sport
  }
}
const programmer = {
  level: 'junior',
  resume: () => {
    console.log(this) // output {}
    // this.level = 'this will print out'
    return 'I am a ' + this.level // with an arrow function this is assigned based on lexical scope
    // meaning that this is only referencing what is inside the resume function, which is nothing
  }
}

console.log(singer.sings())
singer.name = 'not Joe'
console.log(singer.sings())
// singer is the object that the sings function is a property of
// therefore this is singer, and we can always return the correct name of the singer
// in the sings function

console.log(singer.singLouder())

console.log(athlete.portfolio())
console.log(programmer.resume()) // outpust I am a undefined

// Benefit 2
function importantPerson () {
  console.log(this.name + 'is Important')
}
global.name = 'global name'

// var name = 'global name' // based on the example this variable here should be assigned to global variable
// therefore when importantPerson() is called in global scope it should reference name 'global name' but it does not
// this works in the terminal. But to get this to work in nodeJS it appears we actually have to add the value to the global obj
// by using global.name, this (I think) makes sense as to why it works when we don't use a var/let/const, because without
// those keywords it's put directy onto the global object

const person = {
  name: 'Elisa',
  importantPerson: importantPerson
}

const personTwo = {
  name: 'Kyle',
  importantPerson: importantPerson
}

importantPerson()
person.importantPerson() // output Elisa is Important
personTwo.importantPerson() // output Kyle is Important

const obj1 = {
  name: 'Billy',
  sing () {
    console.log('a', this) // this references obj1
    const anotherFunc = function () {
      // console.log('b', this) // this referecne global object, because it is the function sing() that calls this, not the object
    }
    anotherFunc()
  }
}

obj1.sing()

const obj2 = {
  name: 'Billy2',
  sing () {
    console.log('a', this) // this references obj2
    const anotherFunc = () => {
      console.log('b', this) // arrow func is lexically scope so this is also obj2
    }
    anotherFunc()
  }
}

obj2.sing()

//  before arrow functions we could use bind() or assign this to the obj itself
const obj3Bind = {
  name: 'Billy Bound',
  sing () {
    console.log('a', this) // this references obj3Bind
    const anotherFunc = function () {
      console.log('b', this)
    }
    return anotherFunc.bind(this) // because this is outside of anotherFunc() it is referenceing obj3Bind
    // and now that it is bound to anotherFunc, when another func is called it will reference obj3Bind
  }
}

obj3Bind.sing()() // need to call the returned function hence the ()()

const obj4Self = {
  name: 'Billy Self',
  sing () {
    console.log('a', this) // this references obj3Bind
    const self = this // save a reference of this/obj4Self to a variable and use that in the function
    const anotherFunc = function () {
      console.log('b', self)
    }
    anotherFunc()
  }
}

obj4Self.sing()
