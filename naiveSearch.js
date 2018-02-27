function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/*

Worst case: O(n)
Best case: O(1)
Looping through all values of array aka all of (n) to find (item)
Plus if item is found on the first try it's O(1)

*/
