# lotide
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ammar.kusow/lotide`

**Require it:**

`const _ = require('@ammar.kusow/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: checks if all arrays are equal
* `function2(assertEqual)`: checks if two values are equal
* `function3(assertObjectEqual)`: checks if two objects are equal
* `function4(countLetter)`: will count the amount of letters in a string
* `function4(countOnly)`: returns the amount of times something comes up within an object
* `function5(eqArrays)`: checks if the arrays.length and the arrays indexes are the same
* `function6(eqObjects)`: checks if the objects.length and the objects indexes are equal
* `function7(findKey)`: takes an object and returns the first key
* `function8(findKeyByValue)`: take an object and returns a key by value
* `function9(head)`: outputs the first item in an array
* `function10(letterPositions)`: tells you the position of each letter in a string
* `function9(map)`: returns a new array with the callback function a
* `function9(middle)`: returns the middle index of an array
* `function9(tail)`: return the last index of an array
* `function9(takeUntil)`:returns an array of elements back to the callback function
* `function9(without)`: returns a new array without the item you want removed