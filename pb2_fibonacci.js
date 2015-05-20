function fibonacci (){
	var x = 1;
	var y = 2;
	var holder = 0;
	evenSum = 2;
	while(holder< 4000000){
		holder = x+y;
		x = y;
		y = holder;
		if (holder % 2 === 0) {
			evenSum += holder;
		};
		console.log(holder);
	}
	console.log(evenSum);
}

fibonacci();