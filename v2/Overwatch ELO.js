//['ldn', 'val', 3, 1], ['ldn', 'val', 3, 0], ['phi', 'nye', 3, 2], ['phi', 'ldn', 1, 3], ['phi', 'ldn', 0, 3], ['phi', 'ldn', 3, 1], ['nye', 'bos', 2, 1], ['seo', 'gla', 3, 1], ['shd', 'hzs', 1, 3]]
//This lists all the games played 

let games = [
['fla', 'sfs', 1, 3], 
['val', 'sfs', 3, 2], 
['seo', 'shd', 4, 0], 
['gla', 'ldn', 3, 2], 
['dal', 'hou', 3, 2], 
['nye', 'bos', 3, 1], 
['sfs', 'ldn', 0, 4], 
['seo', 'hou', 2, 1], 
['shd', 'bos', 2, 3], 
['val', 'gla', 3, 1], 
['fla', 'dal', 1, 3], 
['seo', 'nye', 3, 1], 
['sfs', 'val', 0, 4], 
['shd', 'gla', 0, 4], 
['dal', 'seo', 1, 2], 
['ldn', 'fla', 3, 1], 
['phi', 'hou', 3, 2], 
['bos', 'nye', 1, 3], 
['val', 'dal', 3, 0], 
['fla', 'bos', 0, 4], 
['sfs', 'shd', 3, 1], 
['ldn', 'phi', 4, 0], 
['nye', 'hou', 3, 1], 
['seo', 'gla', 4, 0], 
['sfs', 'phi', 1, 2], 
['fla', 'seo', 0, 4], 
['hou', 'shd', 4, 0], 
['dal', 'hou', 0, 4], 
['nye', 'val', 3, 0], 
['phi', 'gla', 2, 3], 
['seo', 'bos', 4, 0], 
['shd', 'fla', 0, 4], 
['ldn', 'dal', 3, 1], 
['val', 'ldn', 2, 3], 
['gla', 'nye', 0, 4], 
['bos', 'sfs', 2, 3], 
['sfs', 'ldn', 1, 3], 
['shd', 'seo', 1, 3], 
['gla', 'val', 1, 3], 
['bos', 'ldn', 3, 2], 
['phi', 'nye', 3, 2], 
['hou', 'fla', 4, 0], 
['seo', 'nye', 2, 3], 
['shd', 'phi', 2, 3], 
['dal', 'sfs', 3, 0], 
['dal', 'bos', 2, 3], 
['val', 'fla', 3, 1], 
['gla', 'hou', 0, 4], 
['val', 'phi', 4, 0], 
['fla', 'gla', 1, 3], 
['hou', 'sfs', 3, 1], 
['phi', 'dal', 4, 0], 
['nye', 'shd', 4, 0], 
['ldn', 'seo', 4, 0], 
['sfs', 'fla', 4, 0], 
['seo', 'hou', 3, 2], 
['gla', 'bos', 0, 4], 
['shd', 'ldn', 0, 4], 
['dal', 'nye', 1, 3], 
['bos', 'val', 4, 0], 
['shd', 'dal', 2, 3], 
['sfs', 'gla', 1, 3], 
['val', 'seo', 3, 0], 
['phi', 'bos', 0, 4], 
['fla', 'nye', 0, 3], 
['ldn', 'hou', 1, 3], 
['gla', 'dal', 1, 3], 
['seo', 'sfs', 3, 2], 
['val', 'shd', 4, 0], 
['nye', 'ldn', 3, 2], 
['hou', 'bos', 3, 2], 
['fla', 'phi', 2, 3], 
['ldn', 'hou', 3, 1], 
['ldn', 'nye', 3, 2], 
['seo', 'val', 4, 0], 
['dal', 'shd', 3, 1], 
['gla', 'sfs', 4, 0], 
['hou', 'ldn', 3, 2], 
['nye', 'fla', 3, 1], 
['bos', 'phi', 0, 4], 
['ldn', 'nye', 3, 2], 
['dal', 'gla', 3, 1], 
['sfs', 'seo', 1, 3], 
['phi', 'fla', 4, 0], 
['bos', 'hou', 0, 4], 
['shd', 'val', 0, 3], 
['seo', 'dal', 3, 1], 
['val', 'sfs', 3, 1], 
['gla', 'shd', 4, 0], 
['fla', 'ldn', 1, 3], 
['hou', 'phi', 2, 3], 
['nye', 'bos', 4, 0], 
['bos', 'fla', 4, 0], 
['gla', 'seo', 1, 3], 
['dal', 'val', 1, 3], 
['phi', 'ldn', 0, 4], 
['hou', 'nye', 0, 4], 
['shd', 'sfs', 0, 4], 
['seo', 'shd', 3, 1], 
['sfs', 'dal', 3, 1], 
['val', 'gla', 3, 0], 
['phi', 'seo', 0, 4], 
['hou', 'val', 0, 4], 
['bos', 'shd', 4, 0], 
['ldn', 'bos', 4, 0], 
['nye', 'phi', 3, 1], 
['fla', 'hou', 2, 3], 
['ldn', 'gla', 1, 3], 
['nye', 'sfs', 4, 0], 
['fla', 'dal', 3, 2], 
['bos', 'dal', 4, 0], 
['nye', 'seo', 3, 2], 
['phi', 'shd', 4, 0], 
['shd', 'nye', 0, 4], 
['fla', 'val', 3, 1], 
['hou', 'gla', 2, 3], 
['gla', 'fla', 2, 1], 
['ldn', 'sfs', 3, 1], 
['val', 'bos', 2, 3], 
['seo', 'ldn', 0, 4], 
['sfs', 'hou', 3, 1], 
['dal', 'phi', 0, 4], 
['gla', 'phi', 1, 3], 
['fla', 'sfs', 3, 2], 
['shd', 'hou', 0, 4], 
['hou', 'seo', 3, 1], 
['nye', 'dal', 3, 2], 
['sfs', 'bos', 2, 3], 
['seo', 'fla', 3, 1], 
['phi', 'val', 3, 2], 
['ldn', 'shd', 4, 0], 
['dal', 'ldn', 1, 3], 
['val', 'nye', 0, 4], 
['bos', 'gla', 3, 2], 
['phi', 'ldn', 3, 2], 
['phi', 'nye', 2, 3], 
['shd', 'dal', 1, 3], 
['val', 'seo', 4, 0], 
['sfs', 'gla', 3, 1], 
['fla', 'nye', 0, 4], 
['phi', 'bos', 2, 3], 
['ldn', 'hou', 2, 3], 
['gla', 'dal', 3, 1], 
['val', 'shd', 4, 0], 
['seo', 'sfs', 4, 0], 
['fla', 'phi', 1, 3], 
['hou', 'bos', 0, 4], 
['nye', 'ldn', 4, 0], 
['shd', 'gla', 0, 4], 
['sfs', 'val', 0, 4], 
['dal', 'seo', 2, 3], 
['bos', 'nye', 3, 2], 
['ldn', 'fla', 3, 0], 
['phi', 'hou', 3, 2], 
['val', 'dal', 2, 1], 
['sfs', 'shd', 3, 1], 
['seo', 'gla', 2, 3], 
['ldn', 'phi', 2, 3], 
['nye', 'hou', 3, 2], 
['fla', 'bos', 2, 3], 
['gla', 'val', 2, 3], 
['dal', 'sfs', 0, 4], 
['shd', 'seo', 1, 3], 
['hou', 'fla', 3, 1], 
['bos', 'ldn', 3, 2], 
['phi', 'nye', 2, 3], 
['phi', 'sfs', 1, 3], 
['fla', 'shd', 3, 1], 
['bos', 'seo', 2, 1], 
['ldn', 'val', 3, 2], 
['nye', 'gla', 3, 2], 
['hou', 'dal', 3, 0], 
['shd', 'bos', 1, 3], 
['val', 'hou', 1, 3], 
['dal', 'fla', 1, 3], 
['gla', 'ldn', 3, 2], 
['sfs', 'nye', 1, 3], 
['seo', 'phi', 3, 2], 
['dal', 'bos', 0, 4], 
['gla', 'hou', 3, 2], 
['val', 'fla', 3, 1], 
['sfs', 'ldn', 0, 4], 
['seo', 'nye', 0, 4], 
['shd', 'phi', 2, 3], 
['phi', 'dal', 3, 1], 
['fla', 'gla', 0, 3], 
['hou', 'sfs', 2, 3], 
['sfs', 'fla', 4, 0], 
['bos', 'val', 3, 2], 
['dal', 'nye', 0, 4], 
['gla', 'bos', 1, 3], 
['nye', 'shd', 3, 1], 
['ldn', 'seo', 3, 2], 
['shd', 'ldn', 1, 3], 
['seo', 'hou', 4, 0], 
['val', 'phi', 3, 2], 
['gla', 'bos', 0, 3], 
['val', 'nye', 0, 3], 
['nye', 'bos', 3, 0], 
['gla', 'sfs', 3, 1], 
['seo', 'val', 2, 3], 
['dal', 'shd', 3, 1], 
['bos', 'phi', 1, 3], 
['nye', 'fla', 3, 1], 
['hou', 'ldn', 4, 1], 
['dal', 'gla', 0, 4], 
['bos', 'hou', 1, 3], 
['sfs', 'seo', 3, 1], 
['phi', 'fla', 4, 0], 
['shd', 'val', 1, 3], 
['ldn', 'nye', 1, 3], 
['bos', 'dal', 0, 3], 
['fla', 'val', 1, 3], 
['hou', 'gla', 1, 3], 
['ldn', 'sfs', 3, 2], 
['gla', 'fla', 4, 0], 
['phi', 'shd', 4, 0], 
['val', 'bos', 3, 2], 
['nye', 'seo', 4, 0], 
['sfs', 'hou', 4, 0], 
['seo', 'ldn', 2, 3], 
['shd', 'nye', 0, 4], 
['dal', 'phi', 3, 1], 
['nye', 'phi', 4, 0], 
['seo', 'shd', 4, 0], 
['val', 'gla', 3, 0], 
['ldn', 'bos', 2, 1], 
['sfs', 'dal', 3, 1], 
['phi', 'gla', 1, 3], 
['hou', 'shd', 3, 0], 
['fla', 'seo', 2, 3], 
['bos', 'sfs', 1, 3], 
['ldn', 'dal', 1, 3], 
['nye', 'val', 2, 3], 
['fla', 'hou', 1, 3], 
['seo', 'bos', 1, 3], 
['shd', 'fla', 2, 3], 
['dal', 'hou', 1, 3], 
['val', 'ldn', 2, 1], 
['gla', 'nye', 3, 2], 
['sfs', 'phi', 1, 2], 
['bos', 'shd', 4, 0], 
['fla', 'dal', 0, 4], 
['phi', 'seo', 3, 2], 
['ldn', 'gla', 2, 3], 
['nye', 'sfs', 2, 1], 
['hou', 'val', 0, 4], 
['gla', 'shd', 4, 0], 
['val', 'sfs', 3, 1], 
['seo', 'dal', 3, 1], 
['hou', 'phi', 3, 1], 
['fla', 'ldn', 0, 4], 
['nye', 'bos', 1, 3], 
['hou', 'nye', 2, 3], 
['gla', 'seo', 3, 1], 
['dal', 'val', 3, 1], 
['phi', 'ldn', 3, 1], 
['shd', 'sfs', 0, 4], 
['bos', 'fla', 4, 0], 
['val', 'gla', 3, 2], 
['dal', 'nye', 2, 3], 
['nye', 'val', 1, 3], 
['phi', 'bos', 3, 1], 
['ldn', 'gla', 0, 3], 
['phi', 'bos', 1, 3], 
['phi', 'bos', 3, 1], 
['ldn', 'gla', 3, 0], 
['ldn', 'gla', 3, 0], 
['phi', 'nye', 3, 0], 
['ldn', 'val', 3, 1], 
['ldn', 'val', 3, 0], 
['phi', 'nye', 3, 2], 
['phi', 'ldn', 1, 3], 
['phi', 'ldn', 0, 3], 
['phi', 'ldn', 3, 1], 
['nye', 'bos', 2, 1], 
['seo', 'gla', 3, 1], 
['shd', 'hzs', 1, 3],
['tor', 'hou', 3, 2],
['atl', 'fla', 4, 0],
['dal', 'sfs', 0, 4],
['cdh', 'gzc', 3, 2],
['ldn', 'par', 1, 3],
['dcj', 'nye', 1, 3],
['val', 'hzs', 2, 3],
['van', 'shd', 4, 0],
['hou', 'bos', 2, 3],
['phi', 'atl', 3, 2],
['sfs', 'gla', 2, 3],
['seo', 'dal', 1, 3],
['dcj', 'ldn', 2, 3],
['phi', 'fla', 1, 2],
['gzc', 'dal', 4, 0],
['seo', 'cdh', 4, 0],
['atl', 'tor', 3, 1],
['nye', 'val', 3, 2],
['shd', 'bos', 3, 1],
['hou', 'hzs', 3, 1],
['gla', 'par', 1, 2],
['phi', 'dal', 1, 3],
['van', 'gzc', 3, 2],
['cdh', 'fla', 3, 2],
['hzs', 'ldn', 1, 3],
['nye', 'hou', 4, 0],
['tor', 'val', 2, 1],
['van', 'sfs', 3, 1],
['dcj', 'phi', 1, 3],
['seo', 'bos', 1, 3],
['fla', 'gzc', 2, 3],
['sfs', 'hzs', 3, 1],
['gla', 'ldn', 1, 2],
['tor', 'nye', 1, 3],
['van', 'val', 3, 1],
['shd', 'cdh', 4, 0],
['par', 'atl', 0, 4],
['fla', 'hou', 1, 3],
['sfs', 'dcj', 4, 0],
['shd', 'dal', 2, 3],
['bos', 'tor', 1, 3],
['hzs', 'gla', 3, 1],
['val', 'gzc', 1, 3],
['nye', 'seo', 3, 1],
['atl', 'gla', 0, 4],
['val', 'phi', 2, 3],
['tor', 'cdh', 3, 1],
['par', 'van', 0, 4],
['nye', 'sfs', 4, 0],
['dal', 'shd', 4, 0],
['val', 'hou', 1, 2],
['seo', 'dcj', 3, 1],
['gzc', 'gla', 1, 3],
['hzs', 'tor', 0, 3],
['par', 'sfs', 1, 3],
['ldn', 'shd', 2, 3],
['fla', 'bos', 0, 4],
['van', 'cdh', 3, 2],
['dcj', 'par', 1, 2],
['ldn', 'seo', 0, 3],
['bos', 'dal', 3, 2],
['atl', 'cdh', 2, 3],
['phi', 'par', 3, 1],
['dcj', 'fla', 3, 2],
['hou', 'atl', 1, 3],
['gzc', 'van', 0, 4],
['seo', 'nye', 3, 1],
['bos', 'van', 0, 3],
['atl', 'phi', 1, 3],
['sfs', 'tor', 3, 0],
['seo', 'van', 0, 4],
['sfs', 'phi', 4, 0],
['sfs', 'van', 3, 4],
['phi', 'nye', 0, 4],
['bos', 'atl', 3, 2],
['shd', 'gla', 1, 3],
['gzc', 'par', 0, 4],
['ldn', 'fla', 2, 1],
['dcj', 'tor', 1, 3],
['val', 'sfs', 0, 4],
['gla', 'seo', 3, 2],
['fla', 'phi', 1, 3],
['tor', 'bos', 2, 3],
['nye', 'shd', 3, 0],
['cdh', 'par', 4, 0],
['sfs', 'gzc', 0, 4],
['atl', 'ldn', 0, 4],
['van', 'hzs', 4, 0],
['dcj', 'cdh', 1, 0],
['par', 'fla', 3, 1],
['nye', 'dcj', 4, 0],
['van', 'seo', 3, 1],
['tor', 'phi', 1, 3],
['val', 'atl', 3, 2],
['bos', 'hzs', 2, 3],
['gzc', 'sfs', 0, 4],
['cdh', 'shd', 1, 3],
['ldn', 'phi', 2, 1],
['van', 'hou', 3, 1],
['dal', 'tor', 4, 0],
['gla', 'gzc', 4, 0],
['dal', 'par', 2, 1],
['atl', 'dcj', 3, 1],
['nye', 'fla', 4, 0],
['val', 'gla', 1, 2],

//['tm1', 'tm2', "-", "-"],
]

