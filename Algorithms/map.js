//This function should take in a array and modify each result
//according to the callback

var forEach = function(collection, cb){
	if(Array.isArray(collection)){
		for(var i=0; i<collection.length; i++){
			cb(collection[i])
		}
	} else {
		for(var key in collection){
			cb(collection[key])
		}
	}
}

var map = function(array, callback){
	//TODO: Your code here
	var resultsArray = [];
	forEach(array, function(value){
		resultsArray.push(callback(value))
	})
}

//Eg. map([1,2,3,4], function(value){ return value + 2}) => return [3,4,5,6]
