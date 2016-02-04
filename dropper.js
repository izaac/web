function drop(arr, func) {
  "use strict";
  // Drop them elements.
  var num = 0;
  for (var j = 0; j<arr.length; j++) {
    console.log(func(arr[j]));
    if (func(arr[j])) { break; }
    num++;
  }

  console.log(num);
  for (var i = 0; i < num; i++){
    arr.shift();
  }
  console.log(arr);
  return arr;
}
//drop([1, 2, 3], function(n) {return n < 3; });

drop([1, 2, 3, 4], function(n) {return n >= 3;});
