  // https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

  var maxSequence = function(arr){
    let sum = arr[0]>0?arr[0]:0;
    let max = sum;
    if(!arr||arr.length==0) return 0;
    for(let i = 1; i < arr.length; i++){
      sum+= arr[i];
      if(sum>max) max = sum;
      if(sum<0) sum = 0;
    }
    return max;
  }

