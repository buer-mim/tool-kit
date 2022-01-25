import formatDate from "./modules/formatDate";
import webSecurity from "./modules/webSecurity";
import stringOperation from "./modules/stringOperation";
import arrOperation from "./modules/arrOperation";

const toolKit = {
    formatDate,
    ...webSecurity,
    ...stringOperation,
    ...arrOperation
};

// module.exports = toolKit;