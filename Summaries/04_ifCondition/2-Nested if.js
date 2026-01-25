/*
==========================================
JavaScript Study Topics — Full Summary
==========================================

Main Topics:
1. Nested if Statements
2. Conditional (Ternary) Operator
3. Nullish Coalescing Operator (??)
4. Logical OR (||) vs Nullish Coalescing (??)
5. Truthy & Falsy Values (Boolean Conversion)
6. Switch Statement
==========================================
*/

// 1- Nested if Statements
/*
- Definition: An if statement inside another if/else if/else.
- Outer condition is checked first; inner conditions are only checked if allowed.
- Purpose: Hierarchical/Dependent decision-making.
- Contains:
  * Basic syntax: if(condition){ if(innerCondition){...} else {...} } else {...}
  * Multiple nested levels possible.
  * Visual: outer conditions → inner conditions → execute block → skip rest.
- Example: Subscription pricing with promo code, region, and student status.
- Key points:
  * Only the first true block executes
  * Avoid deep nesting to maintain readability
  * Ideal for dependent conditions
*/

// 2- Conditional (Ternary) Operator ? :
/*
- Definition: Shortcut for simple if/else.
- Syntax: condition ? valueIfTrue : valueIfFalse
- Purpose: Inline, short, readable conditional logic.
- Features:
  * Can assign values or display messages
  * Can be nested (2-3 levels max) for multiple conditions
- Examples:
  * Simple: let result = score >= 50 ? "Pass" : "Fail";
  * Nested: employeeExperience < 2 ? "Junior" : employeeExperience <=7 ? "Mid" : "Senior"
- Best practices:
  * Use for short, clear conditions
  * Avoid excessive nesting
*/

// 3- Nullish Coalescing Operator (??)
/*
- Definition: Provides a default value only if left-hand side is null or undefined.
- Syntax: leftValue ?? rightValue
- Difference from ||:
  * || replaces any falsy value (0, "", false, NaN)
  * ?? replaces only null or undefined
- Use cases:
  * User input defaults
  * Configuration or API response defaults
- Examples:
  * let finalUserName = userName ?? "Guest"; // userName null → "Guest"
  * let finalScore = score ?? 100; // score=0 → returns 0, not default
*/

// 4- Logical OR (||) vs Nullish Coalescing (??)
/*
- || returns right value for any falsy left value
- ?? returns right value only for null or undefined
- Examples:
  * 0 || 10 → 10
  * 0 ?? 10 → 0
- Practical: use ?? when 0, false, or "" are valid inputs
*/

// 5- Truthy & Falsy Values (Boolean Conversion)
/*
- Falsy values: false, 0, "", null, undefined, NaN
- Truthy values: all other values (positive/negative numbers, non-empty strings)
- Example conversions:
  * Boolean(150) → true
  * Boolean(0) → false
  * Boolean("") → false
  * Boolean(null) → false
- Purpose: Useful in condition checks and default handling
*/

// 6- Switch Statement
/*
- Definition: Multi-branch conditional logic.
- Evaluates an expression once; compares to case values using strict equality (===)
- Syntax:
  switch(expression){
    case value1: ... break;
    case value2: ... break;
    default: ... 
  }
- Key points:
  * Use break to prevent fall-through
  * Default is optional but recommended
  * Multiple cases can share a block
- Example: Access level system
  * case 0 → Guest
  * case 1 → User
  * case 2,3 → Administrator
- Purpose: Cleaner alternative to long if/else chains for discrete options
*/
