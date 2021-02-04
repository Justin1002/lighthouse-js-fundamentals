const instructorWithLongestName = function(instructors) {
  let placeholder = 0;
  let output;
  for (let names of instructors) {
    if (names["name"].length > placeholder) {
      placeholder = names["name"].length;
      output = names;
    }
  }
  return output;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));