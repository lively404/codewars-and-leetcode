      // https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

      class SmallestIntegerFinder {
        findSmallestInt(args) {
          let min = args[0];
          for(let i = 0; i < args.length; i++){
            if(args[i]<min) min = args[i];
          }
          return min;
        }
        
      }