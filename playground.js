var test = function() {
  let robbed = 0
  var total = [0, 1, 2, 3].reduce(
    (acc, cur) => Math.max(robbed + cur, robbed = acc),
    0
  );
  console.log(total)
}



const nums = [1, 2, 3, 1]
var rob = function(nums) {
  let p = 0
  let res = nums.reduce((t, n) => Math.max(p + n, p = t), 0)

};

var tribonacci = function(n) {
  let acc = 1
  let tn = 0
  if (n == 0) return 0
  for (let i = 1; i < n; i++) {
    acc = acc + tn
    tn = acc
  }
  console.log(tn)
};

tribonacci(10)
