function countSheepLoop(num){
  for(let i=num; i>0; i--){
      console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

//best case = O(1)
//worst case = O(n) - linear, effort is same as input