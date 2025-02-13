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
console.clear();
// Insertion Sort [12,11,13,5,6]
//  5,6,11,12,13
//  11,12,

// 1,2,3,4
function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let key = array[i]; // 5
    let j = i - 1; // 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]; //
      j = j - 1; //
    }
    array[j + 1] = key; //
    // 5, 6, 11, 12, 13
  }
}
insertionSort([12, 11, 13, 5, 6]);
// Bubble Sort
// 12,11,13,5,6
console.clear();
function bubbleSort(array) {
  let n = array.length; // 4
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  console.log(array);
  return array;
}

// 11,12,5,6,13

bubbleSort([12, 11, 13, 5, 6]);
console.clear();
// Merge Sort
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  let leftSide = mergeSort(left);
  let rightSide = mergeSort(right);

  return merge(leftSide, rightSide);
}

function merge(leftSide, rightSide) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] < rightSide[j]) {
      result.push(leftSide[i]);
      i++;
    } else {
      result.push(rightSide[j]);
      j++;
    }
  }
  return [...result, ...leftSide.slice(i), ...rightSide.slice(j)];
}

let result1 = mergeSort([12, 11, 13, 5, 6]);
console.log(result1);
