//write a function that takes a string of text and returns true if the parentheses are balanced and false otherwise.
//
// Example:
//   balancedParens('(');  // false
//   balancedParens('()'); // true
//   balancedParens('(]'); // false
//   balancedParens(')(');  // false
//   balancedParens('([)]');  // false
//   balancedParens('([])');  // true

var balancedParens = function(string){
	var check = [];
	var library = {
		"[":"]",
		"(":")",
		"{":"}"
	}
	for(var i=0; i<string.length; i++){
		if(library[string[i]]){
			check.push(library[string[i]])
		} else if(string[i] === "]" || string[i] === ")" || string[i] === "}"){
			if(check.pop() !== string[i]){
				//console.log(false);
				return false;
			}
		}
	}
	//console.log(check.length === 0)
	return check.length === 0;
}
