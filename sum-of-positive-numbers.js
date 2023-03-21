 // https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

 function positiveSum(arr) {
    return arr.reduce((acc,e)=>acc+(e>0?e:0),0)
  }