const eqObjects = require('./eqObjects')


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