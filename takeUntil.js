const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2}`)
  } else {
    console.log(` ${arr1} !== ${arr2}`)
  }
}

const takeUntil = function(array, callback) {
  let empty = []
  for (let element of array){
    if (callback === false){
      empty.push(element)
    } break;
  } return empty
}

