function randomColor(){
	var colors = ["var(--red)", "var(--green)", "var(--blue)", "var(--black)"]
	return colors[Math.floor(Math.random()* colors.length)]
}

function conditionedColor(prevColors){
	
	var randColor;
	do{
		randColor = randomColor();
		var generateNew = false;
		
		//regenerate if same as previous 2 colors
		if (randColor == prevColors[prevColors.length - 1] || randColor == prevColors[prevColors.length - 2]){
			generateNew = true;
		};
		
		//regenerate if it is the last in the sequence of 4 headings
		if (prevColors.length % 4 == 3 && randColor == prevColors[prevColors.length - 3]){
			generateNew = true;
		};
		
	}
	while (generateNew == true);
	return randColor
	
}




function bodyLoad(){
	
	var mainBody = document.getElementById("mainBody");
	var prevColors = [];
	var h1Elem = mainBody.getElementsByTagName("h1");
	var h2Elem = mainBody.getElementsByTagName("h2");
	var h3Elem = mainBody.getElementsByTagName("h3");
	var h4Elem = mainBody.getElementsByTagName("h4");
	
	for (let i = 0; i < h1Elem.length; i++){
		var color = conditionedColor(prevColors);
		h1Elem[i].style.background = color;
		prevColors.push(color);
	}
	
	for (let i = 0; i < h2Elem.length; i++){
		var color = conditionedColor(prevColors);
		h2Elem[i].style.background = color;
		prevColors.push(color);
	}
	
	for (let i = 0; i < h3Elem.length; i++){
		var color = conditionedColor(prevColors);
		h3Elem[i].style.background = color;
		prevColors.push(color);
	}
	
	for (let i = 0; i < h4Elem.length; i++){
		var color = conditionedColor(prevColors);
		h4Elem[i].style.background = color;
		prevColors.push(color);
	}
	
}

//[original tab to be expanded, tab text, whether it is expanded yet or not, [children of tab]]
var tabInfo = [
["main", "Menu", false, ["cube"], ""], 
["cube", "Cube", false, ["cubeHome", "algs", "comps"], ""],
["cubeHome", "", false, [], ""], 
["algs", "", false, [], ""], 
["comps", "", false, [], ""], 
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