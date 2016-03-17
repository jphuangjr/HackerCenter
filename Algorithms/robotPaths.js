//Imagine a robot sitting on the upper left hand corner of an NxN grid.
// The robot can only move in 4 directions: left, right, up, and down but cannot visit the same place twice.
// How many possible paths are there for the robot?


var makeBoard = function(n) {
	var board = [];
	for (var i = 0; i < n; i++) {
		board.push([]);
		for (var j = 0; j < n; j++) {
			board[i].push(false);
		}
	}
	board.togglePiece = function(i, j) {
		this[i][j] = !this[i][j];
	}
	board.hasBeenVisited = function(i, j) {
		return !!this[i][j];
	}
	return board;
};

var robotPaths = function(n, board, i, j) {
	//TODO: Your solution here
}