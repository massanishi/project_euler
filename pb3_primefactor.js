function findPrimeFactor (factors) {
	var division = 2;
	var primeFactors = [];
	while(factors>1){
		// console.log(factors);
		if (factors/division % 1 === 0) {
			factors /=division;	
			primeFactors.push(division)
		}else{
			division++;
		};
	}
	console.log(primeFactors);
	return factors;
}

console.log(findPrimeFactor(600851475143));
//console.log(4/3%1 ===0)
