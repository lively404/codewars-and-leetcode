// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript


function DNAStrand(dna){
    const map = new Map([['A','T'],['T','A'],['G','C'],['C','G']]);
   return dna.split('').map(e=>map.get(e)).join('')
  }
