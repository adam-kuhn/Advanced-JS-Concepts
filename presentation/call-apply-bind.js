const healer = {
  name: 'Madame Pomfrey',
  health: 99,
  weapon: 'wand',
  heal (a, b) {
    this.health += a + b
  }
}

const barbarian = {
  name: 'Conan',
  weapon: 'axe',
  health: 20,
  attack () {
    console.log(`${this.name} attacked with ${this.weapon}`)
  }
}
const standardHeal = healer.heal.bind(barbarian, 5, 6)
standardHeal()
standardHeal()
standardHeal()
console.log(barbarian.health)

// Currying with Bind
const multiply = (num1, num2) => num1 * num2

const multiplyBy2 = multiply.bind(this, 2)
const multiplyBy3 = multiply.bind(this, 3)
console.log(multiplyBy2(10))
console.log(multiplyBy3(5))
