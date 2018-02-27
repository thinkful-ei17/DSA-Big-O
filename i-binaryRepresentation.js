function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
      let rem = Math.floor(num%2);
      binary = rem + binary;
      num = Math.floor(num/2);
  }
  return binary;


}
console.log(convertToBinaryIter(124)); //1111100

//best: O(1) - one number, constant
//worst: O(log n) - b/c continuing to call convertToBinary, not linear, not n