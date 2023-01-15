    // https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

    function findAverage(array) {
        if(!array||!array.length) return 0;
          return array.reduce((acc,e)=>{
            return acc+e
          })/array.length
        }
  
  
  
  