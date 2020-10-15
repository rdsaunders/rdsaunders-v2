---

category: Accessibility
title: Accessibility testing tools
excerpt: 'A collection of accessibility tools collated from a question raised in the
  Design systems slack community. '
date: 2019-10-24T20:20:00.000+00:00
tags:
- a11y
- Accessibility
- Tools
- WCAG
categories:
- Accessibility

---
I recently came across a question in the [Design Systems](https://design-systems.slack.com) Slack community from [Sonali Zaveri](http://www.sonalizaveri.com/) relating to accessibility testing tools.

> What tools does everyone use to test accessibility? I’m hoping to put together a testing playbook for my team. I want to detail out what tools to use and how, and what manual testing to perform (ie. Run Chrome Lighthouse, Check tab order, Increase your font size, etc.).

It's a great question. I certainly have my go to list of tools bookmarked. It was interesting to see the number of different tools that were suggested. I thought it would be helpful to document the various tools for future reference.

## Developer tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) – Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, and more.
- [Landmarks](http://matatk.agrip.org.uk/landmarks/) – Allows you to navigate a web page via WAI-ARIA landmarks, using the keyboard or a pop-up menu.

## Browser extensions and plugins
- [Chrome Lens](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd) – Visual impairment simulation and auditing tools to aid accessibility development.
- [aXe - Web accessibility testing](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) – Accessibility checker for WCAG 2 and Section 508 accessibility.
- [aXe Coconut](https://chrome.google.com/webstore/detail/axe-coconut-web-accessibi/iobddmbdndbbbfjopjdgadphaoihpojp?hl=en) – Experimental version of the popular aXe - Web accessibility checker.
- [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) – WAVE is a web accessibility evaluation tool developed by WebAIM.org. It provides visual feedback about the accessibility of your web content by injecting icons and indicators into your page.
- [Alix HTML linter](https://chrome.google.com/webstore/detail/alix-for-chrome/aepmadgjacfjcneccddiccnkbpimobge?hl=en) – Alix allows you to lint your HTML for accessibility issues simply by applying a stylesheet that makes use of advanced CSS selectors.
- [NoCoffee vision simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) – NoCoffee can be helpful for understanding the problems faced by people with slight to extreme vision problems
- [Colour contrast analyser](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll) – Analyze a web page or portion of a web page for conformance with WCAG 2.0 Color Contrast requirements.
- [Funkify](https://www.funkify.org/simulators/?v=f003c44deab6) – Funkify helps you experience the web and interfaces through the eyes of extreme users with different abilities and disabilities.

## Bookmarklets
- [Akbar](https://howlowck.github.io/Akbar/) – Simulates various vision scenarios.
- [Nerde Focus](https://github.com/wizzyfx/nerdeFocus) – Quickly debug focus problems when testing a page for accessibility issues. 
- [tota11y](https://khan.github.io/tota11y/) – tota11y helps visualise how your site performs with assistive technologies.
- [aXe HTML Report](https://github.com/wizzyfx/aXe-HTML-Report) – A bookmarklet for generating and downloading aXe test results in HTML format
- [Doc Outline Audit](https://github.com/edenspiekermann/outline-audit) – This small script analyses the heading outline of the document (or given container), and report possible errors.
- [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html) – ANDI (Accessible Name & Description Inspector) is a free tool to test web content for accessibility.
- [Form autocomplete tool](https://github.com/dsheiko/autofill) – Bookmarklet to fill out forms when testing by simply clicking on it.
- [Caret Browsing](https://chrome.google.com/webstore/detail/caret-browsing/fklpgenihifpccgiifchnihilipmbffg?hl=en) – Browse the text of web pages using arrow keys.

## Screen readers
- [NVDA](https://www.nvaccess.org/download/)
- [NVDA quick key reference](https://www.nvaccess.org/files/nvdaTracAttachments/455/keycommands%20with%20laptop%20keyboard%20layout.html)
- Voice Over ([User Guide](https://help.apple.com/voiceover/mac/10.15/))
- [Voice Over quick key reference](https://www.apple.com/voiceover/info/guide/_1131.html)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)

## Applications
- [koa11y](https://open-indy.github.io/Koa11y/) – Koa11y is a desktop app that allows you to automatically detect accessibility (a11y) issues on webpages. Available on Windows, Mac OS and Linux.
- [Contrast Color accessibility](https://apps.apple.com/gb/app/contrast-color-accessibility/id1254981365?mt=12) – A Mac OS menu bar app that helps check for WCAG contrast ratios. 
- [Color Oracle](https://colororacle.org/) – Color Oracle is a free color blindness simulator for Windows, Mac and Linux.
- [Sort Site](https://www.powermapper.com/products/sortsite/) – SortSite is a one-click web site testing tool that checks each page against more than 1200 standards based checkpoints.

## Mac OS features
- [Zoom](https://support.apple.com/en-gb/guide/mac-help/mh35715/mac)
- [Accessibility Keyboard](https://support.apple.com/en-gb/guide/mac-help/mchlc74c1c9f/mac)