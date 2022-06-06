arr = [32, 43, 52, 67, 77, 81, 92];



function binarySearch(arr, value) {
  let high = arr.length;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] == value) {
      return mid;
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Not found";
}

//let sorted=binary_search(arr,5)
console.log(binarySearch(arr, 77));