let teams = [
['bos', 1400, 'Boston Uprising'], 
['dal', 1400, 'Dallas Fuel'], 
['fla', 1400, 'Florida Mayhem'], 
['hou', 1400, 'Houston Outlaws'], 
['ldn', 1400, 'London Spitfire'], 
['gla', 1400, 'Los Angeles Gladiators'], 
['val', 1400, 'Los Angeles Valiant'], 
['nye', 1400, 'New York Excelsior'], 
['phi', 1400, 'Philadelphia Fusion'], 
['sfs', 1400, 'San Francisco Shock'], 
['seo', 1400, 'Seoul Dynasty'], 
['shd', 1400, 'Shanghai Dragons'], 
['hzs', 1400, 'Hangzhou Spark'], 
['tor', 1400, 'Toronto Defiant'], 
['atl', 1400, 'Atlanta Reign'], 
['cdh', 1400, 'Chengdu Hunters'], 
['gzc', 1400, 'Guangzhou Charge'], 
['par', 1400, 'Paris Eternal'], 
['dcj', 1400, 'Washington Justice'], 
['van', 1400, 'Vancouver Titans']
]

let currentGame = 1
let expectedPoints
let winBased
let eloLoaded = false
let gamesShown = false
let successRate = 0
let gamesCompleted = 0
let kInput

