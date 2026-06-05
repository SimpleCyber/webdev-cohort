/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function checkLimits(x){
  if ( (x >= 'a' && x <= 'z') ||  (x >= 'A' && x <= 'Z') || (x >= '0' && x <= '9') ) return true;

  return false;
}


function removeSpace(str){
  let ans = "";
  for(let i of str){
    if(checkLimits(i)) ans += i.toLowerCase();
  }

  return ans;
}


function isPalindrome(str) {
  str  = removeSpace(str);

  let size =  str.length;
  for(let i = 0 ; i < size/2 ; i++){

    if ( str[i] != str[size - i  - 1] )return false;
    
  }

  return true;
}

module.exports = isPalindrome;
