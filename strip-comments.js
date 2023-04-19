// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers) {
    markers = new Set(markers);
    const lines = input.split('\n');
    let output = '';
    let append = true;
    for(let i = 0; i < lines.length; i++){
      for(let j = 0; j < lines[i].length; j++){
        if(markers.has(lines[i][j])) append = false;
        if(append) output+= lines[i][j];
      }
      if(i == lines.length-1) break;
      output = output.trim();
      append = true;
      output+= '\n';
    }
    return output.trim();
  };