function calculateExpected(team1, team2){
	let Qa = Math.pow(10, team1 / 400)
	let Qb = Math.pow(10, team2 / 400)
	return Qa / (Qa + Qb)
}

function calculateELO(team1, team2, actualPoints, k) {
//spits out Team1's ELO

	expectedPoints = calculateExpected(team1, team2);
	if (Number.isNaN(actualPoints) === true){
		return team1
	}
	return team1 + (k * (actualPoints - expectedPoints));
}

function lookupTeamELO(team) {
	for (let i = 0; i < teams.length; i++){
		if (teams[i][0] === team){
			return teams[i][1];
		}
	}
}

function setTeamELO(team, ELO) {
	for (let i = 0; i < teams.length; i++){
		if (teams[i][0] === team){
			teams[i][1] = ELO;
			break;
		}
	}
}

function lookupTeamName(team){
	for (let i = 0; i < teams.length; i++){
		if (teams[i][0] === team){
			return teams[i][2]
		}
    }
}

function cycleGames(stageCycle, weekCycle, dayCycle, gameCycle, season, stage, week, day, gameInDay, gameNumArray) {
    if (gameInDay > gameCycle) {
        gameInDay = 1
        day++
    }

    if (day > dayCycle) {
        day = 1
        week++
    }

    if (week > weekCycle) {
        week = 1
        stage++
    }

    if (stage > stageCycle) {
        stage = 1
        season++
    }

    games[gameNumArray][11] = season
    games[gameNumArray][12] = stage
    games[gameNumArray][13] = week
    games[gameNumArray][14] = day
    games[gameNumArray][15] = gameInDay

}

