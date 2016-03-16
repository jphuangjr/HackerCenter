//Create an Array method that will return whether or not the array is a subset of the input array.
//Assume the values in the array only hold Strings and Ints

Array.prototype.isSubsetOf = function (arr) {
	//TODO: Insert Code Here
	var scope = this;
	var sub = true;
	for(var i=0; i<scope.length; i++){
		if(arr.indexOf(scope[i]) === -1){
			sub = false
		} else {
			arr.splice(arr.indexOf(scope[i]), 1)
		}
	}
	return sub
}
