//The Fibonacci Sequence is the series of numbers: 
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
//The next number is found by adding up the two numbers before it.


//Make a function that returns a array of the sequence of the nthFibonnaci number
//Ex. nthFibonnaci(5) => [0,1,1,2,3]

//**Hint**: Use Recursion

//** Recursive solution

var nthFibonacci = function (n) {
	// TODO: implement me!
	var counter = 0;
	var order = [0];
	var next = function(first, second){
		order.push(second)
		if(counter !== n){
			counter++
			next(second, second+first);
		}
	}
	next(0, 1)
	console.log(order[n]);
	return order[n];

};



//** Iterative solution

var nthFibonacci = function (n) {
    // TODO: Iterative solution
    var order = [0];
    var first = 0;
    var second = 1;

    for(var i=0; i<n; i++){
        order.push(second)
        var temp = first;
        first = second;
        second = temp+second
    }
    console.log(order[n]);
    return order[n];

};
