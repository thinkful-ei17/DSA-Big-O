function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
/*
  Best case: O(1)
  Worst case: O(log n)


  [1,2,3,4,5,6,7] item = 6

  1st pass:
  arr: [1,2,3,4,5,6,7]
  max: 7
  min: 1
  curr: 4

  2nd pass:
  arr: [2,3,4,5,6,7] 6
  max: 7
  min: 2
  mid: 4

  3rd pass:
  arr: [3,4,5,6,7]
  max: 7
  min: 3
  mid: 5

  4th pass:
  arr: [4,5,6,7]
  max: 7
  min: 3
  mid: 5

  5th pass:
  arr: [5,6,7]
  max: 7
  min: 3
  mid: 6



*/
