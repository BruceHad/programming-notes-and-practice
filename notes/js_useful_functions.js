// Assertions 
// 
// http://eloquentjavascript.net/08_error.html
// 
// Assertions provide a compact way of 
// enforcing expected requirements, and
// throwing a helpful error when that fails.

function AssertionFailed(message) {
	this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);
function assert(test, message) {
	if (!test)
		throw new AssertionFailed(message);
}

// Example 
function lastElement(array) {
	assert(array.length > 0, "empty array in lastElement");
	return array[array.length - 1];
}