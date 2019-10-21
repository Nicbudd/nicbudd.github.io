function randomColor(){
	var colors = ["var(--red)", "var(--green)", "var(--blue)", "var(--black)"]
	return colors[Math.floor(Math.random()* colors.length)]
}

function conditionedColor(prevColors, elementAmts){
	
	do{
		var randomColor = randomColor();
		var generateNew = false;
		if (randomColor == prevColors[0] || randomColor == prevColors[1]){
			generateNew = true
		};
	}
	while (generateNew == true);
	return randomColor
	
}

function bodyLoad(){
	
	var prevColor
	var prevPrevColor
	var h1Elem = document.getElementsByTagName("h1");
	var h2Elem = document.getElementsByTagName("h2");
	var h3Elem = document.getElementsByTagName("h3");
	var h4Elem = document.getElementsByTagName("h4");
	//var h5Elem = document.getElementsByTagName("h5");
	//var h6Elem = document.getElementsByTagName("h6");
	
	for (let i = 0; i < h1Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		h1Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h2Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		console.log(color)
		h2Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h3Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		console.log(color)
		h3Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h4Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		console.log(color)
		h4Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	/*
	for (let i = 0; i < h5Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		console.log(color)
		h5Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h6Elem.length; i++){
		var color = randomColor(prevColor, prevPrevColor);
		console.log(color)
		h6Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	*/
	
}

//[original tab to be expanded, tab text, whether it is expanded yet or not, [children of tab]]
var tabInfo = [
["main", "Menu", false, ["cube"]], 
["cube", "Cube", false, ["cubeHome", "algs", "comps"]],
["cubeHome", "", false, []], 
["algs", "", false, []], 
["comps", "", false, []], 
]

function menuCollapse(tabToCollapse){
	
	var tabNumber;
	
	for (let i = 0; i < tabInfo.length; i++){
		if (tabInfo[i][0] == tabToCollapse){
			tabNumber = i;
		}
	}
	
	var parentItem = document.getElementById(tabInfo[tabNumber][0] + "MenuButton");
	
	for (let i = 0; i < tabInfo[tabNumber][3].length; i++){
		menuCollapse(tabInfo[tabNumber][3][i]);
		var currentItem = document.getElementById(tabInfo[tabNumber][3][i] + "MenuButton");
		currentItem.style.display = "none";
		tabInfo[tabNumber][2] = false
		parentItem.innerHTML = tabInfo[tabNumber][1] + " ▼";
	}
	
}

function menuToggle(tabToExpand){
	
	var tabNumber;
	
	for (let i = 0; i < tabInfo.length; i++){
		if (tabInfo[i][0] == tabToExpand){
			tabNumber = i;
		}
	}
	
	if (tabInfo[tabNumber][2] == false){
		
		var parentItem = document.getElementById(tabInfo[tabNumber][0] + "MenuButton");
		
		for (let i = 0; i < tabInfo[tabNumber][3].length; i++){
			var currentItem = document.getElementById(tabInfo[tabNumber][3][i] + "MenuButton");
			currentItem.style.display = "block";
			parentItem.innerHTML = tabInfo[tabNumber][1] + " ▲";
		}
		
		
		parentItem.style.display = "block";
		
		tabInfo[tabNumber][2] = true;
		
	} else {
		
		menuCollapse(tabInfo[tabNumber][0]);
		
		var parentItem = document.getElementById(tabInfo[tabNumber][0] + "MenuButton");
		parentItem.style.display = "block";

		tabInfo[tabNumber][2] = false;
	}
}