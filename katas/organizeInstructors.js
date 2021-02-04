const organizeInstructors = function(instructors) {
  let iOSArray = [];
  let webArray = [];
  let blockchainArray = [];
  let result = {};

  instructors.forEach(function(instructor) {
    if (instructor.course === "iOS") {
      iOSArray.push(instructor.name);
      result.iOS = iOSArray;
    } else if (instructor.course === "Web") {
      webArray.push(instructor.name);
      result.Web = webArray;
    } else if (instructor.course === "Blockchain") {
      blockchainArray.push(instructor.name);
      result.Blockchain = blockchainArray;
    }
  });
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));