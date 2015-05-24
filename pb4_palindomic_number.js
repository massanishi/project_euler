function maxPalidomic(){
	
	
}

function findPalindromicNumOfThreeDigits () {
	var palidomicList = [];
	for (var i = 1000 - 1; i >= 0; i--) {
		for (var j = 1000 - 1; j >=0; j--) {
			var palidromicProduct = i*j;
			if (checkForPalindrom(palidromicProduct)) 
				palidomicList.push(palidromicProduct);
		};
	};
	return Math.max.apply(null, palidomicList);

}

function checkForPalindrom(num){
	var str = num.toString();
	var reversed = str.split('').reverse().join('');
	return str === reversed;

	// console.log(reverse(str));
}

console.log(findPalindromicNumOfThreeDigits());
//console.log(checkForPalindrom(121));