function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

//best case: O(1), in instance of n = 0
//worst case: O(n), linear 5 * 4 * 3 * 2 * 1 number of operations equals number input