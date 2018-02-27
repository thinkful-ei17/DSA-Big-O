function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
      return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//best: O(1) - one letter, constant
//worst: O(n) linear - grows with increase in size of string