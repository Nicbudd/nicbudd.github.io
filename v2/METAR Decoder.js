let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var elment = document.getElementById("metarBlocks");
let verbose = true
let verbosePrevious
var outputList = {temp:"12C", airport:"Dillant-Hopkins"}

function checkVerbose() {
	/*verbose = document.getElementById('verbose').checked;*/
	console.log('Verbose checked = ' + verbose);
	console.log('Verbose previous = ' + verbosePrevious);
	if (verbose === true){
		var metarBlocks = document.createElement('div');
		metarBlocks.setAttribute("id", "metarBlocks");
		document.getElementById('metarSection').appendChild(metarBlocks);
	}
}

function simplifiedOutput(num) {
	if (verbose === false){
		var listElement = document.getElementById('metarOut');
		
	}
}

function roundDecimal (num, decimal){
	let factor = Math.pow(10, decimal)
	return Math.round(num * factor) / factor
}

function knotsToMPH(knots){
	return Math.round(knots * 1.15078);
}

function concatArray(array, start, end){
	
	let outStr = "";
	
	for (let i = start; i <= end; i++){
		if (array[i] !== undefined) {
			outStr = outStr + array[i].toString();
		}
	}
	return outStr
}

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
	if (verbose === true){
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
}

function decodeMETAR(input) {
	
	
	//clear previous metarBlocks
		var daddy = document.getElementById('metarSection');
	if (verbosePrevious === true) {
		var elment = document.getElementById("metarBlocks");
		daddy.removeChild(elment);
	} else if (verbosePrevious === false){
		var elment = document.getElementById("metarOut");
		daddy.removeChild(elment);
	}
		
	//split input into array with each keyword
	input = input.split(" ");
	
	let airportEstablished = false
	
	let codeICAO
	
	//run this for each keyword
	for (let i = 0; i < input.length; i++){
		
		let currentCode = input[i].split("");
		let currentCodeStr = input[i]
		let codeLength = currentCode.length;
		console.log(input[i]);
		console.log(currentCode);
		
		//make an array with 1 if theres a letter but 0 if not
		var currentCodeDiscr = [];
		
		for (let j = 0; j < codeLength; j++){
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
		for (let p = 0; p < codeLength; p++){
			if (currentCode[p] === '/' && p > 1){
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
		
		
		let stepNum = 0
		
		
		
		//for METAR at beginning
		if (concatArray(currentCode, 0, 4) === 'METAR'){
			logProgress('METAR');
			createMetarDivBlock(i, currentCodeStr, "This keyword indicated that this is a METAR");
			
		//for SPECI if it's a special 
		} else if (concatArray(currentCode, 0, 4) === 'SPECI'){
			logProgress('SPECI');
			createMetarDivBlock(i, currentCodeStr, "This keyword indicated that this is an unscheduled special METAR showing a signifigant weather change.");
			
		//for Airport ICAO Identifiers
		} else if (concatArray(currentCodeDiscr, 0, 3) === '1111' && codeLength === 4 && airportEstablished === false){
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
		} else if (concatArray(currentCodeDiscr, 0, 5) === '000000' && currentCode[6] === 'Z' && codeLength === 7){	
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
		} else if (concatArray(currentCodeDiscr, 0, 4) === '00000' && concatArray(currentCode, codeLength - 2, codeLength - 1) === 'KT'){
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
			
			let mph = knotsToMPH(knots);
			
			if (currentCode[5] === "G"){
				
				let gusts = Number(concatArray(currentCode, 6, 7));
				let gustsMPH = knotsToMPH(gusts);
				
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) and gusting to ${gusts} knots (${gustsMPH} mph) at ${degrees} degrees (${direction})`);
				
			} else if (concatArray(currentCode, 5, 9) === "PKWND"){
				
				let peak = Number(concatArray(currentCode, 10, 11));
				let peakMPH = knotsToMPH(peak);
				
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) with a peak of ${peak} knots (${peakMPH} mph) at ${degrees} degrees (${direction})`);
				
			} else {
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) at ${degrees} degrees (${direction})`);
			}
	
			
			
			
			//if wind is variable
		} else if (concatArray(currentCode, 0, 2) === 'VRB' && concatArray(currentCodeDiscr, 3, 4) === '00' && concatArray(currentCode, codeLength - 2, codeLength - 1) === 'KT'){
			logProgress('Wind');
			
			let degreesStr = currentCode[0] + currentCode[1] + currentCode[2];
			let degrees = Number(degreesStr);
			let knotsStr = currentCode[3] + currentCode[4];
			let knots = Number(knotsStr);
			
			let mph = knotsToMPH(knots);
			
			if (currentCode[5] === "G"){
				
				let gusts = Number(concatArray(currentCode, 6, 7));
				let gustsMPH = knotsToMPH(gusts);
				
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) and gusting to ${gusts} knots (${gustsMPH} mph) from a variable direction.`);
				
			} else if (concatArray(currentCode, 5, 9) === "PKWND"){
				
				let peak = Number(concatArray(currentCode, 10, 11));
				let peakMPH = knotsToMPH(peak);
				
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) with a peak of ${peak} knots (${peakMPH} mph) from a variable direction.`);
				
			} else {
				createMetarDivBlock(i, input[i], `The wind was ${knots} knots (${mph} mph) from a variable direction.`);
			}
			
			
			//for visibility
		} else if (concatArray(currentCode, codeLength - 2, codeLength - 1) === "SM"){
			logProgress('Visibility');
			
			let visibility
			let testFraction = concatArray(currentCode, codeLength - 5, codeLength - 3);
			
			if (testFraction === "1/2"){
				visibility = concatArray(currentCode, 0, codeLength - 6) + '½';
				
			} else if (testFraction === "3/4"){
				visibility = concatArray(currentCode, 0, codeLength - 6) + '¾';
				
			} else if (testFraction === "1/4"){
				visibility = concatArray(currentCode, 0, codeLength - 6) + '¼';
				
			} else {
				visibility = concatArray(currentCode, 0, codeLength - 3);
			}
			
			stepNum = 6
			
			createMetarDivBlock(i, input[i], `The visibility was ${visibility} Statue Mile(s).`);
			
		} else if (currentCode[0] === "R" && concatArray(currentCode, codeLength - 2, codeLength - 1) === "FT"){
			
			let slashLoc = currentCode.indexOf('/'); 
			let runway = concatArray(currentCode, 1, slashLoc - 1);
			let visibility = concatArray(currentCode, slashLoc + 1, codeLength - 3);
			createMetarDivBlock(i, input[i], `The visibility on runway ${runway} was ${visibility} ft.`);
			
			stepNum = 6
			
		} else if (concatArray(currentCodeDiscr, 0, 5) === "111000" && codeLength === 6){
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
			
			
			
			stepNum = 8
			
			
		} else if (isTempCode === true){
			logProgress('Temp/Dewpoint');
			
			
			//start us out
			
			let tempNeg = false
			let dewNeg = false
			
			
			
			//temperature
			
			//determine if it's negative
			if (currentCode[0] === "M"){
				currentCode.shift()
				tempNeg = true
			}
			
			//make a string out of the temperature and get rid of temperature part and slash
			let slashLoc = currentCode.indexOf('/');
			let tempStr = ""
			for (let r = 0; r < slashLoc; r++){
				tempStr = tempStr + currentCode[0];
				currentCode.shift();
			}
			currentCode.shift();
			
			
			//string -> number
			let cTemp = Number(tempStr);
			
			//deal with negetive
			if (tempNeg === true){
				cTemp = cTemp * -1
			}
			
			//convert to f
			let fTemp = Math.round(cToF(cTemp));
			
			
			
			//dewpoint
			
			slashLoc = currentCode.indexOf('/');
			
			//determine if it's negative
			if (currentCode[0] === "M"){
				currentCode.shift()
				dewNeg = true
			}
			
			//make a string out of the dewpoint
			let dewStr = ""
			for (let r = 0; r <= currentCode.length; r++){
				dewStr = dewStr + currentCode[0];
				currentCode.shift()
			}
			
			//string -> number
			let cDew = Number(dewStr);
			
			//deal with negetive
			if (dewNeg === true){
				cDew = cDew * -1
			}
			
			//convert to f
			let fDew = Math.round(cToF(cDew));
			
			
			
			//create the block
			createMetarDivBlock(i, input[i], `The temperature was ${cTemp}°C (${fTemp}°F), and the dewpoint was ${cDew}°C (${fDew}°F).`);
			
			
		} else if (currentCode[0] === "A" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && codeLength === 5){
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
			
		} else if (currentCode[0] === "T" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 0 && currentCodeDiscr[6] === 0 && currentCodeDiscr[7] === 0 && currentCodeDiscr[8] === 0 && codeLength === 9){
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
		
		} else if (currentCode[0] === "1" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && codeLength === 5){
			logProgress('Numeric Code 1 - 6hr Max Temp');
			
			let maxTemp = Number(currentCode[2] + currentCode[3] + currentCode[4])
			
			maxTemp = maxTemp * 0.1
			
			if (currentCode[1] === "1"){
				maxTemp *= -1
			}
			
			let maxTempF = cToF(maxTemp)
			
			maxTemp = roundDecimal(maxTemp, 1)
			maxTempF = roundDecimal(maxTempF, 1)
			
			
			createMetarDivBlock(i, input[i], `The 6 hour maximum temperature was ${maxTemp}°C (${maxTempF}°F).`);
			
		} else if (currentCode[0] === "2" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && codeLength === 5){
			logProgress('Numeric Code 2 - 6hr Min Temp');
			
			let minTemp = Number(currentCode[2] + currentCode[3] + currentCode[4])
			
			minTemp = minTemp * 0.1
			
			if (currentCode[1] === "1"){
				minTemp *= -1
			}
			
			let minTempF = cToF(minTemp)
			
			minTemp = roundDecimal(minTemp, 1)
			minTempF = roundDecimal(minTempF, 1)
			
			createMetarDivBlock(i, input[i], `The 6 hour minimum temperature was ${minTemp}°C (${minTempF}°F).`);
			
			
		} else if (currentCode[0] === "4" && currentCode[1] === "/" && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && codeLength === 5){
			logProgress('Numeric Code 4/ - Snow Depth');
			
			let snowDepth = Number(currentCode[2] + currentCode[3] + currentCode[4])
			
			createMetarDivBlock(i, input[i], `There were ${snowDepth} inches of snow on the ground.`);
			
			
		} else if (currentCode[0] === "4" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && currentCodeDiscr[5] === 0 && currentCodeDiscr[6] === 0 && currentCodeDiscr[7] === 0 && currentCodeDiscr[8] === 0 && codeLength === 9){
			logProgress('Numeric Code 4 - 24hr Max/Min Temperatures')
			
			
			//maximum
			let maxTemp = Number(currentCode[2] + currentCode[3] + currentCode[4])
			
			maxTemp = maxTemp * 0.1
			
			if (currentCode[1] === "1"){
				maxTemp *= -1
			}
			
			let maxTempF = cToF(maxTemp)
			
			maxTemp = roundDecimal(maxTemp, 1)
			maxTempF = roundDecimal(maxTempF, 1)

			
			//minimum
			let minTemp = Number(currentCode[6] + currentCode[7] + currentCode[8])
			
			minTemp = minTemp * 0.1
			
			if (currentCode[5] === "1"){
				minTemp *= -1
			}
			
			let minTempF = cToF(minTemp)
			
			minTemp = roundDecimal(minTemp, 1)
			minTempF = roundDecimal(minTempF, 1)
			
			
			//putting it together
			
			createMetarDivBlock(i, input[i], `The 24 hour maximum temperature was ${maxTemp}°C (${maxTempF}°F) and the 24 hour minimum temperature was ${minTemp}°C (${minTempF}°F).`);
			
		} else if (currentCode[0] === "5" && currentCodeDiscr[1] === 0 && currentCodeDiscr[2] === 0 && currentCodeDiscr[3] === 0 && currentCodeDiscr[4] === 0 && codeLength === 5){
			logProgress('Numeric Code 5 - 3hr Pressure Tendency');
			
			let presT = Number(currentCode[2] + currentCode[3] + currentCode[4])
			
			presT = presT * 0.1

			presTinHg = presT / 33.864
			
			presT = roundDecimal(presT, 1)
			presTinHg = roundDecimal(presTinHg, 3)
			
			let tendencyNum = Number(currentCode[1])
			let tendency
			
			if (tendencyNum < 4){
				createMetarDivBlock(i, input[i], `The pressure rose by ${presT}mbar (${presTinHg}inHg) in the 3 hours prior to the measurement.`);
				
			} else if (tendencyNum === 4){
				createMetarDivBlock(i, input[i], `The pressure has remained steady for the past 3 hours`);

			} else if (tendencyNum > 4){
				createMetarDivBlock(i, input[i], `The pressure fell by ${presT}mbar (${presTinHg}inHg) in the 3 hours prior to the measurement.`);
			
			} else {
				console.log("hecc")
			}
			
			
		//for weather
		/*} else if (currentCodeStr.IndexOf('TS') !== -1 && stepNum === 6){
			
			if
		
		} else if (currentCodeStr.IndexOf('RA') !== -1 && stepNum === 6){
			
			if (currentCode[currentCodeStr.IndexOf('RA') - 1] === ){
				
			}
//
		} else if (currentCodeStr.IndexOf('SH') !== -1 && stepNum === 6){

		} else if (currentCodeStr.IndexOf('DZ') !== -1 && stepNum === 6){
//
		} else if (currentCodeStr.IndexOf('GR') !== -1 && stepNum === 6){

		} else if (currentCodeStr.IndexOf('PL') !== -1 && stepNum === 6){

		} else if (currentCodeStr.IndexOf('SN') !== -1 && stepNum === 6){
//
		} else if (currentCodeStr.IndexOf('SP') !== -1 && stepNum === 6){

		} else if (currentCodeStr.IndexOf('SG') !== -1 && stepNum === 6){
			
		} else if (currentCodeStr.IndexOf('IC') !== -1 && stepNum === 6){					
			
		*/	
		} else {
			console.log('Nothing found rip');
			createMetarDivBlock(i, input[i], 'This keyword was not found.');
		}
	}
	return input
}

function metarDecodeButton() {
	checkVerbose();
	let inputWritten = document.getElementById('metarInput').value;
	console.log(inputWritten);
	let outputText = decodeMETAR(inputWritten);
	console.log(outputText);
	verbosePrevious = verbose
}
