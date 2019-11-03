function a () {
  return 2
}

a.what = 'what'

console.log(a) // output {[Function: a] what: 'what'}
console.log(a.what) // output 'what'
