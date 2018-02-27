function convertToBinary(num){
  if(num>0){
      let binary = Math.floor(num%2); //save the reminder in binary
  //divide the number by 2 and send that to the function again
  //carry the reminder to the next recursion call
      return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
      return ''; //base case - at some point the divisions will lead to 0
  }
}

//best: O(1) - one number, constant
//worst: O(log n) - b/c continuing to call convertToBinary, not linear, not n