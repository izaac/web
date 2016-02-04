function fearNotLetter(str) {
  "use strict";
  var begin = 0;
  var end = 0;
  var the_char = 0;
  var notfound = false;
  begin = str.charCodeAt(0);
  end = str.charCodeAt(str.length - 1);


  for (var i = begin; i <= end; i++){
    if (str.indexOf(String.fromCharCode(i)) == -1) {
      notfound = true;
      the_char = String.fromCharCode(i);
    }
  }
  if (!notfound)
    return undefined;
  else
    console.log(the_char);
    return the_char;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");
