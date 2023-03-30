// https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

function insertDash(num) {
    let odds = new Set('13579'.split(''));
    num = num.toString();
    for(let i = 0; i < num.length-1; i++){
      //console.log(odds.has(num[i]), num[i], odds)
      if(odds.has(num[i])&&odds.has(num[i+1])){
        num = num.slice(0,i+1)+'-'+num.slice(i+1);
      }
    }
    return num;
  }