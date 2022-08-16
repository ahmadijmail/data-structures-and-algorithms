function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quicksort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  quicksort(arr, start, index - 1);
  quicksort(arr, index + 1, end);
}

array = [0, -2, 1, 7, 22, ];
quicksort(array, 0, array.length - 1);

console.log(array);
