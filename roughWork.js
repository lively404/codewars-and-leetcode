// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
    return number%2? "Odd":"Even";
  }


// https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript

function disemvowel(str) {
    let vowels = new Set(['a','e','i','o','u']);
   // let j = 0;
    let j = '';
    for(let i = 0; i < str.length; i++){
      if(!vowels.has(str[i].toLowerCase())){
      //  str[j]= str[i];
      //  j++;
        j+=str[i];
      }
    }
    return j;
  }
  
// storing vowels in a set and comparing and skipping the vowels while changing storage would be enough.
// expected to use memory.

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let solution = '';
    while(num){
      let remainder = num %10;
      solution = (remainder*remainder).toString()+solution;
      num = (num - remainder)/10;
    }
    return Number(solution);
  }
  
  
  // convert number to string? Adds overhead.
  // running a for loop and removing each digit, squaring it and adding it would likely be the solution.

  //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

  function makeNegative(num) {
    return num>0?-num:num;
  }

  // https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let count = 0;
  while(p0<p){
    p0 = p0*(100+percent)/100+aug;
    count+=1;
  }
    return count;
  }

  https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript

  
function nbYear(p0, percent, aug, p) {
  
    let count = 0;
  while(p0<p){
    p0 = Math.floor(p0*((100+percent)/100))+aug;
    count+=1;
  }
    console.log(p0, percent, aug, p, count)
    return count;
  }

  https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

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
  
  // storing the indices of the odd numbers and sorting through them would work.

 // https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

  function isIsogram(str){
    let previous = new Set();
    for(let i = 0; i < str.length; i++){
      if(previous.has(str[i].toLowerCase())) return false;
      else previous.add(str[i].toLowerCase());
    }
    return true;
  }
  
  // Map/set.

  // https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

  var uniqueInOrder=function(iterable){
    let stack = [];
    let output = [];
    let i = 0;
    while(i<iterable.length){
      // increment i while top of stack is same as current value
      while(stack.length&&stack[stack.length-1]==iterable[i]){
        i++;
      }
      // if not so, push top of stack to output, push iterable value to stack.
      stack.length&&output.push(stack.pop());
      stack.push(iterable[i]);
      i++;
    }
    if(stack[0]) output.push(stack[0]);
      return output;
    }
    
    // stack.

    // https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript

    function digitize(n) {
        let output = [];
        if (n == 0) return [0];
        while(n){
          output.push(n%10);
          n = (n - n%10)/10;
        }
        return output;
      }

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript


      function DNAStrand(dna){
        const map = new Map([['A','T'],['T','A'],['G','C'],['C','G']]);
       return dna.split('').map(e=>map.get(e)).join('')
      }

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
 if(sq !== Math.floor(Math.sqrt(sq))**2) return -1
  return (Math.sqrt(sq)+1)**2;
}

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

function check(a, x) {
  return a.some(e => e===x);
  }

  // https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

  function fakeBin(x){
    return x.split('').map(e=>e>=5?'1':'0').join('');
  }

  // https://www.codewars.com/kata/5265326f5fda8eb1160004c8/javascript

  function numberToString(num) {
    return num.toString();
  }

  // https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

  function comp(array1, array2){
    if(!array1||!array2) return false;
    let sq = array1.map(e=>e**2);
    let map = new Map();
    sq.forEach(e => {
      if(map.has(e)){
        map.set(e,map.get(e)+1);
      }
      else {
        map.set(e,1);
      }
    })
    array2.forEach(e => {
      if(map.has(e)){
        if(map.get(e)<=0) return false;
        map.set(e,map.get(e)-1);
      }
      else return false;
    })
    for( value of map.values()){
      if(value!=0) return false;
    }
    return true;
  }

// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){
  let map = new Map([['NORTH','SOUTH'],['SOUTH','NORTH'],['EAST','WEST'],['WEST','EAST']]);
  const stack = [];
  let i = 0;
while(i<arr.length){
    while(stack.length&&map.get(arr[i])==stack[stack.length-1]){
      stack.pop();
      i++;
    }
  if(i ==arr.length) break;
  stack.push(arr[i]);
  i++;
  }
return (stack);
}
