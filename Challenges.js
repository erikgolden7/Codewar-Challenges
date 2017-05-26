
// Problem #1

function findMultiples(int,limit){
	var count = 1,
		myarray = [],
		roundLimit = Math.floor(limit/int);
	for(var i = 0; i < roundLimit; i++){
		myarray.push(int * count);
		count++;
	}
	return myarray;
}
findMultiples(2, 24);

// Problem #2

function createArray(number){
	var newArray = [];
	
	for(var counter = 1; counter <= number; counter++){
		newArray.push(counter);
	}
	
	return newArray;
}

// Problem #3