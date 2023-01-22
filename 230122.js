// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    return data.map(e => (e[0]>54&&e[1]>7)?'Senior':'Open');
  }