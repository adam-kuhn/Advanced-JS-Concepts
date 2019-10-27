// call()

const wizard = {
  name: 'Yksi',
  health: 100,
  heal (affix1, affix2) {
    this.health += affix1 + affix2
  }
}

const barbarian = {
  name: 'Kaksi',
  health: 80
}

const druid = {
  name: 'Kolme',
  health: 3
}

// call and apply allow us to use the wizard heal() method on are other heros
// call passing parameters as straigh parameters
console.log(barbarian) // barb health 80
wizard.heal.call(barbarian, 20, 30)
console.log(barbarian) // barb health 130

// bind saves a current this context, and returns a function to be called later
// bind takes parameters as arguments, same as call()
const killTheDruid = wizard.heal.bind(druid, -83, -1) // the context of druid is saved as this, but the druid still only has one reference
// therefore the state of the obj is not preserved, which is why wee need 84 points to kill our druid, because of the healing below.

// apply passes parameters as an array
const druidHealing = [30, 50]
console.log(druid) // druid health 3
wizard.heal.apply(druid, druidHealing)
console.log(druid) // druid health 83

killTheDruid()
console.log(druid) // druid health -1 he's dead

// mini exercise - return highest in array
const array = [1, 2, 3]

function getMax (array) {
  const max = Math.max.apply(null, array) // example solution to use apply, because Math.max() typically takes arguments as a list Math.max(arg1, arg2, arg3)
  // therefore we can use apply to pass an array as the arguments to Math.max
  // const max = array.sort()[array.length - 1] // my solution
  console.log(max)
}

getMax(array) // output 3

//function currying with bind
// function currying means only passing some of the parameters to a function

const multiply = (a, b) => a * b

const double = multiply.bind(this, 2)
console.log(double(3)) // output is 6
const triple = multiply.bind(this, 3)
console.log(triple(3)) // outpust 9
// bind has allowed us to create two new functins based on the same one, and only pass one parameter to them
// this is cool!
