function randBetween(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function chance(likelyhood){
	if (Math.rand() < likelyhood){
		return true
	} else {
		return false
	};
	
};

function generateWeightedLetter(inputArray){ 
	
	var totalWeight = 0
	for (var i = 0; i < inputArray.length; i++){
		inputArray[i][2] = totalWeight + 1;
		totalWeight += inputArray[i][1];
		inputArray[i][3] = totalWeight;
	};
	
	console.log(inputArray);
	
	var random = randBetween(1, totalWeight)
	
	for (var i = 0; i < inputArray.length; i++){
		if (random >= inputArray[i][2] && random <= inputArray[i][3]){
			return inputArray[i][0]
		}
	}
	
}

function generateCoda(){
	var codaArray = [['t', 1224], ['n', 912], ['s', 855], ['h', 824], ['r', 809], ['d', 575], ['l', 544], ['c', 376], ['m', 325], ['w', 319], ['f', 301], ['g', 272], ['y', 267], ['p', 261], ['b', 202], ['v', 132], ['k', 104], ['j', 21], ['x', 20], ['q', 13], ['z', 10]];
	return generateWeightedLetter(codaArray);
};

function generateWord(){
	console.log(generateCoda());
}