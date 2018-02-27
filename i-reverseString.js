function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

//best: O(1) - one letter
//worst: O(n) linear - grows with increase in size of string