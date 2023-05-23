function linearSearch (arr, target) {

  // Can you solve this in one line?
  if (arr.includes(target)) {
    return target
  } else {
    return -1;
  }

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr[arr.length - 1];

  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    let mid = (low + high) / 2;


    if (target === arr[mid] ) {
      return arr[mid];
    }
    if (target > mid) {
      low = mid + 1;
    }
    if (target < mid) {
      high = mid - 1;
    }
  }
  return -1
    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
