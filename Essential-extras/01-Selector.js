1. Universal Selector (*)

· What it is: Selects every single element on the page.
· Basic rule & how it works: The asterisk (*) is used to apply a style to all HTML elements, regardless of their type.
· Simple example: This rule would make the text color of every element on the page red.
  ```css
  * {
    color: red;
  }
  ```


2. Type Selector (E)

· What it is: Selects all elements of a specific HTML tag type (e.g., <p>, <div>, <h1>).
· Basic rule & how it works: You use the element's tag name directly as the selector to style all instances of that tag.
· Simple example: This rule styles all <p> (paragraph) elements.
  ```css
  p {
    font-size: 16px;
  }
  ```


3. Attribute Selector ([a])

· What it is: Selects elements that have a specific attribute, regardless of its value.
· Basic rule & how it works: The selector is the attribute name placed inside square brackets [].
· Simple example: This rule selects all elements that have a title attribute and adds a dotted bottom border to them.
  ```css
  [title] {
    border-bottom: 1px dotted;
  }
  ```


4. Attribute Selector ([a="b"])

· What it is: Selects elements where a specific attribute has an exact value.
· Basic rule & how it works: The full attribute and its value are placed inside square brackets.
· Simple example: This rule selects only the <input> element whose type attribute is exactly "text".
  ```css
  input[type="text"] {
    background-color: lightgray;
  }
  ```


5. Attribute Selector ([a~="b"])

· What it is: Selects elements where an attribute's value contains a specific word in a space-separated list.
· Basic rule & how it works: The ~= operator matches a whole word within a list of words.
· Simple example: This selects any element whose class attribute contains the word "warning" (e.g., class="alert warning").
  ```css
  [class~="warning"] {
    color: orange;
  }
  ```


6. Attribute Selector ([a^="b"])

· What it is: Selects elements where an attribute's value begins with a specific string.
· Basic rule & how it works: The ^= operator means "starts with".
· Simple example: This selects all links (<a>) whose href attribute begins with "https://".
  ```css
  a[href^="https://"] {
    color: green;
  }
  ```


7. Attribute Selector ([a$="b"])

· What it is: Selects elements where an attribute's value ends with a specific string.
· Basic rule & how it works: The $= operator means "ends with".
· Simple example: This selects all links whose href attribute ends with ".pdf".
  ```css
  a[href$=".pdf"] {
    color: red;
  }
  ```


8. Attribute Selector ([a*="b"])

· What it is: Selects elements where an attribute's value contains a specified substring anywhere within it.
· Basic rule & how it works: The *= operator means "contains".
· Simple example: This selects any element whose title attribute contains the word "logo" anywhere (e.g., "company logo image").
  ```css
  [title*="logo"] {
    font-weight: bold;
  }
  ```


9. Attribute Selector ([a|="b"])

· What it is: Selects elements where an attribute's value is exactly "b" or begins with "b-".
· Basic rule & how it works: The |= operator is primarily for matching language subcodes (e.g., en, en-us).
· Simple example: This selects elements where the lang attribute is either exactly "en" or starts with "en-" like "en-us".
  ```css
  [lang|="en"] {
    font-family: Arial;
  }
  ```


10. Pseudo-class (:root)

· What it is: Selects the root element of the document, which is always the <html> element.
· Basic rule & how it works: It's often used to declare global CSS variables.
· Simple example: This sets a background color for the entire page by styling the root element.
  ```css
  :root {
    background-color: aliceblue;
  }
  ```


11. Pseudo-class (:nth-child(n))

· What it is: Selects the nth child element of its parent.
· Basic rule & how it works: You specify a number, keyword (like even or odd), or formula (like 2n+1) in parentheses.
· Simple example: This makes the background of every odd-numbered list item in an unordered list gray.
  ```css
  li:nth-child(odd) {
    background-color: lightgray;
  }
  ```


12. Pseudo-class (:nth-last-child(n))

· What it is: Selects the nth child element of its parent, counting from the last child.
· Basic rule & how it works: Works like :nth-child, but counts backwards from the end.
· Simple example: This selects and styles the second-to-last child element of any parent.
  ```css
  :nth-last-child(2) {
    color: blue;
  }
  ```


13. Pseudo-class (:nth-of-type(n))

