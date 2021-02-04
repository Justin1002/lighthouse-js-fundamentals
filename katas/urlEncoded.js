const urlDecode = function(text) {
  let result = {};
  let keys = [];
  let values = [];
  let string = "";
  let newText = text.replace(/%20/g, " ");
  
  for (j = 0; j < newText.length; j++) {

    if (newText[j] === "=") {
      keys.push(string);
      string = "";
    } else if (newText[j] === "&") {
      values.push(string);
      string = "";
    } else {
      string += newText[j];
    }
  }
  values.push(string);
  keys.forEach((key, i) => result[key] = values[i]);
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
