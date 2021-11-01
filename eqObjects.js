const assertEqual = require('./assertEqual')

const eqObjects = function(obj1,obj2){
   if ( Object.keys(obj1).length !== Object.keys(obj2).length){
       return false
    } for (let i in obj1){
     if (obj1[i] == obj2[i]){
       return true
     }
    } return false
  };


    
 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba) , true); // => true

//const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc);
module.exports=eqObjects