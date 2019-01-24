var num = 1;
var backColor = "#C3C3C3";
var morseLetter
var correct = 0
var attempts = 0
var prevNum = 0
var inputDisabled = false;
var morseBool1 = true
var morseBool2 = true
var morseBool3 = true
var morseBool4 = true
var difficultyShown = false;
var marginLeftOriginalWidth;

function showHideDifficulty(){
	
	if (difficultyShown === true){
		document.getElementById('morseDiff1').style.opacity = 0;
		document.getElementById('morseDiff2').style.opacity = 0;
		document.getElementById('morseDiff3').style.opacity = 0;
		document.getElementById('morseDiff4').style.opacity = 0;
		difficultyShown = false;
		setTimeout(disableDifficultyButtons, 500);
		document.getElementById('morseHelperText').style.marginLeft = marginLeftOriginalWidth;
	} else {
		marginLeftOriginalWidth = document.getElementById('morseHelperText').style.marginLeft;
		document.getElementById('morseDiff1').style.opacity = 1;
		document.getElementById('morseDiff2').style.opacity = 1;
		document.getElementById('morseDiff3').style.opacity = 1;
		document.getElementById('morseDiff4').style.opacity = 1;
		difficultyShown = true;
		enableDifficultyButtons();
		console.log(window.innerWidth);
		if (window.innerWidth < 800){
			document.getElementById('morseHelperText').style.marginLeft = '6em';
		}
	}
}

function disableDifficultyButtons(){
	document.getElementById('morseDiff1').style.visibility = 'hidden';
	document.getElementById('morseDiff2').style.visibility = 'hidden';
	document.getElementById('morseDiff3').style.visibility = 'hidden';
	document.getElementById('morseDiff4').style.visibility = 'hidden';
}

function enableDifficultyButtons(){
	document.getElementById('morseDiff1').style.visibility = 'visible';
	document.getElementById('morseDiff2').style.visibility = 'visible';
	document.getElementById('morseDiff3').style.visibility = 'visible';
	document.getElementById('morseDiff4').style.visibility = 'visible';
}

function difficulty1(){
	if (morseBool1 === true){
		morseBool1 = false
		document.getElementById('morseDiff1').style.color = '#303030';
		document.getElementById('morseDiff1').style.background = 'rgba(0, 0, 0, 0)';
	} else {
		morseBool1 = true
		document.getElementById('morseDiff1').style.color = '#C3C3C3';
		document.getElementById('morseDiff1').style.background = '#303030';
	}
}

function difficulty2(){
	if (morseBool2 === true){
		morseBool2 = false
		document.getElementById('morseDiff2').style.color = '#303030';
		document.getElementById('morseDiff2').style.background = 'rgba(0, 0, 0, 0)';
	} else {
		morseBool2 = true
		document.getElementById('morseDiff2').style.color = '#C3C3C3';
		document.getElementById('morseDiff2').style.background = '#303030';
	}
}

function difficulty3(){
	if (morseBool3 === true){
		morseBool3 = false
		document.getElementById('morseDiff3').style.color = '#303030';
		document.getElementById('morseDiff3').style.background = 'rgba(0, 0, 0, 0)';
	} else {
		morseBool3 = true
		document.getElementById('morseDiff3').style.color = '#C3C3C3';
		document.getElementById('morseDiff3').style.background = '#303030';
	}
}

function difficulty4(){
	if (morseBool4 === true){
		morseBool4 = false
		document.getElementById('morseDiff4').style.color = '#303030';
		document.getElementById('morseDiff4').style.background = '#C3C3C3';
	} else {
		morseBool4 = true
		document.getElementById('morseDiff4').style.color = '#C3C3C3';
		document.getElementById('morseDiff4').style.background = '#303030';
	}
}





function showHideKeyboard(){
	
	
}

function generateNewMorse(){
	
	backColor = "#C3C3C3";
	document.getElementById('morseCodeBox').style.background = backColor;
	
	document.getElementById('guessBox').style.opacity = 0
	document.getElementById('correctBox').style.opacity = 0
	
  /*var morseData = [['·-', 'A'], ['-···', 'B'], ['-·-·', 'C'], ['-··', 'D'], ['·', 'E'], ['··-·', 'F'], ['--·', 'G'], ['····', 'H'], ['··', 'I'], ['·---', 'J'], ['-·-', 'K'], ['·-··', 'L'], ['--', 'M'], ['-·', 'N'], ['---', 'O'], ['·--·', 'P'], ['--·-', 'Q'], ['·-·', 'R'], ['···', 'S'], ['-', 'T'], ['··-', 'U'], ['···-', 'V'], ['·--', 'W'], ['-··-', 'X'], ['-·--', 'Y'], ['--··', 'Z']]*/
	
	var morseData1 = [['·', 'E'], ['-', 'T']]
	var morseData2 = [['·-', 'A'], ['··', 'I'], ['--', 'M'], ['-·', 'N']]
	var morseData3 = [['-··', 'D'], ['--·', 'G'], ['-·-', 'K'], ['---', 'O'], ['·-·', 'R'], ['···', 'S'], ['··-', 'U'], ['·--', 'W'], ]
	var morseData4 = [['-···', 'B'], ['-·-·', 'C'], ['··-·', 'F'], ['····', 'H'], ['·---', 'J'], ['·-··', 'L'], ['·--·', 'P'], ['--·-', 'Q'], ['···-', 'V'], ['-··-', 'X'], ['-·--', 'Y'], ['--··', 'Z']]
	
	
	var morseData = []
	
	if (morseBool1 === false && morseBool2 === false && morseBool3 === false && morseBool4 === false){
		difficulty1();
	}
	
	if (morseBool1 === true){
		morseData = morseData.concat(morseData1)
	}
	
	if (morseBool2 === true){
		morseData = morseData.concat(morseData2)
	}
	
	if (morseBool3 === true){
		morseData = morseData.concat(morseData3)
	}
	
	if (morseBool4 === true){
		morseData = morseData.concat(morseData4)
	}

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
	
	inputDisabled = false
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
	
	if (inputDisabled === false){
		
		inputDisabled = true

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
}