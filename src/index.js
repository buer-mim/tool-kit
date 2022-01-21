import formatDate from "./modules/formatDate";
import webSecurity from "./modules/webSecurity";
import stringOperation from "./modules/stringOperation";

const toolKit = {
    formatDate,
    ...webSecurity,
    ...stringOperation
};

var tel = '188ABCD1331';
console.log(stringOperation.replaceStars(tel, 0, 3));
console.log(stringOperation.replaceStars(tel, 1, 3));
console.log(stringOperation.replaceStars(tel, -1, 3));


// module.exports = toolKit;