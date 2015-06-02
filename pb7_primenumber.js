console.time("primecount");
function findNthPrime (n){

	var primeContainer = [], i = 2;
	while(primeContainer.length<n){
		if(checkForPrime(i)) primeContainer.push(i);
		i++;
	}
	return primeContainer[primeContainer.length-1];
}


function checkForPrime (num) {
	for (var i = 2; i < num; i++) {

		if((num/i)%1 === 0){
			return false;
		}
	};
	return true;
}

console.log(findNthPrime(10001));
console.timeEnd("primecount");