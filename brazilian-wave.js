// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str){
    let output = [];
    if(!str||!str.length) return [];
    for(let i = 0; i < str.length; i++){
      if(str[i].charCodeAt(0)>122||str.charCodeAt(i)<97) continue;
      let current= str.slice(0,i)+str[i].toUpperCase()+ (i+1<str.length?str.slice(i+1):'');
      output.push(current);
    }
    return output;
  }
  
  