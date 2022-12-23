// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    return new Set(string.toLowerCase().replace(/[\., \d]/g,"").split('')).size===26;
    }
  
  