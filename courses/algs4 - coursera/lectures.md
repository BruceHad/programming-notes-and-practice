## Lecture 1. Dynamic Connectivity

Talked about 'dynamic connectivity' which seems to mean paths and connections between mutliple objects.

Two methods are defined: union and find.

Union is used to connect two objects.

Find is used to find out if two objects are connected. 

Assume connections are reflexive (p is connected to p), symmetric and transitive.

'Connected components' are a maximal set of objects that are mutually connected.

## Lecture 2. Quick Find

A so called eager/greedy approach where an expression is evaluated as soon as it's bound to a variable.

For our data structure:

An integer array id[] of length N.

Interpretation: p and q are connect if and only if they have the same id.

     0 1 2 3 4 5 6 7 8 9
id[] 0 1 1 8 8 0 0 1 8 8

So 0, 5, 6 are connected etc...

find(): easy...just check if p and q have the same id.

union(): more work...find and change all compenent so that they match.

