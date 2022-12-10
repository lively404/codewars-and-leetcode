// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if(!array||array.length<=2) return 0;
    let max = array[0], min = array[0];
    return array.reduce((acc,e)=>{
      if(e>max)max=e;
      else if (e<min) min = e;
      return acc+e;
    }) -max -min
    }
  
  