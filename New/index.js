var body = document.getElementsByTagName("body")[0];
var mainBody = document.getElementById("mainBody");
var head = document.getElementsByTagName("head")[0];
	

function addToHead(content){
	for (let i = 0; i < content.length; i++){
		var item = document.createElement(content[i][0])
		for (let j = 1; j < content[i].length; j++){
			item.setAttribute(content[i][j][0], content[i][j][1])
		}
		head.appendChild(item);
	}
}

function buildMenu(content){
	var menu = document.getElementById("menu");
	for (let i = 0; i < content.length; i++){
		
		var item
		
		if (content[i][0] == "button" || content[i][0] == "header"){
			item = document.createElement("button");
			item.setAttribute("onclick", "menuToggle('" + content[i][2] + "')")
		
		} else {
			item = document.createElement("a")
			item.setAttribute("href", content[i][2] + ".html")
		
		}
		
		if (content[i][0] == "header"){
			item.setAttribute("class", "menuItem menuHeader " + content[i][3]);
		} else {
			item.setAttribute("class", "menuItem " + content[i][3]);
		}
		
		item.setAttribute("id", content[i][2] + "MenuButton");
		item.innerHTML = content[i][1]
		menu.appendChild(item);
	}
}

function randomColor(){
	var colors = ["red", "green", "blue", "black"]
	return colors[Math.floor(Math.random()* colors.length)]
}

function conditionedColor(prevColors){
	
	var randColor;
	
	
	do{
		
		//generate random color
		randColor = randomColor();
		var generateNew = false;
		
		//first color can't be black
		if(prevColors.length == 0 && randColor == "black"){
			generateNew = true;
		};
		
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

	//regenerates random color if any condition is met
	
	
	return randColor

}

function addMetaTags(tag){
	
}


function bodyLoad(page){
	
	
	//color all of the body headings
	var mainBody = document.getElementById("mainBody");
	
	var headingPrevColors = [];
	var h1Elem = mainBody.getElementsByTagName("h1");
	var h2Elem = mainBody.getElementsByTagName("h2");
	var h3Elem = mainBody.getElementsByTagName("h3");
	var h4Elem = mainBody.getElementsByTagName("h4");
	//var h5Elem = document.getElementsByTagName("h5");
	//var h6Elem = document.getElementsByTagName("h6");
	
	for (let i = 0; i < h1Elem.length; i++){
		var color = conditionedColor(headingPrevColors);
		h1Elem[i].setAttribute("class", color);
		headingPrevColors.push(color);
	}
	
	for (let i = 0; i < h2Elem.length; i++){
		var color = conditionedColor(headingPrevColors);
		h2Elem[i].setAttribute("class", color);
		headingPrevColors.push(color);
	}
	
	for (let i = 0; i < h3Elem.length; i++){
		var color = conditionedColor(headingPrevColors);
		h3Elem[i].setAttribute("class", color);
		headingPrevColors.push(color);
	}
	
	for (let i = 0; i < h4Elem.length; i++){
		var color = conditionedColor(headingPrevColors);
		h4Elem[i].setAttribute("class", color);
		headingPrevColors.push(color);
	}
	
	//load sideBar content
	
	var sideBarContent = [
	"<h1>Contact Me</h1><p>Got any questions? Need help? Wanna report an issue? Here's how to get in touch:</p><ul><li>Professional Emails, Website Related: <a href='mailto:nhh8629@wmich.edu'>nhh8629@wmich.edu</a></li><li>Personal Messages: <a href='mailto:niczippy77@gmail.com'>niczippy77@gmail.com</a></li></ul>",
	];
	
	var sideBarPrevColors = [];
	var sideBar = document.getElementById("sideBar");
	
	for (let i = 0; i < sideBarContent.length; i++){
		
		var sideBarObj = document.createElement("div")
		
		sideBarObj.innerHTML = sideBarContent[i]
		
		var color = conditionedColor(sideBarPrevColors);
		sideBarObj.setAttribute("class", "sideBarContent " + color);
		sideBarPrevColors.push(color);
		
		sideBar.appendChild(sideBarObj)
		
	};
	
	
	
	//load all of the other important content
	
	var head = document.getElementsByTagName("head")[0];
	var body = document.getElementsByTagName("body")[0];
	
	var headContent = [
	["link", ["rel", "icon"], ["href", "polygon7.png"], ["size", "32x32"], ["type", "image/png"]],
	["meta", ["charset", "UTF-8"]],
	["meta", ["name", "viewport"], ["content", "width=device-width, initial-scale=1.0"]],
	["link", ["rel", "stylesheet"], ["href", "cubing-icons.css"]]
	];

	addToHead(headContent);
	
	
	
	var menuContent = [
	["header", "Menu ▼", "main", "blue"],
	["a", "About Me", "aboutMe", "green"],
	["button", "Cube ▼", "cube", "green"],
	["a", "Home", "cubeHome", "black"],
	["a", "Algorithms", "algs", "black"],
	["a", "Competitions", "comps", "black"],
	["button", "Events ▼", "events", "black"],
	["a", "3x3", "threeCube", "red"],
	["a", "Other", "otherEvents", "red"],
	];
	
	buildMenu(menuContent);
	
	/*
	
	<button id="mainMenuButton" class="menuItem menuHeader blue" onclick="menuToggle('main');">Menu ▼</button>
<a id="aboutMenuButton" class="menuItem green" href="aboutMe.html">About Me</a>
<button id="cubeMenuButton" class="menuItem green" onclick="menuToggle('cube');">Cube ▼</button>
<a id="cubeHomeMenuButton" class="menuItem black" href="cube.html">Home</a>
<a id="algsMenuButton" class="menuItem black" href="algs.html">Algs</a>
<a id="compsMenuButton" class="menuItem black" href="comps.html">Comps</a>
<button id="eventsMenuButton" class="menuItem black" onclick="menuToggle('events');">Events ▼</button>
<a id="threeEventMenuButton" class="menuItem red" href="threeEvent.html">3x3</a>
<a id="otherEventMenuButton" class="menuItem red" href="otherEvents.html">Other</a>
	
	*/
}

//[original tab to be expanded, tab text, whether it is expanded yet or not, [children of tab]]
var tabInfo = [
["main", "Menu", false, ["cube", "aboutMe"], ""], 
["aboutMe", "", false, [], ""],
["cube", "Cube", false, ["cubeHome", "algs", "comps", "events"], ""],
["cubeHome", "", false, [], ""], 
["algs", "", false, [], ""], 
["comps", "", false, [], ""], 
["events", "Events", false, ["threeCube", "otherEvents"], ""],
["threeCube", "", false, [], ""], 
["otherEvents", "", false, [], ""], 
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