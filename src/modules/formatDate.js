/**
 * @name 日期格式化化
 * @param 
 *  data 时间戳或者日期
 *  type 格式化格式，默认 yyyy-MM-dd hh:mm:ss
*/

function db(n){
    return n.toString()[1] ? n : '0' + n;
};
const formatDate = (data, type) => {
    const f = !type ? "yyyy-MM-dd hh:mm:ss" : type;
    let date = typeof data === 'string' ? new Date(data.replace(/-/g, "/")) : new Date(data);
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

export default formatDate;