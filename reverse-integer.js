// https://leetcode.com/problems/reverse-integer/submissions/912996848/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x<0?-1:1;
    let charnum = x.toString().slice( sign<0?1:0 );
    ret = '';
    for(let i = 0; i < charnum.length; i++){
        ret= charnum[i] + ret;
    }
    if(parseInt(ret)>2**31) return 0;
    else return parseInt(ret)*sign;
};

