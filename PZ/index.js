function openDetails(detailsName){
	document.getElementById(detailsName).style.opacity = 1;
	document.getElementById(detailsName).style.visibility = 'visible';

}

function hideDetails(detailsName){
	document.getElementById(detailsName).style.opacity = 0;
	setTimeout(turnVisibilityOff, 500, detailsName);
}

var menuVisible = false

function showMenu(itemName){
	if (menuVisible === true){
		document.getElementById('menu').style.opacity = 0;
		menuVisible = false;
		setTimeout(turnVisibilityOff('menu'), 500);
	} else {
		document.getElementById('menu').style.opacity = 1;
		document.getElementById('menu').style.visibility = "visible";
		menuVisible = true;
	}
}

function turnVisibilityOff(elementName) {
	document.getElementById(elementName).style.visibility = "hidden";
}