Write a function which converts the input string to uppercase.

Write a function which converts the input string to uppercase.


Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


smash = function (words) {
    return words.join(" ");
  };


  Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

  Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
  
  Create a function which translates a given DNA string into RNA.
  
  For example:
  
  "GCAT"  =>  "GCAU"
  
  The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
  


  function DNAtoRNA(dna) {
  
    let rna = []
    
    for(let i=0;i < dna.length; i++){
      
     if(dna[i] === 'T'){
       rna.push('U')
     }else{
       rna.push(dna[i])
     }
    
  }

  function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }


  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  Example: (Input --> Output)
  
  "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
  
  isIsogram "Dermatoglyphics" = true
  isIsogram "moose" = false
  isIsogram "aba" = false
  
  function isIsogram(str){
  
    let newStr = str.toLowerCase()
    
    for(let i=0; i < str.length; i++){
      for(let k=0; k < str.length; k++){
        
        if(i !== k && newStr[i] === newStr[k]){
        return false
          };
      };
      
      
    };
    return true
  };















