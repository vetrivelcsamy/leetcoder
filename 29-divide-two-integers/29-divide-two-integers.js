/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
       let result = eval(dividend / divisor);
            
            if (result < 0) {
                // return parseInt(result);
              
                return Math.ceil(result);
              
            } else if (result == 2147483648) {
                return result - 1;
            } else {
              
                return Math.floor(result);
            }
};