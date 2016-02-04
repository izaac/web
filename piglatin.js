// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()

function translate(str) {
  "use strict";
  var num_cons = 0;
  var flag = false;
  var c;
  var tmp = '';
  var count = 0;
  c = str[count];
  if (/[aeiou]/.test(c) === true) {
    flag = true;
    str += 'way';
  }
  while (/[aeiou]/.test(c) === false && flag === false) {
    num_cons++;
    count++;
    tmp += c;
    c = str[count];
  }
  if (!flag) {
    var cut = '';
    cut = str.substr(num_cons);
    str = cut;
    str += tmp + 'ay';
  }
  console.log(str);


  return str;
}


translate("california"); // should return "aliforniacay";
translate("paragraphs"); // should return "aragraphspay";
translate("glove"); // should return "oveglay";
translate("algorithm"); // should return "algorithmway";
translate("eight"); // should return "eightway";
