# Web Development Tips & Tricks

This is a compilation of tips, tricks, tools and other things found over time that can help be a better at web developement.
Web evolves fast, so some things might already be outdated today!

Enjoy!

# Learn JavaScript

This one might sound obvious but my feeling of why many people hate JavaScript is because they don't actually do the effort of learning the language in depth.

`Hey, I know Java and there is the word "Java" in "JavaScript", so it must be the same right?`

 This could not be more wrong and the name _JavaScript_ (who is a trademark of Oracle, reason why its official name is actually _ECMAScript_ or _ES_) was probably one of the biggest source of confusion around the language. Its a mix of syntax pieces of C/Java + Scheme + Self, so yes, some syntax elements look the same but under the hood its a very different approach. 

So to become a good Web Developer, you need to actually **learn and study** JavaScipt, hum... I mean ECMAScript!
Understand how the _this_ keyword works, what a _Prototype_ is, what really is a _function_ and where are the many traps in the language is a must have.

Here is a list of *.js* files that aims to cover some of the basics and traps of the language:

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
    1. [Import-ES6](/javascript-the-basics/11.4%20-%20Import-Export%20ES6.js)

# Know your Browser 

Where does all of this web stuff ends up living in? Mostly in your **Browser**.

So learning its powers and tools is important. There is more under the hood than first meets the eye. _Right-click_ on any page and click _Inspect_, this will give you access to the _DevTools_ view. A extremely powerful tool, it provides insights on everything going on in your page, allows to debug and live edit everything.

Focus here is mainly on the _Chrome_ DevTools but the _FireFox_ one is as a valid one and has interesting features of its own to discover. IE/Edge? Hum... up to you...

## Console 

By pressing `Esc` in the _DevTools_ it will open the bottom panel, providing one of the first tools you should learn:  the integrated Console. 

Its a ES engine of its own. Want to quickly try and run some code snippet? Type/Paste it in the console and execute it. 

Here are a few lesser known features of the console:

* Get the value of the last operation with `$_`
* Reference the currently selected DOM element with `$0`

## UI Testing

The _DevTools_ provide many handy features to help understand and test your interface. Here a few lesser known of those features:

### Paint Flashing
To easily visualize whats being rendered activate the __Paint Flashing__ feature.
![Paint Flashing](/know-your-browser/paint-flashing.PNG)

### Loading Testing
Every application usually has some sort of data loading handling when fetching data to the server. Testing if the visual layout is correct can be difficult when in a local environement as there is no network latency. 

Don't worry, _DevTools_ got you covered, artificially slow down your network! This will simulated a slow 3G connection, showing you a more realistic user-experience. 

![Slow Network](/know-your-browser/slow-network.PNG)

### Print Preview
If you expect your page to be printed its important to check how its actually going to render. Use the handy _Print Emulation_ option for that.

![Print Emulation](/know-your-browser/print-emulation.PNG)

## Random

A few power user commands you shoudl know: 
* `Ctrl-shift-P` Open the Command Menu

# CSS Tips

Live edit the style of your elements and see what happens!

# Your IDE setup

