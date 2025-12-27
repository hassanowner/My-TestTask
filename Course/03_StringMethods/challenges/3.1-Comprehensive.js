/*
========================================================
STRING METHODS — CHALLENGE 1
========================================================
Task:
- Remove extra spaces
- Convert the name to lowercase
- Extract the first letter
- Convert it to uppercase
========================================================
*/

let userName = "   Hassan   ";

console.log(userName.trim().toLowerCase().charAt(0).toUpperCase());

/*
Result:
"H"
*/






/*
========================================================
STRING METHODS — CHALLENGE 2
========================================================
Task:
- Get only the word "JavaScript" from the sentence
- Convert it to uppercase
- Repeat it 2 times
========================================================
*/

let text = "Learn JavaScript Programming Now";

console.log(text.slice(6, 16).toUpperCase().repeat(2));

/*
Result:
"JAVASCRIPTJAVASCRIPT"
*/






/*
========================================================
STRING METHODS — CHALLENGE 3
========================================================
Task:
- Check if the string starts with "Java"
- If true, extract the last word only
- Convert it to lowercase
========================================================
*/

let courseTitle = "JavaScript Web Development";

console.log(
  courseTitle.startsWith("Java")
    ? courseTitle.split(" ").pop().toLowerCase()
    : "Not Matched"
);

/*
Result:
"development"
*/
