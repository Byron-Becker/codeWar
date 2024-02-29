Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {

    let str = ""
    
    for(let i=0; i < n; i++){
      
      str += s
      
    };
    return str
  };

  function repeatStr (n, s) {
    var str = "";
    for (var i = 0; i < n; i++)
        str += s; // This is inside the loop
    return str; // This is outside the loop and executes after the loop completes
}
