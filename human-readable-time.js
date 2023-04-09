// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript?filter=me&sort=best_practice&invalids=false

function humanReadable (seconds) {
    let hr = (Math.floor(seconds/3600)).toString();
    hr = format(hr);
    let min = (Math.floor((seconds - hr*3600)/60)).toString();
    min = format(min);
    let sec = (Math.floor(seconds - hr*3600 - min*60)).toString();
    sec = format(sec);
    return `${hr}:${min}:${sec}`
     
   }
   
   function format(a){
     return a.length == 1? '0'+a:a;
   }