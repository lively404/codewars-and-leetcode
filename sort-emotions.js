// https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript

function sortEmotions(arr, order){
    const obj = {
  ':D': 1, 
  ':)':2, 
  ':|':3, 
  ':(':4, 
  'T_T':5
    }
    let ret = arr.sort((a,b) => obj[a]-obj[b]);
    return  order?ret:ret.reverse()// (ง •̀_•́)ง
  }