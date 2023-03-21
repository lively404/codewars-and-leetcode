// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    let i = 0;
  for(let j = 0; j < list.length; j++){
    if(list[j]<list[i]) i = j;
  }
    return list[i];
}

var max = function(list){
        let i = 0;
  for(let j = 0; j < list.length; j++){
    if(list[j]>list[i]) i = j;
  }
    return list[i];
}