// elf is showing the basics of OOP
// the info about the elf and it's behavoirs are all encapsulated in the same obj
// however if we want more elves this would require us to manually define them,
// but we can use factory functions
const elf = {
  name: 'Elfy',
  weapon: 'spear',
  attack () {
    return `attack with ${this.weapon}`
  }
}
// createNewElf is a factory function
function createNewElf (name, weapon) {
  return {
    name,
    weapon,
    attack () {
      return `attack with ${this.weapon}`
    }
  }
}

const legolas = createNewElf('Legolas', 'bow')
const legolot = createNewElf('Legolots', 'big legs')
console.log(legolas.attack())
console.log(legolot.attack())

// use of this factory function is good but there are still issues
// if we have a lot of elves, the name/weapon will be different for each which is ok
// but the attack method will be the same, and we will be copying this again and again which is not necessary
// good thing JS has protypal inheritance ;)

const elfAbilities = {
  attack () {
    return `attack with ${this.weapon}`
  }
}

const createElf = (name, weapon) => {
  const newElf = Object.create(elfAbilities) // this creates a prototype chain up to elf abilities, so we do not have to store this in all of our elf objects as we did above
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}

const legonone = createElf('Legonone', 'air')

console.log(legonone.attack())
console.log(legonone) // no attack ability on object, it is up the chain
console.log(legolas) // attack ability on the object

// some developers don't like using Object.create() and say that using constructors is closer and
// better of OOP
// Elf is a constructor function, it does not have a return statement
// when using constructors they must be called with the new keyword. This tells JS to point this, to the object that is being created
function Elf (name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf.prototype.attack = function () { // only have one referece to the elf attack ability
  return `attack with ${this.weapon}`
}
// having to use .prototype requies some cognitive overhead and is not recommended, it also makes messier code
// so we can still get closer to OOP

const bob = new Elf('Bob', 'burgers')
const error = Elf('error', 'why?')
console.log(bob.attack())
console.log(bob) // attack does not appear on the bob obj, it is up the chain
console.log(error) // because the new keyword was not used

// the class keyword allows us to get as close as we can to OOP in JS
// it is syntaxical sugar, as we are still just creating objects and using prototypal inheritance underthe hood

class SuperElf {
  constructor (name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack () {
    return 'attacks with super strong' + this.weapon
  }
}

const jim = new SuperElf('Jim', 'maul')

console.log(jim instanceof SuperElf)
console.log(jim) // attack is not on the direct object, it up the chain
console.log(jim.attack())
console.log(jim.__proto__) // points to SuperElf
