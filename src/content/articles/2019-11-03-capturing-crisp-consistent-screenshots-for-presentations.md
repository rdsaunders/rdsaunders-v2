---

title: Capturing crisp consistent screenshots for presentations
excerpt: Some tips for capturing crisp, consistent screenshots on Mac OS for use in
  keynote presentations.
date: 2019-11-03 00:00:00 +00:00
categories:
- Design
tags:
- Keynote
- Presentation
- Slides

---

I prepare slide decks in Keynote a couple of times a year. You can guarantee that there will be a handful of screenshots of a website, code editor or some sort of application amongst the deck.

I have an incessant need for consistency when it comes to preparing a deck and I want to ensure that the screenshots I produce are as crisp as possible. After all most projectors suck, so its worthwhile taking the extra steps to convey what you want in the clearest way possible.

I also like to include movement in my slides so will often scale images up to focus peoples attention on a particular area of a user interface.

I thought it would be helpful to share some of the steps I take when capturing screenshots to get the most out of them.

## Turn off drop shadows on Mac OS screenshots
If you are capturing a screenshot of an application frame on Mac OS, by default a box shadow will be included in the screenshot. This shadow makes the image larger and may affect the design of your deck. I use the *Shadow* option in Keynote when I need to add some separation to the background.

To toggle the box shadow you'll need to use the following commands in the terminal.

### Disable drop shadow
To turn off the drop shadow use the following terminal

```
defaults write com.apple.screencapture disable-shadow -bool true
```

Followed by

```
killall SystemUIServer
```

### Enable drop shadow

It can easily be switched back on to.

```
defaults write com.apple.screencapture disable-shadow -bool false
```

Followed by

```
killall SystemUIServer
```

## Capture screenshots on a Retina display
This is my number one tip and I've been using this since I had my first retina MacBook. Capturing screenshots on a Retina display ensures you get screenshot that is twice the resolution than you would get from a non-retina display. 

As I usually create my presentations at a resolution of 1920x1080 this ensures I have plenty of resolution in an image available for scaling up when necessary.

## Create a empty profile to avoid disabling of extensions
If you are capturing screenshots within a browser, I usually create a separate profile that does not include any extensions. It also means I can minimise the UI by turning off the bookmarks bar.

## Use a window resize extension
The only extension I usually have enabled (but hidden from the toolbar) is [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh), its a great extension that allows me to create screenshots of websites at a consistent size. 

I use the shortcut key <kbd>⌥ Option</kbd>+<kbd>⇧ Shift</kbd> + <kbd>↓ Down arrow</kbd> to cycle through my presets.

I'll often capture a website at 1680x1050 / 1440x900 depending on the amount of detail I require.
 
## Use Chromes command pallet
If I want to capture a screenshot of a website without the browser chrome, I'll use Chromes command pallet feature. With the developer tools option <kbd>⌥ Option</kbd>+<kbd>⌘ Command</kbd>+<kbd>I</kbd>, press <kbd>⌘ Command</kbd> + <kbd>⇧ Shift</kbd> + <kbd>P</kbd> to open the command pallet.

Type Screen into the command pallet and you'll see four options:

- **Capture area screenshot** – This option will give you a cross hair cursor to drag an area you want to screenshot.
- **Capture full size screenshot** – Great for capturing the entirety of a long webpage without needing to scroll.
- **Capture node screenshot** - Capturing a specific selected node in the Elements tab. Great for screen grabbing a particular UI component.
- **Capture screenshot** – Screen capture the current viewport. 

Each option will save a screenshot into your downloads folder.

---

Just using one of these tips should help you create better screenshots in your presentations without needing any additional software *(except maybe a free window size extension)*. 




