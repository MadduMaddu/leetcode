/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result="";
    if(numRows==1 || numRows>=s.length)
        return s;
    let index=0,d=1;
    const rows=new Array(numRows).fill().map(()=>[]);
    for(const char of s){
        rows[index].push(char);
        if(index===0){
            d=1;
        }
        else if(index===numRows-1){
            d=-1;
        }
        index+=d;
    }
    for(let i=0;i<numRows;i++){
        rows[i]=rows[i].join('');
    }
    return rows.join('');
};
console.log(convert("PAYPALISHIRING",3));//"PAHNAPLSIIGYIR"


