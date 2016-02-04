
function unite(arr1, arr2, arr3) {
  var results = [];

  for (var j = 0; j < arguments[0].length; j++) {
    results.push(arguments[0][j]);
  }

  for (var i = 1; i< arguments.length; i++){
    for(var k = 0; k < arguments[i].length; k++){
      if (results.indexOf(arguments[i][k]) < 0) {
        results.push(arguments[i][k]);
      }
    }
  }
  return results;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
unite([1, 3, 2], [1, [5]], [2, [4]]);
unite([1, 2, 3], [5, 2, 1]);
