    // https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript

    function digitize(n) {
        let output = [];
        if (n == 0) return [0];
        while(n){
          output.push(n%10);
          n = (n - n%10)/10;
        }
        return output;
      }
