function turnVisibilityOff(elementName) {
	document.getElementById(elementName).style.visibility = "hidden";
};

function openDetails(detailsName){
	document.getElementById(detailsName).style.opacity = 1;
	document.getElementById(detailsName).style.visibility = 'visible';

};

function hideDetails(detailsName){
	document.getElementById(detailsName).style.opacity = 0;
	setTimeout(turnVisibilityOff, 500, detailsName);
};

var menuVisible = false;

function showMenu(){
	if (menuVisible === true){
		menu = document.getElementById('menu')
		menu.style.opacity = 0;
		setTimeout(turnVisibilityOff, 500, 'menu');
		menuVisible = false;
	} else {
		document.getElementById('menu').style.opacity = 1;
		document.getElementById('menu').style.visibility = "visible";
		menuVisible = true;
	};
};


function stopMoving(){
	document.getElementById('zerbTitleAnim').style.width = "50%"
	document.getElementById('pangTitleAnim').style = "width:50%!important;"
	document.getElementById('zerbTitleAnim').style.left = "50%"
	document.getElementById('pangTitleAnim').style.right = "50%"
}

function load(){
	
	document.getElementById('zerbTitleAnim').onmouseover = stopMoving();
	document.getElementById('pangTitleAnim').onmouseover = stopMoving();
	
	setTimeout(function(){
		document.getElementById('zerbTitleAnim').style = ""
		document.getElementById('pangTitleAnim').style = ""
	}, 2500);
}

document.addEventListener("DOMContentLoaded", load);

