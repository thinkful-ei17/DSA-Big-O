function split(str, sep) {
  var ret = [];
  while (true) {
      var idx = str.indexOf(sep);
      if (idx == -1) break;
ret.push(str.slice(0, idx))
str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

//best: O(1) - one letter, constant
//worst: O(n) linear - grows with increase in size of string