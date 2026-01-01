/*
========================================================
SWITCH STATEMENT — FULL EDUCATIONAL GUIDE
========================================================

Topics Covered:
1) What is a switch statement
2) Basic syntax and rules
3) Default ordering and placement
4) Multiple matches / fall-through
5) Strict comparison (===)
6) Example scenario
7) ASCII visualization
========================================================


--------------------------------------------------------
1) WHAT IS A SWITCH STATEMENT?
--------------------------------------------------------

- The switch statement allows **multi-branch conditional logic**.
- It evaluates an expression once, then **compares it against case values**.
- Use it when you have **multiple discrete options** to handle.
- Helps avoid **long chains of if/else if/else**.



--------------------------------------------------------
2) BASIC SYNTAX
-------------------------------------------------------- */

switch(expression) {
    case value1:
        // code block executed if expression === value1
        break;
    case value2:
        // code block executed if expression === value2
        break;
    default:
        // code block executed if no case matches
}

/*
Key Points:
- `expression` is evaluated once.
- `case value:` uses **strict comparison (===)**.
- `break` prevents **fall-through** to the next case.
- `default:` is optional, executed if no match found.




--------------------------------------------------------
3) DEFAULT ORDERING & PLACEMENT
--------------------------------------------------------

- The default case can be **placed anywhere inside the switch**.
- Execution will jump to default only if **no other case matches**.
- Using break after default is recommended for clarity.



--------------------------------------------------------
4) MULTIPLE MATCHES (FALL-THROUGH)
--------------------------------------------------------

- You can combine multiple cases to execute the **same code block**: */

case 2:
case 3:
    console.log("Administrator Access");
    break;
/*
- This works because **fall-through occurs until a break is found**.
- Useful when several values require the same handling.



--------------------------------------------------------
5) STRICT COMPARISON
--------------------------------------------------------

- switch uses `===` internally.
- No type coercion occurs:
  - `switch("2")` will NOT match `case 2` because one is string, one is number.
- Always be aware of data types when using switch.




--------------------------------------------------------
6) EXAMPLE SCENARIO
-------------------------------------------------------- */

let accessLevel = 2; // Numeric value received from system

switch (accessLevel) {

    // Default can be placed first or last
    default:
        console.log("Access Level Unknown");
        break;

    // Strict comparison
    case 0:
        console.log("Guest Access");
        break;

    case 1:
        console.log("User Access");
        break;

    // Multiple match example
    case 2:
    case 3:
        console.log("Administrator Access");
        break;
}

/*
Result:
"Administrator Access"

Explanation:
- accessLevel = 2
- Matched case 2
- case 2 and 3 share the same output
- break prevents execution of any following cases
*/


/*
--------------------------------------------------------
7) ASCII FLOWCHART VISUALIZATION
--------------------------------------------------------

Start
  |
  v
[Evaluate accessLevel]
  |
  |-- case 0? --> Yes --> [Guest Access] --> End
  |
  |-- case 1? --> Yes --> [User Access] --> End
  |
  |-- case 2? --> Yes --> [Administrator Access] --> End
  |
  |-- case 3? --> Yes --> [Administrator Access] --> End
  |
  |-- default? --> [Access Level Unknown] --> End

Notes:
- Only the first matching case executes.
- Multiple cases can share a block (fall-through).
- Default executes if no other case matches.



  
--------------------------------------------------------
8) KEY NOTES & BEST PRACTICES
--------------------------------------------------------

1) Use switch when you have **discrete multiple options**.
2) Always include `break` unless fall-through is intentional.
3) Remember switch uses `===` → type matters.
4) Default case is recommended to handle **unexpected values**.
5) Multiple match cases reduce code duplication.
6) Switch improves **readability** vs long if/else chains for many values.

========================================================
*/
