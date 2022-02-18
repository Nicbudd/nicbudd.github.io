//this is just some personal stuff I made to help me with a very specific thing

var hours = [
[10, 12],
[9, 12],
[6, 8],
[10, 12],
[4.5, 6.5],
[10, 12],
[4.5, 6.5],
[10, 12],
[2, 8],
]

function hoursLoad() {
	var totalHours = [0]
	for (let i = 0; i < hours.length; i++) {
		totalHours.push((hours[i][1] - hours[i][0]) + totalHours[i])
	}
	totalHours.shift();
	console.log(totalHours);
}