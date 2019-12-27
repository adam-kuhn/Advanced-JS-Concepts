// manually creating a prototype chain with __proto__ is depecrated and should NEVER be used
// lots of perfomance issues. This is good for getting an understanding of the the prototype chain though
// the course will show a better way to do this later on in the object orientated section
const bigMonster = {
  name: 'Trogdor',
  magicPowers: true,
  fight () {
    return 5
  },
  battleCry () {
    const intro = `I am ${this.name} `
    let message = 'and if you attack me you will be sorry...'
    if (this.magicPowers) {
      message = 'and my magic will destroy you'
    }
    return console.log(intro + message)
  }
}
const littleMonster = {
  name: 'Pluck',
  fight () {
    return 1
  }
}

bigMonster.battleCry()
// if we want littleMonster to have access to propertes from big monster we can use bind as we learned before
const talkingLittleMonster = bigMonster.battleCry.bind(littleMonster)
talkingLittleMonster() // I am Pluck and if you attack me you will be sorry...
// but if we want to access all of the big monster properties that we do not have we can create a prototype chain

// create a proto type chain from littleMonster up to bigMonster
littleMonster.__proto__ = bigMonster // seems like creating prototypes this was is depecrated https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

littleMonster.battleCry() // I am Pluck and my magic will destroy you

console.log(bigMonster.isPrototypeOf(littleMonster)) // true. bigMonster is used as a prototype to create littleMonster
console.log(littleMonster.isPrototypeOf(bigMonster)) // false

// looping over an objects properties shows how littleMonster has access to bigMonster properties
for (let prop in littleMonster) {
  console.log(prop) // name, fight, magicPowers, battleCry
}
// use .hasOwnProperty() to show that the lizard object does not actually change. It just has access to methods it has inherited
for (let prop in littleMonster) {
  if (littleMonster.hasOwnProperty(prop)) {
    console.log(prop) // name, fight
  }
}
