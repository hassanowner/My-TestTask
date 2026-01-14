/*
========================================================
ADDITIONAL WINDOW OBJECT METHODS (DIALOGS & UTILITIES)
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains additional useful methods provided by the JavaScript
`window` object. These methods are mainly used for:
- Displaying dialog boxes to the user
- Getting user confirmation or input
- Searching for text inside a web page
- Printing the contents of a web page
- Managing browser windows

The methods covered are:
1. alert()
2. confirm()
3. prompt()
4. find()
5. print()
6. open()
7. close()

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: alert()
-------------------
What it does:
Opens a dialog box displaying a message to the user.

Function:
Used to show important information or warnings.

Explanation:
The alert dialog pauses script execution until the user
clicks the OK button. It does not return any value.

Syntax: */
alert(message);

// Example:
alert('Form submitted successfully!');

/* Meaning:
A message box appears with the given text and an OK button.

--------------------------------------------------------

• FEATURE 2: confirm()
---------------------
What it does:
Opens a confirmation dialog with a message and two buttons.

Function:
Allows the user to confirm or cancel an action.

Explanation:
The dialog contains OK and Cancel buttons.
It returns true if OK is clicked, and false if Cancel is clicked.

Syntax: */
confirm(message);

// Example:
const result = confirm('Are you sure you want to delete this item?');

/* Meaning:
- OK → result is true
- Cancel → result is false

--------------------------------------------------------

• FEATURE 3: prompt()
--------------------
What it does:
Opens a dialog that allows the user to enter text.

Function:
Used to collect small amounts of user input.

Explanation:
The prompt dialog returns the entered text as a string.
If the user cancels, it returns null.

Syntax: */
prompt(message, defaultValue);

// Example:
const name = prompt('Enter your name:', 'Guest');

/* Meaning:
- User input is stored in the variable name
- Cancel returns null

--------------------------------------------------------

• FEATURE 4: find()
------------------
What it does:
Searches for a specific text string within the current web page.

Function:
Allows in-page searching programmatically.

Explanation:
This method behaves similarly to the browser’s “Find” feature.
Support and behavior may vary between browsers.

Syntax: */
find(searchText);

// Example:
window.find('JavaScript');

/* Meaning:
The browser highlights the first occurrence of "JavaScript"
within the page content.

--------------------------------------------------------

• FEATURE 5: print()
-------------------
What it does:
Opens the browser’s print dialog.

Function:
Allows users to print the current web page content.

Explanation:
The print dialog lets the user choose printer settings.
JavaScript cannot control the printer directly.

Syntax: */
print();

// Example:
window.print();

/* Meaning:
The browser’s print dialog opens for the current page.

--------------------------------------------------------

• FEATURE 6: open()
------------------
What it does:
Opens a new browser window or tab.

Function:
Loads a specified URL in a new browser window.

Explanation:
This method was discussed in previous sections
and is used to create new windows programmatically.

Example: */
window.open('https://example.com');

/* --------------------------------------------------------

• FEATURE 7: close()
-------------------
What it does:
Closes the current browser window or a referenced window.

Function:
Used to close windows opened via JavaScript.

Explanation:
Browsers restrict this method for security reasons.

Example: */
window.close();

/* --------------------------------------------------------

3) SUMMARY
---------
alert()   → displays a message dialog  
confirm() → displays a confirmation dialog (true / false)  
prompt()  → displays a text input dialog  
find()    → searches for text within the page  
print()   → opens the print dialog  
open()    → opens a new browser window  
close()   → closes a browser window  

These methods allow interaction with users,
basic window control, and page utilities.

========================================================
END OF FILE
======================================================== */
