// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){
    let map = new Map([['NORTH','SOUTH'],['SOUTH','NORTH'],['EAST','WEST'],['WEST','EAST']]);
    const stack = [];
    let i = 0;
  while(i<arr.length){
      while(stack.length&&map.get(arr[i])==stack[stack.length-1]){
        stack.pop();
        i++;
      }
    if(i ==arr.length) break;
    stack.push(arr[i]);
    i++;
    }
  return (stack);
  }