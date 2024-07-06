// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];

// // let sqrtNums = nums.map(Math.sqrt);
// // console.log(sqrtNums);

// 1 using map method
// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// function thisArr(oldArr) {
//   const newArr = oldArr.map((num) => Math.sqrt(num));

//   for (let i = 0; i < newArr.length; i++)
//     console.log(`${oldArr[i]}: ${newArr[i]}`);
// }
// thisArr(nums);

// 2. using forEach
//defining a function that takes an array as an argument

// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// nums.forEach((num) => {
//   console.log(`${num}: ${Math.sqrt(num)}`);
// });

// 3. using for loop

// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// for (let i = 0; i < nums.length; i++) {
//   console.log(`${nums[i]}: ${Math.sqrt(nums[i])}`);
// }

// 4. using the reduce method
// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100]; //initializing the array
// //calling the reduce method on the `nums` array & applying a function against an accumulator and each element in the array
// let sqrtNum = nums.reduce((acc, nums) => {
//   acc[num] = Math.sqrt(num);
//   return acc; //returns the modified accumulator object to be used in the subsequent iteration
// }, {});
// console.log(sqrtNum);

/*Continuation for yesterday's exercise:
Write different functions that get the square roots of each individual element in an array, and returns an array of the square roots), but with different implementations (different iterator methods/statements).

New exercise for tomorrow:
Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].*/

// const nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// function squareRoots(nums) {
//   for (let i = 0; i < nums.length; i++)
//     if (nums[i] % 2 === 0) {
//       console.log(`${nums[i]}: ${Math.sqrt(nums[i])}`);
//     }
// }
// squareRoots(nums);

//another one

// function squareRoots(numbers) {
//   return numbers
//     .map((num) => Math.sqrt(num)) // Map each number to its square root
//     .filter((sqrt) => sqrt % 2 === 0); // Filtering the square roots to keep only even numbers

//   const nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];

//   console.log(`${nums}: ${Math.sqrt(nums)}`);
// }
// squareRoots(nums);

/*Create a function that takes an array of numbers and a number x as arguments, 
and returns an array of the square roots of those numbers that are greater than x. 
So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, 
then the function should return [4, 5, 6].*/

// function findSquareRoots(numbers, x) {
//   return numbers
//     .map((num) => Math.sqrt(num)) //Calculating the square roots of numbers
//     .filter((sqrt) => sqrt > x); // filtering out to remain with the square roots of numbers above x
// }
// const numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// const x = 5;

// console.log(findSquareRoots(numbers, x));

const numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100]; //array initializaton
const x = 6; //variable initialization
function findSquareRoots(numbers, x) {
  if (x <= 5) {
    console.log("Number should be  greater than 5");
    return;
  }
  const squareRoots = []; // array to store the square roots

  //looping through each number in the Numbers  array
  for (let i = 0; i < numbers.length; i++) {
    const sqrt = Math.sqrt(numbers[i]); //Calculating the square root
    console.log(`${numbers[i]}: ${sqrt}`); //Print out the number and its square root
    squareRoots.push(sqrt); //Add the square root of the array
  }
  return squareRoots; //Return the array of square roots
}
console.log(findSquareRoots(numbers, x));
