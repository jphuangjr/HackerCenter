//A palindrome is a word, phrase, number, or other sequence of
// characters which reads the same backward or forward. 
//Ex. aha, deified. 

//Given a string, find the longest palindrone in the string. 
//eg. "he stressed desserts." "stressed desserts" is the longest palidrome
//Extra Credit: Try to do this recursively

var longestPalindrome = function (string) {
	var str = string.split("");

	var longestPal = {left : 0, right: 0, length: 0};
	var allPals = [];
	var currentPal = {left : 0, right: 0, length: 0};


	for(var i=0; i<str.length; i++){
		var currentIndex = i;

		var pCheck = function(leftIndex, rightIndex){
			if(str[leftIndex] === str[rightIndex]){
				currentPal.left = leftIndex;
				currentPal.right = rightIndex;
				currentPal.length += 1;
				pCheck(leftIndex - 1, rightIndex + 1)
			} else {
				if(currentPal.length > longestPal.length){
					longestPal = {left: currentPal.left, right: currentPal.right, length: currentPal.length}
				}
				currentPal = {left : 0, right: 0, length: 0};
			}

		}
		pCheck(currentIndex - 1, currentIndex + 1);


	}
	return string.slice(longestPal.left, longestPal.right+1)
};
