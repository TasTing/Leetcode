/**
 * @param {string} s
 * @return {number}
 */
var switcher = function(num){
    let sum=0
    switch(num){
                case 'I':sum=1
                    break
                case 'V':sum=5
                    break
                case 'X':sum=10
                    break
                case 'L':sum=50
                    break
                case 'C':sum=100
                    break
                case 'D':sum=500
                    break
                case 'M':sum=1000
            }
    return sum
}

var romanToInt = function(s) {
    let sum = 0
    for(let i=0;i<s.length;i++){
        if(switcher(s[i])<switcher(s[i+1])){
            sum-=switcher(s[i])
        }
        if(switcher(s[i])>=switcher(s[i+1])){
            sum+=switcher(s[i])
        }
    }
    return sum
};
