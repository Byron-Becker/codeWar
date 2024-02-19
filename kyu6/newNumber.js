The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
  
    let freqObj = {};
    let convStr = '';
    
    for(let i=0; i < word.length; i++){
      const char = word[i];
      
      freqObj[char] ? freqObj[char]++ : freqObj[char] = 1;
      
    };
    
    for(let i=0; i < word.length; i++){
      const char = word[i].toLowerCase()
      
      convStr += freqObj[char] > 1 ? ')' : '('
      
  
      
    };
    
    return convStr
    
  };

  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
  Example
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  
  The returned format must be correct in order to complete this challenge.
  
  Don't forget the space after the closing parentheses!
  

  function createPhoneNumber(numbers){
 
    let format = '(xxx) xxx-xxxx'
    
    
    for(let i=0; i < numbers.length; i++){
      
      format = format.replace('x', numbers[i])
      
    };
    
    return format
    
  }
  