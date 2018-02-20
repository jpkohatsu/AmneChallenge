// Amne Coding Challenge ------------------------------------------------------------

// (1) write a function that grabs data from whatever they want you to grab it from

// (2) write a function to loop through the data that grabs K length array from it

// (3) write a function that then calculates the increase or decrease from the values

// Add 2 tracker variables; taking an array of length N from random dataset 

// ----------------------------------------------------------------------------------

let i = currentValue;
let j = nextValue;



let returnValue = 0;

for (let i = 0; i < X.length; i++) {
	if X[i] < X[i++] {
		returnValue++;
	}	else {
		returnValue--;
	}
}

function blah (n,k) {
	// get the data - let's call the data 'dataAarray'
	for (let i = 0; i < dataAarray.length; i++) {
		blah2 (dataAarray.slice(i, k))
	}
}



