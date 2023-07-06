

// Function 1: receivesAFunction(callback)
function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

// Function 2: returnsANamedFunction()
function returnsANamedFunction() {
  // Define and return a named function
  function namedFunction() {
    // Function body
  }

  return namedFunction;
}

// Function 3: returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
  // Define and return an anonymous function
  return function () {
    // Function body
  };
}
