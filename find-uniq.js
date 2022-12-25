  // https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript

  function findUniq(arr) {
    let map = new Map();
    let common;
    for(let i = 0; i < 3; i++){
      if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
      }
      else{
        map.set(arr[i],1);
      }
    }
    for( key of map.keys() ) {
      if(map.get(key)>1) common = key;
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i]!= common) return arr[i];
    }
  }
