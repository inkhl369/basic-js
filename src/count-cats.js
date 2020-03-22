module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  var i, j, number  = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] == '^^'){

        number++;
      }
    }
  }
  return number;
}
