// code below (replace this example)
let num = Math.round(Math.random() * 10);
let i = true;
let tries = 1;
let remember = [];

while (i) {

  let prompt = require("prompt-sync")();
  let answer = prompt("Guess a number: ");
  let flag = 0;

  for (j = 0; j < remember.length; j++) {

    if (answer === remember[j]) {
      console.log("Already Guessed!");
      flag = 1;
      break;
    }
  }

  if (flag === 0) {

    remember.push(answer);

    if (/^\d+$/.test(answer) === true) {
      let answerConv = Number(answer);

      if (answerConv === num) {
        console.log("You got it!" + "You took " + tries + " attempts!");
        i = false;
      } else if (answerConv > num) {
        console.log("Too high!");
        tries++;

      } else if (answerConv < num) {
        console.log("Too low!");
        tries++;
      }
    } else {
      console.log("Not a number! Try again!");
    }
  } else if (flag === 1) {
    continue;
  }

}
