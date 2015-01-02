/* Excercises
 *
 */
// http://eloquentjavascript.net/05_higher_order.html
// Use the reduce method in combination with the concat method to 
// “flatten” an array of arrays into a single array that has all 
// the elements of the input arrays.
var arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];
var newArray = arrays.reduce(function(a, b) {
  return a.concat(b);
});
console.log(newArray);
// [1, 2, 3, 4, 5, 6]
// Using the example data set from this chapter, 
// compute the average age difference between mothers 
// and children (the age of the mother when the child 
// is born).

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function mother(person) {
  if(byName[person.mother]) return true;
  else return false;
}

function age(person) {
  return person.born - byName[person.mother].born;
}
console.log(average(ancestry.filter(mother).map(age)));
// → 31.2
//Historical life expectancy
//Compute and output the average age of the people in 
//the ancestry data set per century. 
//A person is assigned to a century by taking their 
//year of death, dividing it by 100, and rounding it 
//up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}
var groups = {};
ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if(!(century in groups)) groups[century] = [];
  groups[century].push(person.died - person.born);
});
for(var century in groups) console.log(century + ": " + average(groups[century]).toFixed(1));
// Bonus

function century(person) {
  return Math.ceil(person.died / 100);
}

function age(person) {
  return person.died - person.born;
}

function groupBy(array, groupFunc) {
  var groups = {};
  for(var elem in array) {
    var groupName = groupFunc(array[elem]);
    if(!(groupName in groups)) groups[groupName] = [];
    groups[groupName].push(array[elem]);
  }
  return groups;
}
var groups2 = groupBy(ancestry, century);
for(var century in groups2) {
  console.log(century + ": " + average(groups2[century].map(age)));
}
//Every and then some
//Arrays also come with the standard methods every and some. Both 
//take a predicate function that, when called with an array element 
//as argument, returns true or false. Just like && returns a true 
//value only when the expressions on both sides are true, every 
//returns true only when the predicate returns true for all elements 
//of the array. Similarly, some returns true as soon as the predicate 
//returns true for any of the elements. They do not process more 
//elements than necessary—for example, if some finds that the predicate 
//holds for the first element of the array, it will not look at the 
//values after that.
//
//Write two functions, every and some, that behave like these methods, 
//except that they take the array as their first argument rather than 
//being a method.
// Your code here.

function every(array, test) {
  for(var i = 0; i < array.length; i++)
    if(!test(array[i])) return false;
  return true;
}

function some(array, test) {
  for(var i = 0; i < array.length; i++)
    if(test(array[i])) return true;
  return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
// http://eloquentjavascript.net/06_object.html
// A vector type
// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(b) {
  return new Vector(this.x + b.x, this.y + b.y);
};
Vector.prototype.minus = function(b) {
  return new Vector(this.x - b.x, this.y - b.y);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
// Sequence interface
// Design an interface that abstracts iteration over a collection of values. When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.
// 
// Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.
// 
// Your code here.

function logFive(seq) {
  for(var i = 0; i < Math.min(5, seq.getLength()); i++) console.log(seq.get(i));
}

function ProtoSeq() {
  this.sequence = [];
  this.get = function(i) {
    return this.sequence[i];
  };
  this.show = function() {
    console.log("hello");
  };
  this.getLength = function() {
    return this.sequence.length;
  };
}

function ArraySeq(arr) {
  this.sequence = arr;
}
ArraySeq.prototype = new ProtoSeq;

function RangeSeq() {
  this.sequence = [];
  for(var name in arguments) this.sequence.push(arguments[name]);
}
RangeSeq.prototype = new ProtoSeq;
var arr = new ArraySeq;
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000, "A", "B", 10, 12, 53));
// → 100
// → 101
// → 102
// → 103
/* Useful Functions
 *
 *
 */

function sum(num_array) {
  var total = 0;
  for(var i = 0; i < num_array.length; i++) total += num_array[i];
  return total;
}

function range(start, end, step) {
  var r = [];
  step = step || 1;
  if(start < end) {
    for(var i = start; i <= end; i += step) {
      r.push(i);
    }
  } else {
    for(var i = start; i >= end; i += step) {
      r.push(i);
    }
  }
  return r;
}