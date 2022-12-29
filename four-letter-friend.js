  // https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

  function friend(friends){
    for ( let i = 0; i < friends.length; i++){
      if(friends[i].length!==4){
        friends = friends.slice(0,i).concat(friends.slice(i+1));
        i = i-1;
      }
    }
      return friends;
    }

