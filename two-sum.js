// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
    let map = new Map();
      for(let i = 0; i < numbers.length; i++){
        if(map.has(target-numbers[i])){
          return [i,map.get(target-numbers[i])]
          }
          else{
            map.set(numbers[i],i);
      }
    }
      }
  