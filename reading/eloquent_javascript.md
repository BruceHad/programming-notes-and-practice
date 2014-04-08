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

# Conventions

Function names are usually camelcase fuzzyLittleFunction(), but some have an initial capital e.g. Number() but these are infact Constructors which are slightly different.

# Shortcuts

+=, -= and \*= can be used as shortcuts for a = a + 1 etc. or you can use ++ and --.

# Eloquent JS Notes

print("N") and show("N") are custom functions used in the EJS to print and show the output of statements.

======================================

[1]: http://eloquentjavascript.net/contents.html
