function openDetails(detailsName){
	document.getElementById(detailsName).style.visibility = 'visible';
}

function hideDetails(detailsName){
	document.getElementById(detailsName).style.visibility = "hidden";
}

var menuVisible = false

function showMenu(){
	if (menuVisible === true){
		document.getElementById('menu').style.opacity = 0;
		menuVisible = false
		setTimeout(turnVisibilityOff, 500)
	} else {
		document.getElementById('menu').style.opacity = 1;
		document.getElementById('menu').style.visibility = "visible";
		menuVisible = true
	}
}

function turnVisibilityOff() {
	document.getElementById('menu').style.visibility = "hidden";
}