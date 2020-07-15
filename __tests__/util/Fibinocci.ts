const memo = [0, 1];

function fib(n) {
  var value = memo[n] !== undefined ? memo[n] : memo[n] = fib(n - 1) + fib(n - 2)
  return value;
}
function* fibinocciGen (n = 79) {
  if (n > 79) throw new Error('Accurate values are not available for n > 79.');
  var k = fib(n);
  yield memo[n];

}
export default fibinocciGen;