/*
====================================================
JavaScript Event Properties – Complete Example File
====================================================
*/

document.addEventListener("DOMContentLoaded", function() {

  // Create a demo button dynamically
  const button = document.createElement("button");
  button.id = "demoButton";
  button.textContent = "Click Me";
  document.body.appendChild(button);

  
  // 1. bubbles
  // The 'bubbles' property indicates whether the event
  // propagates (bubbles) up through the DOM tree.
  button.addEventListener('click', function(e) {
    console.log("bubbles:", e.bubbles);
    // Expected Result: true
    // Explanation: Most events like 'click' bubble by default,
    // meaning they propagate from the target element up to ancestors.
  });

  
  // 2. cancelable
  // The 'cancelable' property tells us if the event's default
  // behavior can be prevented using preventDefault().
  button.addEventListener('click', function(e) {
    console.log("cancelable before preventDefault:", e.cancelable);
    if (e.cancelable) e.preventDefault();
    console.log("defaultPrevented after preventDefault:", e.defaultPrevented);
    /* Expected Result:
       cancelable before preventDefault: true
       defaultPrevented after preventDefault: true
       Explanation: 'click' events are cancelable, so calling preventDefault() sets defaultPrevented to true.
    */
  });

  
  // 3. currentTarget
  // Refers to the element handling the event (listener is attached to this element)
  button.addEventListener('click', function(e) {
    console.log("currentTarget:", e.currentTarget);
    // Expected Result: <button id="demoButton">Click Me</button>
    // Explanation: currentTarget always points to the element where the listener is attached, not necessarily the clicked child element.
  });

  
  // 4. defaultPrevented
  // Shows whether preventDefault() has been called
  button.addEventListener('click', function(e) {
    console.log("defaultPrevented:", e.defaultPrevented);
    // Expected Result: true
    // Explanation: In previous listener we called preventDefault(), so this property is true.
  });

  
  // 5. eventPhase
  // Indicates the current phase of event flow: 0 = NONE, 1 = CAPTURING, 2 = AT_TARGET, 3 = BUBBLING
  button.addEventListener('click', function(e) {
    console.log("eventPhase:", e.eventPhase);
    // Expected Result: 2
    // Explanation: Most listeners attached directly to the target fire during AT_TARGET phase.
  });

  
  // 6. target
  // Refers to the original element that triggered the event
  button.addEventListener('click', function(e) {
    console.log("target:", e.target);
    // Expected Result: <button id="demoButton">Click Me</button>
    // Explanation: target is the element actually clicked. Here it is the same as the button.
  });

  
  // 7. timeStamp
  // Shows the time (in milliseconds) when the event was created
  button.addEventListener('click', function(e) {
    console.log("timeStamp:", e.timeStamp);
    // Expected Result: e.g., 1453232649902
    // Explanation: This is the internal browser timestamp of when the event occurred.
  });

  
  // 8. type
  // Contains the name of the event (e.g., 'click', 'keydown')
  button.addEventListener('click', function(e) {
    console.log("type:", e.type);
    // Expected Result: "click"
    // Explanation: Shows the type of event that triggered the listener.
  });

  
  // 9. isTrusted
  // Indicates whether the event was triggered by the user (true) or JS code (false)
  button.addEventListener('click', function(e) {
    console.log("isTrusted:", e.isTrusted);
    // Expected Result: true
    // Explanation: User clicks generate trusted events. Synthetic events created via JS would show false.
  });

});
