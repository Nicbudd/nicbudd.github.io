//all the spaces on the board
/*
Behavior:

0 - normal space
1 - community chest
2 - chance
3 - jail
4 - go to jail

*/

let go = {color:"go", behavior:0, fullName:"Go"};
let mediterraneanAve = {color:"brown", behavior:0, fullName:"Mediterranean Avenue"};
let communityChest1 = {color:"cc", behavior:1, fullName:"Community Chest"};
let balticAve = {color:"brown", behavior:0, fullName:"Baltic Avenue"};
let incomeTax = {color:"tax", behavior:0, fullName:"Income Tax"};
let readingRR = {color:"rr", behavior:0, fullName:"Reading Railroad"};
let orientalAve = {color:"lightBlue", behavior:0, fullName:"Oriental Avenue"};
let chance1 = {color:"chance", behavior:2, fullName:"Chance"};
let vermontAve = {color:"lightBlue", behavior:0, fullName:"Vermont Avenue"};
let connecticutAve = {color:"lightBlue", behavior:0, fullName:"Connecticut Avenue"};
let justVisiting = {color:"visiting", behavior:0, fullName:"Jail (Visiting)"};
let stCharlesPlace = {color:"pink", behavior:0, fullName:"St Charles Place"};
let electricCompany = {color:"utility", behavior:0, fullName:"Electric Company"};
let statesAve = {color:"pink", behavior:0, fullName:"States Avenue"};
let virginiaAve = {color:"pink", behavior:0, fullName:"Virginia Avenue"};
let pennsylvaniaRR = {color:"rr", behavior:0, fullName:"Pennsylvania Railroad"};
let stJamesPlace = {color:"orange", behavior:0, fullName:"St James Place"};
let communityChest2 = {color:"cc", behavior:1, fullName:"Community Chest"};
let tennesseeAve = {color:"orange", behavior:0, fullName:"Tennessee Avenue"};
let newYorkAve = {color:"orange", behavior:0, fullName:"New York Avenue"};
let freeParking = {color:"parking", behavior:0, fullName:"Free Parking"};
let kentuckyAve = {color:"red", behavior:0, fullName:"Kentucky Avenue"};
let chance2 = {color:"chance", behavior:2, fullName:"Chance"};
let indianaAve = {color:"red", behavior:0, fullName:"Indiana Avenue"};
let illinoisAve = {color:"red", behavior:0, fullName:"Illinois Avenue"};
let bnoRR = {color:"rr", behavior:0, fullName:"B & O Railroad"};
let atlanticAve = {color:"yellow", behavior:0, fullName:"Atlantic Avenue"};
let ventnorAve = {color:"yellow", behavior:0, fullName:"Ventnor Avenue"};
let waterWorks = {color:"utility", behavior:0, fullName:"Water Works"};
let marvinGardens = {color:"yellow", behavior:0, fullName:"Marvin Gardens"};
let goToJail = {color:"goToJail", behavior:4, fullName:"Go To Jail"};
let pacificAve = {color:"green", behavior:0, fullName:"Pacific Avenue"};
let northCarolinaAve = {color:"green", behavior:0, fullName:"North Carolina Avenue"};
let communityChest3 = {color:"cc", behavior:1, fullName:"Community Chest"};
let pennsylvaniaAve = {color:"green", behavior:0, fullName:"Pennsylvania Avenue"};
let shortLine = {color:"rr", behavior:0, fullName:"Short Line"};
let chance3 = {color:"chance", behavior:2, fullName:"Chance"};
let parkPlace = {color:"blue", behavior:0, fullName:"Park Place"};
let luxuryTax = {color:"tax", behavior:0, fullName:"Luxury Tax"};
let boardwalk = {color:"blue", behavior:0, fullName:"Boardwalk"};

let inJail = {color:"jail", behavior:3, fullName:"In Jail"};

