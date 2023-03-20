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