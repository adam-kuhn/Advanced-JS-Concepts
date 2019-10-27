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
a.say() // this is the a obj
b.say()() // this is the window (function is called inside of a function not on the object, hence the ()())
c.say()() // this is the c obj, because arrow functino forces lexical scope of this
