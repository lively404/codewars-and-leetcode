// https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/

//solution with values stored:

let strVal = ["2", "22", "222",
       "3", "33", "333",
       "4", "44", "444",
       "5", "55", "555",
       "6", "66", "666",
       "7", "77", "777", "7777",
       "8", "88", "888",
       "9", "99", "999", "9999" ];

    function keypadWithStorage(str){
        let output = '';
        for(let i = 0; i < str.length; i++){
            if(str[i]==' ') output+='0';
            else output+= strVal[(str[i].charCodeAt(0)-'A'.charCodeAt(0))]
        }
        return output;
    }
    console.log(keypadWithStorage('GEEKSFORGEEKS'))

// solution without having the values stored.

function keypadSequence(str){
    let output = '';
    for(let i = 0; i < str.length; i++){
        let lowLimit = findLowerLimit(str[i])
        //console.log(lowLimit);
        output+= numbersFromCharacter(str[i],lowLimit);
        //console.log(output);
    }
    //console.log(output);
    return output;
}

function findLowerLimit(char){
    let code = char.charCodeAt(0);
    if(code>90) return -1;
    else if(code>=87){
        return [87,9];
    }
    else if(code>=84){
        return [84,8];
    }
    else if(code>=80){
        return [80,7];
    }
    else if(code>=77){
        return [77,6];
    }
    else if(code>=74){
        return [74,5];
    }
    else if(code>=71){
        return [71,4];
    }
    else if(code>=68){
        return [68,3];
    }
    else if(code>=65){
        return [65,2];
    }
}

function numbersFromCharacter(char,lowerLimit){
let output = '';
let code = char.charCodeAt(0);
//console.log(code, lowerLimit[0]);
while(code>=lowerLimit[0]){
    output+= lowerLimit[1];
    code--;
}
return output;
}

function codeToChar(num){
    return String.fromCharCode(num);
}

// console.log(keypadSequence('GEEKSFORGEEKS'))