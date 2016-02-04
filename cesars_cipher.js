// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.charCodeAt()
// String.fromCharCode()

function rot13(str) {
  "use strict";
  var code = 0;
  var tmp_code;
  var diff;
  var tmpstr = "";
  for(var i = 0; i < str.length; i++){
      code = str.charCodeAt(i);
      if( code > 90 || code < 65 ) {
        tmpstr += String.fromCharCode(code);
        continue;
      }
      tmp_code = code + 13;
      diff = 90 - tmp_code;
      if (diff >= 0){
        tmpstr += String.fromCharCode(tmp_code);
      }
      else {
        tmpstr += String.fromCharCode(64 + Math.abs(diff));
      }
  }
  console.log(tmpstr);
  return tmpstr;
}

rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."