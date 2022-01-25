import { isObject } from "./util";

/**
 * @name 深度复制
 * @param
 *   data 复制对象
*/
export function deepCopy(data) {
    if(!isObject(data)){
        return;
    };
    function loop(obj){
        const result = {};
        for(let i in obj){
            if(isObject(obj[i])){
                result[i] = loop(obj[i]);
            } else {
                result[i] = obj[i];
            };
        };
        return result;
    };
    return loop(data);
};