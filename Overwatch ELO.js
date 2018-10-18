let kDefault = 40
let games = [['fla', 'sfs', 1, 3], ['val', 'sfs', 3, 2], ['seo', 'shd', 4, 0], ['gla', 'ldn', 3, 2], ['dal', 'hou', 3, 2], ['nye', 'bos', 3, 1], ['sfs', 'ldn', 0, 4], ['seo', 'hou', 2, 1], ['shd', 'bos', 2, 3], ['val', 'gla', 3, 1], ['fla', 'dal', 1, 3], ['seo', 'nye', 3, 1], ['sfs', 'val', 0, 4], ['shd', 'gla', 0, 4], ['dal', 'seo', 1, 2], ['ldn', 'fla', 3, 1], ['phi', 'hou', 3, 2], ['bos', 'nye', 1, 3], ['val', 'dal', 3, 0], ['fla', 'bos', 0, 4], ['sfs', 'shd', 3, 1], ['ldn', 'phi', 4, 0], ['nye', 'hou', 3, 1], ['seo', 'gla', 4, 0], ['sfs', 'phi', 1, 2], ['fla', 'seo', 0, 4], ['hou', 'shd', 4, 0], ['dal', 'hou', 0, 4], ['nye', 'val', 3, 0], ['phi', 'gla', 2, 3], ['seo', 'bos', 4, 0], ['shd', 'fla', 0, 4], ['ldn', 'dal', 3, 1], ['val', 'ldn', 2, 3], ['gla', 'nye', 0, 4], ['bos', 'sfs', 2, 3], ['sfs', 'ldn', 1, 3], ['shd', 'seo', 1, 3], ['gla', 'val', 1, 3], ['bos', 'ldn', 3, 2], ['phi', 'nye', 3, 2], ['hou', 'fla', 4, 0], ['seo', 'nye', 2, 3], ['shd', 'phi', 2, 3], ['dal', 'sfs', 3, 0], ['dal', 'bos', 2, 3], ['val', 'fla', 3, 1], ['gla', 'hou', 0, 4], ['val', 'phi', 4, 0], ['fla', 'gla', 1, 3], ['hou', 'sfs', 3, 1], ['phi', 'dal', 4, 0], ['nye', 'shd', 4, 0], ['ldn', 'seo', 4, 0], ['sfs', 'fla', 4, 0], ['seo', 'hou', 3, 2], ['gla', 'bos', 0, 4], ['shd', 'ldn', 0, 4], ['dal', 'nye', 1, 3], ['bos', 'val', 4, 0], ['shd', 'dal', 2, 3], ['sfs', 'gla', 1, 3], ['val', 'seo', 3, 0], ['phi', 'bos', 0, 4], ['fla', 'nye', 0, 3], ['ldn', 'hou', 1, 3], ['gla', 'dal', 1, 3], ['seo', 'sfs', 3, 2], ['val', 'shd', 4, 0], ['nye', 'ldn', 3, 2], ['hou', 'bos', 3, 2], ['fla', 'phi', 2, 3], ['ldn', 'hou', 3, 1], ['ldn', 'nye', 3, 2], ['seo', 'val', 4, 0], ['dal', 'shd', 3, 1], ['gla', 'sfs', 4, 0], ['hou', 'ldn', 3, 2], ['nye', 'fla', 3, 1], ['bos', 'phi', 0, 4], ['ldn', 'nye', 3, 2], ['dal', 'gla', 3, 1], ['sfs', 'seo', 1, 3], ['phi', 'fla', 4, 0], ['bos', 'hou', 0, 4], ['shd', 'val', 0, 3], ['seo', 'dal', 3, 1], ['val', 'sfs', 3, 1], ['gla', 'shd', 4, 0], ['fla', 'ldn', 1, 3], ['hou', 'phi', 2, 3], ['nye', 'bos', 4, 0], ['bos', 'fla', 4, 0], ['gla', 'seo', 1, 3], ['dal', 'val', 1, 3], ['phi', 'ldn', 0, 4], ['hou', 'nye', 0, 4], ['shd', 'sfs', 0, 4], ['seo', 'shd', 3, 1], ['sfs', 'dal', 3, 1], ['val', 'gla', 3, 0], ['phi', 'seo', 0, 4], ['hou', 'val', 0, 4], ['bos', 'shd', 4, 0], ['ldn', 'bos', 4, 0], ['nye', 'phi', 3, 1], ['fla', 'hou', 2, 3], ['ldn', 'gla', 1, 3], ['nye', 'sfs', 4, 0], ['fla', 'dal', 3, 2], ['bos', 'dal', 4, 0], ['nye', 'seo', 3, 2], ['phi', 'shd', 4, 0], ['shd', 'nye', 0, 4], ['fla', 'val', 3, 1], ['hou', 'gla', 2, 3], ['gla', 'fla', 2, 1], ['ldn', 'sfs', 3, 1], ['val', 'bos', 2, 3], ['seo', 'ldn', 0, 4], ['sfs', 'hou', 3, 1], ['dal', 'phi', 0, 4], ['gla', 'phi', 1, 3], ['fla', 'sfs', 3, 2], ['shd', 'hou', 0, 4], ['hou', 'seo', 3, 1], ['nye', 'dal', 3, 2], ['sfs', 'bos', 2, 3], ['seo', 'fla', 3, 1], ['phi', 'val', 3, 2], ['ldn', 'shd', 4, 0], ['dal', 'ldn', 1, 3], ['val', 'nye', 0, 4], ['bos', 'gla', 3, 2], ['phi', 'ldn', 3, 2], ['phi', 'nye', 2, 3], ['shd', 'dal', 1, 3], ['val', 'seo', 4, 0], ['sfs', 'gla', 3, 1], ['fla', 'nye', 0, 4], ['phi', 'bos', 2, 3], ['ldn', 'hou', 2, 3], ['gla', 'dal', 3, 1], ['val', 'shd', 4, 0], ['seo', 'sfs', 4, 0], ['fla', 'phi', 1, 3], ['hou', 'bos', 0, 4], ['nye', 'ldn', 4, 0], ['shd', 'gla', 0, 4], ['sfs', 'val', 0, 4], ['dal', 'seo', 2, 3], ['bos', 'nye', 3, 2], ['ldn', 'fla', 3, 0], ['phi', 'hou', 3, 2], ['val', 'dal', 2, 1], ['sfs', 'shd', 3, 1], ['seo', 'gla', 2, 3], ['ldn', 'phi', 2, 3], ['nye', 'hou', 3, 2], ['fla', 'bos', 2, 3], ['gla', 'val', 2, 3], ['dal', 'sfs', 0, 4], ['shd', 'seo', 1, 3], ['hou', 'fla', 3, 1], ['bos', 'ldn', 3, 2], ['phi', 'nye', 2, 3], ['phi', 'sfs', 1, 3], ['fla', 'shd', 3, 1], ['bos', 'seo', 2, 1], ['ldn', 'val', 3, 2], ['nye', 'gla', 3, 2], ['hou', 'dal', 3, 0], ['shd', 'bos', 1, 3], ['val', 'hou', 1, 3], ['dal', 'fla', 1, 3], ['gla', 'ldn', 3, 2], ['sfs', 'nye', 1, 3], ['seo', 'phi', 3, 2], ['dal', 'bos', 0, 4], ['gla', 'hou', 3, 2], ['val', 'fla', 3, 1], ['sfs', 'ldn', 0, 4], ['seo', 'nye', 0, 4], ['shd', 'phi', 2, 3], ['phi', 'dal', 3, 1], ['fla', 'gla', 0, 3], ['hou', 'sfs', 2, 3], ['sfs', 'fla', 4, 0], ['bos', 'val', 3, 2], ['dal', 'nye', 0, 4], ['gla', 'bos', 1, 3], ['nye', 'shd', 3, 1], ['ldn', 'seo', 3, 2], ['shd', 'ldn', 1, 3], ['seo', 'hou', 4, 0], ['val', 'phi', 3, 2], ['gla', 'bos', 0, 3], ['val', 'nye', 0, 3], ['nye', 'bos', 3, 0], ['gla', 'sfs', 3, 1], ['seo', 'val', 2, 3], ['dal', 'shd', 3, 1], ['bos', 'phi', 1, 3], ['nye', 'fla', 3, 1], ['hou', 'ldn', 4, 1], ['dal', 'gla', 0, 4], ['bos', 'hou', 1, 3], ['sfs', 'seo', 3, 1], ['phi', 'fla', 4, 0], ['shd', 'val', 1, 3], ['ldn', 'nye', 1, 3], ['bos', 'dal', 0, 3], ['fla', 'val', 1, 3], ['hou', 'gla', 1, 3], ['ldn', 'sfs', 3, 2], ['gla', 'fla', 4, 0], ['phi', 'shd', 4, 0], ['val', 'bos', 3, 2], ['nye', 'seo', 4, 0], ['sfs', 'hou', 4, 0], ['seo', 'ldn', 2, 3], ['shd', 'nye', 0, 4], ['dal', 'phi', 3, 1], ['nye', 'phi', 4, 0], ['seo', 'shd', 4, 0], ['val', 'gla', 3, 0], ['ldn', 'bos', 2, 1], ['sfs', 'dal', 3, 1], ['phi', 'gla', 1, 3], ['hou', 'shd', 3, 0], ['fla', 'seo', 2, 3], ['bos', 'sfs', 1, 3], ['ldn', 'dal', 1, 3], ['nye', 'val', 2, 3], ['fla', 'hou', 1, 3], ['seo', 'bos', 1, 3], ['shd', 'fla', 2, 3], ['dal', 'hou', 1, 3], ['val', 'ldn', 2, 1], ['gla', 'nye', 3, 2], ['sfs', 'phi', 1, 2], ['bos', 'shd', 4, 0], ['fla', 'dal', 0, 4], ['phi', 'seo', 3, 2], ['ldn', 'gla', 2, 3], ['nye', 'sfs', 2, 1], ['hou', 'val', 0, 4], ['gla', 'shd', 4, 0], ['val', 'sfs', 3, 1], ['seo', 'dal', 3, 1], ['hou', 'phi', 3, 1], ['fla', 'ldn', 0, 4], ['nye', 'bos', 1, 3], ['hou', 'nye', 2, 3], ['gla', 'seo', 3, 1], ['dal', 'val', 3, 1], ['phi', 'ldn', 3, 1], ['shd', 'sfs', 0, 4], ['bos', 'fla', 4, 0], ['val', 'gla', 3, 2], ['dal', 'nye', 2, 3], ['nye', 'val', 1, 3], ['phi', 'bos', 3, 1], ['ldn', 'gla', 0, 3], ['phi', 'bos', 1, 3], ['phi', 'bos', 3, 1], ['ldn', 'gla', 3, 0], ['ldn', 'gla', 3, 0], ['phi', 'nye', 3, 0]]
let teams = [['bos', 1400], ['dal', 1400], ['fla', 1400], ['hou', 1400], ['ldn', 1400], ['gla', 1400], ['val', 1400], ['nye', 1400], ['phi', 1400], ['sfs', 1400], ['seo', 1400], ['shd', 1400]]

