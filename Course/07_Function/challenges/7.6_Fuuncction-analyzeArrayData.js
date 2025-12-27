function analyzeData(arr) {
  // Initialize a variable to store the sum of numbers
  let sum = 0;

  // Initialize a variable to store all text values concatenated
  let texts = "";

  // Initialize a counter for boolean values
  let booleanCount = 0;
  
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    
    // Check if the current element is a number
    if (typeof arr[i] === "number") {
       sum += arr[i]; // Add number to sum

    // Check if the current element is a string
    } else if (typeof arr[i] === "string") {
      
      // If texts already has content, add a separator
      if (texts !== "") {
        texts += " - ";  
      }
      texts += arr[i]; // Add string to texts

    // Check if the current element is a boolean
    } else if (typeof arr[i] === "boolean") {
      booleanCount++; // Increment boolean counter
    }
  }

  // Display results in the browser
  document.write(
    `Sum Of Numbers = ${sum}<br>` +
    `Texts = ${texts}<br>` +
    `Booleans Count = ${booleanCount}`
  );
}

// Test the function with a sample array
analyzeData([12, "Hello", false, 22, "World", true, 53, "Osama", false]);
/* Sum Of Numbers = 87
 Texts = Hello - World - Osama
 Booleans Count = 3 */

/*
- Any else or else if in the code always belongs to the nearest preceding if 
  that has not yet been closed with a }.
  This means it is directly associated with that if only, not with any other outer if.

-If the if block has already been closed with }, any following else or else if 
 belongs to the next nearest outer if. */
