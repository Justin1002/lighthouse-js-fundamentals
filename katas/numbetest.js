let prompt = require("prompt-sync")();

for (i = 0; i < 6; i++) {
  let answer = prompt("Guess a number: ");
  console.log(/^\d+$/.test(answer));

}
