

const without = function(arr, itemToRemove) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemToRemove.length; j++) {
      if (arr[i] === itemToRemove[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return source;
}
module.exports = without

