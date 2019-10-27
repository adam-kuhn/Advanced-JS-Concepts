// fix the below code //
// const character = {
//   name: 'Simon',
//   getCharacter () {
//     return this.name
//   }
// }
// const giveMeTheCharacterNOW = character.getCharacter

// console.log('?', giveMeTheCharacterNOW())

const character = {
  name: 'Simon',
  getCharacter () {
    return this.name
  }
}
const giveMeTheCharacterNOW = character.getCharacter.bind(character)

console.log('?', giveMeTheCharacterNOW())
