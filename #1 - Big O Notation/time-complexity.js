// Slow Example
const funnyNumber = (array) => {
  // 4 Operations
  for (let i = 0; i < array.length; i++) {
    if (i === 3) return array[i];
  }
};

// Fast Example
const funnyNumber2 = (array) => {
  // 1 Operation
  return array[3];
};

const nums = [420, 96, 12, 69, 77];

// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber");

// Types of Time Complexities 👇

// O(1) Time Complexity
function someOperations(n) {
  // 3 Operations => O(1)
  return (n * (n + 5)) / 2;
}

// console.log(someOperations(1000));

// O(n) Time Complexity
function GoingUpDown(n) {
  // 2n + 3 Operations => O(n)
  console.log("Going forward!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End, Going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
}

// console.log(GoingUpDown(3));

// O(n^2) Time Complexity
function printBoth(n) {
  // n^2 Operations => O(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printBoth(4));
