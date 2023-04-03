// https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript

function betweenExtremes(numbers) {
    console.log(numbers);
      numbers.sort((a,b) => a-b)
    console.log(numbers);
    return (numbers[numbers.length-1]-numbers[0]);
    
  }