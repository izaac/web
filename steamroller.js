var tmp = [];
function steamroll(arr) {
  // I'm a steamroller, baby

  for (var i = 0; i<arr.length; i++){
    if (Array.isArray(arr[i])) steamroll(arr[i]);
    else{
      tmp.push(arr[i]);
    }
  }
}

function steamroller(arr){
  tmp = [];
  steamroll(arr);
  console.log(tmp);
  return tmp;
}

steamroller([1, [2], [3, [[4]]]]);
steamroller([[["a"]], [["b"]]]);
steamroller([1, [], [3, [[4]]]]);
steamroller([1, {}, [3, [[4]]]]);
