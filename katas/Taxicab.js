const blocksAway = function(directions) {
  let coordinate = [0,0];
  let position;
  let obj = {};
  //starting position
  if (directions[0] === 'left') {
    position = 'east';
  }

  if (directions[0] === 'right') {
    position = 'north';
  }
  //directions
  for (i = 0; i < directions.length; i++) {
    if (directions[i] === 'right') {

      if (position === 'north') {
        position = 'east';
        coordinate[0] += directions[i + 1];
        i++;
      } else if (position === 'east') {
        position = 'south';
        coordinate[1] -= directions[i + 1];
        i++;
      } else if (position === 'south') {
        position = 'west';
        coordinate[0] -= directions[i + 1];
        i++;
      } else if (position === 'west') {
        position = 'north';
        coordinate[1] += directions[i + 1];
        i++;
      }
    }
    if (directions[i] === 'left') {

      if (position === 'north') {
        position = 'west';
        coordinate[0] -= directions[i + 1];
        i++;
      } else if (position === 'east') {
        position = 'north';
        coordinate[1] += directions[i + 1];
        i++;
      } else if (position === 'south') {
        position = 'east';
        coordinate[0] += directions[i + 1];
        i++;
      } else if (position === 'west') {
        position = 'south';
        coordinate[1] -= directions[i + 1];
        i++;
      }
    }
  }
  obj["east"] = coordinate[0];
  obj["north"] = coordinate[1];
  return obj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));