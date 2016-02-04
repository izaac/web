function greatestCommonDivisor(a, b){

    var tmp;
    while (b !== 0){
        tmp = b;
        b = a % b;
        a = tmp;
    }
    // console.log("result "+a);
    return a;
}

function leastCommonMultiple(a, b){
    console.log(a, b);
    //console.log("checking..");
    return (a * b / greatestCommonDivisor(a, b));
}

function lcmDriver(the_list){


  var max = Math.max.apply(Math, the_list);
  var min = Math.min.apply(Math, the_list);


  var tmp_list = [];
  for (var i = max; i >= min; i--) {
    tmp_list.push(i);
  }

  if (tmp_list.length === 2){
    return leastCommonMultiple(tmp_list[0], tmp_list[1]);
  }
  else{
      var tmp = tmp_list[0];
      tmp_list.shift();
      return leastCommonMultiple(tmp, lcmDriver(tmp_list));
  }

}


// console.log(leastCommonMultiple(13, 12));
console.log(lcmDriver([5, 1]));
