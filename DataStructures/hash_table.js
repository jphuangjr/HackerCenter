var hashingAlgo = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
  return limitedArray;
};


var Hashtable = function(){
	this.limit = 8;
	this.storage = LimitedArray(this._limit);
}

HashTable.prototype.insert = function(k, v) {
  var index = hashingAlgo(k, this._limit);
  var bucket = this.storage.get(index) || [];
  for(var i=0; i < bucket.length; i++){
  	var tuple = bucket[i]
  	if(tuple[0] === k){
  		tuple[1] = v;
  		return tuple[1];
  	}
  }
  bucket.push([k,v])
  this.storage.set(index, bucket)

};

HashTable.prototype.retrieve = function(k) {
  var index = hashingAlgo(k, this._limit);
  var bucket = this.storage.get(index) || [];
  for(var i=0; i < bucket.length; i++){
  	var tuple = bucket[i]
  	if(tuple[0] === k){
  		return tuple[1];
  	}
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = hashingAlgo(k, this._limit);
  var bucket = this.storage.get(index) || [];
  for(var i=0; i < bucket.length; i++){
  	var tuple = bucket[i]
  	if(tuple[0] === k){
  		return bucket.splice(i,1)
  	}
  }
};
