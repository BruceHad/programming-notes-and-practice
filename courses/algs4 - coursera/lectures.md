# Lecture 1. Dynamic Connectivity

Talked about 'dynamic connectivity' which seems to mean paths and connections between mutliple objects.

Two methods are defined: union and find.

Union is used to connect two objects.

Find is used to find out if two objects are connected.

Assume connections are reflexive (p is connected to p), symmetric and transitive.

'Connected components' are a maximal set of objects that are mutually connected.

# Lecture 2. Quick Find

A so called eager/greedy approach where an expression is evaluated as soon as it's bound to a variable.

For our data structure:

An integer array id[] of length N.

Interpretation: p and q are connect if and only if they have the same id.

     0 1 2 3 4 5 6 7 8 9
id[] 0 1 1 8 8 0 0 1 8 8

So 0, 5, 6 are connected etc...

* connected(): easy...just check if p and q have the same id.
* union(): more work...find and change all compenent so that they match.

https://github.com/treerock/programming-notes-and-practice/blob/master/algs/quick_find.py

Cost Model:

algo        | init | union | find
----------------------------------
Quick Find  |  N   |   N   |   1

Union is expensive, it takes N**2 array accesses to process a sequence of N union command on N objects.

Quadratic algos do not scale.

# Lecture 3: Quick Union

Quick Union is a lazy approach. Presumably that means an expression isn't evaluated until it is needed.

Data Structure:

* Integer array id[] of length N.
* id[i] is parent of i.
* Root of i is id[id[...id[i]...]]] (keep going until reach root)

     0 1 2 3 4 5 6 7 8 9
id[] 0 1 9 4 9 6 6 7 8 9

So 9 is the parent of 2 and 4 , 4 is the parent of 3 and 6 is the parent of 5.

* connected(): check if p and q have the same root.
* union(): to merge components containing p and q, set the id of p's root to the id of q's root.

So need to be able to find root.

Cost Model

algo        | init | union | find
----------------------------------
Quick Union |  N   |   N   |   N (worst case)

Compare:

Quick-Find: Union to expensive, trees are flat but too expensive to keep flat.

Quick-Union: Trees get tall, find is too expensive (could be N array accesses).



