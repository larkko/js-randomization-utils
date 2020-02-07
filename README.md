# js-randomization-utils
Utilities for randomization in JavaScript

# API

This library exports a collection of functions useful for randomizing the content of arrays.
All of the functions listed below accept an optional final parameter of the type `Array => number`, which the functions use to select a random index in the array. The default value of this parameter (used if the caller does not specify a value for the parameter) uses the built-in `Math.random` function internally, but a different function can be used if necessary. This is useful if a deterministic alternative is desired, for example. The return value of the function should be a valid index for the array given to it as an argument.

### Selecting a random element
```
randomElement([1,2,3])
=> 2
```

### Selecting multiple random elements
```
randomElements(
  [1,2,3,4], //the array from which elements are selected
  2 //how many elements to select (at most)
)
=> [1,4]
```
This function will select at most as many elements as there are elements in the array.
This function will not select the same element multiple times.

### Selecting random indices
```
randomIndices(
  [1000, 1001, 1002], //the array for which random indices are generated
  2 //how many indices to generate (at most)
)
=> [0,1]
```
This function will select at most as many indices as there are elements in the array.
This function will not select the same index multiple times.

### Shuffling an array
```
shuffle([1,2,3,4])
=> [4,1,3,2]
```
This function will return a shuffled version of the provided array.
The array given as an argument will not be modified.

# Testing
Tests can be run by running
```
npm test
```

Make sure to run
```
npm install
```
before attempting to run the tests, to install the dependencies needed to run the tests.

