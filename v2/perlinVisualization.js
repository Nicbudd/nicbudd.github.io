var visualOn = false

function startStopPerlin(){
	if (visualOn === false){
		visualOn = true
		document.getElementById('startStopPerlin').innerHTML = "Stop Perlin"
	} else {
		visualOn = false
		document.getElementById('startStopPerlin').innerHTML = "Start Perlin"
	}
}

function perlinLoad(){
	var canvas = document.getElementById('perlin');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		
		//initialize the noise
		noise.seed(Math.random());
		
		var threeDMovement = 0
		
		function generateNoise(){
			if (visualOn === true){
				var start = Date.now();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				threeDMovement++
				for (var x = 0; x < 200; x++) {
					for (var y = 0; y < 200; y++) {	
						var val = noise.simplex3(x / 50, y / 50, threeDMovement / 10);
						val = (val * 0.5) + 0.5;
						ctx.fillStyle = "rgba(0, 0, 0, " + val + ")";
						ctx.fillRect(x, y, 1, 1);
						//console.log(value);
					}
				}
				var renderElement = document.getElementById("perlinRender");
				var end = Date.now();
				renderTime = end - start;
				renderElement.innerHTML = `Rendered in ${renderTime}ms`
			}
		}
		
		setInterval(generateNoise, 100);
	}
}
