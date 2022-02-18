var body = document.getElementsByTagName("body")[0];
var mainBody = document.getElementById("mainBody");
var head = document.getElementsByTagName("head")[0];

var menuContent = [
	["header", "Menu", "menu", "blue", ["cube", "conlangs", "weather", "javascript", "other",]],
	//["button", "Cubing", "cube", "green", ["cubeHome", "algs", "fmc"]],
	//comment below out when FMC page is finished
	["button", "Cubing", "cube", "green", ["cubeHome", "algs"]],
	["a", "Home", "cubeHome", "red", []],
	["a", "Algorithms", "algs", "red", []],
	//["a", "FMC", "fmc", "red", []],
	["a", "Conlangs", "conlangs", "green", []],
	["a", "Weather", "weather", "green", []],
	["a", "Projects", "javascript", "green", []],
	["button", "Other", "other", "green", ["debt", "credits"]],
	["a", "Debt", "debt", "red", []],
	["a", "Credits", "credits", "red", []],
	];

var hiddenContent = []

function showHide(contentID){
	var content = document.getElementById(contentID);

	if (content.style.display == "none"){
		content.style.display = "block"
	} else {
		content.style.display = "none"
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
			item.setAttribute("class", "menuHeader menuItem " + content[i][3]);
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


	return randColor;

}

function bodyLoad(page){

	var cubingPages = ["cubeHome", "algs", "monkeyLeague"];

	//color all of the body headings
	var mainBody = document.getElementById("mainBody");

	var headingPrevColors = [];
	var mainBodyElements = mainBody.getElementsByTagName("*");

	//var h5Elem = document.getElementsByTagName("h5");
	//var h6Elem = document.getElementsByTagName("h6");

	for (var i = 0; i < mainBodyElements.length; i++){
		var elem = mainBodyElements[i].tagName
		if(elem == "H1" || elem == "H2" || elem == "H3" || elem == "H4"){
			var color = conditionedColor(headingPrevColors);
			mainBodyElements[i].setAttribute("class", color + " " + mainBodyElements[i].className);
			headingPrevColors.push(color);
		}
	}


	//load sideBar content

	var sideBarContent = [
	"<h1>Contact Me</h1><p>Have a question? Need help? Want to report an issue? Here's how to get in touch:</p><ul><li>Professional Emails: <a href='mailto:naz1008@unh.edu'>naz1008@unh.edu</a></li><li>Personal Messages, Website Related: <a href='mailto:nicbudd@nicbudd.com'>nicbudd@nicbudd.com</a></li></ul>",
	"<h2>Want to learn how to solve a rubiks cube?</h2><p>I highly recommend this video tutorial:</p><div class='centerFlex'><a class='button' href='https://www.youtube.com/watch?v=1t1OL2zN0LQ'>Video Tutorial</a></div>",
	//"",
	];

	var sideBarPrevColors = [];
	var sideBar = document.getElementById("sideBar");

	for (let i = 0; i < sideBarContent.length; i++){

		var displayObj = true

		//dont display 2nd sidebar content if it is not a cubing page
		if (cubingPages.indexOf(page) == -1 && i == 1){
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
