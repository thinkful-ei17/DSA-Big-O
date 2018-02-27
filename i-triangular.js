function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

//best: O(1) - one letter
//worst: O(n) linear - grows with increase with number increase