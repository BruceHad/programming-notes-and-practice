Chapter 1: Values and Operators

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

