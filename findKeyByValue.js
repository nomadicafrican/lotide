const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ This does match");
  } else {
    console.log('❌ this does not match');
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};





const findKeyByValue = function(obj, value) {
const array = Object.keys(bestTVShowsByGenre);
const answer = 'The Wire';
let foundKey = '';
for (i = 0; i < array.length; i++) {
  if (bestTVShowsByGenre[array[i]] === answer) {
    foundKey = array[i];
    break;
  }

}
return foundKey
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

