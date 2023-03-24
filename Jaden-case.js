// https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }