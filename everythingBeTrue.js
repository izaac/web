function every(collection, pre) {
  var allTrue = true;
  for(var i = 0; i < collection.length; i++){
    if (Object.keys(collection[i]).length === 1 && Object.keys(collection[i])[0] === pre) {
      if (collection[i][pre] === "" || !Boolean(collection[i][pre])){
        allTrue = false;
      }
      continue;
    }
    if ( Object.keys(collection[i])[1] === pre ){
      if (!Boolean(collection[i][pre])){
        allTrue = false;
        break;
      }
    }
    else {
      allTrue = false;
      break;
    }
  }
  console.log(allTrue);
  return allTrue;
}
//
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); // should return false
//
//every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); // should return true
//
every([{"single": "yes"}], "single"); // should return true

every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); // should return false

every([{"single": ""}, {"single": "double"}], "single"); // should return false

every([{"single": "double"}, {"single": undefined}], "single"); //  should return false

every([{"single": "double"}, {"single": NaN}], "single"); // should return false