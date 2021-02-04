const multiplicationTable = function(maxValue) {
  const array = [];
  const Marray = [];
  let columnValue = 0;
  let rowValue = 0;
  let multiplier = 0;
  let table = "";
  for (i = 1; i <= maxValue; i++) {
    for (j = 1; j <= maxValue; j++) {
      rowValue = i;
      columnValue = j;
      multiplier = rowValue * columnValue;
      array.push(multiplier);

    }
  }
  for (j = 0, z = -1; j < array.length; j++) {
    if (j % maxValue === 0) {
      z++;
      Marray[z] = [];
    }
    Marray[z].push(array[j]);
  }
  return Marray;

};
console.log(multiplicationTable(5));