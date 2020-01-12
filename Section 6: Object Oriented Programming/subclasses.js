// we can use base and sub classes to inherit properties that will be used amongst many classes

class Character {
  constructor (name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack () {
    return `${this.name} attacked with ${this.weapon}`
  }
}

class Elf extends Character {
  constructor (name, weapon, magicType) {
    super(name, weapon) // super calls the constructor of the base class, which is why we pass name and weapon, because Character requires these
    this.magicType = magicType // the this keyword can only be used after the super() call
  }
  magicAttack () {
    return `${this.name} attacked with ${this.magicType}`
  }
}

class DeathKnight extends Character {
  constructor (name, weapon, allegiance) {
    super(name, weapon)
    this.allegiance = allegiance
  }
  praise () {
    return `I live to server the ${this.allegiance}`
  }
}

const gedra = new Elf('Gedra', 'staff', 'fire')
const bob = new DeathKnight('Bob', 'sword', 'the 7 hells')

console.log(gedra) // name and weapon live on this instance but attack and magicAttack do not 
console.log(gedra.attack())
console.log(gedra.magicAttack())
console.log(bob) // name and weapon live on this instance but attack and praise do not 
console.log(bob.attack())
console.log(bob.praise())

// we can use instanceof to determine what is in the prototype chain of any object when using classes
// instance of is simpler there isPrototypeOf
console.log(bob instanceof DeathKnight) // true
console.log(DeathKnight.prototype.isPrototypeOf(bob)) // true
console.log(bob instanceof Character) // true
console.log(Character.prototype.isPrototypeOf(DeathKnight.prototype)) // true
console.log(bob instanceof Elf) // false
