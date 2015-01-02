# Eloquent Javascript
http://eloquentjavascript.net/index.html

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
	
### Objects
	
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

### On Mutability

Numbers, strings and Booleans are all immutable (you can't change them, though you can replace them and derive new values from them, which is similar). e.g 'cat' can't have the first letter changed to 'r', without creating a new string.

Objects are mutable. The properties they grasp can change and you can add new methods or properties to an object.

Immutable types like String can't be modified, so you can't add properties or methods to a String. I guess that's where prototypes come in.

### Arguments Object

In JS you are allowed to pass more or fewer arguments to a function than the number of parameters declared in the function sig. When the function is called a special variable named arguments is added to the scope of the function, that holds all the arguments passed to the function. 

The arguments object has a length property. Each argument can be accessed similar to accessing contents of an array: arguments[0] gives the first argument, but it doesn't have other array methods.

### The Global Object

The global scope can also be approached as an object in JS. In browsers the global scope is stored in the window variable.

### Summary of Objects and Arrays

Objects provide ways to group values into a single grab bag of values. Most values in js have properites (the exception being null and undefined). Those values are accessed using dot notation or sometimes bracket (like arrays).

Methods are basically properties that happen to be functions. Methods of values usually operate on that value. e.g. string.toUpperCase().

Objects can also serve as maps (associative arrays). The in operator can be used to find out whether an object contains a property.

for (var name in object) loops over properties of an object.

## Higher Order Functions
### On Abstraction

Functions like sum() and range() can be used to express simple concepts that can be used in more complex programs. e.g. compare:

	var total = 0, count = 1;
	while (count <= 10) {
	  total += count;
	  count += 1;
	}
	console.log(total);
	
With:

	console.log(sum(range(1, 10)));
	
By wrapping the details up in these functions, the program becomes simpler to think about, smaller and probably less likely to contain bugs. This is known as _information hiding_, or _abstration_.

### Functions within Functions

In JS, plain functions can be used to build abstractions but sometimes they fall short. For example when we want the function to loop over an array and 'do something' where that something isn't known beforehand.

In this case we can pass the do something as a function, into the looping function.

	function forEach(array, action) {
	  for (var i = 0; i < array.length; i++)
		action(array[i]);
	}
	
We can now pass a function to the 'action' argument and have forEach carry out that action on each element of the array.

	var numbers = [1, 2, 3, 4, 5], sum = 0;
	forEach(numbers, function(number) {
	  sum += number;
	});
	
Note we are passing an anonymous function here. (Sometime known as a lambda??).

Note 2 this forEach function is unneccessary as it is already provided as a method on arrays.

Functions that operate on other function (by taking them as arguments or by returning them) are called higher order functions. They allow us to 'abstract over actions, not just values'.

Functions that create other functions:

	function greaterThan(n) {
	  return function(m) { return m > n; };
	}
	var greaterThan10 = greaterThan(10);
	console.log(greaterThan10(11));
	// → true

Functions that change other functions:

	function noisy(f) {
	  return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	  };
	}
	noisy(Boolean)(0);
	// → calling with 0
	// → called with 0 - got false
	
Functions for controlling flow:

	function unless(test, then) {
	  if (!test) then();
	}
	function repeat(times, body) {
	  for (var i = 0; i < times; i++) body(i);
	}

	repeat(3, function(n) {
	  unless(n % 2, function() {
		console.log(n, "is even");
	  });
	});
	// → 0 is even
	// → 2 is even
	
### Filter
	
Higher order functions that apply a function to each element of an array are common. forEach is one primitive example. filter is another:

	function filter(array, test){
		var passed = [];
		for(var i=0; i<array.length; i++){
			if(test(array[i])) passed.push(array[i])
		}
	}
	
	filter(ancestry_file, function(person){
		return person.age > 1900;
	});
	
Like forEach, filter is a built in method of array, so is just shown here for example. In real world you would use it like so:

	ancestry_file.filter(function(person){
		return person.born > 1900;
	});
	
Filter is a pure function and doesn't have any side effects on the original array.

### Map

