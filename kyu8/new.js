Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  

    let arr = numbers.sort((a,b) => a-b)
    
    return arr[0] + arr[1]
    
  }


  Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"


function oddOrEven(array) {
 
    let sum = array.reduce((a,b)=> a+b,0)
    
    if(sum % 2 === 0){
      return 'even'
    }else{
      return 'odd'
    }
    
  }
