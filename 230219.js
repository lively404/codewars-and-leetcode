// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i)>=48&&s.charCodeAt(i)<=57){
            arr.push(s[i]);
        }
        else if(s.charCodeAt(i)>=65&&s.charCodeAt(i)<=90){
            arr.push(String.fromCharCode(s.charCodeAt(i)+32));
        }
         else if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122){
             arr.push(s[i]);
         }
    }
    console.log(arr);
    let half = (arr.length%2? (arr.length-1)/2:arr.length/2-1)
    for(let i = 0; i <= half; i++){
        if(arr[i]!==arr[arr.length-1-i]) return false;
    }
    return true;
};