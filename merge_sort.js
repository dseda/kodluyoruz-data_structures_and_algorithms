const unsortedArray = [16, 21, 11, 8, 12, 22];

console.log("******** Merge Sort ********");
console.log("Big-O gösterimi : O(N LOG N)");
console.log("Best case: O(N LOG N)");
console.log("Worst Case: O(N LOG N)");
console.log("Average case: O(N LOG N)");

let iteration = 1;
const merge = (arr1, arr2) => {
  const newArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      newArray.push(arr1[i]);
      i++;
    } else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  console.log("Aşama " + iteration);
  iteration++;
  console.log(newArray.join(", "));
  return newArray;
};

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);

  // Base case or terminating case

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
};
console.log("******** AŞAMALAR ********");
mergeSort(unsortedArray);
