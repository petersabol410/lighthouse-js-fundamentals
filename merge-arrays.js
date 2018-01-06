function merge(array1, array2) {

  var sortedArray = array1;

  for (var i = 0; i < array2.length; i++) {
    sortedArray.push(array2[i]);
  }
  return sortedArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([2,8],[1,5,9]), "=?", [ 1, 2, 5, 8, 9 ]);