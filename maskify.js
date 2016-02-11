function maskify(str){
  'use strict';
  var size;

  if(str.length > 3){
    size = str.length - 4;
    str = str.substring(size, str.length)
    str = Array(size).join('#') + str;
    console.log(str);
    return(str);
  }
  else{
    console.log(str);
    return str;
  }

}

maskify("juanitateniaunamuneca");
maskify("juan");
maskify("Skippy");
maskify("Nananananananananananananananana Batman!");
maskify("");
maskify("1");
