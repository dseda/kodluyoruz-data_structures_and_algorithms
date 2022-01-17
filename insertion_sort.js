const unsortedArray = [22, 27, 16, 2, 18, 6];

console.log("******** Insertion Sort ********");
console.log("Big-O gösterimi : O(N^2)");
console.log("Best case: O(N)");
console.log("Worst Case: O(N^2)");
console.log("Average case: (N^2)/2 => O(N^2)");

const insertionSort = (arr) => {
  console.log("Toplam " + arr.length + " aşamada sort işlemi tamamlanır");
  for (let i = 1; i < arr.length; i++) {
    let a = arr[i];
    let j = i - 1;
    while (j >= 0 && a < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = a;
    console.log("AŞAMA " + i);
    console.log(arr.join(", "));
  }

  return arr;
};

insertionSort(unsortedArray);

const arr2 = [7, 3, 5, 8, 2, 9, 4, 15, 6];

insertionSort(arr2);
