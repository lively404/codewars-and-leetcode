// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxCount = 0;
    for(let i = 0; i < sentences.length; i++){
let count = 0;
    for(let j = 0; j < sentences[i].length; j++){
        if (sentences[i][j]==' ') count+=1;
    }
    if (maxCount<count) maxCount = count;
    }
    return maxCount+1;
};