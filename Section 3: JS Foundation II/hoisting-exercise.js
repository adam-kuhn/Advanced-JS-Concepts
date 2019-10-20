function bigBrother () {
  function littleBrother () {
    return 'it is me!'
  }
  return littleBrother()
  function littleBrother () {
    return 'no me!'
  }
}

// Before running this code, what do you think the output is?
// the ouptput is 'no me!' becuase of hoisting the second littleBrother
// will replace the first littleBrother function
console.log(bigBrother())
