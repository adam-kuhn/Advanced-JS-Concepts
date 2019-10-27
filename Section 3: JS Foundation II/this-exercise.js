// what will be logged?

const a = {
  say () {
    console.log(this)
  }
}

const b = {
  say () {
    return function () {
      console.log(this)
    }
  }
}

const c = {
  say () {
    return () => {
      console.log(this)
    }
  }
}
a()
b()()
c()()
