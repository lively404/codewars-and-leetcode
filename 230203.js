 // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

 function sortArray(array) {
    // Return a sorted array.
    let odd = [];
    for(let i = 0; i < array.length; i++){
      if(array[i]%2) odd.push(i);
    }

    // complicated looking insertion sort
    for(let i = 0; i < odd.length; i++){
        let currentIndex = i;
        for(let j = i+1; j < odd.length; j++){
          if(array[odd[j]]<array[odd[currentIndex]]){ 
            currentIndex = j;
          }
        }
        let temp = array[odd[i]];
        array[odd[i]] = array[odd[currentIndex]];
        array[odd[currentIndex]] = temp;
      }
      return array;
    }