const letterPositions = function (sentence){
  const results = {};
  for (let index = 0; index < sentence.length; index ++)
  const initilize = sentence[index]; 
if (!results[initilize]) {
  results[initilize] = [index]
}
else {
  results[initilize].push(index);
}

console.log(results);
return results;
};
module.exports = letterPositions