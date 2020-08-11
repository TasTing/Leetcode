/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const size = matrix.length
  for (let j = 0; j < size - 1 ; j++){
      for (let i = j + 1; i < size; i++){
          const tmp = matrix[j][i]
          matrix[j][i] = matrix[i][j]
          matrix[i][j] = tmp
      }
  }
  matrix.forEach(line => line.reverse())
};

// swap position in size
//
//  0  1  2
//  1  2  0
//  2  0  1
//
//  2  1  0
//  0  2  1
//  1  0  2
//        j  i              i  j
// matrix[0][0] ===> matrix[0][2]
// matrix[0][1] ===> matrix[1][2]
// matrix[0][2] ===> matrix[2][2]
// 
//          accend         accend
//
// matrix[0][2] ===> matrix[2][2]
// matrix[1][2] ===> matrix[2][1]
// matrix[2][2] ===> matrix[2][0]
//
//          accend         decend
