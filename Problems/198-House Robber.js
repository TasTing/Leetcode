
var rob = function(){
  let v=0
  var total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => Math.max(v + cur, v=acc),
    0
  );
  console.log(total)
}

rob()

// in reduce return accumulater's value as total robbed value.
// 0 is the initial value of accumulater
// for each house compare current accumulater's value with each house's added value.
//
// in first case
// [1,2,3,1]
//
// after 1st house
// t = 1 p=0 (0+1>0)==>1
// after 2nd house
// t = 2 p=1 (0+2>1)==>2
// after 3rd house
// t = 4 p=2 (1+3>2)==>4
// after 4th house
// t = 4 p=3 (2+1<4)==>4
