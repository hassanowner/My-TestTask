1. Property: textContent

· What it is: A property that gets or sets the plain text content of a node and all its descendants.
· Basic rule & how it works: It returns a string of all text within the element, ignoring any HTML tags. 
  When you set it, any existing content (including child elements) is completely replaced with the provided plain text, 
  which will be treated as text, not as HTML.
· Simple example: If you have
  <div id="myDiv"> <p>Hello <strong>World</strong> </p> </div>, 
  using myDiv.textContent would return the string "Hello World". Setting 
    myDiv.textContent = "New Text"; would replace the entire contents of the div with just the text "New Text".


2. Property: nodeValue

· What it is: A property that gets or sets the value of a specific type of node (primarily text nodes, comment nodes, and attribute nodes).
· Basic rule & how it works: For most element nodes, nodeValue is null. Its main use is to read or change the text inside a Text Node.
  You typically access a text node via an element's firstChild or childNodes property.
· Simple example: For the HTML <p id="myP">Hello</p>, the paragraph contains a text node as its child.
  myP.firstChild.nodeValue would return "Hello". Changing it with myP.firstChild.nodeValue = "Hi"; would update the text inside the paragraph to "Hi".


    
3. Property: innerHTML

· What it is: A property that gets or sets the HTML markup contained within an element.
· Basic rule & how it works: It returns a string representing all the HTML tags and text inside the element.
  When you set it, you provide a string of HTML code, and the browser parses and renders that string as new child elements, replacing the old contents.
· Simple example: For
  <div id="container"> <span>Item</span> </div>, container.innerHTML returns "<span>Item</span>". 
  Setting container.innerHTML = '<a href="#">Link</a>'; would remove the <span> and create a new <a> element inside the div.


  
4. Method: createTextNode()

· What it is: A method that creates a new text node.
· Basic rule & how it works: You call it on the document object, passing the text string as an argument.
  It returns a text node, which is a DOM object you can then insert into the document using methods like appendChild().
· Simple example: This creates a text node containing the word "Welcome!".
  ```javascript
  let newText = document.createTextNode("Welcome!");
  ```



5. Method: createElement()

· What it is: A method that creates a new element node.
· Basic rule & how it works: You call it on the document object, passing the tag name (e.g., 'div', 'p', 'li') as a string. 
  It returns an empty, unattached element object that you can customize (add attributes, text, etc.) and later insert into the DOM.
· Simple example: This creates a new <div> element.
  ```javascript
  let newDiv = document.createElement("div");
  ```



6. Method: createAttribute()

· What it is: A method that creates a new attribute node. (Note: This is an older, less common way; setting attributes directly on the element object is now more typical.)
· Basic rule & how it works: You call it on the document object, passing the attribute name. 
  It returns an attribute node which you then set a value for, and finally attach to an element.
· Simple example: This creates a class attribute with the value "box".
  ```javascript
  let attr = document.createAttribute("class");
  attr.value = "box";
  // Then you would use element.setAttributeNode(attr) to attach it.
  ```



7. Method: appendChild()

· What it is: A method that adds a node as the last child of a specified parent node.
· Basic rule & how it works: You call it on the parent element node, passing the new child node (element, text node, etc.) as an argument.
  It inserts the child into the DOM tree.
· Simple example: This adds the newly created text node as a child inside the newDiv element.
  ```javascript
  newDiv.appendChild(newText);
  ```



8. Method: removeChild()

· What it is: A method that removes a child node from the DOM tree.
· Basic rule & how it works: You call it on the parent element,
  passing the child node you want to remove as an argument. It returns the removed node.
· Simple example: This removes the first child of an element with the ID list.
  ```javascript
  let parent = document.getElementById("list");
  let removedNode = parent.removeChild(parent.firstChild);
  ```
