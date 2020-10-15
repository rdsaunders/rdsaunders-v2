---

title: Using the * CSS selector to check for visual alignment
date: 2018-01-17 00:00:00 +00:00
tags:
- UX
- Design
- CSS
excerpt: Sometimes it's helpful to check the visual alignment of an element in your
  front end code, the * CSS selector can help you out.
image: /assets/uploads/2018/01/17/visual-alignment-1.png
---
![](/assets/uploads/2018/01/17/visual-alignment-1.png)

Sometimes it's helpful to check the visual alignment of an element or how much space its taking up in the flow of you page against other elements.

A simple way you can check this is to use the `\\\*` CSS selector along with a background colour with an alpha channel.

By inserting the following css into the inspector stylesheet you can easily visualise the makeup of the components on the page.

```css
 * {
background-color: rgba(255, 0, 0, 0.10)!important;
}
```