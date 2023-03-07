// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons){
    return bullets>=2*dragons
    }
    
    // https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

    function order(words){
        if(!words) return words;
       let output = [];
       words.split(' ').forEach(e=>{
         for(let i = 0; i < e.length; i++) {
           if(e.charCodeAt(i)<58&&e.charCodeAt(i)>48)
             output[e.charCodeAt(i)-49] = e;
         }
       })
         return output.join(' ');
       }