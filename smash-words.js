// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash (words) {
    if(words.length==0) return '';
     return words.reduce((a,b)=>a+" "+b);
  };
  
  