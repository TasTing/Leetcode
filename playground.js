
var test = function(){
  let robbed=0
  var total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => Math.max(robbed + cur, robbed=acc),
    0
  );
  console.log(total)
}




const nums=[1,2,3,1]
var rob = function(nums) {
    let p = 0
    let res = nums.reduce((t, n) => Math.max(p + n, p=t), 0)

};

test()
