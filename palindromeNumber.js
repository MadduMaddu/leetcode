/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0||(x%10===0&&x!==0)){
        return false;
    }
    let rev=0;
    let num=x;
    while (x>0) {
        rev=rev*10+x%10;
        x = Math.floor(x / 10);
    }
    return num===rev;
};
console.log(isPalindrome(-121));
console.log(isPalindrome(121));