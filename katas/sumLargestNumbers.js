const sumLargestNumbers = (array) => {
  let large1 = 0;
  let large2 = 0;

  for (x = 0; x < array.length; x++) {
    if (array[x] > large1) {
      large2 = large1;
      large1 = array[x];
    }
  }
  return (large1 + large2);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));