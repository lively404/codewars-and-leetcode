// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
    let map = new Map();
    let i = 0;
    let j = 0;
      console.log(arr,n)
    while(i<arr.length){
      if(map.has(arr[i])){
        if(map.get(arr[i])<n) {
          map.set(arr[i],map.get(arr[i])+1);
          arr[j]=arr[i]
          j++;
        }
      }
      else{
        map.set(arr[i],1);
        arr[j]=arr[i]
        j++;
      }
      i++;
    }
  arr.length = j;
    return arr
  }