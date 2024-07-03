// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];

// // let sqrtNums = nums.map(Math.sqrt);
// // console.log(sqrtNums);

// /*using for loop*/
// function thisArr(oldArr) {
//   const newArr = oldArr.map((num) => Math.sqrt(num));

//   for (let i = 0; i < newArr.length; i++)
//     console.log(`${oldArr[i]}: ${newArr[i]}`);
// }
// thisArr(nums);

//using forEach
//defining a function that takes an array as an argument

/*let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
nums.forEach((num) => {
  console.log(`${num}: ${Math.sqrt(num)}`);
});*/

//using for loop

/*let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
for (let i = 0; i < numbers.length; i++) {
  console.log(`${num[i]} ${Math.sqrt(num)}`);
}*/

/*Continuation for yesterday's exercise:
Write different functions that get the square roots of each individual element in an array, and returns an array of the square roots), but with different implementations (different iterator methods/statements).

New exercise for tomorrow:
Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].
Create a function that takes an array of numbers and a number x as arguments, and returns an array of the square roots of those numbers that are greater than x. So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, 
then the function should return [4, 5, 6].*/

const nums = [4, 9, 16, 25, 36, 49, 64, 81, 100];
function squareRoots(nums) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] % 2 === 0) {
      console.log(`${nums[i]}: ${Math.sqrt(nums[i])}`);
    }
}
squareRoots(nums);
