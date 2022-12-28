  // https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

  function tribonacci(signature,n){
    if(n==0) return [];
    if(n<4) return signature.slice(0,n);
    for(let i = 3; i < n; i++){
      signature[i] = signature[i-1]+signature[i-2]+signature[i-3];
    }
    return signature;
  }

