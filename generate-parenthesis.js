// https://leetcode.com/problems/generate-parentheses/description/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    output = new Set();
    function addParen(str,n){
        console.log(n);
        if(n<=0) {
            output.add(str);
            return;
            }
        for(let i = 0; i < str.length; i++){
            let newstr = str.slice(0,i)+'()'+str.slice(i);
            addParen(newstr,n-1);
        }
        
    }
    addParen('()',n-1);
    console.log(output)
    return [...output];

};