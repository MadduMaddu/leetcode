/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen=0;
    let set=new Set();
    let i=0,j=0;
    while(i<s.length&&j<s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            j++;
            maxlen=Math.max(maxlen,j-i);
        }
        else{
            set.delete(s[i]);
            i++;
        }
    }
    return maxlen;
};