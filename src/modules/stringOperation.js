import { isStr, isObject } from "./util";

/**
 * @name 字符串转json
 * @param 
 *  str 目标字符串
 *  tag 切割标识
*/
export function strToJson(str, tag = '&') {
    if(!isStr(str)){
        return;
    };
    const arr = str.split(tag), result = [];
    arr.forEach(item => {
        result.push(item.split('='));
    });
    return Object.fromEntries(result);
};

/**
 * @name json对象转字符串
 * @param
 *   obj 目标json对象
 *   tag 链接符
*/
export function jsonToStr(obj, tag = '&') {
    if(!isObject(obj)){
        return;
    };
    const arr = Object.entries(obj), result = [];
    arr.forEach(item => {
        result.push(item.join('='));
    });
    return result.join(tag);
};

/**
 * @name 指定位置用 * 代替
 * @param
 *   str 目标字符串
 *   start <number> 开始位置
 *   end <number> 结束位置
 *   num <number> 星星数量
 *   tag 占位符号
*/
export function replaceStars(str, start = 1, end, tag = "*", num) {
    if(!isStr(str)){
        return;
    };
    const length = str.length;
    const startIdx = (typeof start === "number" ? (start < 1 ? 1 : start) : 1), 
          endIdx = typeof end === "number" ? (end < 0 ? Math.max(length + end + 1, 0) : Math.min(end, length)) : Math.min(end, length);
    const regTarget = str.slice(startIdx - 1, endIdx),
          len = num || Math.max(endIdx - startIdx, 0);
    const tagStr = new Array(len).fill(tag).join(''),
          reg = new RegExp(regTarget, "i");
    return str.replace(reg, tagStr);
};