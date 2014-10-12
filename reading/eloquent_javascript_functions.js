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