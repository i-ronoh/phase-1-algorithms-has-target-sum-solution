function hasTargetSum(array, target) {
  // create object to track numbers
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (e.g.: if current number = 3, & target = 7, then complementary number = 4)
    const complement = target - number;
    // are any of the keys in our object complementary to the current number
    // if yes, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object to check it later against other values
    seenNumbers[number] = true;
  }
  // at the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
   Runtime: O(n^2)
   Space: O(n)
*/

/* 
  Add your pseudocode here
  Iterate through each item in the array
  for the current num, identify a complementary number that adds to our target
  check if any key is our complementary number
  if yes, return true
  at the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 10, 3, 7], 5));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
