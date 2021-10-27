const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ This does match");
  } else {
    console.log('❌ this does not match');
  }
};
let school = ''
const countLetters = function(){
  for (const value of school){
    console.log(value)
  }
}
countLetters("ammar")
