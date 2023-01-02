    // https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

    String.prototype.toAlternatingCase = function () {
        let output = '';
         for( let i = 0; i < this.length; i++) {
           let code = this[i].charCodeAt(0)
           if(code>=97&&code<=122) output+= String.fromCharCode(code-32);
           else if(code>=65&&code<=90) output+= String.fromCharCode(code+32);
           else output+=this[i];
         }
        return output;
       }