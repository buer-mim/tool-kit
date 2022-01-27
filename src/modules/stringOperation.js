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