function randomColor(prevColor, prevPrevColor){
	var colors = ["var(--red)", "var(--green)", "var(--blue)", "var(--black)"]
	var generatedColor
	do{
		generatedColor = colors[Math.floor(Math.random()* colors.length)]
	}
	while (generatedColor == prevColor || generatedColor == prevPrevColor);
	return generatedColor
}

function bodyLoad(){
	
	console.log("hey");
	
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
		console.log(color)
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

var menuExpanded = false

function menuExpand(){
	
	var menuItems = document.getElementsByClassName("menuItem")
	
	if (menuExpanded == false){
		for (let i = 0; i < menuItems.length; i++){
			menuItems[i].style.display = "block"
		}
		document.getElementsByClassName("menuHeader")[0].style.display = "block"
		document.getElementsByClassName("menuHeader")[0].innerHTML = "Menu ▲"
		menuExpanded = true
	} else {
		for (
		let i = 0; i < menuItems.length; i++){
			menuItems[i].style.display = "none"
		}
		document.getElementsByClassName("menuHeader")[0].style.display = "block"
		document.getElementsByClassName("menuHeader")[0].innerHTML = "Menu ▼"
		menuExpanded = false
		
	}
}