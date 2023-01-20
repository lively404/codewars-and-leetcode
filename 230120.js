
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = function(str){
    let number = 0; let sign = 1;
    for( e of str){
      if(e == '-') {
        sign = -1;
        continue;
      }
      number = number*10+e.charCodeAt(0)-48;
    }
    return sign*number;
  }