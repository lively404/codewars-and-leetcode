// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript

function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;
  if(!input) return []; // edge case 1
  input.map(e=> {
    if(e>0) pos+=1;
    else if(e<0) neg+=e;
  })
  if(pos==0&&neg==0) return []  //edge case 2
  return [pos,neg]
}