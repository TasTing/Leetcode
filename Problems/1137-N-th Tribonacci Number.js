/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0,1,1]
    let tn = 0
    if(n==0){
        return 0
    }
    if(n==1||n==2){
        return 1
    }
    for(let i=2;i<n;i++){
        tn = arr.reduce((a,b)=>a+b,0)
        arr.push(tn)
        arr.splice(0,1)
    }
    return tn
}
