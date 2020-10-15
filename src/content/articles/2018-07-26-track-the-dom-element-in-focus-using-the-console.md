---
title: Track the DOM element with tab focus using the console
tags:
- til
- DevTools
- JavaScript
- Accessibility
- a11y
date: 2018-07-26
excerpt: When trying to improve keyboard behaviour in your application you'll need
  to understand the tab order of of your UI. Sometimes its not possible to see the
  active element due to a lack of styling. This post shows how the Dev Tools console
  can help.
publication: ''
link: ''
external: false
categories:
- Front-end development
---
When trying to improve keyboard behaviour in your application you'll need to understand the tab order of of your UI. Sometimes its not possible to see the active element due to a lack of styling. This post shows how the Dev Tools console can help

I've recently been looking to improve the keyboard behaviour of Contensis but its not always obvious which element is getting focus when navigating around the UI, using the console and what I learned in my previous article @TODO ADD LINK I've been able to update the console with the [activeElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement "document.activeElement property on MDN docs") as I navigate using the tab key.

1. Open the DevTools console by pressing `Cmd+Opt+J` Mac or `Ctrl+Shift+J` Windows / Linux
2. Typing the following snippet in to the console.
3. As you navigate your webpage / application the current active element is displayed in the console window.


```js
function track_tabfocus() {
  if (track_tabfocus.last !== document.activeElement) {
    track_tabfocus.last = document.activeElement;
    console.log(track_tabfocus.last);
  }
}
setInterval(track_tabfocus, 300);

```