// https://practice.geeksforgeeks.org/problems/consecutive-elements2306/1

/**
 * @param {string} s
 * @returns {string}
*/

class Solution{
    removeConsecutiveCharacter(s){
    let output = '';
    for( let i = 0; i < s.length; i++) {
        if(i==0||s[i]!=s[i-1]){
            output+= s[i];
        }
    }
    return output;
    }
}

// consecutive characters. Add to output string when it's not equal to previous character. 
// Edge case: length 0 or 1. Condition can have if i is 0 or if s[i] != s[i-1]

