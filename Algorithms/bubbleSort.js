

// Bubble sort  works by starting at the first element of an array and
// comparing it to the second element; if the first element is greater than the
// second element, it swaps the two. It then compares the second to the third,
// and the third to the fourth, and so on; in this way, the largest values
// "bubble" to the end of the array. Once it gets to the end of the array, it
// starts over and repeats the process until the array is sorted numerically.

//HERE is a GIF of bubble sort: https://commons.wikimedia.org/wiki/File:Bubble-sort-example-300px.gif

//Time Complexity:

// Extra credit: Optimize your solution so that during any given pass, if no elements are
// swapped we can assume the list is sorted and can exit the function early.
// After this optimization, what is the time complexity of your algorithm?
//
// More Extra Credit: Do you need to consider every element every time you iterate
// through the array?  Again: Has the time complexity of your algorithm changed?

//Naive Approach
var bubbleSort = function(array) {
	var array2 = array;
	var sorted = false;
	do{
		sorted = true;
		for(var i=0; i<array2.length-1; i++){
			if(array2[i] > array2[i+1]){
				var temp = array2[i];
				array2[i] = array2[i+1]
				array2[i+1] = temp;
				sorted = false;
			}
		}

	} while(sorted === false)
	if(sorted === true){
		return array2;
	}
};

//Better Version
var bubbleSort2 = function(array) {
	// Your code here.
	var x = array;
	var notSorted;
	//len keeps track of what still needs to be checked
	var len = x.length
	do{
		notSorted = false;
		for (i = 0; i < len; i++) {
			if (x[i] > x[i+1]) {
				temp = x[i + 1];
				x[i + 1] = x[i];
				x[i] = temp;
				notSorted = true;
			}
		}
		len -=1;
	}
	while(notSorted);
	if(notSorted === false){
		console.log(x)
		return x;
	}
};

//Time Complexity: O(n^2)
