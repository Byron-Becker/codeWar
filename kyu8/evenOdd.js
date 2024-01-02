Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if(number % 2 === 0){
      return 'Even'
    }else{
      return 'Odd'
    }
  }

  Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

function solution(str){
  
  return str.split('').reverse().join('')
  
}