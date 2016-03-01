module.exports = {
	forEach: function(collection, callback){
		if(Array.isArray(collection)){
			for(var i=0; i<collection.length; i++){
				callback(collection[i])
			}
		} else {
			for(var key in collection){
				callback(collection[key])
			}
		}
	},
	filter: function(collection, test) {
		//TODO: Your Code Here
		var newArray = [];
		module.exports.forEach(collection, function(value){
			if(test(value)){
				newArray.push(value)
			}
		})
		console.log(newArray)
		return newArray;
	}
}
