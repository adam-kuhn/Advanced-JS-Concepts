const myGoodPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Yay Promise is good')
  }
  reject(':(')
})

const myBadPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve('Yay Promise is good')
  }
  reject(Error(':('))
})
myGoodPromise.then((result) => {
  console.log(result)
})

myBadPromise.then(() => {
  console.log('bad')
}).catch((err) => {
  console.log(err)
})

// myGoodPromise
//   .then(() => {
//     return 2
//   })
//   .then((result) => {
//     console.log(result)
//     myGoodPromise
//       .then(() => {

//       })
//       .then(() => {
//         throw Error('broken')
//       })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

//

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay))

const promise1 = promisify('P1', 1000)
const promise2 = promisify('P2', 3000)
const promise3 = promisify('P3', 2000)

// Sequentially

promise1
  .then((result) => {
    console.log(result)
    promise2
      .then((result) => {
        console.log(result)
        promise3
          .then((result) => {
            console.log(result)
          })
      })
  })

// ALL
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  })

// Race
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log('race', result))

// ASYNC AWAIT

const sequential = async () => {
  try {
    const result1 = await promise1
    const result2 = await promise2
    const result3 = await promise3
    console.log(result1, result2, result3)
  } catch (err) {
    console.log(err)
  }
}

// sequential()

const awaitAll = async () => {
  const [res1, res2, res3] = await Promise.all([promise1, promise2, promise3])
  console.log('all', res1, res2, res3)
}

// awaitAll()

const forAwaitOf = async (promises) => {
  for await (let promise of promises) {
    const result = await promise
    console.log(result)
  }
}

// forAwaitOf([promise1, promise2, promise3])
