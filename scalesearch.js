let C = {flatName: "C", sharpName: "C", distFromC: 0};
let Db = {flatName: "Db", sharpName: "C#", distFromC: 1};
let D = {flatName: "D", sharpName: "D", distFromC: 2};
let Eb = {flatName: "Eb", sharpName: "D#", distFromC: 3};
let E = {flatName: "E", sharpName: "E", distFromC: 4};
let F = {flatName: "F", sharpName: "F", distFromC: 5};
let Gb = {flatName: "Gb", sharpName: "F#", distFromC: 6};
let G = {flatName: "G", sharpName: "G", distFromC: 7};
let Ab = {flatName: "Ab", sharpName: "G#", distFromC: 8};
let A = {flatName: "A", sharpName: "A", distFromC: 9};
let Bb = {flatName: "Bb", sharpName: "A#", distFromC: 10};
let B = {flatName: "B", sharpName: "B", distFromC: 11};
	
let chromatic = [C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B];
	
let M1 = {semi: 0};
let s1 = {semi: 1};
let b2 = {semi: 1};
let M2 = {semi: 2};
let s2 = {semi: 3};
let b3 = {semi: 3};
let M3 = {semi: 4};
let M4 = {semi: 5};
let s4 = {semi: 6};
let b5 = {semi: 6};
let M5 = {semi: 7};
let s5 = {semi: 8};
let b6 = {semi: 8};
let M6 = {semi: 9};
let s6 = {semi: 10};
let b7 = {semi: 10};
let M7 = {semi: 11};
	
let majorScale = [M1, M2, M3, M4, M5, M6, M7];
let naturalMinorScale = [M1, M2, b3, M4, M5, b6, b7];
	
let scales = [majorScale, naturalMinorScale];

function buildScale(rootNote, scaleBase){
	//build a scale
	let resultScale = []
	
	for (let i = 0; i < scaleBase.length; i++){
		resultScale[i] = (rootNote.distFromC + scaleBase[i].semi) % 12
		resultScale[i] = chromatic[resultScale[i]]
	}
	return resultScale
}


function scaleFinderLoad(){
	
	console.log(buildScale(G, majorScale));
	
	
	let resultBox = document.getElementById('scaleResultBox')
	for (let i = 0; i < 24; i++){
		let scaleBox = document.createElement('div')
		scaleBox.setAttribute('class', 'scaleBox');
		scaleBox.setAttribute('id', 'scaleBox' + i);
		scaleBox.innerHTML = "3"
		resultBox.appendChild(scaleBox)
	}
	
	
	
}