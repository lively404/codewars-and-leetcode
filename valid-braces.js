// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

function validBraces(braces){
    const map = new Map([['}','{'],[']','['],[')','(']])
    const stack = [];
    for(let i = 0; i < braces.length; i++){
      if(map.has(braces[i])){
        if(stack[stack.length-1]==(map.get(braces[i]))) {
          stack.pop();
        }
        else return false;
      }
    else {
      stack.push(braces[i]);
    }
    }
    if(stack.length!=0) return false;
    return true;
    }