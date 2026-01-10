/*

FILE: CSS3_Selectors_Guide.js PURPOSE: Complete explanation of CSS3 selectors written as JS comments STYLE: Each selector includes:

1. What it is


2. How it works


3. Basic code structure (CSS examples inside comments) ==================================================================== */



/*====================================================================

1. Universal Selector: * ==================================================================== WHAT IT IS: Selects all elements in the document.



HOW IT WORKS: Applies styles to every element regardless of type.

BASIC STRUCTURE: *

CSS EXAMPLE:

{ margin: 0; padding: 0; } */


/*==================================================================== 2) Type (Element) Selector: E

WHAT IT IS: Selects all elements of a specific HTML tag.

HOW IT WORKS: Targets elements by their tag name.

BASIC STRUCTURE: E

CSS EXAMPLE: p { color: blue; } */

/*==================================================================== 3) Attribute Selector: [a]

WHAT IT IS: Selects elements that have a specific attribute.

HOW IT WORKS: Checks for the presence of the attribute only.

BASIC STRUCTURE: [a]

CSS EXAMPLE: [input] { border: 1px solid black; } */

/*==================================================================== 4) Attribute Equals Selector: [a="b"]

WHAT IT IS: Selects elements whose attribute exactly equals a value.

HOW IT WORKS: Matches only exact attribute values.

BASIC STRUCTURE: [a="b"]

CSS EXAMPLE: [type="text"] { background: yellow; } */

/*==================================================================== 5) Attribute Contains Word: [a~="b"]

WHAT IT IS: Selects elements whose attribute contains a space-separated word.

HOW IT WORKS: The value must be one full word.

BASIC STRUCTURE: [a~="b"]

CSS EXAMPLE: [class~="active"] { color: red; } */

/*==================================================================== 6) Attribute Starts With: [a^="b"]

WHAT IT IS: Selects elements whose attribute value starts with a string.

HOW IT WORKS: Matches the beginning of the value.

BASIC STRUCTURE: [a^="b"]

CSS EXAMPLE: [href^="https"] { color: green; } */

/*==================================================================== 7) Attribute Ends With: [a$="b"]

WHAT IT IS: Selects elements whose attribute value ends with a string.

HOW IT WORKS: Matches the end of the value.

BASIC STRUCTURE: [a$="b"]

CSS EXAMPLE: [src$=".png"] { border: 2px solid blue; } */

/==================================================================== 8) Attribute Contains Substring: [a="b"]

WHAT IT IS: Selects elements whose attribute value contains a substring.

HOW IT WORKS: Matches anywhere inside the value.

BASIC STRUCTURE: [a*="b"]

CSS EXAMPLE: [href*="google"] { color: purple; } */

/*==================================================================== 9) Attribute Hyphen-Separated: [a|="b"]

WHAT IT IS: Selects elements whose attribute value starts with b or b-.

HOW IT WORKS: Commonly used with language attributes.

BASIC STRUCTURE: [a|="b"]

CSS EXAMPLE: [lang|="en"] { font-style: italic; } */

/*==================================================================== 10) :root

WHAT IT IS: Selects the root element of the document.

HOW IT WORKS: In HTML, it targets the <html> element.

BASIC STRUCTURE: :root

CSS EXAMPLE: :root { --main-color: red; } */

/*==================================================================== 11) :nth-child(n)

WHAT IT IS: Selects elements based on their position among siblings.

HOW IT WORKS: Counts from the beginning.

BASIC STRUCTURE: :nth-child(n)

CSS EXAMPLE: li:nth-child(2) { color: blue; } */

/*==================================================================== 12) :nth-last-child(n)

WHAT IT IS: Selects elements based on position from the end.

HOW IT WORKS: Counts siblings from last to first.

BASIC STRUCTURE: :nth-last-child(n)

CSS EXAMPLE: li:nth-last-child(1) { color: red; } */

/*==================================================================== 13) :nth-of-type(n)

WHAT IT IS: Selects nth sibling of a specific type.

HOW IT WORKS: Counts only elements of the same tag.

BASIC STRUCTURE: :nth-of-type(n)

CSS EXAMPLE: p:nth-of-type(2) { font-weight: bold; } */

/*==================================================================== 14) :nth-last-of-type(n)

WHAT IT IS: Selects nth sibling of a type from the end.

HOW IT WORKS: Counts from the last matching element.

BASIC STRUCTURE: :nth-last-of-type(n)

CSS EXAMPLE: p:nth-last-of-type(1) { color: green; } */

/*==================================================================== 15) :first-child / :last-child

WHAT IT IS: Selects the first or last child element.

HOW IT WORKS: Based on position within parent.

BASIC STRUCTURE: :first-child :last-child

CSS EXAMPLE: li:first-child { color: red; } li:last-child { color: blue; } */

/*==================================================================== 16) :first-of-type / :last-of-type

WHAT IT IS: Selects first or last element of its type.

HOW IT WORKS: Ignores other element types.

BASIC STRUCTURE: :first-of-type :last-of-type

CSS EXAMPLE: p:first-of-type { font-size: 20px; } */

/*==================================================================== 17) :only-child / :only-of-type

WHAT IT IS: Selects elements that have no siblings.

HOW IT WORKS: Checks uniqueness in parent.

BASIC STRUCTURE: :only-child :only-of-type

CSS EXAMPLE: div:only-child { background: yellow; } */

/*==================================================================== 18) :empty

WHAT IT IS: Selects elements with no children or text.

HOW IT WORKS: Even whitespace counts as content.

BASIC STRUCTURE: :empty

CSS EXAMPLE: div:empty { display: none; } */

/*==================================================================== 19) Link & User Action Pseudo-classes

:link, :visited, :hover, :active, :focus

WHAT THEY ARE: Select elements based on user interaction.

HOW THEY WORK: Triggered by mouse, keyboard, or visit state.

CSS EXAMPLE: a:hover { color: red; } a:active { color: green; } */

/*==================================================================== 20) :target & :lang()

WHAT THEY ARE: :target selects anchor targets :lang selects language-based elements

CSS EXAMPLE: :target { background: yellow; } :lang(en) { font-style: italic; } */

/*==================================================================== 21) Form State Selectors

:enabled, :disabled, :checked

WHAT THEY ARE: Select form elements by state.

CSS EXAMPLE: input:checked { border: 2px solid green; } */

/*==================================================================== 22) Class, ID, and Negation

.className, #id, :not()

CSS EXAMPLE: .box { padding: 10px; } #main { width: 100%; } div:not(.active) { opacity: 0.5; } */

/*==================================================================== 23) Combinators

E F   (descendant) E > F (child) E + F (adjacent sibling) E ~ F (general sibling)

CSS EXAMPLE: div p { color: red; } ul > li { list-style: none; } */

/==================================================================== END OF FILE ====================================================================/
