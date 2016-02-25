//Given an array and the target value, find the index of the target
// in the array. If value is not in the array, return -1

var indexOf = function(array, target){
	//TODO: Your Code Here
	for(var i=0; i<array.length; i++){
		if(array[i] === target){
			return i;
		} else if(i === array.length -1){
			return -1
		}
	}
}

// ex.
// var array = [1,2,3,4,5]
// indexOf(array, 6) => return -1
// indexOf(array, 5) => return 4