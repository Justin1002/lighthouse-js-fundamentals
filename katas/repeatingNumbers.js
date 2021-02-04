const repeatNumbers = function(data) {
  let stringArray;
  let output = "";
  let temp = "";

  if (data.length < 2) {
    stringArray = data.join().split(',');
    output1 = stringArray[0].repeat(Number(stringArray[1]));
    return output1;
  } else {
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i][1]; j++) {
        temp += data[i][0];
      }
      if (i === data.length - 1) {
        output += temp.toString();
        return output;

      } else {
        output += temp.toString() + ', ';
        temp = "";
      }
    }
  }
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));