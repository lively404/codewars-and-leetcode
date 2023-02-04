 // https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript

  
 function nbYear(p0, percent, aug, p) {
  
    let count = 0;
  while(p0<p){
    p0 = Math.floor(p0*((100+percent)/100))+aug;
    count+=1;
  }
    console.log(p0, percent, aug, p, count)
    return count;
  }