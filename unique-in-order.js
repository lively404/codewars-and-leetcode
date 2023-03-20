// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
    let stack = [];
    let output = [];
    let i = 0;
    while(i<iterable.length){
      // increment i while top of stack is same as current value
      while(stack.length&&stack[stack.length-1]==iterable[i]){
        i++;
      }
      // if not so, push top of stack to output, push iterable value to stack.
      stack.length&&output.push(stack.pop());
      stack.push(iterable[i]);
      i++;
    }
    if(stack[0]) output.push(stack[0]);
      return output;
    }
    
    // stack.