var body = document.getElementsByTagName("body")[0];
var mainBody = document.getElementById("mainBody");

function randomColor(){
	var colors = ["var(--red)", "var(--green)", "var(--blue)", "var(--black)"]
	return colors[Math.floor(Math.random()* colors.length)]
}

function conditionedColor(prevColors, elementAmts){
	var randomColor
	var generateNew = false;
	
	do{
		randomColor = randomColor();
		if (randomColor == prevColors){
			generateNew = true
		};
	}
	while (generateNew == true);
	
	return randomColor
}

function bodyLoad(){

	var mainBody = document.getElementById("mainBody")
	var prevColor
	var prevPrevColor
	var h1Elem = mainBody.getElementsByTagName("h1");
	var h2Elem = mainBody.getElementsByTagName("h2");
	var h3Elem = mainBody.getElementsByTagName("h3");
	var h4Elem = mainBody.getElementsByTagName("h4");
	//var h5Elem = document.getElementsByTagName("h5");
	//var h6Elem = document.getElementsByTagName("h6");
	
	for (let i = 0; i < h1Elem.length; i++){
		var color = conditionedColor(prevColor, "0");
		console.log(color)
		h1Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h2Elem.length; i++){
		var color = conditionedColor(prevColor, "0");
		console.log(color)
		h2Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h3Elem.length; i++){
		var color = conditionedColor(prevColor, "0");
		console.log(color)
		h3Elem[i].style.background = color;
		prevPrevColor = prevColor;
		prevColor = color;
	}
	
	for (let i = 0; i < h4Elem.length; i++){
		var color = conditionedColor(prevColor, "0");
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

const blobAmount = 30;
const blobSize = 175;

var blobPos = []
var blobRadius = []
var blobColor = []