let spaces = [
go,
mediterraneanAve,
communityChest1,
balticAve,
incomeTax,
readingRR,
orientalAve,
chance1,
vermontAve,
connecticutAve,
justVisiting,
stCharlesPlace,
electricCompany,
statesAve,
virginiaAve,
pennsylvaniaRR,
stJamesPlace,
communityChest2,
tennesseeAve,
newYorkAve,
freeParking,
kentuckyAve,
chance2,
indianaAve,
illinoisAve,
bnoRR,
atlanticAve,
ventnorAve,
waterWorks,
marvinGardens,
goToJail,
pacificAve,
northCarolinaAve,
communityChest3,
pennsylvaniaAve,
shortLine,
chance3,
parkPlace,
luxuryTax,
boardwalk
];

let pieces = []
let stepNum = 0
let doubles


function rollDice(){
	let die1 = Math.ceil(Math.random() * 6);
	let die2 = Math.ceil(Math.random() * 6);
	
	if (die1 === die2){
		doubles = true
	} else {
		doubles = false
	}
	
	return die1 + die2;
}

function createMonoBoardItem(idSuffix, i, colStart, rowStart, colSpan, rowSpan) {
	let board = document.getElementById('monoBoard');
	item = document.createElement('div');
	item.setAttribute('id', idSuffix + i);
	item.setAttribute('style', `grid-column: ${colStart} / span ${colSpan}; grid-row: ${rowStart} / span ${rowSpan};`)
	board.appendChild(item);
	
}

let multiPrev
let initialLoad = true

function resizeMonoBoard(){
	let board = document.getElementById('monoBoard');
	board.style.height = board.offsetWidth + "px"
	
	let width = (board.offsetWidth - (12 * 3) - (2 * 4)) / 13
	let widthStatement = ""
	
	for (let i = 0; i < 13; i++){
		widthStatement = widthStatement + width.toString() + "px ";
	}
	
	board.style = "grid-template-columns:" + widthStatement + ";grid-template-rows:" + widthStatement + ";";
	
	if (initialLoad === false){
		for (let i = 0; i < spaces.length; i++){
			drawMonoBoardSymbols(i, width);
		}
	}
	
	
	
	return width
}

function drawMonoBoardSymbols(i, width){
	let monoBoardItem = document.getElementById('monoBoardItem' + i)
	let monoBoardColor = document.getElementById('monoBoardColor' + i)
	
	if (i === 0 || i === 10 || i === 20 || i === 30){
		monoBoardItem.innerHTML = spaces[i].fullName
		monoBoardItem.style.fontSize = 2.5 * Math.sqrt(width) + "px"
	} else if (i === 7 || i === 22 || i === 36){
		monoBoardColor.innerHTML = "?"
		monoBoardColor.style.fontSize = 0.8 * width + "px"
		monoBoardColor.style.fontWeight = "700"
			
		switch (i){
			case 7:
				monoBoardColor.style.color = "#7C56B5"
				break;
			case 22:
				monoBoardColor.style.color = "#316FA6"
				
				break;
			case 36:
				monoBoardColor.style.color = "#C14747"
					
				break;
			}
	} else if (i === 2 || i === 17 || i === 33){
		monoBoardColor.innerHTML = '<i class="fas fa-box"></i>'
		monoBoardColor.style.color = "#316FA6"
		monoBoardColor.style.fontSize = 0.6 * width + "px"
	} else if (i === 4 || i === 38){
		monoBoardColor.innerHTML = '<i class="fas fa-dollar-sign"></i>'
		monoBoardColor.style.fontSize = 0.6 * width + "px"
	} else if (i === 5 || i === 15 || i === 25 || i === 35){
		monoBoardColor.innerHTML = '<i class="fas fa-train"></i>'
		monoBoardColor.style.fontSize = 0.6 * width + "px"
	} else if (i === 12 || i === 28){
		monoBoardColor.innerHTML = '<i class="fas fa-wrench"></i>'
		monoBoardColor.style.fontSize = 0.6 * width + "px"
	}
	
	if (i === 10) {
		document.getElementById('monoBoardItem41').style.fontSize = 2.5 * Math.sqrt(width) + "px"
	}
}