function calcGame(gameNum) {

    gamesCompleted++

    //[team1Name, team2Name, team1Points, team2Points, team1ELO, team2ELO, team1ELONew, team2ELONew, expectedPercent1, expectedPercent2, kValue, season, stage, week, day]
    gameNumArray = gameNum - 1

    if (gameNum == 276) {
        console.log("End of season! Normalizing values...")
        for (let i = 0; i < teams.length; i++) {
            teams[i][1] = ((teams[i][1] - 1400) * 0.5) + 1400
        }

    }

    let team1Name = games[gameNumArray][0];
    let team2Name = games[gameNumArray][1];
    let team1Points = games[gameNumArray][2];
    let team2Points = games[gameNumArray][3];
    let team1ELO = lookupTeamELO(team1Name);
    let team2ELO = lookupTeamELO(team2Name);
    let kDefault = kInput;



    games[gameNumArray][4] = team1ELO;
    games[gameNumArray][5] = team2ELO;





    //Game behaviour


    //set the identifier variables
    let season
    let stage
    let week
    let day
    let gameInDay

    if (gameNum === 1) {
        season = 2018
        stage = 0
        week = 1
        day = 1
        gameInDay = 0
    } else {
        season = games[gameNumArray - 1][11]
        stage = games[gameNumArray - 1][12]
        week = games[gameNumArray - 1][13]
        day = games[gameNumArray - 1][14]
        gameInDay = games[gameNumArray - 1][15]


    }

    //set the kValues for different types of games

    let kPreseason = kDefault * 0.75
    let kStagePlayoffs = kDefault * 1.25
    let kSeasonPlayoffs = kDefault * 1.5
    let kGrandFinals = kDefault * 2

    //advance to the next game
    gameInDay++


    
    //2018 (inaugural) season

    if (season === 2018) {




        //cycle the values depending on where we are

        if (stage === 5) {

            //season playoffs & grand finals


            //season playoffs
            if (week === 1) {
                cycleGames(5, 3, 3, 2, season, stage, week, day, gameInDay, gameNumArray);
            } else if (week === 2) {
                if (day === 1) {
                    cycleGames(5, 3, 3, 2, season, stage, week, day, gameInDay, gameNumArray);
                } else {
                    cycleGames(5, 3, 3, 1, season, stage, week, day, gameInDay, gameNumArray);
                }
            }
            //grand finals
            else if (week === 3) {
                cycleGames(5, 3, 2, 1, season, stage, week, day, gameInDay, gameNumArray);
            }

        } else if (stage === 0) {

            //preseason
            cycleGames(5, 1, 4, 3, season, stage, week, day, gameInDay, gameNumArray);

        } else if (week === 6) {

            //stage playoffs
            if (stage === 1 || stage === 2) {
                cycleGames(5, 6, 1, 2, season, stage, week, day, gameInDay, gameNumArray);
            }

            if (stage === 3 || stage === 4) {
                cycleGames(5, 6, 1, 3, season, stage, week, day, gameInDay, gameNumArray);
            }

        } else {

            //normal play
            cycleGames(5, 6, 4, 3, season, stage, week, day, gameInDay, gameNumArray);
        }




        //update the current values after cycleGames
        season = games[gameNumArray][11]
        stage = games[gameNumArray][12]
        week = games[gameNumArray][13]
        day = games[gameNumArray][14]
        gameInDay = games[gameNumArray][15]



        //set k
        if (stage === 5) {

            //season playoffs & grand finals

            if (week === 3) {
                //grand finals
                k = kGrandFinals
            }
    
            else {
                //season playoffs
                k = kSeasonPlayoffs
            }

        } else if (stage === 0) {

            //preseason
            k = kPreseason

        } else if (week === 6) {

            //stage playoffs
            k = kStagePlayoffs

        } else {

            //normal play
            k = kDefault
        }
    }



    //2019 season

    let season2019Schedule = [
    [[3, 4, 5, 4], [3, 4, 5, 4], [3, 5, 4, 4], [3, 2, 5, 4], [4, 4], [2, 2, 2, 1]],
    [[3, 5, 4, 4], [4, 3, 5, 4], [4, 3, 5, 4], [4, 4], [2, 4, 4, 4], [2, 2, 2, 1]],
	[[3, 4, 5, 4], [3, 4, 5, 4], [3, 4, 5, 4], [2, 3, 5, 4], [4, 4], [2, 2, 1, 2]],
    ]

    if (season === 2019) {

        k = kDefault
        cycleGames(4, season2019Schedule[stage - 1].length, season2019Schedule[stage - 1][week - 1].length, season2019Schedule[stage - 1][week - 1][day - 1], season, stage, week, day, gameInDay, gameNumArray);


        //update the current values after cycleGames
        season = games[gameNumArray][11]
        stage = games[gameNumArray][12]
        week = games[gameNumArray][13]
        day = games[gameNumArray][14]
        gameInDay = games[gameNumArray][15]


        //set k
        if (week === 6) {
            //stage playoffs
            k = kStagePlayoffs
        }

    }


    //Change values to readable strings

    //update values
    season = games[gameNumArray][11];
    stage = games[gameNumArray][12];
    week = games[gameNumArray][13];
    day = games[gameNumArray][14];
    gameInDay = games[gameNumArray][15];

    //if (season === 2018) {
    //    season = "Inaugural (2018)"
    // }

    if (stage === 0) {
        stage = "Preseason";
        week = "";
    } else if (stage === 5) {
		if (week === 3){
			stage = "Grand Finals"
		} else {
			stage = "Playoffs"
		}
    } else {
       //stage = "Stage " + stage;
    }

    if (week === 6) {
        week = "Playoffs";
    } else {
        //week = "Week " + week;
    }

    //day = "Day " + day;
    //gameInDay = "Game " + gameInDay;

    //set values back
    games[gameNumArray][16] = season
    games[gameNumArray][17] = stage
    games[gameNumArray][18] = week
    games[gameNumArray][19] = day
    games[gameNumArray][20] = gameInDay





	
	games[gameNumArray][10] = k;

	console.log('calcGame debugging');
	console.log('-------------------------------');
	
	console.log('gameNum = ' + gameNum);
	console.log('team1Name = ' + team1Name);
	console.log('team2Name = ' + team2Name);
	console.log('team1Points = ' + team1Points);
	console.log('team2Points = ' + team2Points);
	console.log('team1ELO = ' + team1ELO);
	console.log('team2ELO = ' + team2ELO);
	console.log('k = ' + k);


	
	
	if (team1Points + team2Points < 4){
		let tiedPoints = 4 - (team1Points + team2Points);
		team1Points = team1Points + (tiedPoints / 2);
		team2Points = team2Points + (tiedPoints / 2);
	}
	
	let team1WinLoss = team1Points / (team1Points + team2Points);
	
	if (winBased === false){
		if (team1Points === "-"|| team2Points === "-"){
			games[gameNumArray][2] = "-"
			games[gameNumArray][3] = "-"
			gamesCompleted--
		}
	} else {
		if (team1Points === "-" || team2Points === "-"){
			games[gameNumArray][2] = "-"
			games[gameNumArray][3] = "-"
			gamesCompleted--
		} else if (team1Points > team2Points){
			team1WinLoss = 1
		} else if (team1Points < team2Points){
			team1WinLoss = 0
		}
	}
	
	console.log('team1WinLoss = ' + team1WinLoss);
	
	let team2WinLoss = 1 - team1WinLoss;
	console.log('team2WinLoss = ' + team2WinLoss);
	
	let team1ELONew = calculateELO(team1ELO, team2ELO, team1WinLoss, k);
	games[gameNumArray][8] = expectedPoints;
	let team2ELONew = calculateELO(team2ELO, team1ELO, team2WinLoss, k);
	games[gameNumArray][9] = expectedPoints;
	
	console.log('team1ELONew = ' + team1ELONew);
	console.log('team2ELONew = ' + team2ELONew);
	
	setTeamELO(team1Name, team1ELONew);
	setTeamELO(team2Name, team2ELONew);
	
	console.log('team1ELO set to ' + lookupTeamELO(team1Name));
	console.log('team2ELO set to ' + lookupTeamELO(team2Name));
	
	console.log(games[gameNumArray]);
	console.log('-------------------------------');
	
	games[gameNumArray][6] = team1ELONew;
	games[gameNumArray][7] = team2ELONew;
	
	if (team1Points > team2Points){
		
		successRate = successRate + games[gameNumArray][8]
		
	} else if (team1Points < team2Points){
		
		successRate = successRate + games[gameNumArray][9]
		
	}
	
	
}



