/*
method of cube state storage:
were gonna use the speffz lettering scheme to denote where the pieces are
*/

/*
var cubeState = {corners:[A, B, C, D, U, V, W, X], edges:[]}
var lettersToNumbers[
[A, 0],
[B, 1],
[C, 2],
[D, 3],
[E, 4],
[F, 5],
[G, 6],
[H, 7],
[I, 8],
[J, 9],
[K, 10],
[L, 11],
[M, 12],
[N, 13],
[O, 14],
[P, 15],
[Q, 16],
[R, 17],
[S, 18],
[T, 19],
[U, 20],
[V, 21],
[W, 22],
[X, 23],
]
*/

/*
var solvedState = {corners:[UBL, UBR, UFR, UFL, DFL, DFR, DBR, DBL], edges:[UB, UR, UF, UL, LB, BL, BR, FL, FR, DF, DR, DB, DL], centers:[U, F, R, B, L, D]}
var UBL = {u}
*/

var W = "W"
var G = "G"
var R = "R"
var B = "B"
var O = "O"
var Y = "Y"

//cube is held with green in front and white on top.
//pieces are read as if you're looking at that face from the front
//white: x'
//orange, red, blue: y turns
//yellow: x

var solvedState = 
[
[W, W, W],
[W, W, W],
[W, W, W]
],
[
[G, G, G],
[G, G, G],
[G, G, G]
],
[
[R, R, R],
[R, R, R],
[R, R, R]
],
[
[B, B, B],
[B, B, B],
[B, B, B]
],
[
[O, O, O],
[O, O, O],
[O, O, O]
],
[
[Y, Y, Y],
[Y, Y, Y],
[Y, Y, Y]
],

function move(move, cubeState){
	
	//split each move (U') up into the move type (U) and the move modifier (')
	var splitMove = move.split("");
	
	//how many times to repeat each move based on modifier
	var moveRep = 1;
	switch(splitMove[1]){
		case "'":
			moveRep = 3;
			break;
		case "2":
			moveRep = 2;
			break;
	};
	
	switch(splitMove[0]){
		case "U]
		\
	}
	
	
}
