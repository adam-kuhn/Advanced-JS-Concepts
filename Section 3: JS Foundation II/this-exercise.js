// what will be logged?

const a = {
  name: 'objA',
  say () {
    console.log(this)
  }
}

const b = {
  name: 'objB',
  say () {
    return function () {
      console.log(this)
    }
  }
}

const c = {
  name: 'objC',
  say () {
    return () => {
      console.log(this)
    }
  }
}
a.say()
b.say()()
c.say()()
