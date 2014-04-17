# Intro

Chapter 2 Done

The art of programming is controlling complexity. The defining criterion for a program is whether it is correct. Secondary are efficiency, clarity and size. The first is essential, while the later three need to be balanced.
Javascript is 'ridiculously' liberal in what it allows, which makes debugging hard, but does allow for flexible approaches that other languages make impossible.

# Basics

Six basic types: number, string, boolean, objects, function and undefined.

The typeof command will return the type of any variable.

    typeof 4.5
    >> Number
    typeof(null)
    >> Object
    typeof NaN
    >> Number
	
Numbers have 64 bits. One bit is taken up by the sign (negative or positive) and 11 bits store the position of the fractional dot leaving 52 bits for the actual numbers. So you can store anything up to <code>2**52</code>.
Numbers can just be typed:

    var x = 8;
    var y = 3.124;
    var z = 1.982e8;

Note this obscure little feature, you can just type scientific notation directly.
Standard arithmetic operations are available (+, -, /, * and %). Order of operations apply and brackets can be used in calculations.

Calculations with fractions are not guaranteed to be precise.

Strings can be typed with quote marks:

    var s = "This is a string";

Special characters can be escaped with a backslash. Therefore backslashes have to be entered twice if you want them displayed. 

The plus operator concatenates two strings.

Boolean types can be true or false.

There are binary operators for comparison. < > != == that result in boolean results.

Logical operators can be applid to boolean types:

&& - and
|| - or
! - not (reverses the results)

So (true && true) return true etc.

Logical operators && and || can also be applied to non-booleans. In the case of OR ||, this check the value to the left, and if true, returns it, else returns the value to the right. The && operator does the opposite -- check the value to the left, and if false, returns it, else returns the value to the right.

(A || B) - if A => true, return A, else return B.
(A && B) - if A => false, return A, else return B.

These can be useful shortcuts, but look confusing so good to learn about them.

**Statements**: A statement is a basic unit of programming. JS programs are mainly lists of statements, usually ending in a semi-colon.
**Variables**: Variables hold values. var name = "Bruce";  'var' is used to create a new variable, and is followed by the variable name. 

Variable names can include number as long as it doesn't start. They can also include $ and _. 

The variable names can be used in expressions.

**Functions**: A function is a value of type Function. It's a chunk of programming wrapped in a value. Functioned are called by the function name followed by parens. Alert(). The parens can contain arguments to pass to the function.

Functions can have side effects (like alert() opening a dialogue screen) or can return values. Functions that return values can be used in expressions like other variables.

**undefined**: var that aren't associated with a value, have a special value of undefined. There is also a value of null, which is similar. In JS null==undefined evaluated to true, even though they aren't exactly the same.

Comparison of different types is complicated. e.g.

	false == 0 // True
	"" == 0 // True
	"5" == 5 // True
	
Sometimes you want an exact match, in which case use triple ===.

	"" == false // true
	"" === false // false

Conditions (as used in if(), while() and for() statements are evaluated to boolean before being checked. 

NaN, 0, "", null, undefined and false all evaluate to false. Everything else evaluates to true, which is a useful shortcut when writing conditions.

JS will try to convert the type of a value when used in an expression. e.g. "5" * 3 = 15 - in this case the string "5" has been converted to the number 5. But "Saturn"+5 = "Saturn5" - so the number 5 has been converted to a string. If JS can't convert a string to a number it will return a special value NaN. Types can be converted explicitely using the Number() and String() functions.

Confusingly NaN == NaN evaluates to false. User inNaN() to check instead.

**Comments**: are simple enough. // for single line. and /*...*/ for block statements.

# Functions

Functions can be thought of as (usually) named containers for chunks of code. Usually used for common code that needs to be used repeatedly, or by different sections of the code. But that is a simplification, they can be used as:

* Pure Functions
* Algorithms
* Indirections
* Abstractions
* Decisions
* Modules
* Continuations
* Data Structures

[Don't know what most of these are]

A pure function is something like a mathematical function such as COSINE or Square Root. It always returns the same value for any arguments, and has no side effects. Pure functions are good, because they are easy to test independant from the rest of the code. But sometime you want the side effects.

A function is created using the function keyword, followed by the variable name used to call the function (optional), parenthesis containing any arguments (again optional), followed by curly brackets containing the code.

	function myFunction(arg1, arg2){... function code ...}

The return keyword ends the processing of the function and returns the result of the function. Return can be blank, in which case it returns undefined.
	
	var add = function(a, b){...};
	
This is a different way to create a function. It's basically an anonymous function that is assigned to a variable name.

Order of Execution: JS doesn't work sequentially through a program. It first looks at the whole program and stores functions prior to the rest of the program, so that those functions can be called even if they are defined further down the code. IIRC the variable names for the anonymous functions (see above) are not stored in this way, so have to be declared prior to being called.

If a function contains other functions, these are assessed whenever the function is called, prior to the rest of the function executing.

Variables created inside a function only exist within the scope of the function (only when created with the var keyword iirc) and are destroyed when the function completes. That means you can use variables in different functions without worrying about whether the same name has been used in a different part of the code.

When looking for a variable, JS checks if it exists in the local scope first. If it is not found, then it checks a higher level, all the way up to the root.

There is something confusing called closures.

	var variable = "top-level";
	function parentFunction() {
	  var variable = "local";
	  function childFunction() {
		print(variable);
	  }
	  return childFunction;
	}

	var child = parentFunction();
	child();

Even though child() is called in the top-level, the "local" variable will be printed. "Closure is a function that can have free variables together with an environment that binds these variables". Seems to allow you to create a function with it's own scope and pass that around and use it in other parts of the code, but always using the local variables.

This lexical scoping also makes it possible to synthesize functions from other functions. Best done by example.

	function makeAddFunction (amount) {
		return function(number){
			return number + amount
		};
	}
	var addTwo = makeAddFunction(2);
	addTwo(4);
	>> 6
	
So we've synthesised addTwo from makeAddFunction by passing the argument 2 to the function. Note the anonymous function that is returned.

Lexical scoping also allow recursion to work in JS. Note: Recursion can be a lot slower in JS and can lead to stack limit errors as the compiler doesn't optimise.

The Stack is closely related to recursion. When a function is called, the current program pauses until the function is complete, so it is placed on top of the stack until the function completes, and then gets taken back off the stack when it resumes. 

With a recursive call, the same function is called repeatedly, each one being placed on the stack at the point the next function is called. It then peels back down the stack after the base condition has been met and each function completes.

This stack requires space in memory, which is limited. If you exceed that an internal error is thrown.

# Conventions

Function names are usually camelcase fuzzyLittleFunction(), but some have an initial capital e.g. Number() but these are infact Constructors which are slightly different.

# Shortcuts

+=, -= and \*= can be used as shortcuts for a = a + 1 etc. or you can use ++ and --.

# Eloquent JS Notes

print("N") and show("N") are custom functions used in the EJS to print and show the output of statements.

======================================

[1]: http://eloquentjavascript.net/contents.html
