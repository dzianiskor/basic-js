const CustomError = require("../extensions/custom-error");

let result = []

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    try {
      result.push(value);
      return this;
    } catch (e) {
      throw new Error(e)
    }
  },
  removeLink(position) {
    try {
      if ( typeof position!== "number" || position===0 || position > result.length ) {
        result=[]
        throw new Error()
      }
      result.splice(position-1, 1);
      return this;
    } catch (e) {
      throw new Error(e)
    }
  },
  reverseChain() {
    result.reverse();
    return this;
  },
  finishChain() {
    let chain = result.map((el, index) => {
      if (index === 0) {
        return `( ${el} )`
      } else {
        return `~~( ${el} )`
      }
    })
    result = []

    return chain.join('')
  }
};

module.exports = chainMaker;
