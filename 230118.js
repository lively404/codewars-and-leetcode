// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
    let [small,smaller] = numbers[0]<numbers[1]?[numbers[1],numbers[0]]:[numbers[0],numbers[1]];
    for(let i = 2; i < numbers.length; i++){
      if(numbers[i]<smaller){
        small = smaller;
        smaller = numbers[i];
      }
      else if(numbers[i]<small) small = numbers[i];
    }
    return small + smaller;
  }