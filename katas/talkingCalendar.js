const talkingCalendar = function(date) {
  let yearMonthDay = date.split("/");
  let year = yearMonthDay[0];
  let month = yearMonthDay[1];
  let day = yearMonthDay[2];

  if (day === '01') {
    return monthConversion(Number(month)) + ' ' + Number(day) + 'st' + "," + ' ' + year;
  } else if (day === '02') {
    return monthConversion(Number(month)) + ' ' + Number(day) + 'nd' + ',' + ' ' + year;
  } else if (day === '03') {
    return monthConversion(Number(month)) + ' ' + Number(day) + 'rd' + ',' + ' ' + year;
  } else {
    return monthConversion(Number(month)) + ' ' + Number(day) + 'th' + ',' + ' ' + year;
  }
};

const monthConversion = function(month) {
  switch (month) {
  case 1:
    return 'January';
  case 2:
    return 'February';
  case 3:
    return 'March';
  case 4:
    return 'April';
  case 5:
    return 'May';
  case 6:
    return 'June';
  case 7:
    return 'July';
  case 8:
    return 'August';
  case 9:
    return 'September';
  case 10:
    return 'October';
  case 11:
    return 'November';
  case 12:
    return 'December';
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
