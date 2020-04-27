
/**
 *数组的去重
 * @param {*} arr
 */
export const unique = (arr) =>{
  let obj = {};
  let result = [];
  arr.forEach((item) => {
    if(!obj[item]){
      obj[item] = item;
      result.push(item);
    }
  });
  return result;
}
