

const countLetters = function (words){
  const emparr = {}
 for (let i = 0; i < words.length; i ++){
   let letter = words[i];
   if (emparr[letter]) { 
    emparr[letter] ++
   } else{
 emparr[letter] = 1
   }
   }
 
return emparr 
}
module.exports=countLetters
