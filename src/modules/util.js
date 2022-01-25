function _getObjStr(data){
    return Object.prototype.toString.call(data).toLowerCase();
};

/**
 * @name json对象判断
*/
export function isObject(obj){
    return obj && _getObjStr(obj) === "[object object]";
};

/**
 * @name 数组判断
*/
export function isArr(arr){
    return arr && _getObjStr(arr) === "[object array]";
};

/**
 * @name 字符串判断
*/
export function isStr(str){
    return str && _getObjStr(str) === "[object string]";
};