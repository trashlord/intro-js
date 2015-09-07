# Javascript Guide

### What is Javascript and what is it used for

You can learn javascript's syntax [here](http://learnxinyminutes.com/docs/javascript/). However, this guide will focus on the parts of the language most useful for web development.

<!-- to be continued -->


### How does Javascript interact with HTML and CSS

To include javascript in your HTML, you can use the `<script>` tag, but it is much better to include it in an external file.

1. Create a file with the `.js` extension in the same directory as your HTML and CSS files.

2. After the body of your HTML, add `<footer></footer>` tags and put the follwing in the footer:

```<script type="text/javascript" src="[FILENAME].js"></script>```

Javascript can modify the content on your webpage. You can change the content inside any HTML element that has an ID. For example, add `<p id="greeting"></p>` to your HTML. No text will show up in that paragraph. But what if Javascript added some for you?

```document.getElementById("greeting").innerHTML = "Hi!";```

Javascript can elso change the style of elements. The property name (like "color" or "size") comes after `.style` and the value (like "red" or "16px") comes after the `=` operator.

```document.getElementById("greeting").style.color = "blue";```

So far everything has not been very interactive, as the javascript executes right after the page loads. What about a button that executes some javascript? Here's an example. In your javascript file:

```
function makeGreen() {
  document.getElementById("greeting").style.color = "green";
}
```

In your HTML:

```<button onclick="makeGreen()">Click here</button>```

The onclick attribute of the button actually is javascript. When it sees the function call `makeGreen()` it looks in the javascript file, sees the function, and executes it.

Using ID's is not the only way to access elements. `getElementsByTagName()` will return an array of all elements with that tag. For example:

```var paragraphs = document.body.getElementsByTagName("p");```

This returns an array of all elements in the HTML's body with the tag name "p". Now let's say you want to add a header between the second and third paragraph in your document.

```
// Create the header, noting it will be empty
var newHeader = document.createElement("h1");
// Create a "text node" which will be appended to the header element
var text = document.createTextNode("Big header");
// Append that node to the newHeader element
newHeader.appendChild(text);
// your newHeader and text would look like:
// <h1>Big header</h1> in HTML
// Now insert the newHeader, using the paragraphs array from above
document.body.insertBefore(paragraphs[2], newHeader);
```

To find out the *number* of paragraphs in your document, you could use the following:

```
// make sure you have the "var paragraphs" declaration from above for this to work
console.log(paragraphs.length);
```

intro-web covers how to find the console in your browser.

You can read about all the element selectors [here](http://www.w3schools.com/jsref/dom_obj_all.asp). Two selectors to note is `querySelector()` and `querySelectorAll()` which allow you to use CSS selectors to refer to elements.


Javascript can also make some cool animations using `requestAnimationFrame`:

```
var image = document.body.getElementsByTagName("img")[0]; // The first image in the body
image.style.position = "fixed"; // Make sure the image is "fixed" so it can be
// repositioned. This can also be set in the CSS file.
var start = null; // this variable will hold the start time of the animation

function moveRight(time) { // time is a "callback" from the requestAnimationFrame...
  // method (function) that gives the current time
  
  if (start === null) { // if the start time hasn't been set (aka animation just started)
    start = time; // set the start time as the current time
  }
  
  var distance = (time - start) / 100; // the distance to move right uses the time elapsed
  // and divides by 10. A bigger divisor means slower movement
  
  image.style.left = distance + "px"; // this sets the style to be slightly further to the
  // right than before
  
  if (distance < 3000) { // as long as the distance is less than 3000 px
    window.requestAnimationFrame(moveRight); // keep moving to the right
  }
}

window.requestAnimationFrame(moveRight); // initial function call, which begins animation process
```

How could you make an image move up and down in a circle? Try using `Math.sin()` and `Math.cos()`.

<!-- Possibly move animations to "Cool Examples" section? -->

### What are events and how are they used?

### Cool Examples of Javascript

### What is jQuery and how do I use it

### Acknowledgements

Haverbeke, Marijn. *Eloquent Javascript: A Modern Introduction to Programming*. San Francisco, CA: No Starch, 2015. Print.



