const squareCode = function(message) {
  let output = '';
  let lineArray = [];
  //remove spaces
  spacesRemoved = message.replace(/\s/g, '');

  //# Of columns
  columns = Math.ceil(Math.sqrt(spacesRemoved.length));
  //Square the message into an array
  let line = "";
  for (i = 0; i < spacesRemoved.length; i++) {
    if (line.length === columns) {
      lineArray.push(line);
      line = "";
    }
    line += spacesRemoved[i];
  }

  lineArray.push(line);
  //transcribe message via columns
  for (i = 0; i < lineArray[0].length; i++) {
    for (j = 0; j < lineArray.length; j++) {
      if (lineArray[j].length > i) {
        output += lineArray[j][i];
      }
    }
    output += ' ';
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));