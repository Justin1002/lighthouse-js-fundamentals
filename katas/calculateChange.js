const calculateChange = function(total, cash) {
  let twenty = 2000;
  let twentyC = 0;
  let ten = 1000;
  let tenC = 0;
  let five = 500;
  let fiveC = 0;
  let two = 200;
  let twoC = 0;
  let one = 100;
  let oneC = 0;
  let quarter = 25;
  let qC = 0;
  let dime = 10;
  let dC = 0;
  let nickel = 5;
  let nC = 0;
  let penny = 1;
  let pC = 0;
  let result = {};
  let change = (cash - total);

  while (change > 0) {
    if (change - twenty >= 0) {
      change -= twenty;
      twentyC++;
      result.twentyDollar = twentyC;
      continue;
    } else if (change - ten >= 0) {
      change -= ten;
      tenC++;
      result.tenDollar = tenC;
      continue;
    } else if (change - five >= 0) {
      change -= five;
      fiveC++;
      result.fiveDollar = fiveC;
      continue;
    } else if (change - two >= 0) {
      change -= two;
      twoC++;
      result.twoDollar = twoC;
      continue;
    } else if (change - one >= 0) {
      change -= one;
      oneC++;
      result.oneDollar = oneC;
      continue;
    } else if (change - quarter >= 0) {
      change -= quarter;
      qC++;
      result.quarter = qC;
      continue;
    } else if (change - dime >= 0) {
      change -= dime;
      dC++;
      result.dime = dC;
      continue;
    } else if (change - nickel >= 0) {
      change -= nickel;
      nC++;
      result.nickel = nC;
      continue;
    } else {
      change -= penny;
      pC++;
      result.penny = pC;
      continue;
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));