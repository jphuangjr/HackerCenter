var Queue = function() {
  this.storage = [];

};

Queue.prototype.enqueue = function(value) {
  this.storage.push(value);
};

Queue.prototype.dequeue = function() {
   this.storage.shift(); 
};