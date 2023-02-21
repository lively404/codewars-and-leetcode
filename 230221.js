// https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/902066429/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(''));
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let consistent = true;
        for(let j = 0; j < words[i].length; j++){
            if(!allowedSet.has(words[i][j]))
            {
                consistent = false;
                break;
                }
        }
        if(consistent) count+=1;
    }
    return count;
};

// get values in allowed in a set. const.
//value count = 0.
//outer for loop. a flag set to true saying word is consistent
    // inner loop checking if character is in allowed.
        // if yes, go on. if not, change flag.
    //if flag still true, add to count. 