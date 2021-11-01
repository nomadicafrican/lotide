const eqObjects = function(obj1,obj2){
  if ( Object.keys(obj1).length !== Object.keys(obj2).length){
      return false
   } for (let i in obj1){
    if (obj1[i] == obj2[i]){
      return true
    }
   } return false
 };


const assertObjectsEqual = function(actual, expected) {
  const answer = eqObjects(actual , expected) 
  const inspect = require('util').inspect; 
  if ( answer){
    console.log(`✅This does match ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌this doesnt match ${inspect(actual)} !== ${inspect(expected)}`)
  }
};
const ab ={ a : '1' , b: '2'}
const ba = {b:'2' ,    a:'1'}
assertObjectsEqual(ab , ba)