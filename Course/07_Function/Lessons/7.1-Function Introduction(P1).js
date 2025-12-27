/*
===========================================================
FUNCTIONS — Practical Programming-Oriented Example
===========================================================

In this version:
- We replaced personal names with realistic programming-related names
- The concept and explanation remain the same
- The goal is to make the example closer to real-world development
===========================================================

-----------------------------------------------------------
Practical Example (Using Programming Terminology)
-----------------------------------------------------------
*/

// User-defined function
function showWelcomeMessage(userRole) {
  console.log(`Welcome, ${userRole}`);
  // Prints a welcome message based on the system role
}

// Function calls with practical programming-related arguments
showWelcomeMessage("Admin");
showWelcomeMessage("Editor");
showWelcomeMessage("Guest");

/*
Expected console output:
Welcome, Admin
Welcome, Editor
Welcome, Guest
*/

/*
-----------------------------------------------------------
Step-by-Step Explanation
-----------------------------------------------------------

1) Function Definition:
   function showWelcomeMessage(userRole) { ... }

   - showWelcomeMessage : function name (describes what it does)
   - userRole           : parameter (placeholder for input data)

2) Parameter:
   - userRole receives a value when the function is called

3) Function Calls:
   - Each call passes a different argument

   showWelcomeMessage("Admin");
     → userRole = "Admin"
     → Output: Welcome, Admin

   showWelcomeMessage("Editor");
     → userRole = "Editor"
     → Output: Welcome, Editor

   showWelcomeMessage("Guest");
     → userRole = "Guest"
     → Output: Welcome, Guest

4) Benefit:
   - Same function logic
   - Different outputs depending on input
   - No code repetition

-----------------------------------------------------------
Why This Is More Practical?
-----------------------------------------------------------
- Uses real system roles instead of personal names
- Similar to authentication / role-based systems
- Common pattern in dashboards and web applications

-----------------------------------------------------------
Quick Summary
-----------------------------------------------------------
✓ Function names should describe behavior
✓ Parameters represent dynamic data
✓ Arguments are real values passed to the function
✓ Functions are essential for clean, reusable code

===========================================================
END
===========================================================
*/
