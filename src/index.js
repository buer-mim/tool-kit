import { formatDate } from "./modules/formatDate";
import { encrypt, decrypt } from "./modules/webSecurity";
import { strToJson, jsonToStr, replaceStars } from "./modules/stringOperation";
import { arrRepeat, arrDelayer } from "./modules/arrOperation";
import { deepCopy } from "./modules/deepCopy";

const toolKit = {
    formatDate,
    encrypt,
    decrypt,
    strToJson,
    jsonToStr,
    replaceStars,
    arrRepeat,
    arrDelayer,
    deepCopy
};

// module.exports = toolKit;