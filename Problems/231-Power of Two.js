/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i=0
    while(n>=Math.pow(2, i)){
        if(n==Math.pow(2, i)) return true
        i++
    }
    return false

};
