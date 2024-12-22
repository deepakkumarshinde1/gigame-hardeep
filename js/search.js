// Linear Search
// list ==> 1st to last
// Binary Search
// list ==> mid == result ; result < mid
//  start == start ; end == mid ; mid === result
// result > mid
// start === mid ; end == end
///
// 8 , 10 ,15
// 9

// Insertion Sort
// Bubble Sort
// Merge Sort

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// search
let array3 = [1, 2, 4, 6, 8, 10, 15];
let result = binarySearch(array3, 2);
console.log(result);

// 1.9
