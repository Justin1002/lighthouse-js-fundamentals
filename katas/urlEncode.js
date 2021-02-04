const urlEncode = function(text) {
  let string = "";
  let character = "%20";
  for (i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      string = string + character;
    } else {
      string = string + text.charAt(i);
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
