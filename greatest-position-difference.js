// https://www.codewars.com/kata/5442e4fc7fc447653a0000d5/train/javascript

var greatestDistance = function(data) {
  let map = new Map();
  for(let i = 0; i < data.length; i++) {
    if(map.has(data[i])){
      if(map.get(data[i]).length==2) {
        map.get(data[i]).pop();
        map.get(data[i]).push(i);
      }
      else{
        map.get(data[i]).push(i);
      }
    }
          else map.set(data[i],[i]);
  }
  return [...map.values()].filter(e=>e.length==2).reduce((a,e)=>a>e[1]-e[0]?a:e[1]-e[0],0);
};