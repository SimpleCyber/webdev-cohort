/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // anagram => if both words contains the same letter :
  if(str1.length === str2.length){
    const sorted1 =  str1.toLowerCase().split("").sort().join("");
    const sorted2 = str2.toLowerCase().split("").sort().join("");

    if(sorted1 ===  sorted2) return true;
    return false;


  }
  else{
    return false;
  }
}

module.exports = isAnagram;
