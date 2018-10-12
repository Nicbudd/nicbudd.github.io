function roundSix (number){
	return Math.round(number * 1000000) / 1000000
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function calculateDistance(v, h, deltaT, theta){
	
	theta = toRadians(theta)
	let Vx = roundSix(v * Math.cos(theta))
	let Vy = roundSix(v * Math.sin(theta))
	theta = toDegrees(theta)
	console.log(`Vx = ${Vx}m/s, Vy = ${Vy}m/s`)
	
	let t = 0
	let x = h
	let a = -9.8
	
	//console.log("Simulating Motion...")
	while (x > 0) {
		t = roundSix(t + deltaT)
		x = roundSix(h + (Vy * t) + (.5 * a * t * t))
		//console.log(`Time = ${t}s, Height = ${x}m`)
	}
	
	//console.log(`Done! Time to hit ground = ${t}s`)
	
	let xDist = roundSix(t * Vx)
	//console.log(`Distance travelled in X direction = ${xDist}m`)
	console.log(`Time = ${t}s, Distance in X direction = ${xDist}m`)
	return xDist
	

	
}

function calculateAngle(v, h, targ, deltaT, deltaTheta){
	let theta = 0;
	let distance = calculateDistance(v, h, deltaT, theta);
	
	while (distance < targ) {
		theta = roundSix(theta + deltaTheta);
		console.log("Too low! Raising the angle!")
		console.log(`Theta = ${theta}`);
		
		if (theta > 90){
			console.log('Oops! Something went wrong! Try lowering your target distance, increasing your velocity, or changing your starting height!')
			return "Too far! Increase velocity or decrease target distance"	
		}
		
		distance = calculateDistance(v, h, deltaT, theta);
	}
	
	if (theta < 90){
		console.log(`Done! Angle = ${theta}`)
	}
	
	return theta
}

let decimalPlaces = 0.1;
let numDecimalPlaces = 1;
let accuracy = 2;

function calculateDPSliderOut(){
	let slider = document.getElementById('decimalPlacesSlider');
	let outSpan = document.getElementById('decimalPlacesSliderNum');
	
	let slideVal = slider.value;
	numDecimalPlaces = Number(slideVal);
	
	if (slideVal === "0"){
		decimalPlaces = 1;
	} else if (slideVal === "1"){
		decimalPlaces = 0.1;
	} else if (slideVal === "2"){
		decimalPlaces = 0.01;
	} else if (slideVal === "3"){
		decimalPlaces = 0.001;
	} else {
		console.log("oops!");
	}
	
	outSpan.innerHTML = decimalPlaces;
}

function calculateAccuracySliderOut(){
	let slider = document.getElementById('accuracySlider');
	let outSpan = document.getElementById('accuracySliderNum');
	accuracy = Number(slider.value);
	outSpan.innerHTML = slider.value;
}

function calculateNotchSliderOut(){
	let slider = document.getElementById('notchSlider');
	let outSpan = document.getElementById('notchSliderNum');
	let outVel = document.getElementById('phyVelocity');
	
	if (slider.value === "1"){
		outVel.value = 3.6
	} else if (slider.value === "2"){
		outVel.value = 4.7
	} else if (slider.value === "3"){
		outVel.value = 5.9
	} else if (slider.value === "4"){
		outVel.value = 7.0
	} else if (slider.value === "5"){
		outVel.value = 8.1
	} 
	
	outSpan.innerHTML = slider.value;
}

function phy2dAngleButton(){
	let angleOut = document.getElementById('phyAngle');
	let velocity = Number(document.getElementById('phyVelocity').value);
	let startingHeight = Number(document.getElementById('phyStartingH').value);
	let targetDistance = Number(document.getElementById('phyTargetDist').value);
	let deltaTheta = decimalPlaces;
	let deltaT = Math.pow(10, (numDecimalPlaces + accuracy) * -1)

	angleOut.value = calculateAngle(velocity, startingHeight, targetDistance, deltaT, deltaTheta);
}
