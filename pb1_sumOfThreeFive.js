function sumOfThreeAndFive(reachingNum){

	var sum = 0;
	for (var i = 0; i < reachingNum; i++) {
		if (i%3 == 0) {
			sum += i;
		}else if(i%5 == 0){
			sum += i;
		}; 
	};
	return sum;

}

console.log( sumOfThreeAndFive(1000));;