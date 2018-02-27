function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
      fib = num1;
      num1 = num1+num2;
      num2 = fib;
      number--;
  }
  return num2;

}

//******** ES6 makes it a bit easier*****
function fibonacciIterative2(number){
  let [num1, num2] = [1,0];
  while(number-- > 0){
      [num1, num2] = [num2+num1, num1]
  }
  return num2;

}
console.log(fibonacciIterative2(3));

//best case: O(1), in instance of n = 0
//worst case: O(n!) = size of n; further nesting