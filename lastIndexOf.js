function lastIndexOf(array, value) {
  var partialValue = 0;
  var finalValue = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      partialValue = i;
      console.log(i);
      finalValue = true;
    }
  }
  if (finalValue) {
    return partialValue;
    console.log(partialValue);
  }
  else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

