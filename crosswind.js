
/*
// Convert from degrees to radians.
Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

// Convert from radians to degrees.
Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}

function xComponent(vector, angle){
	return Math.sin(Math.radians(angle)) * vector;
}

function yComponent(vector, angle){
	return Math.cos(Math.radians(angle)) * vector;
}

function keyPress(){
	
	var aileron = Number(document.getElementById('aileronSlider').value)
	var rudder = Number(document.getElementById('rudderSlider').value)
	
	switch (event.key){
		case "a":
			aileron -= 0.02	
			break;
		case "A":
			aileron -= 0.02	
			break;
		case "d":
			aileron += 0.02		
			break;
		case "D":
			aileron += 0.02
			break;
		case "j":
			rudder -= 1	
			break;
		case "J":
			rudder -= 1	
			break;
		case "l":
			rudder += 1	
			break;
		case "L":
			rudder += 1	
			break;
	}
	
	if (rudder > 20){
		rudder = 19
	} else if (rudder < -20){
		rudder = -19
	} else if (aileron > 1){
		aileron = 0.99
	} else if (aileron < -1){
		aileron = -0.99
	}
	
	document.getElementById('aileronSlider').value = aileron
	document.getElementById('rudderSlider').value = rudder
	console.log("rudder: " + rudder)
	console.log("aileron: " + aileron)
}

window.addEventListener("keypress", keyPress, false)


 function crosswindLoad(){
	var canvas = document.getElementById('crosswind');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		
		//initialize the noise
		noise.seed(Math.random());
		
		var movement = 0
		
		var planeX = 250
		var planeY = 750
		var planeAngle = 0
		
		function drawRotatedRect(x, y, width, height, degrees) {

			// first save the untranslated/unrotated context
			ctx.save();

			ctx.beginPath();
			// move the rotation point to the center of the rect
			ctx.translate(x + width / 2, y + height / 2);
			// rotate the rect
			ctx.rotate(degrees * Math.PI / 180);

			// draw the rect on the transformed context
			// Note: after transforming [0,0] is visually [x,y]
			//       so the rect needs to be offset accordingly when drawn
			ctx.rect(-width / 2, -height / 2, width, height);

			ctx.fillStyle = "#303030"
			ctx.strokeStyle = "#E6E6E6"
			ctx.strokeWidth = 2
			ctx.fill();
			ctx.stroke();

			// restore the context to its untranslated/unrotated state
			ctx.restore();

		}
		
		var pos = []
		var runwayLanding = 0
		
		function stepForward(){
			var renderStart = Date.now();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			movement++;
			
			var windAngle = noise.simplex2(1, movement / 2000) * 50;
			var windSpeed = ((noise.simplex2(100000, movement / 200)) / 4) + 1;
			var airSpeed = 1.5;
			planeAngle += Number(document.getElementById('aileronSlider').value);
			var rudderControl = Number(document.getElementById('rudderSlider').value);
			
			
			
			var windSpeedX = xComponent(windSpeed, windAngle);
			var windSpeedY = yComponent(windSpeed, windAngle);
			
			var airSpeedX = xComponent(airSpeed, planeAngle);
			var airSpeedY = yComponent(airSpeed, planeAngle);
			
			//val = (val * 0.5) + 0.5;
			
			
			ctx.strokeStyle = "#303030"
			ctx.fillStyle = "#303030"
			
			//arrow rendering
			
			ctx.lineWidth = 3
			ctx.strokeStyle = "rgb(0, 0, 0)"
			
			var arrowShaftX = (Math.sin(Math.radians(windAngle)) * 40 * windSpeed) + 50;
			var arrowShaftY = (Math.cos(Math.radians(windAngle)) * 40 * windSpeed) + 50;
			
			var arrowShaftBackX = (Math.sin(Math.radians(windAngle)) * -40 * windSpeed) + 50;
			var arrowShaftBackY = (Math.cos(Math.radians(windAngle)) * -40 * windSpeed) + 50;
			
			var arrowLeftX = (Math.sin(Math.radians(windAngle - 45)) * 20 * windSpeed) + 50;
			var arrowLeftY = (Math.cos(Math.radians(windAngle - 45)) * 20 * windSpeed) + 50;
			
			var arrowRightX = (Math.sin(Math.radians(windAngle + 45)) * 20 * windSpeed) + 50;
			var arrowRightY = (Math.cos(Math.radians(windAngle + 45)) * 20 * windSpeed) + 50;
			
			//arrow shaft
			ctx.beginPath();
			ctx.moveTo(arrowShaftBackX, arrowShaftBackY);
			ctx.lineTo(arrowShaftX, arrowShaftY);
			ctx.closePath();
			ctx.stroke();
			
			//arrow right side 
			ctx.beginPath();
			ctx.moveTo(arrowShaftX, arrowShaftY);
			ctx.lineTo(arrowRightX, arrowRightY);
			ctx.closePath();
			ctx.stroke();
			
			//arrow left side 
			ctx.beginPath();
			ctx.moveTo(arrowShaftX, arrowShaftY);
			ctx.lineTo(arrowLeftX, arrowLeftY);
			ctx.closePath();
			ctx.stroke();
			
			
			
			//wind text rendering
			ctx.font = "bold 20px Lato"
			ctx.fillText("Wind", 25, 120)
			
			//runway
			//runway asphalt
			ctx.fillRect(200, 0, 100, 300)
			ctx.fillStyle = "#C3C3C3"
			//runway lines
			ctx.fillRect(245, 0, 10, 30)
			ctx.fillRect(245, 50, 10, 30)
			ctx.fillRect(245, 100, 10, 30)
			ctx.fillRect(245, 150, 10, 30)
			ctx.fillRect(245, 200, 10, 30)
			//runway number 3
			ctx.fillRect(235, 240, 10, 50)
			ctx.fillRect(210, 240, 30, 10)
			ctx.fillRect(210, 260, 30, 10)
			ctx.fillRect(210, 280, 30, 10)
			//runway number 6
			ctx.fillRect(255, 240, 10, 50)
			ctx.fillRect(260, 240, 30, 10)
			ctx.fillRect(260, 260, 30, 10)
			ctx.fillRect(260, 280, 30, 10)
			ctx.fillRect(280, 260, 10, 30)
			
			//render input boxes
			ctx.strokeWidth = 4
			ctx.strokeStyle = "#303030"
			ctx.strokeRect(690, 440, 100, 50);
		
			//move the plane
			var velocityX = airSpeedX + windSpeedX;
			var velocityY = airSpeedY - windSpeedY;
			planeX += velocityX;
			planeY -= velocityY;
			
			//draw blue line
			pos.push([planeX, planeY]);
			
			for (i = 0; i < pos.length; i++){
				ctx.fillStyle = "#316FA6";
				ctx.fillRect(pos[i][0] - 1, pos[i][1] - 1, 2, 2);
			}
			
			//render plane
			//center of plane starts at (250, 700)
			drawRotatedRect(planeX - 7, planeY - 15, 14, 30, planeAngle + rudderControl);
			
			if (planeX < 0 || planeX > 500 || planeY < 0 || planeY > 800){
				//reset the game
				pos = []
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				planeX = 250
				planeY = 750
				planeAngle = 0
				runwayLanding = 0
			}
			
			/*if (planeY < 230){
				if (runwayLanding === 0){
					if (planeX < 200 || planeX > 300){
						runwayLanding = -1
					} else {
						runwayLanding = 1
					}
				}
			}
			
			if (runwayLanding === 1){
				ctx.strokeWidth = 2;
				ctx.fillStyle = "#E6E6E6";
				ctx.fillRect(100, 350, 300, 200);
				ctx.strokeRect(98, 348, 304, 204);
				ctx.fillStyle = "#303030";
				ctx.font = "bold 24px Lato";
				ctx.fillText("Congratulations", 162, 400);
				//
				
			} else if (runwayLanding === -1){
				
			} else {
				
			}*/
			/*
			//render time
			var renderElement = document.getElementById("crosswindRender");
			var renderEnd = Date.now();
			renderTime = renderEnd - renderStart;
			renderElement.innerHTML = `Rendered in ${renderTime}ms`
			 
		}
		
		//step forward in the simulation at 50fps
		setInterval(stepForward, 20);
	}
}
*/


Really cool visualization (slow as hecc tho)

function perlinLoad(){
	var canvas = document.getElementById('perlin');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		
		//initialize the noise
		noise.seed(Math.random());
		
		var threeDMovement = 0
		
		function generateNoise(){
			var start = Date.now();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			threeDMovement++
			for (var x = 0; x < 200; x++) {
				for (var y = 0; y < 200; y++) {
					
					var value = noise.simplex3(x / 50, y / 50, threeDMovement / 5);
					value = (value * 0.5) + 0.5;
					ctx.fillStyle = "rgba(0, 0, 0, " + value + ")";
					ctx.fillRect(x, y, 1, 1);
					//console.log(value);
				}
			}
			var renderElement = document.getElementById("perlinRender");
			var end = Date.now();
			renderTime = end - start;
			renderElement.innerHTML = `Rendered in ${renderTime}ms`
			 
		}
		
		setInterval(generateNoise, 300);
	}
}
*/

