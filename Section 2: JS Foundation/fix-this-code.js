// Exercise: Fix This Code
// This recursive function creates a stack overflow.
// How can you fix this code by still keeping the recursive
// call around, but only adding something that you have
// learned in this section to not cause this stack overflow.
/// /////////////////////////////////////////////////////////

// Original code
// // fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.')

// function removeItemsFromList () {
//   var item = list.pop()

//   if (item) {
//     removeItemsFromList()
//   }
// }

// Solution
const list = new Array(60000).join('1.1').split('.')

function removeItemsFromList () {
  var item = list.pop()

  if (item) {
    setTimeout(removeItemsFromList, 0)
  }
}

removeItemsFromList()
