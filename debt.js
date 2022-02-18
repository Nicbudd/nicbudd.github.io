var startDate = new Date();
startDate.setTime(1378828800000); //Sept 10 2013 12PM
var principal = 1;
var rate = 0.1;

function showMe(){
	loadPage();
	setInterval(updatePage, 1);
	document.getElementById("showMe").style.display = "none"
}

function convertToBig(x) {
  return x.toFixed(2);
}

function addZeroes(string){
	var stringLength = 8
	string = string + ""
	while (string.length < stringLength){
		string = string + "0"
	}
	string = string.slice(0, stringLength)
	return string
}

function conditionSmallNumber(string){
	var string = string + "";
	var splitString = string.split("e+");
	var num = addZeroes(splitString[0]);
	return "Or $" + num + "x10^" + splitString[1];
}

function conditionBigNumber(string){
	var moneyString = "Total Debt: $" + string.toLocaleString() + ".00";
	var splitString = moneyString.split(",");
	return splitString.join(",&#8203;");
}

function calculateInterest(day){
	var timeSince = day - startDate;
	var daysSince = timeSince / (86400 * 1000); // seconds per day times milliseconds per second
	return principal * ((1 + rate) ** daysSince);
}

function calculateDay(interest){
	var days = Math.log(interest / principal) / Math.log(1 + rate);
	days *= (86400 * 1000); 
	var day = new Date();
	day.setTime(days + startDate.getTime());
	
	return (day.getMonth() + 1) + "-" + day.getDate() + "-" + day.getFullYear();
}

function updatePage(){
	var dateNow = Date.now();
	var interest = calculateInterest(dateNow);
	document.getElementById('debtBigValue').innerHTML = conditionBigNumber(interest);
	document.getElementById('debtSmallValue').innerHTML = conditionSmallNumber(interest);
}

function loadPage(){
	
	var hidden = document.getElementsByClassName('hide');
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].style.display = 'block';
	}
	
	document.getElementById('dateOneDollar').innerHTML = "$1 : " + calculateDay(1);
	document.getElementById('dateTenDollar').innerHTML = "$10 : " + calculateDay(10);
	document.getElementById('dateHundredDollar').innerHTML = "$100 : " + calculateDay(100);
	document.getElementById('dateThousandDollar').innerHTML = "$1,000 : " + calculateDay(1000);
	document.getElementById('dateHundredThousand').innerHTML = "$100,000 : " + calculateDay(100000);
	document.getElementById('dateMillion').innerHTML = "$1,000,000 (One Million Dollars) : " + calculateDay(1000000);
	document.getElementById('dateBillion').innerHTML = "$1,000,000,000 (One Billion Dollars): " + calculateDay(1000000000);
	document.getElementById('dateTrillion').innerHTML = "$1,000,000,000,000 (One Trillion Dollars): " + calculateDay(1000000000000);
	document.getElementById('dateUSDebt').innerHTML = "$22,560,000,000,000 (the United States national debt (as of Sept. 14 2019)): " + calculateDay(22560000000000);
	document.getElementById('dateQuadrillion').innerHTML = "$1,000,000,000,000,000 (One Quadrillion Dollars): " + calculateDay(1000000000000000);
	document.getElementById('dateRubiksThree').innerHTML = "$4.3 x 10^19 (# of possible combinations of a 3x3 Rubik's Cube): " + calculateDay(4.3 * (10 ** 19));
	document.getElementById('dateAtomsSand').innerHTML = "$5 x 10^19 (# of atoms in a grain of sand): " + calculateDay(5 * (10 ** 19));
	document.getElementById('dateAtomsHuman').innerHTML = "$7 x 10^27 (# of atoms in a human body): " + calculateDay(7 * (10 ** 27));
	document.getElementById('dateButterSun').innerHTML = "$9.7 x 10^33 (calories in a ball of butter the size of the sun): " + calculateDay(9.7 * (10 ** 33));
	document.getElementById('dateRubiksFour').innerHTML = "$7.4 x 10^45 (# of possible combinations of a 4x4 Rubik's Cube): " + calculateDay(7.4 * (10 ** 45));
	document.getElementById('dateAtomsEarth').innerHTML = "$1.3 x 10^50 (# of atoms on earth): " + calculateDay(1.3 * (10 ** 50));
	document.getElementById('dateAtomsSun').innerHTML = "$9.1 x 10^56 (# of atoms in sun): " + calculateDay(9.1 * (10 ** 56));
	document.getElementById('dateButterGalaxy').innerHTML = "$1.2 x 10^60 (calories in a cube of butter as wide as the Milky Way Galaxy): " + calculateDay(1.2 * (10 ** 60));
	document.getElementById('dateRubiksFive').innerHTML = "$2.8 x 10^74 (# of possible combinations of a 5x5 Rubik's Cube): " + calculateDay(2.8 * (10 ** 74));
	document.getElementById('dateAtomsUniverse').innerHTML = "$1 x 10^80 (# of atoms in universe): " + calculateDay(1 * (10 ** 80));
	document.getElementById('dateButterAtoms').innerHTML = "$6.9 x 10^82 (calories in universe if every atom was replaced with a stick of butter): " + calculateDay(6.9 * (10 ** 82));
	document.getElementById('dateButterUniverse').innerHTML = "$2.8 x 10^87 (calories in ball of butter the size of the observable universe): " + calculateDay(2.8 * (10 ** 87));
	document.getElementById('dateGoogol').innerHTML = "$1 x 10^100 (One Googol, end of most traditional calculators' ability to calculate): " + calculateDay(1 * (10 ** 100));
	document.getElementById('dateRubiksSix').innerHTML = "$1.6 x 10^116 (# of possible combinations of a 6x6 Rubik's Cube): " + calculateDay(1.6 * (10 ** 116));
	document.getElementById('dateAtomsUniverception').innerHTML = "$1 x 10^160 (# of combined atoms in universe if each atom had a universe inside of it): " + calculateDay(1 * (10 ** 160));
	document.getElementById('dateRubiksSeven').innerHTML = "$2.0 x 10^160 (# of possible combinations of a 7x7 Rubik's Cube): " + calculateDay(2.0 * (10 ** 160));
}