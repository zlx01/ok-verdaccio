const dayjs = require("dayjs");

console.log("胡雁哀鸣夜夜飞，胡儿眼泪双双落。");

/**
 * 计算两个日期之间相差的天数
 * @param {string} dateStart
 * @param {string} dateEnd
 * @returns {string} 天数
 */
module.exports = function dayDiff(dateStart, dateEnd) {
  return dayjs(dateEnd).diff(dayjs(dateStart), "day");
};
