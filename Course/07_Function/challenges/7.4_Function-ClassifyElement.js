
// Task: Separate array elements into three groups: numbers, strings, booleans
function classifyElements(arr) {

  let numbers = [];  // Stores all number values
  let strings = [];  // Stores all string values
  let booleans = []; // Stores all boolean values

  // Loop through all elements in the array
  for (let i = 0; i < arr.length; i++) {

    // Check the type of each element and push it to the correct array
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);

    } else if (typeof arr[i] === "string") {
      strings.push(arr[i]);

    } else if (typeof arr[i] === "boolean") {
      booleans.push(arr[i]);
    }
  }

  // Return results as an object
  return {
    numbers,
    strings,
    booleans
  };
}

// Test the function
console.log(
  classifyElements([12, "Hi", true, 55, "World", false])
);

// Output:
// {
//   numbers: [12, 55],
//   strings: ["Hi", "World"],
//   booleans: [true, false]
// }
