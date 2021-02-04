
const makeCase = function(input,parameter) {
  let string = "";
  let sortedCase = casingPriority(parameter);

  for (i = 0; i < sortedCase.length; i++) {

    if (sortedCase[i] === 'camel') {
      for (j = 0; j < input.length; j++) {
        if (input[j] === " ") {
          string += input.charAt(j + 1).toUpperCase();
          j++;
        } else {
          string += input[j];
        }
      }
    } else if (sortedCase[i] === 'pascal') {
      string += input[0].toUpperCase();
      for (j = 1; j < input.length; j++) {
        if (input[j] === " ") {
          string += input.charAt(j + 1).toUpperCase();
          j++;
        } else {
          string += input[j];
        }
      }
    } else if (sortedCase[i] === 'snake') {
      for (j = 0; j < input.length; j++) {
        if (input[j] === " ") {
          string += "_";
        } else {
          string += input[j];
        }
      }
    } else if (sortedCase[i] === 'kebab') {
      for (j = 0; j < input.length; j++) {
        if (input[j] === " ") {
          string += "-";
        } else {
          string += input[j];
        }
      }

    } else if (sortedCase[i] === 'title') {
      string += input[0].toUpperCase();
      for (j = 1; j < input.length; j++) {
        if (input[j] === " " || input[j] === "-" || input[j] === "_") {
          string += input[j];
          string += input.charAt(j + 1).toUpperCase();
          j++;
        } else {
          string += input[j];
        }
      }

    } else if (sortedCase[i] === 'vowel') {
      for (j = 0; j < input.length; j++) {
        if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
          string += input[j].toUpperCase();
        } else {
          string += input[j];
        }
      }

    } else if (sortedCase[i] === 'consonant') {
      for (j = 0; j < input.length; j++) {
        if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
          string += input[j];
        } else {
          string += input[j].toUpperCase();
        }
      }


    } else if (sortedCase[i] === 'upper') {
      for (j = 0; j < input.length; j++) {
        string += input[j].toUpperCase();
      }

    } else if (sortedCase[i] === 'lower') {
      for (j = 0; j < input.length; j++) {
        string += input[j].toLowerCase();
      }

    }
    input = string;
    string = "";
  }
  return input;
};


const casingPriority = (parameter) => {
  let priorityList = [
    {
      casing: 'camel',
      priority: 1

    },
    {
      casing: 'pascal',
      priority: 2
    },
    {
      casing: 'snake',
      priority: 3
    },
    {
      casing: 'kebab',
      priority: 4
    },
    {
      casing: 'title',
      priority: 5
    },
    {
      casing: 'vowel',
      priority: 6
    },
    {
      casing: 'consonant',
      priority: 7
    },
    {
      casing: 'upper',
      priority: 8
    },
    {
      casing: 'lower',
      priority: 9
    }
  ];
  let Array1 = [];
  let output = [];

  if (Array.isArray(parameter) != false) {
    for (i = 0; i < parameter.length; i ++) {
      priorityList.forEach(function(attribute) {
        if (parameter[i] === attribute.casing) {
          Array1.push(attribute.priority);
        }
      });

    }
    //Sort the array
    Array1 = Array1.sort(function(a,b) {
      return a - b;
    });
    //Reformat based on output
    for (j = 0; j < Array1.length; j++) {
      priorityList.forEach(function(attribute) {
        if (Array1[j] === attribute.priority) {
          output.push(attribute.casing);
        }
      });
    }
    return output;
  } else {
    return output = parameter.split();
  }
};



console.log(makeCase("this is a string", ["title","kebab","vowel"]));