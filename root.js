// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

let nums = [4, 9, 16, 25];

let sqrtNums = nums.map(Math.sqrt);
console.log(sqrtNums);
