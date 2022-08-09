function InsertionSort(arr) {
  let key = 0;
  let j = 0;

  n = arr.length;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

array = [2, 5, 3, 7];


console.log(InsertionSort(array));
