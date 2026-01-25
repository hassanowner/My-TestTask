/*
========================================================
JavaScript Basics — Complete Summary
========================================================

MAIN TOPICS:
1) JavaScript Data Types
   - String
   - Number
   - Array
   - Object
   - Boolean

2) JavaScript Variables
   - What is a Variable
   - Why Variables are Used
   - Declaring and Using Variables
   - Variable Syntax
   - Variables Without var
   - Multiple Variables in One Line
   - Local vs Global (Basic Idea)
   - Loosely Typed vs Strongly Typed

3) var vs let vs const
   - Redeclaration
   - Hoisting / Access Before Declaration
   - Scope Behavior
   - Relation to window object
========================================================
*/


/*
========================================================
1) JAVASCRIPT DATA TYPES (Summary)
========================================================

JavaScript data types define the kind of values a variable can hold.
JavaScript is dynamically and loosely typed, meaning the type is
determined at runtime and can change.

--------------------------------------------------------
1. STRING
--------------------------------------------------------
- Represents textual data.
- Written using single quotes, double quotes, or backticks.
- Used for names, messages, labels, and any readable text.
- Strings support concatenation and many built-in methods.
- Type checked using typeof → "string".

--------------------------------------------------------
2. NUMBER
--------------------------------------------------------
- Represents all numeric values.
- No distinction between integers and floating-point numbers.
- Used for calculations, counters, prices, years, etc.
- Type checked using typeof → "number".

--------------------------------------------------------
3. ARRAY (Special Object)
--------------------------------------------------------
- Used to store ordered collections of values.
- Can contain multiple data types in one array.
- Accessed by index starting from 0.
- Arrays are technically objects in JavaScript.
- typeof array → "object".

--------------------------------------------------------
4. OBJECT
--------------------------------------------------------
- Stores data in key-value pairs.
- Keys represent property names, values represent data.
- Used to represent real-world entities (users, products, settings).
- Accessed using dot notation or bracket notation.
- typeof object → "object".

--------------------------------------------------------
5. BOOLEAN
--------------------------------------------------------
- Represents logical values: true or false.
- Commonly used in conditions, comparisons, and decisions.
- Essential for control flow (if, while, logical operations).
- typeof boolean → "boolean".
========================================================
*/


/*
========================================================
2) JAVASCRIPT VARIABLES (Summary)
========================================================

Variables are containers used to store and manage data in a program.

--------------------------------------------------------
What Is a Variable?
--------------------------------------------------------
- A named storage location for values in memory.
- Allows reuse and manipulation of data.

--------------------------------------------------------
Why We Use Variables?
--------------------------------------------------------
- To avoid repeating values.
- To make code readable and maintainable.
- To store changing data during program execution.

--------------------------------------------------------
Declaring and Using Variables
--------------------------------------------------------
- Variables are declared using keywords like var, let, or const.
- After declaration, values can be read or modified.

--------------------------------------------------------
Variable Syntax
--------------------------------------------------------
- Keyword (var / let / const)
- Variable name (identifier)
- Assignment operator (=)
- Variable value

--------------------------------------------------------
Variable Without var
--------------------------------------------------------
- Assigning a value without a keyword creates a variable implicitly.
- This is allowed but considered bad practice.
- Can cause unexpected global variables.

--------------------------------------------------------
Multiple Variables in One Line
--------------------------------------------------------
- JavaScript allows declaring multiple variables using commas.
- Improves readability when variables are related.
- Works with var, let, and const (const must be initialized).

--------------------------------------------------------
Local vs Global Variable (Basic Idea)
--------------------------------------------------------
- Global variable: accessible everywhere in the program.
- Local variable: limited to a specific scope.
- Scope controls where variables can be accessed.

--------------------------------------------------------
Loosely Typed vs Strongly Typed
--------------------------------------------------------
- JavaScript is loosely typed.
- A variable can change its data type at runtime.
- No need to specify a type when declaring variables.
========================================================
*/


/*
========================================================
3) VAR vs LET vs CONST (Summary)
========================================================

JavaScript provides three main keywords for variable declaration.
Each has different rules and behaviors.

--------------------------------------------------------
VAR
--------------------------------------------------------
- Allows redeclaration of the same variable.
- Can be accessed before declaration (value is undefined).
- Does NOT respect block scope.
- Added to the global window object when declared globally.
- Considered legacy and error-prone in modern JavaScript.

--------------------------------------------------------
LET
--------------------------------------------------------
- Does NOT allow redeclaration in the same scope.
- Cannot be accessed before declaration (temporal dead zone).
- Respects block scope.
- Not added to the window object.
- Preferred for variables that can change.

--------------------------------------------------------
CONST
--------------------------------------------------------
- Does NOT allow redeclaration.
- Must be initialized at declaration time.
- Cannot be accessed before declaration.
- Respects block scope.
- Not added to the window object.
- Used for values that should not be reassigned.

--------------------------------------------------------
General Recommendation
--------------------------------------------------------
- Use const by default.
- Use let when reassignment is needed.
- Avoid var in modern JavaScript code.
========================================================
*/
