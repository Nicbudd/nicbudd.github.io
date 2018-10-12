let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var elment = document.getElementById("metarBlocks");

function cToF (cel){
	let fahr = cel * (9/5) + 32;
	return fahr;
}

function ordinalNum(toOrdinal) {
    let x= toOrdinal % 10;
    let y = toOrdinal % 100;
    if (x == 1 && y != 11) {
        return toOrdinal + "st";
    }
    if (x == 2 && y != 12) {
        return toOrdinal + "nd";
    }
    if (x == 3 && y != 13) {
        return toOrdinal + "rd";
    }
    return toOrdinal + "th";
}

function logProgress (testFor){
	console.log(`Condition found: ${testFor}`)
}

function createMetarDivBlock(num, label, textInside){
	var elment = document.getElementById("metarBlocks");
		var para = document.createElement("div");
		para.setAttribute("id", "metarBlock" + num);
		para.setAttribute("class", "metarBlock");
		var node = document.createElement('h5');
		var blee = document.createTextNode(label)
		var skre = document.createElement('p');
		var buom = document.createTextNode(textInside)
		node.appendChild(blee);
		skre.appendChild(buom);
		para.appendChild(node);
		para.appendChild(skre);
		
		elment.appendChild(para);
}

function decodeMETAR(input) {
	
	
	//clear previous metarBlocks
	var elment = document.getElementById("metarBlocks");
		while (elment.firstChild) {
		elment.removeChild(elment.firstChild);}
		
	//split input into array with each keyword
	input = input.split(" ");
	
	let airportEstablished = false
	
	let codeICAO
	
	//run this for each keyword
	for (let i = 0; i < input.length; i++){
		
		let currentCode = input[i].split("");
		let currentCodeStr = input[i]
		console.log(currentCode);
		
		//make an array with 1 if theres a letter but 0 if not
		var currentCodeDiscr = [];
		
		for (let j = 0; j < currentCode.length; j++){
			currentCodeDiscr.push(0)
			for (let k = 0; k < letters.length; k++){
				if (currentCode[j] === letters[k]){
					currentCodeDiscr[j] = 1
				} 
			}
		}
		console.log(currentCodeDiscr);
		
		let isTempCode = false
		
		//test for slashes or letters other than M
		for (let p = 0; p < currentCode.length; p++){
			if (currentCode[p] === '/'){
				isTempCode = true
			} else {
				for (let q = 0; q < letters.length; q++){
				if (currentCode[p] === letters[q]){
						if (currentCode[p] === "M"){
							
						} else{
							isTempCode = false
						}
					}
				}
			}
		}
		
		
		
		
		
		
		//for METAR at beginning
		if (currentCode[0] === "M" && currentCode[1] === "E" && currentCode[2] === "T" && currentCode[3] === "A" && currentCode[4] === "R" ){
			logProgress('METAR');
			createMetarDivBlock(i, currentCodeStr, "This keyword indicated that this is a METAR");
			
			
		//for Airport ICAO Identifiers
		} else if (currentCodeDiscr[0] === 1 && currentCodeDiscr[1] === 1 && currentCodeDiscr[2] === 1 && currentCodeDiscr[3] === 1 && currentCodeDiscr.length === 4 && airportEstablished === false){
			logProgress('ICAO Identifier');
		
			//Do we know the airport?
			let airportName
			let airportLocation
			let airportNameExist = false
			
			codeICAO = currentCode[0] + currentCode[1] + currentCode[2] + currentCode[3]
			
			switch(codeICAO) {
				case 'KEEN':
					airportName = "Keene Dillant-Hopkins Airport"
					airportLocation = "Keene, NH, USA"
					airportNameExist = true
					break;
				case 'KMHT':
					airportName = "Manchester-Boston Regional Airport"
					airportLocation = "Manchester, NH, USA"
					airportNameExist = true
					break;
				case 'KCON':
					airportName = "Concord Municipal Airport"
					airportLocation = "Concord, NH, USA"
					airportNameExist = true
					break;
				case 'KBOS':
					airportName = "Boston Logan International Airport"
					airportLocation = "Boston, MA, USA"
					airportNameExist = true
					break;
			}
			
			if (airportNameExist === true){
			createMetarDivBlock(i, input[i], `This keyword indicates that the METAR comes from ${airportName} in ${airportLocation}, which has the ICAO indicator ${codeICAO}`);
			} else{
			createMetarDivBlock(i, input[i], `This keyword indicates that the METAR comes from the airport with the ICAO Identifier ${input[i]}`);
			}
			
			airportEstablished = true;
			
			
			
		//for time in Zulu
		} else if (currentCodeDiscr[0] === 0 && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 0 && currentCodeDiscr[6] === 1 && currentCodeDiscr.length === 7){	
			logProgress('Time');
		
			let metarDayStr = currentCode[0] + currentCode[1];
			let metarHourStr = currentCode[2] + currentCode[3];
			let metarMinuteStr = currentCode[4] + currentCode[5];
			let metarDay = Number(metarDayStr);
			let metarHour = Number(metarHourStr);
			let metarMinute = Number(metarMinuteStr);
			
			let something = new Date();
			let utcHour = something.getUTCHours()
			let utcMinute = something.getUTCMinutes()
			
			let amPmMetar
			if (metarHour >= 12){
				amPmMetar = "PM"
			} else {
				amPmMetar = "AM"
			}
			if (metarHour >12){
				metarHour = metarHour - 12
			}
			
			let amPmUTC
			if (utcHour >= 12){
				amPmUTC = "PM"
			} else {
				amPmUTC = "AM"
			}
			if (utcHour >12){
				utcHour = utcHour - 12
			}
			
			let metarDayOrdinal = ordinalNum(metarDay);
			
			createMetarDivBlock(i, input[i], `This weather report is from the ${metarDayOrdinal} of this month at ${metarHour}:${metarMinute} ${amPmMetar} UTC (It is currently ${utcHour}:${utcMinute} ${amPmUTC} UTC).`);
			
			//for wind
		} else if (currentCodeDiscr[0] === 0 && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 1 && currentCodeDiscr[6] === 1 && currentCodeDiscr.length === 7){
			logProgress('Wind');
			
			let degreesStr = currentCode[0] + currentCode[1] + currentCode[2];
			let degrees = Number(degreesStr);
			let knotsStr = currentCode[3] + currentCode[4];
			let knots = Number(knotsStr);
			
			if (degrees < 22.5 || degrees >= 337.5){
				direction = "N";
			} else if (degrees < 67.5){
				direction = "NE";
			} else if (degrees < 112.5){
				direction = "E";
			} else if (degrees < 157.5){
				direction = "SE";
			} else if (degrees < 202.5){
				direction = "S";
			} else if (degrees < 247.5){
				direction = "SW";
			} else if (degrees < 292.5){
				direction = "W";
			} else if (degrees < 337.5){
				direction = "NW";
			} else {
				direction = " ";
				console.log('ERROR finding direction of wind!');
			}
			
			let mph = Math.round(knots * 1.15078);
	
			createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) at ${degrees} degrees (${direction})`);
			
			
			//for visibility
			} else if (currentCode[currentCode.length - 2] === "S" && currentCode[currentCode.length - 1] === "M"){
			logProgress('Visibility');
			
			let visibility = ""
			for (n = 0; n < currentCode.length - 2; n++){
				visibility = visibility + currentCode[n];
			}
			
			console.log(visibility);
			createMetarDivBlock(i, input[i], `The visibility was ${visibility} Statue Mile(s).`);
			
		} else if (currentCodeDiscr[0] === 1 && currentCodeDiscr[1] === 1 && currentCodeDiscr[2] === 1 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 0 && currentCodeDiscr.length === 6){
			logProgress('Clouds');
			
			let flightLevelStr = currentCode[3] + currentCode[4] + currentCode[5]
			let flightLevel = Number(flightLevelStr);
			let height = flightLevel * 100
			
			let firstThree = currentCode[0] + currentCode[1] + currentCode[2];
			let skyCondition
			
			
			
			switch (firstThree){
				case "FEW":
					skyCondition = "There were few clouds at "
					createMetarDivBlock(i, input[i], skyCondition + height + " ft.");
					break;
				case "SCT":
					skyCondition = "There were scattered clouds at "
					createMetarDivBlock(i, input[i], skyCondition + height + " ft.");
					break;
				case "BKN":
					skyCondition = "There were broken clouds at "
					createMetarDivBlock(i, input[i], skyCondition + height + " ft.");
					break;
				case "OVC":
					skyCondition = "There was an overcast layer of clouds at "
					createMetarDivBlock(i, input[i], skyCondition + height + " ft.");
					break;		
				default:
					break;
			}
			
			
			
			
			
			
		} else if (isTempCode === true){
			logProgress('Temp/Dewpoint');
			
			
			let slashLoc = currentCode.indexOf('/');

			let tempNeg = false
			let dewNeg = false
			
			if (currentCode[0] === "M"){
				currentCode.shift()
				tempNeg = true
			}
			
			slashLoc = currentCode.indexOf('/');
			
			if (currentCode[slashLoc + 1] === "M"){
				currentCode[slashLoc + 1] = ""
				dewNeg = true
			}
			
			
			slashLoc = currentCode.indexOf('/');
			
			let tempStr = ""
			for (let r = 0; r < slashLoc; r++){
				tempStr = tempStr + currentCode[r];
			}
			
			let dewStr = ""
			for (let s = slashLoc + 1; s < currentCode.length; s++){
				dewStr = dewStr + currentCode[s];
			}
			
			
			let cTemp = Number(tempStr);
			let cDew = Number(dewStr);
			
			if (tempNeg === true){
				cTemp = cTemp * -1
			}
			if (dewNeg === true){
				cDew = cDew * -1
			}
			
			let fTemp = Math.round(cToF(cTemp));
			let fDew = Math.round(cToF(cDew));
			
			createMetarDivBlock(i, input[i], `The temperature was ${cTemp}°C (${fTemp}°F), and the dewpoint was ${cDew}°C (${fDew}°F).`);
			
			
		} else if (currentCode[0] === "A" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr.length === 5){
			logProgress('Altimeter Setting');
			let presStr = currentCode[1] + currentCode[2] + currentCode[3] + currentCode[4];
			let altHg = Number(presStr) / 100;
			let altMb = Math.round(altHg * 33.8639);
			createMetarDivBlock(i, input[i], `Planes at ${codeICAO} should set their altimeters to ${altHg} inHg (${altMb} mb)`);
			
			
		} else if (currentCodeStr === "RMK"){
			logProgress('Remarks');
			createMetarDivBlock(i, input[i], 'This keyword indicates that the following are unofficial additions that this station has decided to use');
			
		} else if (currentCodeStr === "AUTO"){
			logProgress('AUTO');
			createMetarDivBlock(i, input[i], 'This keyword indicates that this forecast was automatically generated, without requiring humans.');
			
		} else if (currentCodeStr === "AO1"){
			logProgress('AO1');
			createMetarDivBlock(i, input[i], 'This keyword indicates that station is automated and does not have a precipitation discriminator.');
			
		} else if (currentCodeStr === "AO2"){
			logProgress('AO2');
			createMetarDivBlock(i, input[i], 'This keyword indicates that station is automated and has a precipitation discriminator.');
			
		} else if (currentCodeStr === "$"){
			logProgress('$');
			createMetarDivBlock(i, input[i], 'This keyword indicates that the station needs maintenance.');
			
		} else if (currentCode[0] === "T" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 0 && currentCodeDiscr[6] === 0 && currentCodeDiscr[7] === 0 && currentCodeDiscr[8] === 0 && currentCodeDiscr.length === 9){
			logProgress('4 Digit Temp');
			
			let fourTempStr = currentCode[2] + currentCode[3] + currentCode[4];
			let fourDewStr = currentCode[6] + currentCode[7] + currentCode[8];
			let fourTemp = Number(fourTempStr) / 10;
			let fourDew = Number(fourDewStr) / 10;
			
			if (currentCode[1] === 0){
				fourTemp = fourTemp * -1;
			}
			
			if (currentCode[5] === 0){
				fourDew = fourDew * -1;
			}
			
			let fourFTemp = cToF(fourTemp).toFixed(1);
			let fourFDew = cToF(fourDew).toFixed(1);
			
			createMetarDivBlock(i, input[i], `A more precise temperature was ${fourTemp}°C (${fourFTemp}°F)and a more precise dewpoint was ${fourDew}°C (${fourFDew}°F).`);
			
		} else {
			console.log('Nothing found rip');
			createMetarDivBlock(i, input[i], 'This keyword was not found.');
		}
	}
	return input
}

function metarDecodeButton() {
	let inputWritten = document.getElementById('metarInput').value;
	console.log(inputWritten);
	let outputText = decodeMETAR(inputWritten);
	console.log(outputText);
}
