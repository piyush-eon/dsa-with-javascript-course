// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution
const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (i = 0; i <= n - k; i++) {
    // O(n)
    let max = nums[i];
    for (j = 1; j < k; j++) {
      // O(k)
      if (nums[i + j] > max) {
        max = nums[j + i];
      }
    }

    result.push(max);
  }

  return result;
};

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Optimised Solution - Deque
const maxSlidingWindowQueue = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n)
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));
