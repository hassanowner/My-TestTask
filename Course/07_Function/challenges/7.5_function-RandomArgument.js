/*
  Function - Random Argument Challenge
٠
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]

  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status

  Argument Is Random
  Data Is Not Sorted Outbut Depend On Data Types
  - Use Ternary Conditional Operator
*/

  function showDetails(a, b, c) {
    
  let name, age, status;
  
  let data = [a, b, c];

  for (let i = 0; i < 3; i++) {
    
    if (typeof data[i] === "string") {
      name = data[i];
      
    } else if (typeof data[i] === "number") {
      age = data[i];
      
    } else if (typeof data[i] === "boolean") {
      status = data[i];
    }
  }

  console.log(
    `Hello ${name}, Your Age Is ${age}, 
  You Are ${status ? "" : "Not "}Available For Hire`
  );
}

showDetails("Ali", 38, false);
showDetails(38, "Ali", true); 
showDetails(true, 38, "Ali"); 
showDetails(false, "Ali", 38);


// "Hello Ali, Your Age Is 38, 
//You Are Not Available For Hire"
