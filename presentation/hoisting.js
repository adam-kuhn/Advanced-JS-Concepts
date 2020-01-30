console.log(hoist)
var hoist = 2
console.log(hoist)

function blockScope () {
  try {
    var a = 'A'
    var b = 'B'
  } catch (err) {
    throw Error
  }
  a = 45
  console.log(a, b)
}
blockScope()
