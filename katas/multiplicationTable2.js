const multiplicationTable = function(maxValue) {

  let columnValue = 0;
  let rowValue = 0;
  let multiplier = 0;
  let table = "";
  for (i = 1; i <= maxValue; i++) {
    for (j = 1; j <= maxValue; j++) {
      rowValue = i;
      columnValue = j;
      multiplier = rowValue * columnValue;
      table += String(multiplier) + ' ';

      if (j % maxValue === 0) {
        table += "\n";
      }
    }
  }
  return table;

};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));