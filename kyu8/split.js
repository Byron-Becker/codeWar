It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
  
    return str.split('').slice(1,-1).join('')
  
  };
  

  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
  
    let string = ''
    
    for(let i=0; i < n; i++){
      
     string += s
      
    }
    
    return string
    
  }

  Write a function that removes the spaces from the string, then return the resultant string.

  Examples:
  
  Input -> Output
  "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
  "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
  "8aaaaa dddd r     " -> "8aaaaaddddr"
  

  function noSpace(x){

    return x.split('').filter(x => x !== ' ').join('')
    
  }git      



