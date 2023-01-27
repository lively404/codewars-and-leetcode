// https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

function fakeBin(x){
    return x.split('').map(e=>e>=5?'1':'0').join('');
  }
