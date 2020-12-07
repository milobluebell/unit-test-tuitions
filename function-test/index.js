
// 
export function hasProperty($key, $oneObject) {
  let result = false;
  for (var i in $oneObject) {
    if (i === $key) {
      result = true;
      break;
    }
  }
  return result;
}

//
export function arrayUnique($oneArray) {
  return Array.from(new Set($oneArray));
}