function drawMonoBoard(){
	
	let width = resizeMonoBoard();
	initialLoad = false
	
	for (let i = 0; i < spaces.length; i++){
		
		let size
		let colStart
		let colSpan
		let rowStart
		let rowSpan
		
		let pos = i % 10
		let side = Math.floor(i / 10)
		
		if (side === 0){
			
			if (pos === 0){
				colStart = 12
				rowStart = 12
				colSpan = 2
				rowSpan = 2
			} else {
				colStart = 12 - pos
				rowStart = 13
				colSpan = 1
				rowSpan = 1
				
				createMonoBoardItem('monoBoardColor', i, colStart, rowStart - 1, colSpan, rowSpan);
			}
			
			
			
			
		} else if (side === 1){
			
			if (pos === 0){
				rowStart = 12
				colStart = 1
				rowSpan = 2
				colSpan = 2
			} else {
				rowStart = 12 - pos
				colStart = 1
				rowSpan = 1
				colSpan = 1
				
				createMonoBoardItem('monoBoardColor', i, colStart + 1, rowStart, colSpan, rowSpan);
			}
			
			
			
		} else if (side === 2){
			
			if (pos === 0){
				colStart = 1
				rowStart = 1
				colSpan = 2
				rowSpan = 2
			} else {
				colStart = pos + 2
				rowStart = 1
				colSpan = 1
				rowSpan = 1
				
				//create colors
				createMonoBoardItem('monoBoardColor', i, colStart, rowStart + 1, colSpan, rowSpan);
			}
			
			
			
		} else if (side === 3){
			
			if (pos === 0){
				rowStart = 1
				colStart = 12
				rowSpan = 2
				colSpan = 2
			} else {
				rowStart = pos + 2
				colStart = 13
				rowSpan = 1
				colSpan = 1
				
				createMonoBoardItem('monoBoardColor', i, colStart - 1, rowStart, colSpan, rowSpan);
			}
			
		}	
			
		if (i === 10){
			rowSpan = 1
			createMonoBoardItem('monoBoardItem', 41, colStart, rowStart + 1, colSpan, rowSpan);
			document.getElementById('monoBoardItem41').innerHTML = "In Jail"
		}
		
		createMonoBoardItem('monoBoardItem', i, colStart, rowStart, colSpan, rowSpan);
		
		let color = spaces[i].color
		
		if (color === "red"){
			document.getElementById('monoBoardColor' + i).style.background = "#C14747"
		} else if (color === "green"){
			document.getElementById('monoBoardColor' + i).style.background = "#3BA769"
		} else if (color === "blue"){
			document.getElementById('monoBoardColor' + i).style.background = "#316FA6"
		} else if (color === "pink"){
			document.getElementById('monoBoardColor' + i).style.background = "#7C56B5"
		} else if (color === "orange"){
			document.getElementById('monoBoardColor' + i).style.background = "#B2825E"
		} else if (color === "yellow"){
			document.getElementById('monoBoardColor' + i).style.background = "#949494"
		} else if (color === "brown"){
			document.getElementById('monoBoardColor' + i).style.background = "#50514F"
		} else if (color === "lightBlue"){
			document.getElementById('monoBoardColor' + i).style.background = "#38A09D"
		} 
		
		drawMonoBoardSymbols(i, width);
	}
	
	createMonoBoardItem('monoBoardCenter', "", 3, 3, 9, 9);
}

let turnNum

