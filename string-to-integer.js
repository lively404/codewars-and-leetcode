/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let stringStart = 0;
    let minInteger = 2**31*-1
    let maxInteger = 2**31-1
    while(s[stringStart]===' '){
        stringStart++;
    }
    let sign = 1;
    let string = '';
    if(s[stringStart]=='-') {
        sign = -1; 
        stringStart+=1;
    }
    if(s[stringStart]=='+'&&sign==1) {
        stringStart+=1;
    }
    let ignoreZero = true;
    for( i = stringStart; i < s.length; i++){
        if(s[i]=='0'&&ignoreZero) continue;
        if(s.charCodeAt(i)<48||s.charCodeAt(i)>57){
            break;
        }
        ignoreZero = false;
        string+=s[i];
    }
    console.log(string, minInteger, maxInteger,maxInteger.toString().length,minInteger.toString().length);
    if(string.length>maxInteger.toString().length){
        return sign===-1?minInteger:maxInteger;
    }
    if(string.length===maxInteger.toString().length){
        if(sign === -1){
        for(let i = 0; i < string.length; i++){
            if(string[i]>minInteger.toString()[i+1]) return minInteger;
            if(string[i]<minInteger.toString()[i+1]) return sign*Number(string);
            }
        }
        else{
            for(let i = 0; i < string.length; i++){
            if(string[i]>maxInteger.toString()[i]) return maxInteger;
            if(string[i]<maxInteger.toString()[i]) return sign*Number(string);
            }
        }
    }

return sign*Number(string);

};