module.exports = function createDreamTeam(members) {
 
  // remove line with error and write your code here
  var i, j, arr, str = '';
  if (!(Array.isArray(members))) return false;
  for (var i=0; i < members.length; i++) {
    if (typeof(members[i]) != 'string');
    else {
       j = 0;
      while (members[i][j] === ' ')
      { 
        j++;
      }
      str += members[i][j];
    }
  }
  str = str.toUpperCase();
  arr = str.split('');
  arr = arr.sort();
  str = arr.join('');
  return str;
};
