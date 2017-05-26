
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