· What it is: Selects the nth sibling element of a specific type.
· Basic rule & how it works: It filters by element type first, then applies the nth rule to that filtered group.
· Simple example: This selects every third <p> element among its sibling <p> elements.
  ```css
  p:nth-of-type(3n) {
    font-weight: bold;
  }
  ```


14. Pseudo-class (:nth-last-of-type(n))

· What it is: Selects the nth sibling element of a specific type, counting from the last one of that type.
· Basic rule & how it works: Combines the logic of :nth-last-child and :nth-of-type.
· Simple example: This selects the last <div> element among its sibling <div> elements.
  ```css
  div:nth-last-of-type(1) {
    border: 1px solid black;
  }
  ```


15. Pseudo-class (:first-child)

· What it is: Selects an element only if it is the very first child of its parent.
· Basic rule & how it works: The element must be the first child node of its parent element.
· Simple example: This removes the top margin only from the first <h2> that is a direct child of its parent.
  ```css
  h2:first-child {
    margin-top: 0;
  }
  ```


16. Pseudo-class (:last-child)

· What it is: Selects an element only if it is the very last child of its parent.
· Basic rule & how it works: The element must be the last child node of its parent element.
· Simple example: This adds extra space only after the last paragraph in a container.
  ```css
  p:last-child {
    margin-bottom: 2em;
  }
  ```


17. Pseudo-class (:first-of-type)

· What it is: Selects the first sibling element of its type.
· Basic rule & how it works: It finds the first element of a specific type among its siblings, regardless of what other elements come before it.
· Simple example: This styles the first <span> element found among its siblings.
  ```css
  span:first-of-type {
    font-size: 120%;
  }
  ```


18. Pseudo-class (:last-of-type)

· What it is: Selects the last sibling element of its type.
· Basic rule & how it works: It finds the last element of a specific type among its siblings.
· Simple example: This styles the last <li> element inside any list.
  ```css
  li:last-of-type {
    border-bottom: none;
  }
  ```


19. Pseudo-class (:only-child)

· What it is: Selects an element only if it is the sole child of its parent.
· Basic rule & how it works: The element must have no siblings.
· Simple example: This centers an image only if it is the only element inside its parent container.
  ```css
  img:only-child {
    display: block;
    margin: 0 auto;
  }
  ```


20. Pseudo-class (:only-of-type)

· What it is: Selects an element if it is the only element of its type among its siblings.
· Basic rule & how it works: The element can have other siblings, but none of them can be of the same tag type.
· Simple example: If there is only one <p> among other elements like <h1> and <div>, this rule would style it.
  ```css
  p:only-of-type {
    font-style: italic;
  }
  ```


21. Pseudo-class (:empty)

· What it is: Selects elements that have no children at all (no text, no elements, not even whitespace).
· Basic rule & how it works: It matches completely empty element nodes.
· Simple example: This hides any empty <div> or <p> elements on the page.
  ```css
  div:empty, p:empty {
    display: none;
  }
  ```


22. Pseudo-class (:link)

· What it is: Selects unvisited hyperlinks (<a> elements with an href attribute).
· Basic rule & how it works: It styles links that the user has not yet clicked.
· Simple example: This is the typical way to set the default color for links.
  ```css
  a:link {
    color: blue;
  }
  ```


23. Pseudo-class (:visited)

· What it is: Selects links that the user has already visited (in their browser history).
· Basic rule & how it works: It styles links to pages the user has previously navigated to.
· Simple example: This changes the color of visited links.
  ```css
  a:visited {
    color: purple;
  }
  ```


24. Pseudo-class (:active)

· What it is: Selects an element (typically a link or button) at the moment it is being activated (e.g., mouse button is pressed down on it).
· Basic rule & how it works: It represents the very short moment of user activation.
· Simple example: This gives a link a red color while the user is clicking on it.
  ```css
  a:active {
    color: red;
  }
  ```


25. Pseudo-class (:hover)

· What it is: Selects an element when the user's mouse pointer is over it.
· Basic rule & how it works: It creates interactive feedback on mouseover.
· Simple example: This changes a button's background when the user hovers over it.
  ```css
  button:hover {
    background-color: #ddd;
  }
  ```


26. Pseudo-class (:focus)

