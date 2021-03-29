const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    const winter = [11, 0, 1]
    const spring = [2, 3, 4]
    const summer = [5, 6, 7]
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    if (Object.prototype.toString.call(date) === "[object Date]" && date instanceof Date && !isNaN(date.getDate())) {
        const monthNumber = date.getMonth()
        let month
        if (winter.indexOf(monthNumber) !== -1) {
            month = 'winter'
        } else if (spring.indexOf(monthNumber) !== -1) {
            month = 'spring'
        } else if (summer.indexOf(monthNumber) !== -1) {
            month = 'summer'
        } else {
            month = 'fall'
        }
        return month
    } else {
        throw new Error('Shh! An enemy scout has lurked among the arguments that come into this function');
    }
}
