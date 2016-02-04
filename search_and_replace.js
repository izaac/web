// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "bonfires") should return "Let us get back to more Bonfires".
function replaceAt(str, index, char){
  return str.substr(0, index) + char + str.substr(index+char.length);
}

function myReplace(str, before, after) {
 var n = str.indexOf(before);
 var tmp = before[0];
 var isupper = false;
 // console.log(n);
 if (tmp === tmp.toUpperCase()) isupper = true;
 if (isupper){
   tmp  = after[0].toUpperCase();
   after = replaceAt(after, 0, tmp);
 }
 console.log(str);
 console.log(after);
 var store = str.split("");
 // console.log(store);
 store.splice(n, before.length, after);
 str = store.join("");
 console.log(store.join(""));
 // console.log(str);
 return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us get back to more Coding", "Coding", "bonfires");
