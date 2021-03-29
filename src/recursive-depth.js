const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!this.checkArray(arr)) {
      return 0
    }
    this.counter = 1
    this.recursiveFunc(arr)

    return this.counter
  }
  recursiveFunc(arr) {
    arr.forEach(el => {
      if (this.checkArray(el)) {
        this.counter++
        this.recursiveFunc(el)
      }
    })
  }
  checkArray(arr) {
    if (!Array.isArray(arr)) {
      return false
    }
    return true
  }
  counter = 1
};
