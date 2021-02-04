const checkAir = function(samples, threshold) {
  let clean = 0;
  let dirty = 0;
  for (const quality of samples) {
    if (quality === 'clean') {
      clean += 1;
    }
    if (quality === 'dirty') {
      dirty += 1;
    }
  }
  let proportion = (dirty / (dirty + clean));
  if (proportion > threshold) {
    return  "Polluted";
  } else {
    return "Clean";
  }
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));