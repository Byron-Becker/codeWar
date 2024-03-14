In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.


    function highAndLow(numbers){

        //turn string into array, sort array from highest to lowest num
        
        let newArr = numbers.split(' ').sort((a,b)=>b-a)
        
        //take first and last element in array and return as a string with single space
        
        return `${newArr[0]} ${newArr[newArr.length-1]}`
        
      };

      This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let arr = [];
      for (let i = 0; i < s.length; i++) {
      arr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }
    return arr.join('-');
  }
