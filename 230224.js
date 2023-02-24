// https://leetcode.com/problems/longest-common-prefix/description/

// Brute force:

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==1) return strs[0];
    let common = strs[0];
    for( let i = 1; i < strs.length; i++){
        
        let currentIndex = Math.min(common.length-1, strs[i].length-1);
        console.log(currentIndex);
        for( let j = 0; j <= currentIndex; j++){
            if(common[j] != strs[i][j]){
                currentIndex = j-1;
                break;
            }
        }
        console.log(currentIndex);
        common = common.slice(0, currentIndex+1);
        console.log(common);
        if(!common.length) return '';
    }
    return common;
};

// if strs is one string, return that string.
// initiate common with strs[0]
// from 1 to n loop
    // let currentIndex = Math.min(common.length-1, strs[i].length-1)
    //for j from 0 to currentIndex
        // if common[j]!= strs[i][j]
            // currentIndex = j;
            // break;
    // common = common.slice(0,currentIndex);
    // if(!common.length) return '';
// return common;

// slight optimization using arrays:

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==1) return strs[0];
    let stack = strs[0].split('');
    for(let i = 1; i < strs.length; i++){
        let end = Math.min(stack.length,strs[i].length);
        for( let j = 0; j<end; j++){
            if(stack[j]!=strs[i][j]) {
                end = j;
                break;
                }
        }
        stack = stack.slice(0,end)
        if(!stack.length) return '';
    }
    return stack.join('');
};