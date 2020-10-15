---

title: The lack of default Tab focus in Firefox and Safari
excerpt: I’ve been using Firefox for around six months now but I’ve never looked into
  why the browser doesn't get Tab Focus in Mac OS. Turns out its honouring the OS
  behaviour.
date: 2019-11-08 00:00:00 +00:00
categories:
- Accessibility
tags:
- UX
- Accessibility
- A11y

---
I've struggled to understand why I couldn’t use the <kbd>Tab</kbd> key to navigate a web site in Firefox on my Mac. I've been using Firefox for about six months, but I’ve never taken the time to understand why.

As a long time Chrome user I hadn't had experienced this problem as Tab focus simply worked. But as I've been testing our components for accessibility I needed to find out why this was happening.

It turns out Firefox is honouring the focus behaviour of the OS. This behaviour is set by a preference called _Use keyboard navigation to move focus between controls_. Its a checkbox I didn't know about, or have switched on.

You can find it in System Preferences.

* Goto System Preferences
* Select Keyboard
* Switch to the Shortcuts pane
* And you need to place a check in the _Use keyboard navigation to move focus between controls._

## You'll need to configure Firefox too

So it also turns out that in Mac OS you need to configure Firefox to set what elements should receive tab focus. If you don’t set this you’ll only get tab focus on text fields.

1. In Firefox, type <kbd>about:config</kbd> in the URL bar.
2. By default there is no Preference called [accessibility.tabfocus](https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/accessibility.tabfocus) on the mac so you'll have to create one.
3. Right click in the window and select New, then "integer" from the context menu.
4. Give it the preference name _accessibility.tabfocus_ and then set the value to 7.

A value of 7 will give tab focus to all elements on a page, links, linked images and all form elements. This is the default behaviour in Windows.

## Safari

It’s worth noting a similar property also exists in Safari.

Tab focus is only given to button elements. For links to get focus you’ll need to enable the _Press Tab to highlight each item on a web page_ property in Safaris preferences. Head over to _Preferences_ > _Advanced_ > _Accessibility_ to find it.

So there you are, if you've switched from Chrome hopefully that little annoyance can now be resolved.