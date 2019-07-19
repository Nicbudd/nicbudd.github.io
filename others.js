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