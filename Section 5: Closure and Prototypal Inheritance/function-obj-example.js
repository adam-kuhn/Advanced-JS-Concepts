const someFunc = new Function('return 2')

console.log(someFunc())

const someFunc2 = new Function(['num1', 'num2'], 'return num1 + num2')

console.log(someFunc2(1, 4))
