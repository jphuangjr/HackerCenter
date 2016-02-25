// Return all values of an array that pass a truth test.
var forEach = function(collection, callback){
	//TODO: Your Code Here
	if(Array.isArray(collection)){
		for(var i=0; i<collection.length; i++){
			callback(collection[i])
		}
	} else {
		for(var key in collection){
			callback(collection[key])
		}
	}
}

var filter = function(collection, test) {
	//TODO: Your Code Here
	var newArray = [];
	forEach(collection, function(value){
		if(test(value)){
			newArray.push(value)
		}
	})
	return newArray;
};

// ex.
// test = function(value){
// 	if(value > 3){
// 		return true
// 	}
// }
//filter([1,2,3,4,5], test) => [4,5]