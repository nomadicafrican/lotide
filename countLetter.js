const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ This does match");
  } else {
    console.log('❌ this does not match');
  }
};
const countLetters = function (words){
  const object = {}
 for (let i = 0; i < words.length; i ++){
   let letters = words[i];
   if (object[letter]) { 
    obj[letter] ++
   } else{
 object[letter] = 1
   }
   }
 
return object 
}
