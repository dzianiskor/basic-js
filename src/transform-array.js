const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Not Array')
    }
    const clonedArray = [...arr]
    const newArray = []
    for (let i = 0; i < clonedArray.length; i++) {
        switch (clonedArray[i]) {
            case '--discard-next':
                if (i < clonedArray.length - 1) {
                    clonedArray[i+1] = null
                }
                i++;
                break;
            case '--discard-prev':
                if (i > 0 && clonedArray[i-1] !== null) {
                    clonedArray[i-1] = null
                    newArray.pop()
                }
                break;
            case '--double-next':
                if (i < clonedArray.length - 1 && clonedArray[i + 1]!==null) {
                    newArray.push(clonedArray[i + 1])
                }
                break;
            case '--double-prev':
                if (i > 0 && clonedArray[i - 1]!==null) {
                    newArray.push(clonedArray[i - 1])
                }
                break;
            default:
                newArray.push(clonedArray[i])
        }
    }

    return newArray
}
