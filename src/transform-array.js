module.exports = function transform(arr) {
    // remove line with error and write your code here
    var res = [];
    if (!Array.isArray(arr)) throw Error();
     if (arr.length === 0)  return arr;
      for (var index = 0; index < arr.length; index++) {
          if (arr[index] === '--discard-next') {
            if (index + 1 <= arr.length - 1) {
              index++;
            }
          } else 
          if (arr[index] === '--discard-prev') {
            if (index - 1 >= 0) {
              res.pop();
            }
          } else 
          if (arr[index] === '--double-next') {
            if (index + 1 <= arr.length - 1) {
              res.push(arr[index + 1]);
            }
          } else 
          if (arr[index] === '--double-prev') {
            if (index - 1 >= 0) {
              res.push(arr[index - 1]);
            }
          } else {
          res.push(arr[index]);
        }
      }
      return res;
};
