function fibDriver(n) {
  return n === 0 ? 0 : fib(0, 1, n);
}
 
function fib(a, b, n) {
  return n === 1 ? b : fib(b, a + b, n-1);
}
console.log(fibDriver(100));