function loadELO(){
	
	//check if the user wants win based ranking
	winBased = document.getElementById('winBased').checked;
	kInput = document.getElementById('kInput').value;
	successRateObj = document.getElementById('successRate');
	
	if (eloLoaded === false){
		eloLoaded = true;
		document.getElementById('eloScoreboxContainer').style.display = "block";
		
	} else {
		let scoreBox = document.getElementById('eloScorebox')
		for (let i = 0; i < teams.length; i++){
			let name = document.getElementById(teams[i][0] + "Name");
			let score = document.getElementById(teams[i][0] + "Score");
			scoreBox.removeChild(name);
			scoreBox.removeChild(score);
			
			teams[i][1] = 1400;
		}
	}
	
	currentGame = 1
	successRate = 0
	gamesCompleted = 0
	
	for (currentGame; currentGame <= games.length; currentGame++){
		calcGame(currentGame);
		console.log('currentGame = ' + currentGame);
	}
	
	successRate = successRate / gamesCompleted;
	
	console.log('successRate = ' + successRate);
	
	successRate = Math.round(successRate * 10000) / 100
	
	successRateObj.innerHTML = `Sum of Winning Precentages: ${successRate}%`
	
	teams.sort(
	function(a, b){
		return b[1] - a[1];
	});
	
	console.log(teams);

	//getting the container for it all
	let box = document.getElementById('eloScorebox');
	
	for (let i = 0; i < teams.length; i++){
	
		let name = teams[i][0]
		let score = Math.round(teams[i][1])
		let fullname = teams[i][2]
		
		//name div
		let nameDiv = document.createElement('div');
		nameDiv.setAttribute('class', 'eloTeam ' + name);
		nameDiv.setAttribute('id', name + 'Name');
		box.appendChild(nameDiv);
		document.getElementById(name + 'Name').innerHTML = fullname;
		
		//score div
		let scoreDiv = document.createElement('div');
		scoreDiv.setAttribute('class', 'teamScore');
		scoreDiv.setAttribute('id', name + 'Score');
		box.appendChild(scoreDiv);
		document.getElementById(name + 'Score').innerHTML = score;
		
	
	}
		
	document.getElementById('OWLshowGames').style = "display:inline-block;"
	
}

