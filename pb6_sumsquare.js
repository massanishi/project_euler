function sumSquare(valSumTo){
	var i = 0, sum = 0;

	while(i< valSumTo +1){
		sum += (i*i);
		i++
	}
	return sum;
}

function squareSum(valSumTo){
	var i = 0, sum = 0;

	while(i< valSumTo +1){
		sum += i;
		i++
	}
	return sum*sum;	
}

function findSumSquareDifference(){
	return sumSquare(100) - squareSum(100);
}

console.log(findSumSquareDifference());