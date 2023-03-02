https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  return s.length%2? s[(s.length-1)/2]:s.slice(s.length/2-1,s.length/2+1);
}

