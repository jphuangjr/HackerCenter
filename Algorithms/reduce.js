//Reduce boils down a list of values into a single value.
//accumulator is the initial state of the reduction, and each successive step of it should be returned by iterator.
//The iterator is passed four arguments: the accumulator, then the value and index (or key) of the iteration,
//and finally a reference to the entire list.
//If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list.
// The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
//
// Example:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
//
//   var identity = reduce([5], function(total, number){
//     return total + number * number;
//   }); // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.

var reduce = function(collection, iterator, accumulator) {

};