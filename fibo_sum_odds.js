
function fibsSumOdds(n){
  var first = 0;
  var next = 1;
  var total = 0;
  while (next <= n){

    if (!(next%2 == 0)){
      total += next;
    }
    next = next + first;
    first = next - first;
    console.log([next, first]);
  }

  return total;
}

console.log(fibsSumOdds(4000000));