Map transforms an array by applying a function to all the elements of the array. The resulting new array will be the same length as the original, but the contents will have changed.

	function map(array, transform){
		var mapped = [];
		for(var i=0; i<array.length; i++)
			mapped.push(transform(array[i]));
		return mapped;
	}
	var mappep = map(myArray, function(person){
		return person.name;
	});
	// returns an array of just names

Again, map is a standard function of array, so we don't have to write it out. 

## Reduce

The reduce method that aggregates the contents of an array into a single value. e.g. summing an array of numbers, or returning the highest/lowest value.

	function reduce(array, combine, start){
		var current = start;
		for(var i=0; i<array.length; i++)
			current = combine(current, array[i])
		return current;
	}
	
	var summed = reduce([1,2,3], function(a, b){
		return a+b;
	}, 0);
	
Again, reduce is the standard method of array. The standard method is a bit different in that the start value is optional. If left out, reduce will start with the first element of the array and combine with the second.

	var summed = [1,2,3].reduce(function(a,b){ 
		return a+b; 
	});

### Composability

Higher order functions start to shine when we start combining (composing) with them. 

	function average(array){
		function plus(a, b){return a+b}
		return array.reduce(plus)/array.length;
	}

Note the looping that would normally be required isn't visible (hidden within the reduce function) leaving readable code that closely matches the logic of finding an average.

### On Performance

These functions and attempts to make the code elegant and readable can have a downside for performance.

 * Tends to create new, intermediate processed arrays which can be costly.
 * Function calls are expensive compared to simple loops.
 
This trade off is often not relevant, as computers are fast enough to make the difference negligible. But there will be instances where performance is important. It is therefore a good idea of keeping a not of the number of operations a block of code will carry out, especially when you have loops embedded in loops. And this can be difficult to spot when the loops are hidden behind functions.

### apply and bind

apply and bind are standard methods on all functions.

The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

	fun.apply(thisArg[, argsArray])
	
For example:

	var numbers = [5, 6, 2, 3, 7];
	var max = Math.max.apply(null, numbers);
	>> 7
	var max = Math.max(1,2,4,3)
	>> 4
	
The bind() method creates a new function that when called has it's _this_ keyword set to the first argument, and the following arguments prepended to those provided when the bound function is called. 

	fun.bind(thisArg[, arg1[, arg2..]]);
	
No real idea why this is important. According to book it 'is used to create a partially applied version of the function'.
	
### JSON

JSON (jason) stands for Javascript Object Notation is a data format that looks similar to how arrays and objects are created in Javascript. There are a couple of restrictions. The property names are surrounded by quotes (like strings). Only simple data expressions are allowed, no functions, variables or anything that requires computation [so presumably you can have strings, numbers and bools only]. And no comments.

Looks something like this:

	[{"name": "Bruce", "age":100},{...}]
	
# Objects Again

Objects have a strange reputation. But they are useful for encapsulation. A basic object in JS is a bag of named properties, similar to an associative array.

	var myObj = {};
	
Object methods are just properties that hold functions. Properties can be added to an object in curly brackets or using dot notation.

	var rabbit = {};
	rabbit.speak = function(line) {
		console.log("The rabbit says '" + line + "'");
	};

	var myObj = {
		speak: function(line){
			console.log("This object says: "+ line);
		}
	}
	rabbit.speak("I'm alive.");
	// The rabbit says 'I'm alive.'
	myObj.speak("I'm an object");
	// This object says: I'm an object

When a function is called as a method, the special variable _this_ will point to the object that it was called on.

	function speak(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	}
	var whiteRabbit = {type: "white", speak: speak};
	var fatRabbit = {type: "fat", speak: speak};

	whiteRabbit.speak("I'm a white rabbit.");
	fatRabbit.speak("God I'm fat.");
	>> The white rabbit says 'I'm a white rabbit.'
	>> The fat rabbit says 'God I'm fat.'

So when _this.type_ is called in speak, this refers to the object in which the speak method is called.

The apply() and bind() methods simulate method calls, the first argument of which is the _this_ to be used. There is another similar method called call() which works like apply, except doesn't require an array.

	speak.apply(fatRabbit, ["Burp!"]);
	speak.call({type: "old"}, "Oh my.");
	>> The fat rabbit says 'Burp!'
	>> The old rabbit says 'Oh my.'

## Prototypes


