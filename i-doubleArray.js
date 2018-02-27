function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
      ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

//best = O(1) , in instance of only 1 item in array
//worst case = O(n), linear