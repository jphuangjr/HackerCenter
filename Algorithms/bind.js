//Create the native bind() method.


// Example 1:
//
// var programmer = {
//    status: 'sleepy',
//    getStatus: function(){
//      alert(this.status);
//   }
// }
// var whaddup = bind(programmer.rest, programmer);
// whaddup(); // alerts 'sleepy'
// whaddup = bind(programmer, {status: 'hungry'});
// whaddup(); // alerts 'hungry'
//
// example 2:
//
// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true

var bind = function() {
	// TODO: Your Solution
};