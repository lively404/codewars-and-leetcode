    // https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

    function count (string) {  
        let op = {}
        for(char of string){
          if(op.hasOwnProperty(char)){
            op[char]+=1;
          }
          else op[char] = 1;
        }
        return op;
      }
  
  
  