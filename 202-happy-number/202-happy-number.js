/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
       let set = new Set();
	
	    while (n !== 1) {
	        n = getNext(n)
	        if (set.has(n)) {
	            return false;
	        }
	        set.add(n);
	    }
	
	    return n === 1;
	};
	
	var getNext = function (n) {
	    let sum = 0;
	    while (n > 0) {
	        sum += Math.pow(n % 10, 2);
	        n = Math.floor(n / 10);
	    }
	    return sum;

};