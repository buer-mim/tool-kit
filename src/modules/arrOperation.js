import { isArr, isObject } from "./util";

/**
 * @name 数组去重
 * @param 
 *   arr 待处理数组
 *   args 匹配字段数组
*/
export function arrRepeat(arr, ...args) {
    if(!isArr(arr)){
        return;
    };
    const data = JSON.parse(JSON.stringify(arr));
    const map = new Map();
    if(args.length > 1){
        return data.filter((item) => {
            if(isObject(item)){
                const state = args.every((e) => {
                    return Object.keys(item).some((s) => {
                        return e === s;
                    });
                });
                return state ? !map.has(`${JSON.stringify(item)}`) && map.set(`${JSON.stringify(item)}`, 1) : item;
            } else {
                return item;
            };
        });
    } else {
        const target = args[0];
        return data.filter((item) => {
            if(target){
                return item[target] ? !map.has(`${target}-${item[target]}`) && map.set(`${target}-${item[target]}`, 1) : item;
            } else {
                return !map.has(item) && map.set(item,1);
            };
        });
    };
};

/**
 * @name 树形结构扁平化
 * @param 
 *   arr 树形结构数组
*/
export function arrDelayer(arr) {
    if(!isArr(arr)){
        return;
    };
    const data = JSON.parse(JSON.stringify(arr));
    function loop(array){
        return array.reduce((a,item) => {
            const children = !item.children ? [] : item.children;
            delete item?.children;
            return a.concat(item, loop(children));
        }, []);
    };
    return loop(data);
};