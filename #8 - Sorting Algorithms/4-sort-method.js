// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return b - a;
};

console.log(nums.sort(compareFunction));

const people = [
  {name: "Piyush", age: 25},
  {name: "Suyash", age: 22},
  {name: "Raj", age: 30},
  {name: "Ishan", age: 27},
];

const compareFunctionForObj = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return a.age - b.age;
};

console.log(people.sort(compareFunctionForObj));
