/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let sqrt = 0
    let res = false
    if(num==1){
        return true
    }
    for (sqrt;sqrt<num;sqrt++){
        if(sqrt*sqrt==num)return true
    }
    return res
};


// says we cannot use built in function. then we use force loop
