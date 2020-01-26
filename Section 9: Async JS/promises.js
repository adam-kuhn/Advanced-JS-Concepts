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

  // ASYNC AWAIT
  // async await is syntactical sugar that uses promises under the hood
  // async await can just be a clearer way to right the .then
// instead of passing the returned value from the promise to the .then() func, we assign it to a variable
const somePromise = new Promise((resolve, reject) => {
  resolve('ok ')
})
const getPromiseData = async () => {
  const firstResult = await somePromise
  const another = await somePromise
  console.log(firstResult + another + 'async')
}
getPromiseData()

somePromise.then(result => {
  console.log(result + 'native promise')
})
  .then(() => console.log('when'))

const awaitAllPromises = async () => {
  try {
    // throw Error throw this Error to run cartch block
    const [first, second, third] = await Promise.all([promise1, promise2, promise3])
    console.log(first)
    console.log(second)
    console.log(third)
  } catch (err) {
    console.log('oop')
    console.log(err)
  }
}
awaitAllPromises()

// each level of .then or await results in a longer promise execution as it seems ALL the "first" .then()'s
// get evaluated before the second .then()'s and awaits
// which is why we get

// ok native promise (first)
// it worked (second)
// ok ok async (third)
// when (fourth)

// for await of, is a way to iterate throught an array of promises

const forAwaitOf = async (promises) => {
  for await (let promise of promises) {
    const result = await promise
    console.log('for await', result)
  }
}
const promises = [basicPromise, promise1, promise2, promise3, somePromise]

forAwaitOf(promises)

// Parallel, Race, Sequential
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay))

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000)

async function parallel () {
  const promises = [a(), b(), c()]
  const [output1, output2, output3] = await Promise.all(promises) // the function runs all promises and just awaits for them all to return, which is why it's faster then the sequence function below
  return `parallel is done: ${output1} ${output2} ${output3}`
}

async function race () {
  const promises = [a(), b(), c()]
  const output1 = await Promise.race(promises) // race returns the value of whatever promise is completed first
  return `race is done: ${output1}`
}

async function sequence () { // this function does one promise, then the next, the the next etc.,
  const output1 = await a()
  const output2 = await b()
  const output3 = await c()
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
