// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2){
    if(!array1||!array2) return false;
    let sq = array1.map(e=>e**2);
    let map = new Map();
    sq.forEach(e => {
      if(map.has(e)){
        map.set(e,map.get(e)+1);
      }
      else {
        map.set(e,1);
      }
    })
    array2.forEach(e => {
      if(map.has(e)){
        if(map.get(e)<=0) return false;
        map.set(e,map.get(e)-1);
      }
      else return false;
    })
    for( value of map.values()){
      if(value!=0) return false;
    }
    return true;
  }