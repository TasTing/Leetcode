
var rob = function(){
  let v=0
  var total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => Math.max(v + cur, v=acc),
    0
  );
  console.log(total)
}

rob()
