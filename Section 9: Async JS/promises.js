const basicPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('it worked')
  }
  reject('it did not work')
})
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, 'HEY')
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'HEY HEYYYY')
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'sorry I was late')
})
Promise.all([promise1, promise2, promise3]).then(result => console.log(result)) // will wait for all promises to finish before running the then block
basicPromise.then(result => {
  // throw Error
  return result + '!'
})
  .then(result => {
    // throw Error // un comment one of the throw Errors to run the catch block
    console.log(result)
  })
  .catch(err => console.log(err, 'ErRoOoR')) // catch only checks for errors above it
  .then(result => {
    // throw Error // catch block does not run
  })
