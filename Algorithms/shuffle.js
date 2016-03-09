//Shuffle randomized the order of the values inside an array

var shuffle = function(array){
	for(var i =0; i<array.length; i++){
		//Math.floor(Math.random()*(max-min+1)+min)
		var index = Math.floor(Math.random()*(array.length-1-i+1)+i);
		var temp = array[index];
		array[index] = array[i];
		array[i] = temp;
	}
	console.log(array)
	return array;
}

shuffle([1,2,3,4,5,6,9])

//Time Complexity: O(n)
