// Imperative code tells tells the computer what to do and HOW to do it
for (let i = 0; i < 4; i++) {
  console.log(i)
}
// in the for loop above we are telling the computer that start with
// i at 0, check if i is less then 4, console.log i and increase the value of i
// we are telling the computer what to do and how to do it

// Declarative code tells the computer what to do and what SHOULD happen
const arr = ['a', 'b', 'c']
arr.forEach(item => console.log(item))
// this is imperative because we are telling the computer to loop through the array
// with forEach and something SHOULD be logged. we don't tell the computer to increment the index
// by 1 to loop through the array it just happens
