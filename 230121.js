// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
    let map = new Map();
    let output = [];
    for(let i = 0; i < arr.length; i++) {
      if(map.has(arr[i])){
        if(map.get(arr[i])>=n) {
          map.set(arr[i],map.get(arr[i])+1);
          continue;
        }
        else{
        map.set(arr[i],map.get(arr[i])+1);
        output.push(arr[i]);
        }
      }
      else{
        map.set(arr[i],1);
        output.push(arr[i]);
      }
    }
    return output;
  }