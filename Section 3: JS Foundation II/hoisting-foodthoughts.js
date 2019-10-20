var favouriteFood = "grapes"

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood)
  var favouriteFood = "sushi"
  console.log("New favourite food: " + favouriteFood)
}

foodThoughts()

// output:
// Original favourite food: undefined
// New favourite food: sushie
