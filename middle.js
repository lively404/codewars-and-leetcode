// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
    //your code here
    console.log(Math.sign(number));
    return -number
  }

  // https://www.codewars.com/kata/523b4ff7adca849afe000035/javascript

  function greet() {
    return "hello world!";
    }

    // https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

    var number = function(busStops){
        return busStops.reduce((acc,e)=> acc + e[0] - e[1],0)
      }