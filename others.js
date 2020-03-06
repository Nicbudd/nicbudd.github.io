//Hey there! You just found a hidden gem! This is a bunch of little javascript things that I'm too lazy to give an interface to. My brother would be disappointed if he ever found this (he's a UI designer). Anyways, have fun, and try this out on the console if you want!



//Basically https://pics.me.me/google-calculator-all-books-news-shopping-420420420-6969-69-6969-43006166.png this meme
//To find all the years that fall under that criteria from 1500-2500, use sumOfIntCombos(69, 420, 1500, 2500);
function sumOfIntCombos(int1, int2, startVal, endVal){
	
	let outArray = [];
	
	for (let i = 0; i < endVal; i = i + int1){
		for (let j = 0; j < endVal; j = j + int2){
			if(i + j > startVal && i + j < endVal){
				outArray.push([i + j, i / int1, j / int2]);
			};
		};
	};
	
	outArray.sort(function(a, b) { 
		return a[0] > b[0] ? 1 : -1;
	});
	
	console.log(outArray);
	
	for (let i = 0; i < outArray.length; i++){
		console.log("");
		console.log(outArray[i][0]);
		
		let currentAddNumbers = 0;
		let totalAddNumbers = outArray[i][1] + outArray[i][2];
		
		let addition = "";
		for (let j = 0; j < outArray[i][1]; j++){
			
			currentAddNumbers++;
			addition = addition + int1;
			
			if(currentAddNumbers < totalAddNumbers){
				addition = addition + "+";
			};
		};
		for (let j = 0; j < outArray[i][2]; j++){
			currentAddNumbers++;
			addition = addition + int2;
			
			if(currentAddNumbers < totalAddNumbers){
				addition = addition + "+";
			};
		};
		
		console.log(addition);
	}
	
}


//Loot generator

function randBetween(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


function randomWalks(runCount, walkLength){
	var distance = []
	var zeroes = 0
	
	for (let i = 0; i < runCount; i++){
		
		distance[i] = 0
		
		for (let j = 0; j < walkLength; j++){
			var random = randBetween(0, 1);
			if (random == 0){
				random = -1
			}
			distance[i] += random
		}
		
		if (distance[i] == 0){
			zeroes++
		}
	}
	
	console.log(distance)
	return zeroes;
	
}

function vanEck(num){
	var seq = [0]
	for (let i = 0; i < num; i++){
		var prevNumLoc = seq.lastIndexOf(seq[i], -2)
		if (prevNumLoc == -1){
			seq.push(0)
		} else {
			seq.push(seq.length - (prevNumLoc + 1))
		}
	}
	return seq
}

function chance(likelyhood){
	if (Math.random() < likelyhood){
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

/*
function generateLoot(){
	
	//for example, "Curse of Abysanna", "Fulkims Blessing"
	var groupModifiers = []
	
	
	
	
	//generate the value of the loot
	var itemValue = 100;
	while (chance(0.6) === true){
		itemValue += 50;
	};
	
	//generate the "intrigue", or how interesting the loot is
	var intrigue = 10;
	while (chance(0.7) === true){
		intrigue += 10;
	};
	
	
/*
	
	var items = [
	
	[var knife = {}, 5],
	[var dagger = {}, 10],
	[var sword = {}, 10],
	[var rapier = {}, 3],
	[var sabre = {}, 2],
	[var broadsword = {}, 10],
	[var shortsword = {}, 10],
	
	["Axe", 25],
	["Mace", 10],
	["Hammer", 10],
	["Staff", 5],
	["Bow", 15],
	["Crossbow", 7]
	];
	
	var itemName = generateWeighted(items);
	
	
	
	console.log(itemName);
	console.log("Value: " + itemValue);
	console.log("Intrigue: " + intrigue);

	*/
