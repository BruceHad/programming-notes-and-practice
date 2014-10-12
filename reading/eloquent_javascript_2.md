## Values and Operators

6 basic types: Numbers, Strings, Booleans, Objects, Functions and Undefined.

Numbers can use 64 bits (2^64). Not all of these bits can be used for the number though, one is reserved for the sign and some more are reserved for the position of the decimal point. 

Numbers can be written:
	
	3
	5.98
	1.73e7
	
Calculations with integers are always precise. Calcs with fractions, not so much.

Special numeric values: Infinity, -Infinity and NaN
Other special values: null and undefined.

Numbers have a bunch of operators that can act on them such as +, -, * /, %

Strings have an operator to concatenate them +

There are also unary operators like - (negative) ! (not) and typeof.

And there is one ternary operator, the conditional operator that can be used a bit like and if/else.

	true ? 1 : 2
	-> 1
	!true ? 1 : 2
	-> 2
	
When an operation is applied to a value of the 'wrong' type, js will attempt to covert the value. This is called Type Coercion. It can result in some unexpected answers. Generally, when it goes wrong it will often end up with a NaN answer, so if you see that, check your types.

There are numerous comparison operators such as ==, > != etc. The triple === comparison suppresses type conversion so will only return true if the two sides are exactly alike. This is recommended.

OR (||) and AND logical operators will return a boolean value depending on the boolean conversion of the operands. e.g. true || false return false, while true || false return true.

When mixing with arithmetic operators, the logical operator take the lowest precedence.

When applying these, the left hand operator will be converted first. Depending on the result of that conversion, the operation will return the _original_ left hand value or the right hand value (note, not the boolean conversion).

This is a strange way of doing things, but comes in handy as it provides a simple way to give a fallback, default value.

	var user = null
	console.log(user || "default user")
	// → "default user"

e.g. if the user value is blank

## Functions

Functions can be defined in two ways, a variable declaration of a function declaration.

	var funcName = function(a,b){...}
	function funcName = function(a,b){...}
	
A small difference between the two is that the function declaration will be read first so can be called from anywhere in the code, but the variable declaration can only be called after the variable has been declared. The variable declaration is useful though, as it means a function can be passed around in the same way as other variables.

_Parameters_ are declared in the function signature and they catch _arguments_ when they are called. Parameters and variables created inside of a function (using the var declaration) are local to that function (they can't be seen from outside the function) unlike Global variables that are visible everywhere. 

Function can be created inside other functions, creating a nested set of scopes. Variables in the parent function are available to the nested function (unless a local variable with the same name has been declared). Lexical scoping.

JS doesn't validate the number of arguments passed to the function. Extra ones are ignored and missing ones are set to _undefined_. This lets us set up optional parameters. e.g. if(optionalParam === undefined){ optionalParam = default }

### Closure

	function wrapValue(n) {
		var localVar = n;
		return function(){ return localVar;};
	}
	
This practice of wrapping a local variable inside a function and returning that is known as _closure_. The function that wraps the variable is known as _a closure_. This creates a new scope so you can have multiple instances of localVar without affecting all the others.

A useful feature, it lets you create functions from other functions.

	function mult(factor){
		return function(number){
			return number * factor;
		}
	}
	
	var twoTimes = mult(2);
	var threeTimes = mult(3);
	threeTimes(5);
	-> 15

There are generally two types of functions, those that produce side affects (alert(), console.log()) and those that return a value (Math.sqrt()).

Pure functions produce no side effects, and don't rely on them either (e.g. don't require global vars or anything). Pure functions are easier to reason about, as they will always return the same data regardless of context. But programs often need to produce side-effects, or rely on them.

## Objects and Arrays

A collection of values can be stored in an array.

	var list = [2,5,7,1];
	list[2]
	-> 7
	
Values like strings can have properties such as myStr.length. More generally, objects can have properties, and a string is a special type of object.

Commonly use dot notation to access properties. This works only if the property name follows the same rule as a variable name (e.g. doesn't start with a number, no spaces etc). 

You can also access properties using bracket notation myStr[length]. In this case the property name within the brackets will be evaluated first, so you can use number and expressions. This is you generally access properties of an array.

	list[2]
	-> 7
	list[1+2]
	-> 1

Methods are the same as properties, but the name refers to a function.

	myStr.toUpperCase();

pop() and push() are two array methods used to extract and add items to the end of an array. Push() seems to return the number of items in the array after it's been added.

shift() and unshift() are array methods to extract and add items to the start of an array.

indexOf(something) returns the index of the first something it finds in the array, while lastIndexOf(something) does the same, but starts searching from the end.

slice(first,last) will return the elements of an array between first and last (including the first, but not the last). If last is not given, it will return all the remaining items. Strings also have a slice() method.

firstarray.concat(anotherarray) tacks one array onto another.
	
## Objects
	
Objects are arbitrary collections of properties (including methods). Objects can be created with curly bracket containing a comma separated list of name:value pairs.

	var myObject = {
		name1: "value1",
		name2: "value2"
	}

Again the property names should be valid variable names (unless they are surrounded by quotes).

_delete_ is a unary operator that deletes a property from an object.

	delete myObject.name1;

_in_ is an operator that returns true if an object has a property.

	"name1" in myObject /* note quotes */
	
in can be used to iterate over objects.

	var obj = {a:1, b:2, c:3};

	for (var prop in obj) {
	  console.log("o." + prop + " = " + obj[prop]);
	}

## On Mutability

Numbers, strings and Booleans are all immutable (you can't change them, though you can replace them and derive new values from them, which is similar). e.g 'cat' can't have the first letter changed to 'r', without creating a new string.

Objects are mutable. The properties they grasp can change and you can add new methods or properties to an object.

Immutable types like String can't be modified, so you can't add properties or methods to a String. I guess that's where prototypes come in.

## Arguments Object

In JS you are allowed to pass more or fewer arguments to a function than the number of parameters declared in the function sig. When the function is called a special variable named arguments is added to the scope of the function, that holds all the arguments passed to the function. 

The arguments object has a length property. Each argument can be accessed similar to accessing contents of an array: arguments[0] gives the first argument, but it doesn't have other array methods.

## The Global Objects

The global scope can also be approached as an object in JS. In browsers the global scope is stored in the window variable.

## Summary of Objects and Arrays
Objects provide ways to group values into a single grab bag of values. Most values in js have properites (the exception being null and undefined). Those values are accessed using dot notation or sometimes bracket (like arrays).

Methods are basically properties that happen to be functions. Methods of values usually operate on that value. e.g. string.toUpperCase().

Objects can also serve as maps (associative arrays). The in operator can be used to find out whether an object contains a property.

for (var name in object) loops over properties of an object.

