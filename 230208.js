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
  