// Task: Sum all numbers in the array and count total letters in all strings
function summarize(arr) {

  let numbersSum = 0;   // To store the sum of all numbers
  let lettersSum = 0;   // To store total number of letters in all strings

  // Loop through all elements in the array
  for (let i = 0; i < arr.length; i++) {

    let v = arr[i]; // Current element

    // If element is a number → add it to numbersSum
    if (typeof v === "number") {
      numbersSum += v;

    // If element is a string → add its length to lettersSum
    } else if (typeof v === "string") {
      lettersSum += v.length;
    }
  }

  console.log(`Numbers Sum = ${numbersSum}`);
  console.log(`Total Letters = ${lettersSum}`);
}

// Test the function
summarize([10, "Hello", 25, "World", 85]);

// Output:
// Numbers Sum = 120
// Total Letters = 10
