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

### Cool Examples of Javascript

### What is jQuery and how do I use it



