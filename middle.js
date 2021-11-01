const { match } = require("assert")
const { arrayBuffer } = require("stream/consumers")

const middle = (arr) =>{
  if (arr.length = 2){
    return []
  } else if (arr.length = 1 ){

    return []
  }
 else if (arr.length % 2 === 0 ){
  return [arr(Math.ceil(arr.length/2 - 1))] , [arr(Math.ceil(arr.length/2))]
 } else {
   return [arr(Math.floor(arr.length / 2))]
 }
 
 
}


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(` ${arr1} === ${arr2}`)
  } else {
    console.log(`${arr1} !== ${arr2}`)
  }
}
console.log(middle([1,2,3,4,5]))
