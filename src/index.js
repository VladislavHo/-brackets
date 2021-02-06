module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (const iterator of bracketsConfig) {
    arr.push(iterator.join(''))
  }
  for (let index = 0; index < arr.length; index++) {
    if (str.includes(arr[index])) {
      str = str.replace(arr[index], '');
      index = -1
    }
  }
 return str.length === 0 ? true : false
};
