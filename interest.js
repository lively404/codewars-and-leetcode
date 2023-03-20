  // https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

  function nbYear(p0, percent, aug, p) {
    let count = 0;
  while(p0<p){
    p0 = p0*(100+percent)/100+aug;
    count+=1;
  }
    return count;
  }
