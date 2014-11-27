/* Excercises
 * 
 */

// http://eloquentjavascript.net/05_higher_order.html
 
// Use the reduce method in combination with the concat method to 
// “flatten” an array of arrays into a single array that has all 
// the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
var newArray = arrays.reduce(function(a,b){
  return a.concat(b);
});
console.log(newArray);
// [1, 2, 3, 4, 5, 6]

// Using the example data set from this chapter, 
// compute the average age difference between mothers 
// and children (the age of the mother when the child 
// is born).
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function mother(person){
  if(byName[person.mother]) return true;
  else return false;
}

function age(person){
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
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var groups = {};
ancestry.forEach(function(person){
  var century = Math.ceil(person.died / 100);
  if(! (century in groups)) groups[century] = [];
  groups[century].push(person.died - person.born);
});
for(var century in groups) console.log(century+": "+average(groups[century]).toFixed(1));

// Bonus
function century(person){
  	return Math.ceil(person.died / 100);
}

function age(person){
  return person.died - person.born;
}

function groupBy(array, groupFunc){
  var groups = {};
  for(var elem in array){
    var groupName = groupFunc(array[elem]);
    if(! (groupName in groups)) groups[groupName] = [];
    groups[groupName].push(array[elem]);
  }
  return groups;
}
var groups2 = groupBy(ancestry, century);
for(var century in groups2) {
  console.log(century+": "+average(groups2[century].map(age)));
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
function every(array, test){
  for(var i=0; i<array.length; i++)
    if(! test(array[i])) return false;
  return true;
}

function some(array, test){
  for(var i=0; i<array.length; i++)
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


/* Useful Functions
 * 
 * 
 */

function sum(num_array){
  var total = 0;
  for(var i=0; i < num_array.length; i++) total += num_array[i];
  return total;
}

function range(start, end, step){
  var r = [];
  step = step || 1;
  if(start < end){
	for(var i = start; i <= end; i+=step){
    	r.push(i);
  	}
  } else {
    for(var i = start; i >= end; i+=step){
    	r.push(i);
  	}
  }
  return r;
}