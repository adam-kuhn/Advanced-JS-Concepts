// THE PROBLEM
// class Character {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'atack with ' + this.weapon
//   }
// }
// //Polymorphism--
// //Extend the Character class to have a Queen class. The output of the below code should be:
// const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen
// // having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

// victoria.attack() // will console.log the attack() method in Character class AND will return another
// // string: 'I am the Victoria of hearts, now bow down to me! '

// SOLUTION
class Character {
  constructor (name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack () {
    return 'attack with ' + this.weapon
  }
  forChildren () {
    return 'not for the queen'
  }
}
class Queen extends Character {
  constructor (name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
  attack () {
    const originalAttack = super.attack() // this calls the original attack on the Character class
    return `${originalAttack} \n I am ${this.name} the Queen of ${this.type}`
  }
}
const victoria = new Queen('Victoria', 'army', 'hearts')

console.log(victoria.attack())

// experiment
class Princess extends Queen {
  constructor (name, weapon, type, age) {
    super(name, weapon, type)
    this.age = age
  }
  princessAttack () {
    return super.attack() // this goes to Queen then to Character
  }
  princessMethod () {
    return super.forChildren() // goes to Character, therefore super just means go up the prototype chain till you find this method
  }
}
const cindy = new Princess('Cindy', 'starts', 'spades', '12')

console.log(cindy.princessAttack())
console.log(cindy.princessMethod())
