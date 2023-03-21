// https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/

function printDuplicates(str) {
let duplicateSpotter = new Map();
for( let i = 0; i < str.length; i++ ){
    if(duplicateSpotter.has(str[i])){
        duplicateSpotter.set(str[i], duplicateSpotter.get(str[i])+1);
    }
    else{
        duplicateSpotter.set(str[i],1);
    }
}

for(key of duplicateSpotter.keys()){
    if(duplicateSpotter.get(key)>1) console.log(key);
}
}

printDuplicates('aaabbc');