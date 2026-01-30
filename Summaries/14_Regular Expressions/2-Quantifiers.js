/*
===============================================================================
JavaScript Regular Expressions — Advanced Tutorial
Character Classes, Boundaries, Quantifiers, Anchors & Lookarounds
===============================================================================

This file is designed as a COMPLETE learning reference.
All examples are isolated, readable, and executable.

===============================================================================
CHARACTER CLASSES
===============================================================================
*/

/*
-------------------------------------------------------------------------------
1) Dot (.) — Any character except newline
-------------------------------------------------------------------------------
*/

let sentence = "Hello World! Welcome to JS 2025.";
let dotRegex = /./g;

console.log(sentence.match(dotRegex));

/*
-------------------------------------------------------------------------------
2) Word Characters (\w) and Non-Word Characters (\W)
-------------------------------------------------------------------------------
*/

let codeSample = "JS_101: Learn_RegEx!";
let wordRegex = /\w/g;
let nonWordRegex = /\W/g;

console.log(codeSample.match(wordRegex));
console.log(codeSample.match(nonWordRegex));

/*
-------------------------------------------------------------------------------
3) Digits (\d) and Non-Digits (\D)
-------------------------------------------------------------------------------
*/

let invoice = "Invoice #2025 Amount $1500";
let digitRegex = /\d/g;
let nonDigitRegex = /\D/g;

console.log(invoice.match(digitRegex));
console.log(invoice.match(nonDigitRegex));

/*
-------------------------------------------------------------------------------
4) Whitespace (\s) and Non-Whitespace (\S)
-------------------------------------------------------------------------------
*/

let message = "Hello JS!\nLearn\tRegex";
let spaceRegex = /\s/g;
let nonSpaceRegex = /\S/g;

console.log(message.match(spaceRegex));
console.log(message.match(nonSpaceRegex));

/*
-------------------------------------------------------------------------------
5) Practical Email Matching (Simple)
-------------------------------------------------------------------------------
*/

let emails =
  "user1@example.com test.user@site.net admin123@org.org wrong-email@@com";

let simpleEmailRegex = /\w+@\w+\.(com|net|org)/g;

console.log(emails.match(simpleEmailRegex));

/*
===============================================================================
WORD BOUNDARIES & test()
===============================================================================
*/

/*
-------------------------------------------------------------------------------
6) Word Boundary (\b)
-------------------------------------------------------------------------------
*/

let text = "cat scatter concatenate catapult cat";
let wholeWordRegex = /\bcat\b/g;

console.log(text.match(wholeWordRegex));

/*
-------------------------------------------------------------------------------
7) Non-Word Boundary (\B)
-------------------------------------------------------------------------------
*/

let insideWordRegex = /\Bcat\B/g;
console.log(text.match(insideWordRegex));

/*
-------------------------------------------------------------------------------
8) test() Method
-------------------------------------------------------------------------------
*/

let usernames = "Alice 1Bob Bob123 Charlie_Bob Bob!";
let bobRegex = /\bBob\b/;

console.log(bobRegex.test(usernames));        // true
console.log(bobRegex.test("Bob123"));         // false
console.log(bobRegex.test("Charlie_Bob"));    // false
console.log(bobRegex.test("No match here"));  // false

/*
===============================================================================
QUANTIFIERS (+, *, ?)
===============================================================================
*/

/*
-------------------------------------------------------------------------------
9) One or More (+)
-------------------------------------------------------------------------------
*/

let emailList =
  "alice@example.com bob123@domain.net _user@site.org";

let plusRegex = /\w+@\w+\.\w+/g;
console.log(emailList.match(plusRegex));

/*
-------------------------------------------------------------------------------
10) Zero or More (*)
-------------------------------------------------------------------------------
*/

let numbers = "010 0120 0010 0 5050 060";
let starRegex = /0\d*0/g;

console.log(numbers.match(starRegex));

/*
-------------------------------------------------------------------------------
11) Zero or One (?)
-------------------------------------------------------------------------------
*/

let urls =
  "https://google.com http://www.site.net web.com www.example.org";

let optionalRegex = /(https?:\/\/)?(www\.)?\w+\.\w+/g;
console.log(urls.match(optionalRegex));

/*
===============================================================================
QUANTIFIERS WITH RANGES ({x}, {x,y}, {x,})
===============================================================================
*/

let serials = "P123Q P4567Q P89Q P000Q P9999Q";

/*
-------------------------------------------------------------------------------
12) Exact Count {x}
-------------------------------------------------------------------------------
*/

let exactRegex = /P\d{3}Q/g;
console.log(serials.match(exactRegex));

/*
-------------------------------------------------------------------------------
13) Range {x,y}
-------------------------------------------------------------------------------
*/

let rangeRegex = /P\d{2,4}Q/g;
console.log(serials.match(rangeRegex));

/*
-------------------------------------------------------------------------------
14) At Least {x,}
-------------------------------------------------------------------------------
*/

let atLeastRegex = /P\d{3,}Q/g;
console.log(serials.match(atLeastRegex));

/*
===============================================================================
ANCHORS (^, $) AND LOOKAHEADS
===============================================================================
*/

/*
-------------------------------------------------------------------------------
15) End of String ($)
-------------------------------------------------------------------------------
*/

let files = "report.pdf summary.docx notes.txt presentation.pptx";
let endTxtRegex = /\.txt$/;

console.log(files.match(endTxtRegex));

/*
-------------------------------------------------------------------------------
16) Start of String (^)
-------------------------------------------------------------------------------
*/

let codes = "A123 B456 C789 D012";
let startRegex = /^A\d+/;

console.log(codes.match(startRegex));

/*
-------------------------------------------------------------------------------
17) Positive Lookahead (?=)
-------------------------------------------------------------------------------
*/

let ids = "1AlexX 2Brian 3CathyX 4David 5EveX";
let positiveLookahead = /\d\w+(?=X)/g;

console.log(ids.match(positiveLookahead));

/*
-------------------------------------------------------------------------------
18) Negative Lookahead (?!)
-------------------------------------------------------------------------------
*/

let negativeLookahead = /\d\w+(?!X)/g;
console.log(ids.match(negativeLookahead));

/*
===============================================================================
FINAL TAKEAWAYS
===============================================================================

- Character classes define WHAT can match
- Quantifiers define HOW MANY times
- Boundaries control POSITION
- Lookaheads assert conditions without consuming text
- Regex is declarative, not procedural

===============================================================================
END OF ADVANCED REGEX FILE
===============================================================================
*/
