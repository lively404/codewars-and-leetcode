// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
    console.log(s);
    let output = '';
    for( let i = 0; i < s.length; i++) {
      if(s[i]!=='!') output+=s[i];
    }
      return output;
    }
  
  