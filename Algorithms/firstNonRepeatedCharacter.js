  //Given an arbitrary input string, return the first nonrepeated character in
  //the string. For example:
  //
  //  firstNonRepeatedCharacter('ABA'); // => 'B'
  //  firstNonRepeatedCharacter('AACBDB'); // => 'C'

  var firstNonRepeatedCharacter = function(String) {
    var string = String.split("");
	  // TODO: your code here
    var library = {};
    for(var i=0; i<string.length; i++){
      library[string[i]] = library[string[i]] || 0;
      library[string[i]] += 1;
      console.log(library)
    }

    for(var j=0; j<string.length; j++){
      if(library[string[j]] === 1){
        return string[j]
      }
    }
  };

