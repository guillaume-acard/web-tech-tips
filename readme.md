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

# CSS Tips

Live edit the style of your elements and see what happens!

# Your IDE setup

The current most popular web development IDE [VSCode](https://code.visualstudio.com/) and is the clear winner in my opinion: Its functional, fast, highly customizable and in very active development. 

Here are some tips on how to have a better IDE setup on VSCode:
* Theme (very subjective): [Monokai](https://marketplace.visualstudio.com/items?itemName=DataByne.theme-monokai-hc)

## Customize your Snippets 

```json
"Require" : {
    "prefix": "rr",
    "body": "const ${1:name}$2 = require('${1:name}');$0",
    "description": "Require module"
},
"Require Local file" : {
    "prefix": "rlf",
    "body": "const ${1:name}$2 = require('./${1:name}');$0",
    "description": "Require local file"
},
"Require Local file property" : {
    "prefix": "rlfp",
    "body": "const { $2 } = require('./$1');$0",
    "description": "Require local file"
},
"Require - Lodash": {
    "prefix": "r__",
    "body": "const _ = require(\"lodash\");",
    "description": "Require Lodash"
},
"Import - Lodash": {
    "prefix": "__",
    "body": "import _ from 'lodash';",
    "description": "Import Lodash"
},
"Import MomentJS": {
    "prefix": "rmm",
    "body": "const moment = require(\"moment\");",
    "description": "Import MomentJS"
},
"Import MomentJS ES6": {
    "prefix": "mm",
    "body": "import moment from 'moment';",
    "description": "Import MomentJS"
},
"REST API - Request/Response method": {
    "prefix": "rr",
    "body": "(req, res) => {\n\t$0\n}",
    "description": "Create default request/response api call method"
},
"Lambda function" : {
    "prefix": "lll",
    "body": "($1) => {\n\t$0\n}",
    "description": "Base template for lambda function"
},
"Lambda function - one line" : {
    "prefix": "ll",
    "body": "($1) => $0",
    "description": "Base template for lambda function"
}
```

# Usefull Tools 

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) : Enhanced Debugging features of React Apps in Chrome's DevTools. 
* [PostMan](https://www.getpostman.com/) : REST API client. Great to share and document web APIs.

# Frameworks & Libraries
## JS Tool libs
* [MomentJS](https://momentjs.com/) : Best library for handling dates in JS, can be a bit heavy out-of-the-box, so only use if you have complexe Data or formating requirements. 
* [Lodash](https://lodash.com/) : Usefull helper functions library, fills the gap for many small missing functions in JS. 
## React Based libs
* React UI Components Libraries:
    * [Fabric (Office UI)](https://developer.microsoft.com/en-us/fabric)
    * [Ant design](https://ant.design/)
    * [Material Design (Google)](https://material-ui.com/)
* Charting libs
    * [React-Vis](https://uber.github.io/react-vis/)

## CSS libs
* [animate.css](https://daneden.github.io/animate.css/) : Adds animations to your elements easily. A bit heavy (56k), so if performance is of concern try copy/pasting just the animations you need as you will likely only use a sub-set of them. 
* [Font Awesome](https://fontawesome.com/icons?d=gallery) : Most commonly used svg/css Icon library. 
* ~~[Bootstrap](https://getbootstrap.com/)~~ : A once very popular CSS layout/component framework. Its still good but I feel its over popularity has created a "Bootstrap fatigue" these days, weakening its once great apeal. 