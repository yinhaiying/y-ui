
/**
 *数组的去重
 * @param {*} arr
 */
export const unique = (arr) =>{
  let obj = {};
  let result = [];
  arr.forEach((item) => {
    if(!obj[item]){
      obj[item] = true;
      result.push(item);
    }
  });
  return result;
}

export const addClass = (el, cls) => {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
