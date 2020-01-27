const trySomeStuff = () => {
  try {
    IAmUndefined
  } catch (err) {
    console.log(err) // ReferenceError IAmUndefined is not defined
  } finally {
    console.log('I will always run regardless of what happens')
  }
}

// trySomeStuff()

const nestedTry = () => {
  try {
    try {
      nested
    } catch (e) {
      throw new Error('nested throw')
    }
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log('still doing stuff')
  }
}
// nestedTry()

// try catch blocks only work with synchronous code

const asyncTry = () => {
  try {
    setTimeout(() => {
      gibberishshs
    }, 1000)
  } catch (err) {
    console.log('I WONT RUUUUN!', err) // this does not run (yet NodeJS does pick up the error but that's not handled here)
  }
}
// asyncTry()

// catching promises
// each promise shoudl have it's own catch statement
Promise.resolve()
  .then(() => {
    Promise.resolve()
      .then(() => {
        throw new Error('nested promise')
      }).catch((err) => {
        console.log(err.message)
      })
    return 'somthing to keep the code running' // comment this out to run the lower catch block
  }).then((result) => {
    console.log('1', result)
  }).catch((err) => {
    console.log(err)
  })
// to run a .then(with something) inside it requires the return statement in the above statement otherwise it's undefined

const asyncAwaitTry = async (s) => {
  try {
    await Promise.resolve('wohoo I work')
    await Promise.reject(new Error('I broke'))
  } catch (err) {
    console.log('caught', err)
  }
  console.log('I still run')
}

asyncAwaitTry()
