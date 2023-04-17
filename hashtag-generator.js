// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
    if(str=='') return false;
    const result = str.split(' ').reduce((a,e)=>a+((e==''||e==' ')?'':e[0].toUpperCase()+e.slice(1)),'')  //filter(e => e!=''&&e!=' ').map(e=> e[0].toUpperCase() + e.slice(1)).join('');
    if(result=='') return false;
  if(result.length>139) return false;
    return ('#'+result)
  }