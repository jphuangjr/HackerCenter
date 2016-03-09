var BinarySearchTree = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
	if (value < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if (this.right === null) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
	cb(this.value);
	if(this.left !== null){
		this.left.depthFirstLog(cb)
	}
	if(this.right !== null){
		this.right.depthFirstLog(cb)
	}
}

BinarySearchTree.prototype.breathFirstLog = function(cb){
	var queue = [];
	queue.push(this)
	for (var i = 0; i < queue.length; i++) {
		if (queue[i].left) {
			queue.push(queue[i].left);
		}
		if(queue[i].right) {
			queue.push(queue[i].right);
		}
	}
	for(var i=0; i<queue.length; i++){
		cb(queue[i].value)
	}
}

BinarySearchTree.prototype.contains = function(value) {
	var found = false;

	if (this.value === value) {
		found = true;
	} else if (value < this.value && this.left !== null) {
		found = this.left.contains(value);
	} else if (this.right !== null) {
		found = this.right.contains(value);
	}

	return found;
}

