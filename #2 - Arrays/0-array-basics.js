// Arrays in Javascript

// Decalaration of array

// 1
let array = ["apple", "banana", "cherry"]
console.log(array) // print [ 'apple', 'banana', 'cherry' ]
console.log(array.length); // know the length of an array

//2
let arra = []; // empty array
console.log(arra)  // print empty array []
console.log(arra.length); //  length = 0

arra[0] = "apple"
arra[1] = "banana"
arra[2] = "cherry"
console.log(arra)   // print [ 'apple', 'banana', 'cherry' ]
console.log(arra.length); // length = 3

//3
let person = {      // creating an object of name "person" 
  name: "Piyush",   // key - name    value - 'Piyush'
  age: 25,           // key - age     value - '25'
};

let arr = ["apple", "banana", "cherry", person];
console.log(arr);        // print  [ 'apple', 'banana', 'cherry', { name: 'Piyush', age: 25 } ]
console.log(arr.length);// length = 4

//# Add and Remove Elements using  => [ push(), pop(), unshift(), shift() ]

// Add to End of the Array
arr.push("orange"); // add "orange"
console.log(arr); // print [ 'apple', 'banana', 'cherry', { name: 'Piyush', age: 25 }, 'orange' ]

// Remove From End of the Array
arr.pop();          // remove "orange"
console.log(arr);   //print [ 'apple', 'banana', 'cherry', { name: 'Piyush', age: 25 } ]
arr.pop();         // remove "person"
console.log(arr);  // print [ 'apple', 'banana', 'cherry' ]

// Add at Top of the Array
arr.unshift("orange"); // add "orange"
console.log(arr);     // print [ 'orange', 'apple', 'banana', 'cherry' ]

// Remove From Top of the Array
arr.shift();       // remove "orange"
console.log(arr);  // print [ 'apple', 'banana', 'cherry' ]
arr.shift();       // remove "apple"
console.log(arr);  // print [ 'banana', 'cherry' ]

// # Looping in Arrays =>   for loop , while loop

// For Loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);      // print the element at i-index of array 
}

// While Loop
let i = 0;                 //initial value
while (i < arr.length) {   //condition
  console.log(arr[i]);     //print the element at i-index of array 
  i++;                     //increase the value of i by +1
}




// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
  return prev + item;
}, 2);

// some in javascript
numbers.some((item, index, array) => {
  return item > 3;
});

// every in javascript
numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});


// Spread  Operators ->    read more   https://www.geeksforgeeks.org/javascript-spread-operator/
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];
const finalNums = [...nums, ...nums2]; // Spread Operator
console.log(finalNums)   //print [1, 2, 3, 4, 5, 6, 7]

// Rest Operator  ->      read more     https://www.geeksforgeeks.org/javascript-rest-operator/
function sum(...numbers) {
  return numbers;
}
console.log(sum(nums, nums2, 5, "hello")); // print [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], 5, 'hello' ]


//# More Array Methods

// concat

let concat = nums.concat(nums2); // return [1, 2, 3, 4, 5, 6, 7]
console.log(concat)

//Slice

// let slice =concat.slice();    // return [1, 2, 3, 4, 5, 6, 7]
// let slice =concat.slice("");  // return [1, 2, 3, 4, 5, 6, 7]
// let slice =concat.slice(0);   // return [1, 2, 3, 4, 5, 6, 7]
// let slice =concat.slice(1);   // return [ 2, 3, 4, 5, 6, 7 ]
// let slice =concat.slice(2);   // return [ 3, 4, 5, 6, 7 ]
// let slice =concat.slice(-1);  // return [ 7 ]
// let slice =concat.slice(-2);  // return [ 6, 7 ]
let slice = concat.slice(0, 4); // return [ 1, 2, 3, 4 ]
console.log(slice);

// // Splice
// let splice = concat.splice(1, 2, "orange");
// console.log(splice)

//Fill

const dummy = [1, 2, 3, 4, 5, 6];
//   index     0  1  2  3  4  5
let newdummy = dummy.fill("*", 5);// return [ 1, 2, 3, 4, 5, '*' ]
// let newdummy = dummy.fill("A", 4);// return [ 1, 2, 3, 4, 'A', 'A' ]
// let newdummy = dummy.fill(1, 3);  // return [ 1, 2, 3, 1, 1, 1 ]
// let newdummy = dummy.fill(0, 2);  // return [ 1, 2, 0, 0, 0, 0 ]
// let newdummy = dummy.fill(99, 1); // return [ 1, 99, 99, 99, 99, 99 ]
// let newdummy = dummy.fill(99, 0); // return [ 99, 99, 99, 99, 99, 99 ]
// let newdummy = dummy.fill(99, -1);// return [ 1, 2, 3, 4, 5, 99 ]
// let newdummy = dummy.fill(99, 7); // return [ 1, 2, 3, 4, 5, 6 ]
console.log(newdummy)

// Flat

const flatEx = [1, [2, 3], [[4, 5], 6]];
// console.log(flatEx)   // print [ 1, [ 2, 3 ], [ [ 4, 5 ], 6 ] ]
// const flattenedArray = flatEx.flat();  //return [ 1, 2, 3, [ 4, 5 ], 6 ]
// const flattenedArray = flatEx.flat(0); //return [ 1, [ 2, 3 ], [ [ 4, 5 ], 6 ] ]
// const flattenedArray = flatEx.flat(1); // return [ 1, 2, 3, [ 4, 5 ], 6 ]
const flattenedArray = flatEx.flat(2); // return [ 1, 2, 3, 4, 5, 6 ]
console.log(flattenedArray);

// reverse
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array1.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// sort
const unsorted1 = [8, 5, 6, 2, 4, 7, 3, 9, 1];
const unsorted2 = [88, 5, 6, 12, 4, 17, 23, 9, 1];
// console.log(unsorted1.sort()); // return [1, 2, 3, 4, 5, 6, 7, 8, 9]  // work only for single digit
// console.log(unsorted2.sort()); // return [1, 12, 17, 23, 4, 5,  6, 88, 9] // not work for two digit
console.log(unsorted2.sort((a, b) => a - b))  // return [ 1,  4,  5,  6, 9, 12, 17, 23, 88 ] //sorted array in increasing order
// console.log(unsorted2.sort((a, b) => b - a))  // return [ 88, 23, 17, 12, 9, 6,  5,  4,  1 ] //sorted array in decreasing order


// findIndex and indexof()

// indexOf() method is used when we want to find the first occurrence of a specified element and the element is known.
// findIndex() method is used when we want to specify a particular condition to that element. 
// indexOf() method takes direct element is specified so it is useful when we are working with array of objects.
// findIndex() method takes a callback function which returns the value of the element whose index is to be found.

const index = [1, 2, 3, 4, 6, 7, 8, 9]
console.log(index.findIndex((item) => item === 8)) // return 6
console.log(index.indexOf(8));                    // return 6