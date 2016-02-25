//forEach : Iterates through each value in the collection 
// 			and call the callback on that value

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

// Eg.
// forEach([1,2,3,4,5], function(value){console.log(value)}) => 
// 1
// 2
// 3
// 4
// 5