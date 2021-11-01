const head = require('../head')
const assert = require('chai').assert;

describe('#head', ()=> {
  it('#returns the head of an array', ()=>{
    assert.strictEqual(head([1,2,3]), 1)
  })
  it("returns '5' for ['5']", () => {
   assert.strictEqual(head(['5']), '5'); 
  });
})




//console.log(head([6,7]))