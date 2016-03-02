var node = function(value){
	this.value = value;
	this.next = null;
}

var LinkedList = function(){
	this.head = null;
	this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
	var newNode = new node(value);
	if(this.head === null){
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
	}
};

LinkedList.prototype.removeHead = function(){
	this.head = this.head.next;
};


LinkedList.prototype.contains = function(value){
	var check = function(target){
		if(target === null){
			return false
		}
		else if(target.value === value){
			return true
		} else {
			check(target.next)
		}
	}
	check(this.head)
};