function monoReset(){
	pieces = []
	pieceNum = 1000000
	payRate = 0.2
	turnNum = 0
	
	for (let i = 0; i < pieceNum; i++){
		pieces.push([0, 0]);
	}
	
	console.log('pieceNum = ' + pieces.length);
	
	inJail.pieceCount = 0
	for (let i = 0; i < spaces.length; i++){
		spaces[i].pieceCount = 0;
		document.getElementById('monoBoardItem' + i).innerHTML = "";
		document.getElementById('monoBoardItem' + i).style.background = "#E6E6E6";
	}
	
	spaces[0].pieceCount = pieceNum;
	document.getElementById('monoBoardItem41').innerHTML = "";
	document.getElementById('monoBoardItem41').style.background = "#E6E6E6";
	document.getElementById('monoBoardCenter').innerHTML = "";
}

function monoLoad(){
	drawMonoBoard();
	monoReset();
}

// 0.8 * width + "px"

window.onresize = resizeMonoBoard;

function monoFindErrorColor(error){
	
	//green = rgb(59, 167, 105)
	//red = rgb(193, 71, 71)
	//white = rgb(230, 230, 230)
	
	let red
	let green
	let blue
	
	if (error > 1){
		error = 1
	} else if (error < -1){
		error = -1
	}
	
	if (error > 0){
		//green
		
		red = ((59 - 230) * error) + 230
		green = ((167 - 230) * error) + 230
		blue = ((105 - 230) * error) + 230
		return `rgb(${red}, ${green}, ${blue})`
	} else if (error < 0){
		//red
		
		red = ((230 - 193) * error) + 230
		green = ((230 - 71) * error) + 230
		blue = ((230 - 71) * error) + 230
		return `rgb(${red}, ${green}, ${blue})`
	} else {
		//white
		
		return "rgb(230, 230, 230)"
	}
}

let doubleCount = 0

function monoBehavior(i, diceRoll){
		
	if (pieces[i][1] === 3){
			
		//JAIL STEP 3
		pieces[i][0] = 10
		pieces[i][1] = 0
	}
		
	//roll dice
	let spacesForward = 0	
	spacesForward = spacesForward + diceRoll;
	pieces[i][0] = (pieces[i][0] + spacesForward) % 40;
	
	//doubles
	if (doubles === true){
		doubleCount++
	}
	
	if (doubleCount > 2){
		pieces[i][1] = 1
	}
		
	//chance
	if (pieces[i][0] === 7 || pieces[i][0] === 22 || pieces[i][0] === 36){
		let card = Math.ceil(Math.random() * 16)
			
		switch (card){
			case 1:
				//intentionally left blank
				break;
			case 2:
				//intentionally left blank
				break;
			case 3:
				//intentionally left blank
				break;
			case 4:
				//intentionally left blank
				break;
			case 5:
				//intentionally left blank
				break;
			case 6:
				//get out of jail free card
				break;
			case 7:
				//go to jail
				pieces[i][1] = 1
				break;
			case 8:
				pieces[i][0] = 24
				break;
			case 9:
				pieces[i][0] = 0
				break;
			case 10:
				if (pieces[i][0] === 7 || pieces[i][0] === 36){
					pieces[i][0] = 12
				} else {
					pieces[i][0] = 28
				}
				break;
			case 11:
				pieces[i][0] = 11
				break;
			case 12:
				pieces[i][0] = 39
				break;
			case 13:
				if (pieces[i][0] === 7){
					pieces[i][0] = 15
				} else if (pieces[i][0] === 22){
					pieces[i][0] = 25
				} else if (pieces[i][0] === 36){
					pieces[i][0] = 35
				}
				break;
			case 14:
				pieces[i][0] = 5
				break;
			case 15:
				if (pieces[i][0] === 7){
					pieces[i][0] = 15
				} else if (pieces[i][0] === 22){
					pieces[i][0] = 25
				} else if (pieces[i][0] === 36){
					pieces[i][0] = 35
				}
				break;
			case 16:
				pieces[i][0] = pieces[i][0] - 3
				break;
			}
		}
		
	//cc	
		
	if (pieces[i][0] === 2 || pieces[i][0] === 17 || pieces[i][0] === 33){
		let card = Math.ceil(Math.random() * 16)
			
		switch (card){
			case 1:
				//intentionally left blank
				break;
			case 2:
				//intentionally left blank
				break;
			case 3:
				//intentionally left blank
				break;
			case 4:
				//intentionally left blank
				break;
			case 5:
				//intentionally left blank
				break;
			case 6:
				//intentionally left blank
				break;
			case 7:
				//intentionally left blank
				break;
			case 8:
				//intentionally left blank
				break;
			case 9:
				//intentionally left blank
				break;
			case 10:
				//intentionally left blank
				break;
			case 11:
				//intentionally left blank
				break;
			case 12:
				//intentionally left blank
				break;
			case 13:
				//intentionally left blank
				break;
			case 14:
				//go to jail
				break;
			case 15:
				pieces[i][0] = 0
				break;
			case 16:
				pieces[i][1] = 1
				break;
		}
	}
		
	//go to jail
		
	if (pieces[i][0] === 30){
		pieces[i][1] = 1
	}
	
	
	
	if (pieces[i][1] === 0){
		//finalize work
	} else if (pieces[i][1] === 1){
		
		//JAIL STEP 1
		pieces[i][0] = 41
	}
	
}


