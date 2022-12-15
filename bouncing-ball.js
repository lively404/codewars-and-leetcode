
  // https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

  function bouncingBall(h,  bounce,  window) {
    let count = 0;
    while(h>0&&bounce>0&&bounce<1&&window<h){
      count+= h*bounce>window?2:1;
      h = h*bounce;
    }
    return count? count:-1;
  }