function doNextGame(){
	calcGame(currentGame + 1);
	currentGame++
}

function showGames(){
	
	loadELO();
	
	let table = document.getElementById('OWLTable');
	table.style = "display:table;"
	
	if (gamesShown === false){	
		gamesShown = true
		document.getElementById('eloFullGamesList').style.display = "flex";
	} else {
		for (let i = 0; i < games.length; i++){
			let row = document.getElementById('rowGame' + i);
			table.removeChild(row);
		}
	}
	
	
	
	for (let i = 0; i < games.length; i++){
		
		let row = document.createElement('tr');
		row.setAttribute('id', 'rowGame' + i);
		table.appendChild(row);

		let season = document.createElement('td');
		season.setAttribute('id', 'season' + i);
		row.appendChild(season);
        document.getElementById('season' + i).innerHTML = games[i][16];
		
		let stage = document.createElement('td');
		stage.setAttribute('id', 'stage' + i);
		row.appendChild(stage);
        document.getElementById('stage' + i).innerHTML = games[i][17];
		if (games[i][17] === "Grand Finals"){
			document.getElementById('stage' + i).colSpan = "2"
		} else {
			let week = document.createElement('td');
			week.setAttribute('id', 'week' + i);
			row.appendChild(week);
			document.getElementById('week' + i).innerHTML = games[i][18];
		}
		
		let day = document.createElement('td');
		day.setAttribute('id', 'day' + i);
		row.appendChild(day);
        document.getElementById('day' + i).innerHTML = games[i][19];
		
		let game = document.createElement('td');
		game.setAttribute('id', 'game' + i);
		row.appendChild(game);
        document.getElementById('game' + i).innerHTML = games[i][20];
		
		let ELOOld1 = document.createElement('td');
		ELOOld1.setAttribute('id', 'ELOOld1G' + i);
		row.appendChild(ELOOld1);
		document.getElementById('ELOOld1G' + i).innerHTML = Math.round(games[i][4]);
		
		let ELONew1 = document.createElement('td');
		ELONew1.setAttribute('id', 'ELONew1G' + i);
		row.appendChild(ELONew1);
		document.getElementById('ELONew1G' + i).innerHTML = Math.round(games[i][6]);
		
		let name1 = document.createElement('td');
		name1.setAttribute('id', 'name1G' + i);
		name1.setAttribute('class', games[i][0]);
		row.appendChild(name1);
		document.getElementById('name1G' + i).innerHTML = lookupTeamName(games[i][0]);
		
		let winCh1 = document.createElement('td');
		winCh1.setAttribute('id', 'winCh1G' + i);
		row.appendChild(winCh1);
		document.getElementById('winCh1G' + i).innerHTML = Math.round(games[i][8] * 100) + "%";
		
		let Score1 = document.createElement('th');
		Score1.setAttribute('id', 'Score1G' + i);
		row.appendChild(Score1);
		document.getElementById('Score1G' + i).innerHTML = games[i][2];
		
		let Score2 = document.createElement('th');
		Score2.setAttribute('id', 'Score2G' + i);
		row.appendChild(Score2);
		document.getElementById('Score2G' + i).innerHTML = games[i][3];
		
		let winCh2 = document.createElement('td');
		winCh2.setAttribute('id', 'winCh2G' + i);
		row.appendChild(winCh2);
		document.getElementById('winCh2G' + i).innerHTML = Math.round(games[i][9] * 100) + "%";
		
		let name2 = document.createElement('td');
		name2.setAttribute('id', 'name2G' + i);
		name2.setAttribute('class', games[i][1]);
		row.appendChild(name2);
		document.getElementById('name2G' + i).innerHTML = lookupTeamName(games[i][1]);
		
		let ELOOld2 = document.createElement('td');
		ELOOld2.setAttribute('id', 'ELOOld2G' + i);
		row.appendChild(ELOOld2);
		document.getElementById('ELOOld2G' + i).innerHTML = Math.round(games[i][5]);
		
		let ELONew2 = document.createElement('td');
		ELONew2.setAttribute('id', 'ELONew2G' + i);
		row.appendChild(ELONew2);
		document.getElementById('ELONew2G' + i).innerHTML = Math.round(games[i][7]);
		
		let pointXfer = document.createElement('td');
		pointXfer.setAttribute('id', 'pointXfer' + i);
		row.appendChild(pointXfer);
		document.getElementById('pointXfer' + i).innerHTML = Math.abs(Math.round(games[i][5] - games[i][7]));
		
		let kValue = document.createElement('td');
		kValue.setAttribute('id', 'kValue' + i);
		row.appendChild(kValue);
		document.getElementById('kValue' + i).innerHTML = games[i][10];
	}
}