function monoStepForward(){
	
	for (let i = 0; i < spaces.length; i++){
		spaces[i].pieceCount = 0
		inJail.pieceCount = 0
	}
	
	for (let i = 0; i < pieces.length; i++){
	
		let diceRoll;
		diceRoll = rollDice();
		
		doubleCount = 0;
		
		
		
		if (pieces[i][1] === 1){
			//JAIL STEP 1
			
			if (doubles === true){
				pieces[i][1] = 0
				monoBehavior(i, diceRoll);
			} else if (Math.random() < payRate){
				pieces[i][1] = 0
				monoBehavior(i, diceRoll);
			} else {
				pieces[i][1]++
			}
			
		} else if (pieces[i][1] === 2){
			//JAIL STEP 2
			if (doubles === true){
				pieces[i][1] = 0
				monoBehavior(i, diceRoll);
			} else {
				pieces[i][1]++
			}
			
		} else {
			monoBehavior(i, diceRoll);
			for (;doubles === true;){
				diceRoll = rollDice();
				monoBehavior(i, diceRoll);
			}
		}
		
		
		
		if (pieces[i][0] <= 40){
			spaces[pieces[i][0]].pieceCount++
		} else if (pieces[i][0] === 41){
			inJail.pieceCount++;
		}
	}
	
	//display tokens
	
	let tilePieceCount = 0
	let totalError = 0 
	
	for (let i = 0; i < spaces.length; i++){
		console.log(spaces[i].fullName + " = " + spaces[i].pieceCount)
		document.getElementById('monoBoardItem' + i).innerHTML = Math.round((spaces[i].pieceCount * 100 / pieces.length) * 100) / 100 + "%"
		let error = (spaces[i].pieceCount - (pieces.length / 41)) / (pieces.length / 150)
		totalError = totalError + Math.abs(error)
		//console.log (error);
		document.getElementById('monoBoardItem' + i).style.background = monoFindErrorColor(error);
		tilePieceCount = tilePieceCount + spaces[i].pieceCount
	}
	
	console.log(inJail.fullName + " = " + inJail.pieceCount)
	document.getElementById('monoBoardItem41').innerHTML = Math.round((inJail.pieceCount * 100 / pieces.length) * 100) / 100 + "%"
	let error = (inJail.pieceCount - (pieces.length / 41)) / (pieces.length / 150)
	//console.log (error);
	document.getElementById('monoBoardItem41').style.background = monoFindErrorColor(error);
	tilePieceCount = tilePieceCount + inJail.pieceCount;
	totalError = totalError + Math.abs(error)
	
	turnNum++
	document.getElementById('monoBoardCenter').innerHTML = `<h3>Turn<br><span style='font-size:2em;'>${turnNum}</span></h3>` 
	
	console.log(pieces.length)
	console.log(tilePieceCount)
	console.log(totalError)
}
