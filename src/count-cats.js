const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return  matrix.flat().filter(e=>e==='^^').length;
}
