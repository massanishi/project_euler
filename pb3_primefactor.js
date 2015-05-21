function findPrimeFactor (factors) {
	var division = 2;
	var primeFactors = [];
	while(factors>1){
		if (factors/division % 1 === 0) {
			factors /=division;	
			primeFactors.push(division)
		}else{
			division++;
		};
	}
	return primeFactors;
}

console.log(findPrimeFactor(600851475143));
