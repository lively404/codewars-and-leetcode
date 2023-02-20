//https://www.codewars.com/kata/592915cc1fad49252f000006/javascript

function noIfsNoButs(a, b) {
  switch(a-b) {case 0: return `${a} is equal to ${b}`;break;}
  let c = (Math.abs(a-b))/(a-b);
  switch(c){
      case 1: return `${a} is greater than ${b}`;break;
      case -1: return `${a} is smaller than ${b}`;break;
      
  }
}

//Did not know about Math.sign().