const addTo80 = (a) => a + 80

console.log(addTo80(4))
console.log(addTo80(4))
console.log(addTo80(4)) // everytime we call this function we have to do the calculation
// that is not very efficient we can use a cache to skip the calculation if it's already been done

const cache = {}
const memoizationAddTo80 = (a) => {
  if (!cache[a]) {
    console.log('do big calculation')
    cache[a] = a + 80
  }
  return cache[a]
}

console.log(memoizationAddTo80(3)) // do big calculation is only logged here
console.log(memoizationAddTo80(3))
console.log(memoizationAddTo80(3))

// can do bette by storing the cache inside of a closure, and take it out of global scope
const memoizationCache = (a) => {
  const cache = {}
  return (b) => {
    if (!cache[b]) {
      console.log('do big calculation')
      cache[b] = b + a
    }
    return cache[b]
  }
}
const memoAddTo80 = memoizationCache(80)
console.log(memoAddTo80(1))
console.log(memoAddTo80(1))
console.log(memoAddTo80(1))
console.log(memoAddTo80(1))