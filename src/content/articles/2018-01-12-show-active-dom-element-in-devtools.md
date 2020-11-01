---
title: Show active DOM element in DevTools
tags:
- til
- DevTools
- JavaScript
date: 2018-01-11T10:46:28.000+00:00
excerpt: How to show the currently active DOM element in the console of Chrome DevTools.
publication: ''
link: ''
external: false

categories:
- Front-end development

---
Sometimes you find yourself trying to identify a weird bug in a piece of UI and often DevTools comes to the rescue to help you out.

I was experiencing an issue this week where a UI element wouldn't click and get focus without pressing it twice, it only occurred in a particular scenario and it was getting frustrating.

Using DevTools and particularly the console I was able to track down the element that was getting focus and preventing my UI component from being clicked first time by using the [activeElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement "document.activeElement property on MDN docs ") JavaScript property.

1. Open the DevTools console by pressing `Cmd+Opt+J` Mac or `Ctrl+Shift+J` Windows / Linux
2. Typing the following property in the console will return the current active DOM element.

```js
document.activeElement
```

![A screenshot of a website with Chrome developers tools open with the console showing.](/images/photos/2018/01/17/devtools-active-element.png "An example of the the document.activeElement in use")

By using this simple property I could track down the offending component and fix the issue.