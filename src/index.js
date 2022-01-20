import formatDate from "./modules/formatDate";
import webSecurity from "./modules/webSecurity";

const toolKit = {
    formatDate,
    ...webSecurity
};
const a = {
    id: 123,
    name: '测试',
    content: '季卡稍等哈杰卡斯点哈季卡稍等哈',
    link: 'https://www.baidu.com/#/'
};
const setLocalStorage = (name, data) => {
    localStorage.setItem(name,webSecurity.encrypt(JSON.stringify(data)));
};
const getLocalStorage = (name) => {
    return JSON.parse(webSecurity.decrypt(localStorage.getItem(name)));
};

setLocalStorage('a', a);
console.log(getLocalStorage('a'));

// module.exports = toolKit;