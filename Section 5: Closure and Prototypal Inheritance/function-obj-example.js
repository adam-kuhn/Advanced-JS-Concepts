const someFunc = new Function('return 2')

console.log(someFunc())

const someFunc2 = new Function(['num1', 'num2'], 'return num1 + num2')

console.log(someFunc2(1, 4))

function someFunc3 () {
  console.log('some func 3')
}
someFunc3.what = 'a property on a function'
console.log(someFunc3)
console.log(someFunc3.name) // the name of the function
console.log(someFunc3.what) // the above string
someFunc3() // the () is short hand for someFunc3.call() which runs the code inside the function

// const obj1 = {ok: 'ok'}

// functions are callable objects when typing "someFunc3." you will see call, apply, bind as properties of the object
// when typing "obj1." you will not see call, apply, bind because this object is not callable
