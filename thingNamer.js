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

function generateWeighted(inputArray){ 
	
	var totalWeight = 0
	for (var i = 0; i < inputArray.length; i++){
		inputArray[i][2] = totalWeight + 1;
		totalWeight += inputArray[i][1];
		inputArray[i][3] = totalWeight;
	};
	
	//console.log(inputArray);
	
	var random = randBetween(1, totalWeight)
	
	for (var i = 0; i < inputArray.length; i++){
		if (random >= inputArray[i][2] && random <= inputArray[i][3]){
			return inputArray[i][0]
		}
	}
	
}

function generateConsonant(){
	var consArray = [['t', 1224], ['n', 912], ['s', 855],  ['r', 809], ['d', 575], ['l', 544], ['c', 376], ['m', 325], ['w', 319], ['f', 301], ['g', 272], ['y', 267], ['p', 261], ['b', 202], ['v', 132], ['k', 104], ['j', 21], ['x', 20], ['q', 13], ['z', 10]];
	//['h', 824],
	return generateWeighted(consArray);
	
};

function generateVowel(){
	var consArray = [['e', 64], ['a', 41], ['o', 38], ['i', 35], ['u', 14], ['y', 10]];
	return generateWeighted(consArray);
};

function generateSyllable(){
	var onset = generateConsonant();
	var nucleus = generateVowel();
	var coda = generateConsonant();
	return onset + nucleus + coda;
}

function generateWord(){
	var V1 = generateVowel();
	var V2 = generateVowel();
	var V3 = generateVowel();
	var C1 = generateConsonant();
	var C2 = generateConsonant();
	var C3 = generateConsonant();
	
	var options = [['CVCVC', 50], ['CVCCV', 35], ['VCVCV', 12], ['VCCVC', 10]]
	
	var pattern = generateWeighted(options);
	
	var word
	switch (pattern){
		case 'CVCVC':
			word = C1 + V1 + C2 + V2 + C3;
			break;
		case 'CVCCV':
			word = C1 + V1 + C2 + C3 + V2;
			break;
		case 'VCVCV':
			word = V1 + C1 + V2 + C2 + V3;
			break;
		case 'VCCVC':
			word = V1 + C1 + C2 + V2 + C3;
			break;
	}
	
	console.log(word);
	
	
}