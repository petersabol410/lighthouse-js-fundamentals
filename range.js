function range(start, end, step) {
  var rangeArray = [];
  var i;
  if ( start == undefined || end == undefined || start > end || step < 0 ) {
    return rangeArray;
  }
  else {
    for ( i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
    return rangeArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));