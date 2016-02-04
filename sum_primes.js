function fermat(n) {
  if (n%1 || n<2) return false;
  if (n%2==0) return (n==2);
  var m=Math.sqrt(n);
  for (var i=3;i<=m;i+=2) {
    if (n%i==0) return false;
  }
 return true;
}

function sumPrimes(n) {
  var i = 0;
  var total = 0;
  while( i <= n ){
    // console.log(fermat(i));
    if (fermat(i)) {
      total += i;
//       console.log(total);
    }
    i++;
  }
  return total;
}


console.log(sumPrimes(10));
