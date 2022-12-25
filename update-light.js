  // https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

  function updateLight(current) {
  
    let map = new Map([['green','yellow'],['yellow','red'],['red','green']]);
    return map.get(current);
  
  }

