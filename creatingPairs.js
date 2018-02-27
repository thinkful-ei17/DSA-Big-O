function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

/*

Worst case: O(n^2)
Best case: O(1) --second loop does not get triggered
n = 100
regular nested for ==> 100*(100) n*n -> n^2

100 - nested for runs 99 times
99 - nested for runs 98 times
x - nested for runs 97 times
x - nested for runs 96 times
x
x

*/


