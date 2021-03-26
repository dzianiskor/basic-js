const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let res = []
  members.forEach(el => {
    if (typeof el==="string") {
      res.push(el.trim().slice(0, 1).toUpperCase())
    }
  })
  res.sort()
  return res.length ? res.join('') : false
};
