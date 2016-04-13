var Graph = function(){
	this.nodes = {};
}

Graph.prototype.addNode = function(node){
	this.nodes[node] = this.nodes[node] || { edges: {} };
}

Graph.prototype.contains = function(node){
	if(this.nodes[node]){
		return true;
	}
}

Graph.prototype.addEdge = function(fromNode, toNode){
	if(!this.contains(fromNode) || !this.contains(toNode)){
		return;
	}
	this.nodes[fromNode].edges[toNode] = toNode;
	this.nodes[toNode].edges[fromNode] = fromNode;
}

Graph.prototype.removeEdge  = function(fromNode, toNode){
	if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
}

Graph.prototype.removeNode = function(node) {

  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this.nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this.nodes[node];
  }
 };

 Graph.prototype.hasEdge = function(fromNode, toNode) {

	  if (!this.contains(fromNode)) {
	    return false;
	  }
	  return !!this.nodes[fromNode].edges[toNode];
  };
