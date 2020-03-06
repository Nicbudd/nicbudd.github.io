var body = document.getElementsByTagName("body")[0];
var mainBody = document.getElementById("mainBody");
var head = document.getElementsByTagName("head")[0];

var menuContent = [
	["header", "Menu", "menu", "blue", ["index", "aboutMe", "cube", "hobbies", "javascript", "other"]],
	["a", "Home", "index", "green", []],
	["a", "About Me", "aboutMe", "green", []],
	["button", "Cubing", "cube", "green", ["cubeHome", "events", "comps", "cubeBeginners", "algs"]],
	["a", "Home", "cubeHome", "red", []],
	["button", "Events", "events", "red", ["threeCube", "otherEvents"]],
	["a", "3x3", "threeCube", "black", []],
	["a", "Other", "otherEvents", "black", []],
	["a", "Competitions", "comps", "red", []],
	["a", "Beginners", "cubeBeginners", "red", []],
	["a", "Algorithms", "algs", "red", []],
	["a", "Hobbies", "hobbies", "green", []],
	["a", "JS Things", "javascript", "green", []],
	["a", "Other", "other", "green", []],
	];
	
var hiddenContent = []

function showHide(contentID, showText, hideText){
	var content = document.getElementById(contentID);
	content.style.display = "none"
	var hidden = true
	for (let i = 0; i < hiddenContent.length; i++){
		if (hiddenContent[i] == contentID){
			content.style.display = "block"
			hiddenContent.splice(i, 1);
			hidden = false
		}
	}
	if (hidden == true){
		hiddenContent.push(contentID);
	}
}

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
	for (let i = 1; i < content.length; i++){
		
		var item
		
		if (content[i][0] == "button" || content[i][0] == "header"){
			item = document.createElement("button");
			item.setAttribute("onclick", "menuToggle('" + content[i][2] + "')")
			item.innerHTML = content[i][1] + " ▼"
		
		} else {
			item = document.createElement("a")
			item.setAttribute("href", content[i][2] + ".html")
			item.innerHTML = content[i][1]
		
		}
		
		if (content[i][0] == "header"){
			item.setAttribute("class", "menuItem menuHeader " + content[i][3]);
		} else {
			item.setAttribute("class", "menuItem " + content[i][3]);
		}
		
		item.setAttribute("id", content[i][2] + "MenuButton");
		
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

function bodyLoad(page){
	
	var cubingPages = ["cubeHome", "algs", "comps", "cubeBeginners"];
	var eventsPages = ["threeCube", "otherEvents"];
	
	cubingPages = cubingPages.concat(eventsPages);
	
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
	"<h1>Contact Me</h1><p>Have a question? Need help? Want to report an issue? Here's how to get in touch:</p><ul><li>Professional Emails: <a href='mailto:nhh8629@wmich.edu'>nhh8629@wmich.edu</a></li><li>Personal Messages, Website Related: <a href='mailto:niczippy77@gmail.com'>niczippy77@gmail.com</a></li></ul>",
	"<h2>Want to learn how to solve a rubiks cube?</h2><div class='centerFlex'><a class='button' href='cubeBeginners.html'>Click here to learn</a></div>",
	"<h1>Jump to Event</h1><div class='centerFlex'><a class='button' href='threeCube.html'>3x3</a><a class='button' href='otherEvents.html'>Other Events</a></div>",
	//"",
	];
	
	var sideBarPrevColors = [];
	var sideBar = document.getElementById("sideBar");
	
	for (let i = 0; i < sideBarContent.length; i++){
		
		var displayObj = true
		
		if (cubingPages.indexOf(page) == -1 && i == 1){
			displayObj = false
		}
		
		if (eventsPages.indexOf(page) == -1 && i == 2){
			displayObj = false
		}
		
		if (displayObj == true){
			var sideBarObj = document.createElement("div")
			sideBarObj.innerHTML = sideBarContent[i]
		
			var color = conditionedColor(sideBarPrevColors);
			sideBarObj.setAttribute("class", "sideBarContent " + color);
			sideBarPrevColors.push(color);
		
			sideBar.appendChild(sideBarObj)
		}
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
	
	buildMenu(menuContent);
	
	for (let i = 0; i < menuContent.length; i++){
		menuContent[i][5] = false
	}
	

}

function menuCollapse(tabToCollapse){
	
	var tabNumber;
	
	for (let i = 0; i < menuContent.length; i++){
		if (menuContent[i][2] == tabToCollapse){
			tabNumber = i;
		}

	}
	
	var parentItem = document.getElementById(menuContent[tabNumber][2] + "MenuButton");
	
	for (let i = 0; i < menuContent[tabNumber][4].length; i++){
		menuCollapse(menuContent[tabNumber][4][i]);
		var currentItem = document.getElementById(menuContent[tabNumber][4][i] + "MenuButton");
		currentItem.style.display = "none";
		menuContent[tabNumber][5] = false
		parentItem.innerHTML = menuContent[tabNumber][1] + " ▼";
	}
	
}

function menuToggle(tabToExpand){
	
	var tabNumber;
	
	for (let i = 0; i < menuContent.length; i++){
		if (menuContent[i][2] == tabToExpand){
			tabNumber = i;
		}
	}
	

	if (menuContent[tabNumber][5] == false){
		
		var parentItem = document.getElementById(menuContent[tabNumber][2] + "MenuButton");
		
		for (let i = 0; i < menuContent[tabNumber][4].length; i++){
			var currentItem = document.getElementById(menuContent[tabNumber][4][i] + "MenuButton");
			currentItem.style.display = "block";
			parentItem.innerHTML = menuContent[tabNumber][1] + " ▲";
		}
		
		
		parentItem.style.display = "block";
		
		menuContent[tabNumber][5] = true;
		
	} else {
		
		menuCollapse(menuContent[tabNumber][2]);
		
		var parentItem = document.getElementById(menuContent[tabNumber][2] + "MenuButton");
		parentItem.style.display = "block";

		menuContent[tabNumber][5] = false;
	}
}