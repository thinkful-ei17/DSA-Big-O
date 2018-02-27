function reverseString(str) {
  if (str.length < 2) {
      return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

//best: O(1) - one letter
//worst: O(n) linear - grows with increase in size of string