 // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

 function sortArray(array) {
    // Return a sorted array.
    let odd = [];
    for(let i = 0; i < array.length; i++){
      if(array[i]%2) odd.push(i);
    }