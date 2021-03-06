import { isStr } from "./util";

/**
 * @name 日期格式化化
 * @param 
 *  data 时间戳或者日期
 *  type 格式化格式，默认 yyyy-MM-dd hh:mm:ss
*/

function db(n){
    return n.toString()[1] ? n : '0' + n;
};
export function formatDate(data, type) {
    const time = data || new Date().getTime();
    const f = !type ? "yyyy-MM-dd hh:mm:ss" : type;
    let date = isStr(time) ? new Date(time.replace(/-/g, "/")) : new Date(time);
    const mode = {
        yyyy: date.getFullYear(),
        MM: db(date.getMonth() + 1),
        dd: db(date.getDate()),
        hh: db(date.getHours()),
        mm: db(date.getMinutes()),
        ss: db(date.getSeconds())
    };
    const result = f.replace(/(yyyy|MM?|dd?|hh?|mm?|ss?)/g, function() {
        return mode[arguments[0]];
    });
    return result;
};