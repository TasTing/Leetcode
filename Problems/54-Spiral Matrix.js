// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
var spiralOrder = function(matrix) {
  let res = []
  while (matrix.length > 0) {
    matrix, res = onespiral(matrix, res)
  }
};

function onespiral(array, res) {
  // remove first row
  if (array.length > 0) {
    array[0].map(num => {
      res.push(num)
    })
    array.splice(0, 1)
  }
  // remove last elements
  if (array.length > 0) {
    let len = array[0].length
    for (let i = 0; i < array.length; i++) {
      if(array[i][len - 1]||array[i][len - 1]==0){
        res.push(array[i][len - 1])
      }
      array[i].splice(len - 1, 1)
    }
  }
  // remove last row
  if (array.length > 0) {
    len = array[0].length
    for (let i = len; i > 0; i--) {
      if(array[array.length - 1][i-1]||array[array.length - 1][i-1]==0){
        res.push(array[array.length - 1][i-1])
      }
    }
    array.pop()
  }
  // remove first elements
  if (array.length > 0) {
    for (let i = array.length; i > 0; i--) {
      if(array[i - 1][0]||array[i - 1][0]==0){
        res.push(array[i - 1][0])
      }
      array[i - 1].splice(0, 1)
    }
  }
  return array, res
}

spiralOrder(matrix)

// recursive spiral of matrix until the length of it runs out
