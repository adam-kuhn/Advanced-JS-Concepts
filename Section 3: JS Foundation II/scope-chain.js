const x = 'it is x'
function whatIsX () {
  console.log(x)
}

whatIsX() // output "it is x"
// whatIsX is defined in the global scope therefore the whatIsX
// execution context has access to its parent scope.
// Its parent is the global scope, and therefore this function will output “it is x” correctly

function func1 () {
  const first = 1
  // console.log(three) // reference error Not defined
  return function func2 () {
    const second = 2
    console.log(first) // output 1
    return function func3 () {
      const three = 3
      console.log(x) // output "it is x"
      console.log(first + second + three)
    }
  }
}
func1()()() // because func1 returns a function... and so one, we can just use () to call subsequent functions (ugly but gets the point across)