Almost all objects have a prototype. A prototype is another object that provides a fallback, base of properties.

Object.prototype is the root prototype that most objects have as a prototype. It provides a few shared methods that are therefore available to all objects (e.g. toString()). The Object.prototype itself doesn't have a prototype (the turtles stop here).

	console.log(Object.prototype);
	console.log(Object.getPrototypeOf({}));
	console.log(Object.getPrototypeOf({}) == Object.prototype);
	console.log(Object.getPrototypeOf(Object.prototype));
	>{}
	>{}
	>true
	>null

The Object.getPrototypeOf(obj) method returns the prototype of the specified obj.

Some objects have higher level prototypes, e.g. functions derive from the Function.prototype and arrays from the Array.prototype.

	console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
	console.log(Object.getPrototypeOf([]) == Array.prototype);
	console.log(Array.prototype);
	console.log(Function.prototype);
	>true
	>true
	>[]
	>function (){…}

When looking for an object property, JS will search the object, will search the object, then search it's prototype, then search the prototypes prototype, all the way down to the root. This provides inheritance. And means inherited properties can be overwritten.

You can use Object.create to create an object based on a specific prototype object.

	var protoRabbit = {
		speak: function(line) {
			console.log("The " + this.type + " rabbit says '" + line + "'");
		}
	};
	var killerRabbit = Object.create(protoRabbit);
	killerRabbit.type = "nice";
	killerRabbit.speak("Hello");
	console.log(Object.getPrototypeOf(killerRabbit))
	
	>The nice rabbit says 'Hello'
	>{speak: function (line){…}}
	
My rabbit will have access to the 'speak' method via it's prototype.

But it's more convenient to use a Constructor to create a new object from a function. The _new_ keyword will treat a function as a Constructor. And object created with the new keyword is said to be an instance of the Constructor.

	function Rabbit(type) {
		this.type = type;
	}
	var blackRabbit = new Rabbit("black");
	console.log(blackRabbit.type);
	console.log(Rabbit.prototype);
	console.log(Object.getPrototypeOf(Rabbit));
	console.log(Object.getPrototypeOf(blackRabbit));
	>black
	>Rabbit{}
	>function (){…}
	>Rabbit{}
	
All Functions, including Constructors, automatically get an object called prototype. When a new object is created using a Constructor, the new objects takes on this object as its prototype. Therefore if we need to add functionality to the object later, we can amend the prototype.

	Rabbit.prototype.speak = function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	};
	blackRabbit.speak("Doom...");
	// → The black rabbit says 'Doom...'
	
speak() could have been added to the Constructor, not sure why you'd need to amend the prototype to do that. I guess it depends on when the functionality needs added.

Properties from the prototype can be overridden by properties of the object instance with the same name. The prototype properties are not affected.

Adding properties to the prototype allows us to add properties to all objects with that prototype at any time. But this can cause problems.

	var map = {
		a: 1,
		b: 2
	};
	Object.prototype.nonsense = "hi";
	console.log(map);
	>{a: 1, b: 2}
	for(var name in map) console.log(name);
	>a
	>b
	>nonsense
	console.log('nonsense' in map);
	true

'Nonsense' isn't a property of map, but of it's protype, but it is listed when using the _in_ operator, which may not be the expected behaviour.

To prevent properties showing up in for/in loops, the property has to be set as non-enumerable, which can be done with the defineProperty Object method.

	Object.defineProperty(object, property_name, descriptor)

The descriptor is an object {} with the settings for the property, such as get, set, value and _enumerable_.

	var map = {
		a: 1,
		b: 2
	};
	Object.defineProperty(
		Object.prototype, 
		"nonsense", 
		{enumerable: false, value: "hi"});
	console.log(map);
	for(var name in map) console.log(name);
	console.log('nonsense' in map);

	>{a: 1, b: 2}
	>a
	>b
	>true

Note that _in_ still resolves to true, but it's not listed in the for/in loop because it isn't enumerable. To fix that we can use hasOwnProperty in place of in.

	console.log(map.hasOwnProperty("toString"));
	// → false

Polymorphism refers to the provision of a single interface to entities of different types. For example obj.toString() can be called where obj could be an integer, an array or an Object. In each case toString will do something different, but the interface remains the same.




