const person = {name: 'Adam', age: 99}

const cloneObj = (obj) => {
  return {...obj}
}

const changeName = (person, newName) => {
  const tmpPerson = cloneObj(person)
  tmpPerson.name = newName
  return tmpPerson
}

const person2 = changeName(person, 'James')
console.log(person, person2) // the original person object is preserved
