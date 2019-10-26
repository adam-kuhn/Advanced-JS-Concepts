// function scope, a new scope is created for functions only
// therefore variables defined inside if for for loop blocks can be accessed outside of those block
// most programming languages don't do this, most use block scope

function functionScope () {
  if (true) {
    var notBlockScope = 'ok'
  }
  return notBlockScope
}

console.log(functionScope()) // output "ok"

// to use Block scope in JS we can use let and const as these are blocked scoped variables
// this makes sense based on what we know about hoisting

function blockScope () {
  if (true) {
    const blockScopedVariable = 'blocked'
    let cantGetMe = 'oh no'
  }
  return blockScopedVariable + cantGetMe
}

// console.log(blockScope()) // reference error blockScopeVariable and cantGetMe are Not Defined

function loopVar () {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('last i:', i)
}

loopVar() // 0, 1, 2, 3, 4, last i: 5 // therefore if we wanted to use this last i outside of the loop we could use var, so there is atleast one potential argument to still use var

function loopLet () {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('last i:', i)
}

loopLet() // 0, 1, 2, 3, 4, reference error i is not defined
