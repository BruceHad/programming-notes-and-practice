# Intro

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
Numbers have 64 bits. One bit is taken up by the sign (negative or positive) and 11 bits store the position of the fractional dot leaving 52 bits for the actual numbers. So you can store anything up to 2**52.
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

