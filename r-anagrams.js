function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

/*
memoization - recursive call - you save from previous call so that you can optimize 

Best Case: O(1) - in instance of only one letter
Worst Case: O(n!) - n factorial

start printAnagram('tie'); 6 results
anagrams(' ', 'tie');
initial str.length =  3; false => else
first initialization
currentLetter = str.substring(0, 1) =>  t
previousLetter = str.substring(0, 0) => ''
afterLetter = str.substring(1) = i
anagrams(''+t, ''+i) => anagrams(t, i)

second initialization
currentLetter = str.substring(1, 2) =>  i
previousLetter = str.substring(0, 1) => t
afterLetter = str.substring(2) = e
anagrams(''+i, t + e) => anagrams(i, te)

third initilization
currentLetter = str.substring(2, 3) =>  e
previousLetter = str.substring(0, 2) => ti
afterLetter = str.substring(3) = ''
anagrams(''+e, ti + '') => anagrams(e, ti)

*/