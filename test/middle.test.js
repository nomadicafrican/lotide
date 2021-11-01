const middle = require("../middle");
const assert = require('chai').assert;
describe('#middle', ()=>{
  it('#find the middle of an array', ()=>{
    assert.deepEqual(middle[1,2,5,7,6]), 5 
  })
})

//console.log(middle([1,2,5,7,6,9]))