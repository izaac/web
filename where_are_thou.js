// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global Object
// Object.hasOwnProperty()
// Object.keys()

function where(collection, source) {
  "use strict";
  var arr = Object.keys(source);
  var results = [];

    for (var j=0; j<collection.length; j++){
      if (!collection[j].hasOwnProperty(arr[0]) || collection[j][arr[0]] !== source[arr[0]]){

        console.log("No, the property or value were not found");

      }
      else {
        if (Object.keys(collection[j]).length >= arr.length) {
          var isthere = true;
          for (var x = 0; x <arr.length; x++){
            if (!(arr[x] in collection[j])){
              isthere = false;
            }
          }
          if (isthere){
            results.push(collection[j]);
          }

        }
      }
    }
  console.log(results);
  return results;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); // [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); // [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // [{ "a": 1, "b": 2, "c": 2 }]
