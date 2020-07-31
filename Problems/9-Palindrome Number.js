var isPalindrome = function(x) {
    let neg = x<0
    let num = parseInt(x.toString().split('').reverse().join(''))
    if (neg){
        return false
    } else {
        return num === x
    }
};

// use reversed number to compare with input
// one of palindrome feature is input equal to reversed number
