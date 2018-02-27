function triangle(n) {
  if (n < 2) 
      return n;
  return n + triangle(n - 1);
}

//best: O(1) - one letter
//worst: O(n) linear - grows with increase in size of string