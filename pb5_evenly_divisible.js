function divisibleOfTen() {
    var value = 2520;
    for (var i = 10; i > 0; i--) {
        if (value % i !== 0) {
            return false;
        };
    };
    return true;
}

function findDivisible() {
    var startingVal = 20;

    while(!checkDivideToTwenty(startingVal)){
    	startingVal++;
    }
    return startingVal;
}

function checkDivideToTwenty(num) {
    for (var i = 1; i <= 20; i++) {
        if (num % i !== 0) {
        	return false;
        };
    };
    return true;
}

// This gets call stack max out at 15078
function divisbleByTwenty(value) {
    for (var i = 1; i <= 20; i++) {
        if (value % i !== 0) {
            console.log(value);
            return divisbleByTwenty(value + 1);
        };
    };
    return value;
}

console.log(findDivisible());

// Answer: How does factorization have to do with 
// This does not require programming at all. Compute the prime factorization of each number from 1 to 20, and multiply the greatest power of each prime together:

// 20 = 2^2 * 5
// 19 = 19
// 18 = 2 * 3^2
// 17 = 17
// 16 = 2^4
// 15 = 3 * 5
// 14 = 2 * 7
// 13 = 13
// 11 = 11

// All others are included in the previous numbers.

// ANSWER: 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19 = 232 792 560