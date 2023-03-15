// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    console.log(walk);
    if(walk.length!==10) return false;
    let len = [0,0];
    for(let i = 0; i < walk.length; i++){
      switch(walk[i]){
          case 'n':len[0]+=1;break;
          case 's':len[0]-=1;break;
          case 'w':len[1]+=1;break;
          case 'e':len[1]-=1;break;
      }
    }
    if(!len[0]&&!len[1]) return true;
    return false;
  }