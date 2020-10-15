---

title: Identifying visual density and hierarchy using the CSS filter property
date: 2018-01-17T00:00:00.000+00:00
excerpt: Use the filter CSS property as a quick acid test to see which elements of
  your site or application may be getting more attention.
tags:
- CSS
- Design
image: "/assets/uploads/2018/01/17/visual-density.png"
categories: []

---
![A screenshot of the bbc website converted to grayscale and a blur applied](/assets/uploads/2018/01/17/visual-density.png)

When building an application, you can't always put you finger to why something feels wrong in the design, often it can be down to the visual density or hierarchy of the elements on the screen.

Using the filter CSS property can provide a way to create a quick acid test to see which elements of your site or application may be getting more attention.

```css
html {
  filter: blur(5px) grayscale(1);
}
```