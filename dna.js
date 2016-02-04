
function pair(str) {
  var pairs ={
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  };

  var arr = str.split("");
  console.log(arr);
  var results = [];
  for (var i = 0; i < arr.length; i++){
    results.push([arr[i], pairs[arr[i]]]);
  }

  console.log(results);
  return results;
}

pair("GCG");
