/* 
another modules-example/
├── index.html          (HTML file)
├── math.js   (math file - Exports functions)
└── main.js            (Main file - Imports functions).  */



// - - - - HTML File - - - - //
/*
<!DOCTYPE html>
<html>
<head>
    <title>Simple Module Example</title>
</head>
<body>
    <h1>Simple Module Example</h1>
    <p>Open console (F12) to see results</p>
    
    <!-- Only load main.js - it will import math.js -->
    <script type="module" src="main.js"></script>
</body>
</html>
*/


  
// - - - - math.js File - - - - //

// Export function to add two numbers
export function add(a, b) {
    return a + b;
}

// Export function to multiply two numbers
export function multiply(a, b) {
    return a * b;
}





// - - - - main.js File - - - - //

// Import both functions from math.js
import { add, multiply } from './math.js';

// Use the imported functions
console.log("Addition: 5 + 3 =", add(5, 3));
console.log("Multiplication: 5 × 3 =", multiply(5, 3));



/*                        
How it works:

1. HTML loads only main.js with type="module"
2. main.js imports add and multiply from math.js
3. math.js exports the two functions
4. Browser console shows the results

Output in console:

```
Addition: 5 + 3 = 8
Multiplication: 5 × 3 = 15
```

That's it! Just 3 files, 2 functions, no extra complexity.    */
