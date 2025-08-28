





## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
- Answer: 
- **getElementByid** : Finds a single element with a specific id
- **getElementsByClassName** : Finds all elements with a specific class.
- **querySelector** : returns the first-Element match.
- **querySelectorAll** : returns the all-Element match.

## 2. How do you **create and insert a new element into the DOM**?
- Answer : 
- **create a new Element** = document.createElement(); and
- **insert  a new Element** = appendChild();

## 3. What is **Event Bubbling** and how does it work?
- Answer: Event bubbling is the way move in the DOM.

**Example:**  
```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function() {
  console.log("Parent clicked!");
});

child.addEventListener("click", function() {
  console.log("Child clicked!");
});
```


## 4. What is **Event Delegation** in JavaScript? Why is it useful?
- Ans:Event delegation saves memory, handles dynamic elements, and keeps code cleaner by letting a parent manage events for its children.

## 5. What is the difference between the **preventDefault() and stopPropagation()** methods?
Answer:
- **preventDefault()** : Stops the browser’s default behavior for an event.
- **stopPropagation()** : Stops the event from bubbling up the DOM.








