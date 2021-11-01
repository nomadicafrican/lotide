const tail = require('../tail')
const assert = require('chai').assert;
describe('#tail', ()=>{
  it('#returns the last index in an array', ()=>{
    assert.deepEqual(tail(['1']),['1'])
  
  })
})
//console.log(tail([1,2,3,]))