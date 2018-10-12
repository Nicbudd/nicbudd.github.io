let kDefault = 40
let games = [['fla', 'sfs', 1, 3], ['val', 'sfs', 3, 2], ['seo', 'shd', 4, 0], ['gla', 'ldn', 3, 2], ['dal', 'hou', 3, 2], ['nye', 'bos', 3, 1], ['sfs', 'ldn', 0, 4], ['seo', 'hou', 2, 1], ['shd', 'bos', 2, 3], ['val', 'gla', 3, 1], ['fla', 'dal', 1, 3], ['seo', 'nye', 3, 1], ['sfs', 'val', 0, 4], ['shd', 'gla', 0, 4], ['dal', 'seo', 1, 2], ['ldn', 'fla', 3, 1], ['phi', 'hou', 3, 2], ['bos', 'nye', 1, 3], ['val', 'dal', 3, 0], ['fla', 'bos', 0, 4], ['sfs', 'shd', 3, 1], ['ldn', 'phi', 4, 0], ['nye', 'hou', 3, 1], ['seo', 'gla', 4, 0], ['sfs', 'phi', 1, 2], ['fla', 'seo', 0, 4], ['hou', 'shd', 4, 0], ['dal', 'hou', 0, 4], ['nye', 'val', 3, 0], ['phi', 'gla', 2, 3], ['seo', 'bos', 4, 0], ['shd', 'fla', 0, 4], ['ldn', 'dal', 3, 1], ['val', 'ldn', 2, 3], ['gla', 'nye', 0, 4], ['bos', 'sfs', 2, 3], ['sfs', 'ldn', 1, 3], ['shd', 'seo', 1, 3], ['gla', 'val', 1, 3], ['bos', 'ldn', 3, 2], ['phi', 'nye', 3, 2], ['hou', 'fla', 4, 0], ['seo', 'nye', 2, 3], ['shd', 'phi', 2, 3], ['dal', 'sfs', 3, 0], ['dal', 'bos', 2, 3], ['val', 'fla', 3, 1], ['gla', 'hou', 0, 4], ['val', 'phi', 4, 0], ['fla', 'gla', 1, 3], ['hou', 'sfs', 3, 1], ['phi', 'dal', 4, 0], ['nye', 'shd', 4, 0], ['ldn', 'seo', 4, 0], ['sfs', 'fla', 4, 0], ['seo', 'hou', 3, 2], ['gla', 'bos', 0, 4], ['shd', 'ldn', 0, 4], ['dal', 'nye', 1, 3], ['bos', 'val', 4, 0], ['shd', 'dal', 2, 3], ['sfs', 'gla', 1, 3], ['val', 'seo', 3, 0], ['phi', 'bos', 0, 4], ['fla', 'nye', 0, 3], ['ldn', 'hou', 1, 3], ['gla', 'dal', 1, 3], ['seo', 'sfs', 3, 2], ['val', 'shd', 4, 0], ['nye', 'ldn', 3, 2], ['hou', 'bos', 3, 2], ['fla', 'phi', 2, 3], ['ldn', 'hou', 3, 1], ['ldn', 'nye', 3, 2], ['seo', 'val', 4, 0], ['dal', 'shd', 3, 1], ['gla', 'sfs', 4, 0], ['hou', 'ldn', 3, 2], ['nye', 'fla', 3, 1], ['bos', 'phi', 0, 4], ['ldn', 'nye', 3, 2], ['dal', 'gla', 3, 1], ['sfs', 'seo', 1, 3], ['phi', 'fla', 4, 0], ['bos', 'hou', 0, 4], ['shd', 'val', 0, 3], ['seo', 'dal', 3, 1], ['val', 'sfs', 3, 1], ['gla', 'shd', 4, 0]]
let teams = ['bos', 'dal', 'fla', 'hou', 'ldn', 'gla', 'val', 'nye', 'phi', 'sfs', 'seo', 'shd']
let elo = [1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400]

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

function calcGame(gameNum){
	
	let team1WinLoss = games[gameNum][2] / (games[gameNum][2] + games[gameNum][3])
	console.log(team1WinLoss)
	
	calculateELO(1400, 1400, 1, kDefault);
	
}

function loadELO() {
	calcGame(0)
	calculateELO(1400, 1400, 1, kDefault);
	document.getElementById('glaScore').innerHTML = 100
}