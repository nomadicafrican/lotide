

const middle = function(array) {
  if (array.length % 2 === 0) {

    let middleEven = array[Math.floor((array.length - 1)/ 2)];
    let middleNumber = array[Math.floor((array.length) / 2)];
    return [middleEven, middleNumber]
  } else {
    let middleNumber = array[Math.floor((array.length) / 2)];

    return middleNumber
  }
}
 
 
 




module.exports = middle