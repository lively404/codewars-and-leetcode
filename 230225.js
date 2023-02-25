    // https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

    function longest(s1, s2) {
        let alphabets = new Set();
        for(let i = 0; i < s1.length; i++){
          if(!alphabets.has(s1[i])){
            alphabets.add(s1[i]);
          }
        }
          for(let i = 0; i < s2.length; i++){
          if(!alphabets.has(s2[i])){
            alphabets.add(s2[i]);
          }
        }
         alphabets = new Array(...alphabets);
        alphabets.sort();
        return alphabets.join('');
      }
