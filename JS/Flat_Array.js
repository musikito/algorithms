/*
The classical recursive way is based on a function calling 
itself if the i element in the array that we are looping through 
is also an array.
*/
function baseFlatten(array, depth, predicate, isStrict, result) {
    // lots of code here
    if (depth > 1) {
      // Recursively flatten arrays (susceptible to call stack limits).
      baseFlatten(value, depth - 1, predicate, isStrict, result);
    } else {
      arrayPush(result, value);
    }
    // lots of code here
  }