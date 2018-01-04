var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0;
var i = 0;
while ( repeat < ingredients.length ) {
  console.log(ingredients[i]);
  repeat++;
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (var j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var k = ingredients.length - 1; k >= 0 ; k--) {
  console.log(ingredients[k])
}
