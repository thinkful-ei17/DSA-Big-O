function factorialIterative(number){
  let fact = 1;
  for (let i = 1; i <= number; i++){
      fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));

//best case: O(1), in instance of n = 0
//worst case: O(n), linear 5 * 4 * 3 * 2 * 1 number of operations equals number input