$(document).ready(function(){
/* NAMED DATA TYPES AND OTHER
dong
teamNames
scores
acronyms

WORDS FOR PENIS
wang
dickcheney
weiner
sausage
schlong
shaft
johnson
dingdong
dingaling

*/

var teamNames = ["Florida Mayhem",	"San Francisco Shock",	"Los Angeles Valiant",	"Seoul Dynasty",	"Shanghai Dragons",	"Boston Uprising",	"New York Excelsior",	"Los Angeles Gladiators",	"London Spitfire",	"Dallas Fuel",	"Houston Outlaws",	"Philadelphia Fusion"];
var acronyms = ["fla", "sfs", "val", "seo", "shd", "bos", "nye", "gla", "ldn", "dal", "hou", "phi"];
var scores = [300, 400, 1500, 1600, 1799, 1800, -5, -4, 1500, 69, 1798, 1750];
scores.sort(function(a, b){return b - a});

$("body").append("<table id='elo-sorted'></table>");
for(var dong = 0; dong<teamNames.length;dong++){
	$("#elo-sorted").append(`<tr><th><div class="bubble ${acronyms[dong]}Class">${teamNames[dong]}</div></th><th><div class="bubble ${acronyms[dong]}Class">${scores[dong]}</div></th></tr>`);
}

});