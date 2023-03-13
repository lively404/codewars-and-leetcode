// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message){
    let output = '';
    for( let i = 0 ; i < message.length ; i++ ) {
      let code = message.charCodeAt(i);
      if((code<=122&&code>=97)){
        let newCode;
        if(code+13>122){
          newCode = code+13-122+96;
        }
        else newCode = code + 13;
        output+=String.fromCharCode(newCode);
      }
         else if((code<=90&&code>=65)){
        let newCode;
        if(code+13>90){
          newCode = code+13-90+64;
        }
        else newCode = code + 13;
        output+=String.fromCharCode(newCode);
      }
      else {output+=message[i];}
    }
    return output;
  }