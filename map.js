const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2}`)
  } else {
    console.log(` ${arr1} !== ${arr2}`)
  }
}


const words = ["ground", "control", "to", "major", "tom"];
  const map = function(arg1, arg2){ // arg1 is the array itself while
     // arg2 is the callback function
    const result = [] // an empty array to out results in
    for (let item of arg1) {
    result .push(arg2(item))
   return result
    }
  }
  const results1 = map(words, word => word[0]);
console.log(results1);