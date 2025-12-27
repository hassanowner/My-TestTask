// Task: Remove invalid values and clean string data (trim spaces)
function cleanUserData(arr) {

  let validData = []; // Array to store only valid cleaned values

  for (let i = 0; i < arr.length; i++) {

    let value = arr[i]; // Current value

    // If the value is a string → trim leading & trailing spaces
    if (typeof value === "string") {
      value = value.trim();
    }

    // Skip invalid (falsy) values
    if (
      value === 0 ||
      value === false ||
      value === "" ||
      value === null ||
      value === undefined
    ) {
      continue;
    }

    validData.push(value); // Add only valid data
  }

  console.log(`Valid Data: ${validData.join(" | ")}`);
}

// Test the function
cleanUserData(["    Osama   ", 0, true, "  Egypt, hi bro "]);

// Output:
// Valid Data: Osama | true | Egypt, hi bro
