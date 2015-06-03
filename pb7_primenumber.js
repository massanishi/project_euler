console.time("primecount");
var primeContainer = [];
function findNthPrime (n){

	var primeCandidate = 2;
	while(primeContainer.length<n){
		if(checkForPrime(primeCandidate)) primeContainer.push(primeCandidate);
		primeCandidate++;
	}
	return primeContainer[primeContainer.length-1];
}

// Old one just for record. It took 9sec
// function checkForPrime (num) {
// 	for (var i = 2; i <= num; i++) {

// 		if((num/i)%1 === 0){
// 			return false;
// 		}
// 	};
// 	return true;
// }

function checkForPrime (num) {
	// Divide prime candidate numebr by already discovered primes.
	for (var i = 0; primeContainer[i] <= Math.sqrt(num); i++) {
		
		if((num/primeContainer[i])%1 === 0){
			return false;
		}
	};
	return true;
}

console.log(findNthPrime(10001));
console.timeEnd("primecount");