function calculateExpected(team1, team2){
	let Qa = Math.pow(10, team1 / 400)
	let Qb = Math.pow(10, team2 / 400)
	return Qa / (Qa + Qb)
}

function calculateELO(team1, team2, actualPoints, k) {
	
//spits out Team1's ELO

let expectedPoints = calculateExpected(team1, team2)
return team1 + (k * (actualPoints - expectedPoints))
}

function lookupTeamELO(team) {
	for (let i = 0; ){
		
		
	}
}

function calcGame(gameNum, team1, team2){
	
	//returns ELO of team 1
	
	let boostedGames = [72, 73, 134, 135, 196, 197, 198, 259, 260, 261]
	
	let team1ELO = 
	let team2ELO = 
	let k = kDefault
	
	if (gameNum < 12){
		k = 30
		//preseason weight
	} else if (gameNum > 261 && gameNum < 274){
		k = 80
		//semi-finals
	} else if (gameNum < 273 && gameNum > 278){
		k = 160
		//semi-finals
	} else {
		for (let i = 0; i > boostedGames.length; i++){
			if (gameNum = boostedGames[i]){
				k = 60
			} else {
				k = 40
			}
		}
	}
	
	let team1WinLoss = games[gameNum][2] / (games[gameNum][2] + games[gameNum][3]);
	calculateELO(team1ELO, team2ELO, team1WinLoss, k);
	console.log(team1WinLoss);
}



function loadELO() {
	calcGame(0)
	calculateELO(1400, 1400, 1, kDefault);
	document.getElementById('glaScore').innerHTML = 100
}