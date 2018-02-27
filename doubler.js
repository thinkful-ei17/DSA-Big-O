function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}


/*

Linear - O(n)
Worst case: O(n)
Best case: O(n) or constant if array with single element

Looping through all values of array aka all of (n)

*/
