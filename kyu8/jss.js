Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  
    let newStr = str.replace(/[aeiouAEIOU]/g, '')
    
    return newStr;
  }

  ou are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  return s.substr('


  '
  function getMiddle(str){
    
    let middle = Math.floor(str.length/2)
  
    if(str.length%2 === 0){
      
      return str.slice(middle-1,middle+1)
      
    }else{
      return str.charAt(middle)
    }
  
  };
  

  