· What it is: Selects an element that has currently received focus (e.g., via keyboard tabbing or a mouse click).
· Basic rule & how it works: It's crucial for accessibility, showing which interactive element is active.
· Simple example: This adds a distinctive outline to a text input when it's selected.
  ```css
  input:focus {
    outline: 2px solid blue;
  }
  ```


27. Pseudo-class (:target)

· What it is: Selects the element whose ID matches the fragment identifier (#id) in the current page's URL.
· Basic rule & how it works: When a link like <a href="#section1"> is clicked, the element with id="section1" becomes the target.
· Simple example: This highlights the section of the page that was linked to.
  ```css
  :target {
    background-color: yellow;
  }
  ```


28. Pseudo-class (:lang(en))

· What it is: Selects elements based on their language, typically set via the lang attribute.
· Basic rule & how it works: You specify the language code in parentheses.
· Simple example: This applies specific quotation marks to <q> (quote) elements that are in French.
  ```css
  q:lang(fr) {
    quotes: "« " " »";
  }
  ```


29. Pseudo-class (:enabled)

· What it is: Selects form elements (like <input>, <select>) that are in their default, interactive state.
· Basic rule & how it works: It selects elements that are not disabled.
· Simple example: This styles enabled text inputs with a white background.
  ```css
  input[type="text"]:enabled {
    background-color: white;
  }
  ```


30. Pseudo-class (:disabled)

· What it is: Selects form elements that have the disabled attribute, making them non-interactive.
· Basic rule & how it works: It matches elements that the user cannot click or type into.
· Simple example: This gives disabled buttons a faded appearance.
  ```css
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ```


31. Pseudo-class (:checked)

· What it is: Selects radio buttons (<input type="radio">), checkboxes (<input type="checkbox">), or options in a <select> that are currently selected/toggled on.
· Basic rule & how it works: It targets the state of being selected.
· Simple example: This makes the label following a checked checkbox bold.
  ```css
  input:checked + label {
    font-weight: bold;
  }
 ```


32. Class Selector (.className)

· What it is: Selects all elements that have the specified class in their class attribute.
· Basic rule & how it works: The selector is a period (.) followed immediately by the class name.
· Simple example: This styles any element with the class "highlight".
  ```css
  .highlight {
    background-color: yellow;
  }
  ```


33. ID Selector (#main)

· What it is: Selects the single element that has the specified id attribute. IDs must be unique on a page.
· Basic rule & how it works: The selector is a hash (#) followed immediately by the ID value.
· Simple example: This styles the element with the ID "header".
  ```css
  #header {
    background-color: black;
    color: white;
  }
 ```


34. Negation Pseudo-class (:not(s))

· What it is: Selects elements that do not match a simple selector s.
· Basic rule & how it works: It excludes elements from a selection.
· Simple example: This applies a margin to all paragraphs except those with the class "intro".
  ```css
  p:not(.intro) {
    margin-top: 10px;
  }
  ```

35. Descendant Combinator (E F)

· What it is: Selects all elements F that are located anywhere inside an ancestor element E.
· Basic rule & how it works: You separate the two selectors with a space. It matches any depth of nesting.
· Simple example: This selects all <strong> elements that are inside an <article> element, no matter how deep.
  ```css
  article strong {
    color: darkred;
  }
  ```

36. Child Combinator (E > F)

· What it is: Selects all elements F that are direct children of an element E.
· Basic rule & how it works: The > symbol indicates a direct parent-child relationship (only one level down).
· Simple example: This selects only <li> elements that are direct children of a <nav> element (not nested inside another <ul>).
  ```css
  nav > ul > li {
    display: inline-block;
  }
  ```


37. Adjacent Sibling Combinator (E + F)

· What it is: Selects the element F that is the immediate next sibling of element E.
· Basic rule & how it works: The + symbol matches only the first sibling element F that comes directly after E.
· Simple example: This adds top margin only to the paragraph that comes directly after an <h2>.
  ```css
  h2 + p {
    margin-top: 5px;
  }
  ```


38. General Sibling Combinator (E ~ F)

· What it is: Selects all elements F that are siblings of element E and come after it.
· Basic rule & how it works: The ~ symbol matches all following siblings of the same parent, not just the immediate one.
· Simple example: This styles all <p> elements that are siblings of an <h1> and appear after it.
  ```css
  h1 ~ p {
    color: #555;
  }
  ```
