function double_all(arr) {
  if (!arr.length) {
      return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}


//best = O(1) , in instance of only 1 item in array
//worst case = O(n), linear