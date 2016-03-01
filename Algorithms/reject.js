  // Return all elements of an array that don't pass a truth test.
  //Extra Credit: Re-use filter for this

  var library = require("./library.js") //I saved a couple of reusable function in library.js.
  // Dont worry about how this works right now, but once you require it like this, you can access it through dot notation.
  //eg. function forEach is accessible as library.forEach

  var reject = function(collection, test) {
    return library.filter(collection, function(value){
      return !test(value);
    })
  };
