var num = 1;
var backColor = "#C3C3C3";
var morseLetter
var correct = 0
var attempts = 0
var prevNum = 0

function generateNewMorse(){
	
	backColor = "#C3C3C3";
	document.getElementById('morseCodeBox').style.background = backColor;
	
	document.getElementById('guessBox').style.opacity = 0
	document.getElementById('correctBox').style.opacity = 0
	
  /*var morseData = [['·-', 'A'], ['-···', 'B'], ['-·-·', 'C'], ['-··', 'D'], ['·', 'E'], ['··-·', 'F'], ['--·', 'G'], ['····', 'H'], ['··', 'I'], ['·---', 'J'], ['-·-', 'K'], ['·-··', 'L'], ['--', 'M'], ['-·', 'N'], ['---', 'O'], ['·--·', 'P'], ['--·-', 'Q'], ['·-·', 'R'], ['···', 'S'], ['-', 'T'], ['··-', 'U'], ['···-', 'V'], ['·--', 'W'], ['-··-', 'X'], ['-·--', 'Y'], ['--··', 'Z']]*/
	
	var morseData = [['·-', 'A'], ['·', 'E'], ['··', 'I'], ['--', 'M'], ['-·', 'N'], ['-', 'T']]
	

	var randNum = Math.floor(Math.random() * morseData.length);
	
	while (prevNum === randNum){
		randNum = Math.floor(Math.random() * morseData.length);
		console.log("Generated previous answer, regenerating.")
	}
	
	prevNum = randNum
	
	var morseChar = morseData[randNum][0]
	morseLetter = morseData[randNum][1]
	console.log(randNum);
	document.getElementById('bigMorseCode').innerHTML = morseChar
	document.getElementById('correctLetter').innerHTML = morseLetter
}

function resetCounter(){
	correct = 0
	attempts = 0
	document.getElementById('correct').innerHTML = correct
	document.getElementById('attempts').innerHTML = attempts
	generateNewMorse();
}

function morseLoad(){
	generateNewMorse();
}

function keyPress(event){
	
	var pressedLetter = event.key.toUpperCase();
	document.getElementById('guessLetter').innerHTML = pressedLetter
	
	if (pressedLetter === morseLetter){
		backColor = "#3BA769"	
		correct++
		setTimeout(generateNewMorse, 750);
	} else {
		backColor = "#C14747"
		setTimeout(generateNewMorse, 1500);
	}
	
	attempts++
	
	document.getElementById('morseCodeBox').style.background = backColor;
	
	document.getElementById('guessBox').style.opacity = 1
	document.getElementById('correctBox').style.opacity = 1
	
	document.getElementById('correct').innerHTML = correct
	document.getElementById('attempts').innerHTML = attempts
}