The current most popular web development IDE [VSCode](https://code.visualstudio.com/) and its the clear winner in my opinion: Its functional, fast, highly customizable and in very active development. Previous to _VSCode_ you had [Sublime Text](https://www.sublimetext.com/) (A brilliantly done light-weight text editor originally written by just one guy!) and then [Atom.io](https://atom.io/), but both are loosing the IDE battle in favor of _VSCode_. There is of course also [WebStorm](https://www.jetbrains.com/webstorm/) but its a much more heavy IDE and requries a licence making it a less popular choice. 

Here are some subjective tips on how to have a better _VSCode_ setup:
* Theme (very subjective): [Monokai](https://marketplace.visualstudio.com/items?itemName=DataByne.theme-monokai-hc)

## Customize your Snippets 

Snippets are a great way to speed up your development! Use them and create your owns! 

If you are doing _RectJS_ development you should install [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets#overview)

Here a few of the snippets I use: 

### NodeJS
```json
// Quick Require typing
"Require" : {
    "prefix": "rr",
    "body": "const ${1:name}$2 = require('${1:name}');$0",
    "description": "Require module"
},
"Require Local file" : {
    "prefix": "rrf",
    "body": "const ${1:name}$2 = require('./${1:name}');$0",
    "description": "Require local file"
},
"Require Local file property" : {
    "prefix": "rrfp",
    "body": "const { $2 } = require('./$1');$0",
    "description": "Require local file"
},
// Common libs
"Import MomentJS": {
    "prefix": "mm",
    "body": "const moment = require(\"moment\");",
    "description": "Import MomentJS"
},
"Import Lodash": {
    "prefix": "__",
    "body": "const _ = require(\"lodash\");",
    "description": "Import Lodash"
},
// Common syntax helpers
"Lambda function - one line" : {
    "prefix": "ll",
    "body": "($1) => $0",
    "description": "Base template for lambda function"
},
"Lambda function" : {
    "prefix": "lll",
    "body": "($1) => {\n\t$0\n}",
    "description": "Base template for lambda function"
},
"REST API - Request/Response method": {
    "prefix": "rr",
    "body": "(req, res) => {\n\t$0\n}",
    "description": "Create default request/response api call method"
},
```

### ReactJS
```json
"Import Linked CSS": {
    "prefix": "css",
    "body": "import \"./$TM_FILENAME_BASE.css\""
}
```
# Usefull Tools 

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) : Enhanced Debugging features of React Apps in Chrome's DevTools. A must have for React development. 
* [PostMan](https://www.getpostman.com/) : REST API client. Great to share and document your web APIs.

# Frameworks & Libraries
There are __PLENTY__ of _npm_ libraries out there, so its hard to keep up and know what to use. Just type anything + `npm` in _Google_ and see what happens, its likely you wil find several matching libraries. So how to choose? A good way when comparing several libs is using [www.npmtrends.com](https://www.npmtrends.com/). Add the names of a couple of libraries and see whats trending. 

Another good place to look at is: [bestofjs.org](https://bestofjs.org/), its a currated list of the most popular projects. 

If you want to lookback on the past year to see whats trending, this site is also a great place: [2018.stateofjs.com](https://2018.stateofjs.com/introduction/)

Here are a couple of selected commonly used libraries you should know about: 

## JS Tool libs
* [MomentJS](https://momentjs.com/) : Best library for handling dates in JS, can be a bit heavy out-of-the-box, so only use if you have complex Dates or formatting requirements. 
* [Lodash](https://lodash.com/) : Usefull helper functions library, fills the gap for many small missing functions in JS. 
    * ~~[Underscore](https://underscorejs.org/)~~ : This library used to be the favored one as a utility lib (and is still very used) but nowdays _Lodash_ has become the default as more "modern" (Lodash was inspired by Underscore). See [lodash-vs-underscore](https://www.npmtrends.com/lodash-vs-underscore)
* [Winstom](https://github.com/winstonjs/winston) : A simple Logging library (for NodeJS) 

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

## Advanced JS
* [html2canvas](https://html2canvas.hertzen.com/) : Allows to perform screenshots of any html element (eg: for making site previews)
* [popmotion.io](https://popmotion.io/) : Great library if you want to do advanced animations on your website.
* [Howler.js](https://github.com/goldfire/howler.js#documentation) : Good when you want to do some fancy Audio tricks.

## Front-End Frameworks

So the common question is: _React_, _Angular_ or _Vue_? Well the awnser for to this one is simple: __React__!!!

Why? Its of course a question of taste but if you want to leverage the most a large community, bet on _React_. A simple way to look at it is: [React vs Angular vs Vue](https://www.npmtrends.com/react-vs-@angular/core-vs-vue), still not conviced? Check: [2018.stateofjs.com/front-end-frameworks](https://2018.stateofjs.com/front-end-frameworks/overview/), _Angular_ has a large portion of `Used it, would not use it again` and thats not a good sign...

To create a new _React App_, nothing better than the [Create-React-App](https://github.com/facebook/create-react-app) tool. Doing all the plumbing required to build your app with npm, webpack, babel, grunt, gulp, hot-reload, etc... was a real pain and this was part of the reason of the _"JS fatigue"_ that existed during the years from to 2015-2017.