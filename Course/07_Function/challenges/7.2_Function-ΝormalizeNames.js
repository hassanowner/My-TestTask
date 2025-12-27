// Task: Clean and normalize names (trim spaces + fix letter casing)
function normalizeNames(arr) {

  let result = []; // Array to store cleaned names

  for (let i = 0; i < arr.length; i++) {

    let name = arr[i]; // Current name

    // Only process if the value is a string
    if (typeof name === "string") {

      name = name.trim(); // Remove spaces from start & end

      // Make first letter uppercase and the rest lowercase
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      result.push(name); // Add to result array
    }
  }

  console.log(result.join(", ")); // Print names separated by commas
}

// Test the function
normalizeNames(["   oSaMa  ", "aHMeD   ", "  LAILA"]);

// Output:
// Osama, Ahmed, Laila
