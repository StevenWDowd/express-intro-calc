const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let notNums = [];
    //const nums = strNums.map(val => Number.parseInt(val));
  let nums = [];
    for (let str of strNums) {
      let converted = Number.parseInt(str);
      if (!converted){
        notNums.push(converted);
      } else {
        nums.push(converted);
      }

    }
    if (notNums.length > 0) {
      const badNumString = notNums.join(" ,");
      //return {error: {message: `${badNumString} are not numbers`}};
      const errorMessage = `${badNumString} are not numbers`;
      throw new BadRequestError(errorMessage);
    }
    return nums;

}


module.exports = { convertStrNums };