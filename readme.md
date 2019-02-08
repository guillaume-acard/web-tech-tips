# Web Development Tips & Tricks

This is a compilation of tips, tricks, tools and other things found over time that can help be a better at web developement.
Web evolves fast, so some things might already outdated today! 

Enjoy!

# Learn JavaScript

This one might sound like a obvious one but the main reason many people hate JavaScript tends to be because many people don't actually do the effort of learning the language in depth.

`Hey, I know Java and there is the word "Java" in "JavaScript", so it must be the same right?`

 This could not be more wrong and its naming has probably been one of the biggest source of confusion of the language. Its a mix of syntax pieces of C/Java + Schemme + Self, so yes, some syntax elements look the same but under the hood its a very different approach. 

So to become a good Web Developer, actually **learn and study** JavaScipt!
Understand how the _this_ keyword work, understand what a _Prototype_ is and what really is a _function_ in JS.

Here is a list of *.js* files that trys to cover some of the basics and traps of the syntax:

1. [Types](/javascript-the-basics/0%20-%20Types.js)
1. [Variables](/javascript-the-basics/1%20-%20Variables.js)
    1. [The Global Variable](/javascript-the-basics/1.1%20-%20The%20Global%20Variable.js)
1. [Equals](/javascript-the-basics/2%20-%20Equals.js)
1. [Arrays](/javascript-the-basics/3%20-%20Arrays.js)
1. [Objects](/javascript-the-basics/4%20-%20Objects.js)
1. [Maps](/javascript-the-basics/5%20-%20Maps.js)
1. Functions
    1. [Functions](/javascript-the-basics/6.1%20-%20Functions.js)
    1. [Functions](/javascript-the-basics/6.2%20-%20Functions.js)
1. [Code Style](/javascript-the-basics/7%20-%20Code%20Style.js)
    1. [Code Style - Detailed](/javascript-the-basics/7.bis%20-%20Code%20Style%20-%20Detailed.js)
1. [Prototype as Classes](/javascript-the-basics/8%20-%20Prototype%20as%20Classes.js)
1. [Closure & Global Variables](/javascript-the-basics/9%20-%20Closure%20&%20Global%20Variables.js)
1. [ES6 Syntax Sugar](/javascript-the-basics/10%20-%20ES6%20Syntax%20Sugar.js)
1. Import Export
    1. [Export](/javascript-the-basics/11.1%20-%20Import-Export.js)
    1. [Import](/javascript-the-basics/11.2%20-%20Import-Export.js)
    1. [Export-ES6](/javascript-the-basics/11.3%20-%20Import-Export%20ES6.js)
    1. [Import--ES6](/javascript-the-basics/11.4%20-%20Import-Export%20ES6.js)

# Know your Browser 

Where does all of this web stuff ends up living in? Your **Browsers**.

Learn its power and tools, there is way more under the hood that first meets the eye. Right-click on any page and click on _Inspect_, this will give you access to the _DevTools_ view. Its a extremely powerful tool, it provides insights on everything going on in your page, allows to debug and live edit anything.

I will be mainly focusing on the _Chrome_ DevTools here but the _FireFox_ one is as valid and has interesting features of its own to discover. 

## Console 

By pressing `Esc` in the _DevTools_ it will open the bottom panel and one of your first tools you should learn is the integrated Console. 

* Get the value of thelast operation with `$_`
* Reference the currently selected DOM element with `$0`

## UI Testing

### Paint Flashing
To easily visualize whats being rendered activate the __Paint Flashing__ feature.
![Paint Flashing](/know-your-browser/paint-flashing.PNG)

### Loading Testing
Every application usually has some sort of data loading handling when fetching data to the server. Testing if the visual layout is correct can be difficult when in a local environement as there is no network latency. 

Don't worry, _DevTools_ got you covered, artificially slow down your network! This will simulated a slow 3G connection, showing you a more realistic user-experience. 

![Slow Network](/know-your-browser/slow-network.PNG)

## Random

* `Ctrl-shift-P` Open the Command Menu

# CSS 

# Your IDE setup

# Usefull Tools 

* [PostMan](https://www.getpostman.com/)

# Frameworks & Libraries

## React Based Libs
* React UI Components Libraries:
    * [Fabric (Office UI)](https://developer.microsoft.com/en-us/fabric)
    * [Ant design](https://ant.design/)
    * [Material Design (Google)](https://material-ui.com/)
* Charting libs
    * [React-Vis](https://uber.github.io/react-vis/)