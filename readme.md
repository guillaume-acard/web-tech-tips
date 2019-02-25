# Web Development Tips & Tricks

This is a compilation (in no specific order), of tips, tricks, tools and other things found over time that can help when doing web development.
Web evolves fast, too fast some may say... so some things might already be outdated by the time you read it! Feel free to propose/add your own to the list!

Enjoy!

# Learn JavaScript

This one might sound obvious but my feeling of why many people hate JavaScript in the first place is because they don't actually do the effort of learning the language in depth.

`Hey, I know Java and there is the word "Java" in "JavaScript", so it must be the same right?`

 This could not be more wrong and the name _JavaScript_ (who is a trademark of Oracle, reason why its official name is actually _ECMAScript_ or _ES_) was probably one of the biggest source of confusion around the language. Its a mix of syntax pieces of C/Java + Scheme + Self, so yes, some syntax elements look the same but under the hood its a very different approach. 

So to become a good Web Developer, you need to actually **learn and study** JavaScript, hum... I mean ECMAScript!
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

### First Render and execution time
Remember that your users need to download many things before anything can happen in the browser. Its important to know how long a user will wait to start seeing and interact with your website. Many sites talk about the topic, in average your site should up and running under 2s. (more on this in the [Web development tips](#web-developement-tips) section).

So to check this in your website check the _Network_ tab in the _Devtools_:

![Network view](/know-your-browser/loading-time.PNG)

1. The time it take to load the DOM (your raw _index.html_ before any JS magic is applied)
1. The time it take for your JS to be downloaded and loaded, usually when the user starts to see your JS app as expected
1. When your server API requests are finished and your site is fully loaded.

### Print Preview
If you expect your page to be printed its important to check how its actually going to render. Use the handy _Print Emulation_ option for that.

![Print Emulation](/know-your-browser/print-emulation.PNG)

### Simulate Elements state

When working with _CSS_ you will sometimes be customizing how a element is displayed when its, _focused_ or in _hover_ state. Its not easy to see the actual used _css_ details AND play around with the _DevTools_ at the same time. A easy way to simulate this is using the _Force element state_ feature: 

![Element State Simulation](/know-your-browser/css-event-simulation.PNG)

## Random

A few power user commands you should know: 
* `Ctrl-P` : Quickly find a source file. 
* `Ctrl-shift-P` : Open the Command Menu

# CSS Tips

Css is easy and hard at the same time... its not always easy to known what does what and how its going to look. So the easiest to create your css is live edit the style of your elements and see what happens!

![live Css edit](/know-your-browser/live-css-edit.PNG)

Try adding the `display` property and cycling through the different values, best way to visually & learn what they do :)

## Some basics to know

Understand how the `position` property works. Its value will also-define how its sub-elements will calculate their position. 

If we have the following HTML / CSS:
```html
<style>
    .view{ height: 200px; }
    .bottom-menu{
        position: absolute;
        bottom: 40px;
    }
</style>
<div class="view">
    <div class="bottom-menu">Bottom menu</div>
</div>
```

_Bottom menu_ will be displayed at the bottom of the browser page. To have it relative to the parent element, simply add `position: relative` to `.view` css class, now its going to be placed _40px_ away from the bottom of your `view` div. I mention this case as its a common pitfall when trying to properly place elements in the page. Understanding how parent elements can influence calculated properties of sub-elements is important. 

## Advanced CSS

Many alternatives to CSS have been created, the most popular being [less](http://lesscss.org/) & [sass](https://sass-lang.com/), they provide many great features but add another layer of [transpilation](https://en.wikipedia.org/wiki/Source-to-source_compiler) (now, not only your JS is converted but also your CSS!).

Unless you need this extra power, knowing what css already provide is probably a better start. One of the main argument for _less/sass_ is its capability to have variables but it now exists natively in _css_!

See [Using CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for more details. For those who dont want to bother with all the details, TL;DR; :
```css
:root{
    ---bg-color: red;
}
.page{
    background: val(--bg-color);
}
```

# Your IDE setup

The current most popular web development IDE is [VisualStudioCode](https://code.visualstudio.com/) (or _VSCode_) and its the clear winner in my opinion: Its functional, fast, highly customizable and in very active development. Previous to _VSCode_ you had [Sublime Text](https://www.sublimetext.com/) (A brilliantly done light-weight text editor originally written by just one guy!) and then [Atom.io](https://atom.io/), but both are loosing the IDE battle in favor of _VSCode_. There is of course also [WebStorm](https://www.jetbrains.com/webstorm/) but its a much more heavy IDE and requires a licence making it a less popular choice. 

Here are some subjective tips on how to have a better _VSCode_ setup:

## Display
* Color Theme (very subjective): [Monokai](https://marketplace.visualstudio.com/items?itemName=DataByne.theme-monokai-hc)
* [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) : This extension allows to provide different highlight colors for lines matching a specific pattern. Good to highlight things like #todo or enphesize special comment sections. 

## Check your JS code with TypeScript

For people coming from the _Java_ world or when working on large projects, _JS_ can seem weak because of its lack of type-checking capabilities.  This is where _TypeScript_ comes into play but switching to this language can be costly and represents an unecessary overhead of configuration/transpiling/restrictions you might not actually need (most of the cases imho). But fear not! You can use the power of _TypeScript_ to check you _JS_ code! 

To have the very powerful _TypeScript_ engine analyze and perform some level of Type checking on your _JS_ code simply add a `jsconfig.json` file at the root of your projects with the following content:

```json
{
    "compilerOptions": {
        "jsx": "react", // If your in a React project
        "target": "es2018", // Or whatever is your ES version target
        "checkJs": true, // This is what activates the TypeScript engine
        "module": "commonjs",
        "allowSyntheticDefaultImports": true
    },
    "exclude": [
        "node_modules",
        "build"
    ]
}
```
_VSCode_ will automatically pick this up and perform all the magic for you! It might report wrong or unwanted errors, there are ways to remove them but a having a few wrongly reported issues compared to the benefits is worth it!

You can help the _TypeScript_ engine know types in unclear situations by using [JSDoc - @Typedef](http://usejsdoc.org/tags-typedef.html)

You can also activate this by default but it provides less flexibility for project specifics. 

## Customize your Snippets 

Snippets are a great way to speed up your development! Use them and create your owns! 

If you are doing _ReactJS_ development you should install [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets#overview)

Here a few ideas of snippets I use: 

### NodeJS
```javascript
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
// Common libs
"Import MomentJS": { 
    "prefix": "mm",
    "body": "const moment = require(\"moment\");",
    "description": "Import MomentJS"
},
"Import Lodash": { // Only to use in NodeJS env, as this imports the entire lib
    "prefix": "__",
    "body": "const _ = require(\"lodash\");",
    "description": "Import Lodash"
},
// Common syntax helpers
"REST API - Request/Response method": {
    "prefix": "rr",
    "body": "(req, res) => {\n\t$0\n}",
    "description": "Create default request/response api call method"
},
```

### ReactJS
```javascript
"Import Linked CSS": {
    "prefix": "css",
    "body": "import \"./$TM_FILENAME_BASE.css\""
},
// Redux related
"Reducer Action Handler - Standard": {
    "prefix": "actype",
    "body": [
        "if(action.type === $1){",
        "\treturn { ...state, ${0}: action.payload };",
        "}"
    ],
    "description": "Create if statement for action.type"
}
```
# Useful Tools & sites

## Tools
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) : Enhanced Debugging features of React Apps in Chrome's DevTools. A must have for React development. 
* [PostMan](https://www.getpostman.com/) : REST API client. Great to share and document your web APIs.

## Sites
* [Codepen](https://codepen.io/) : Need a piece of code for component? for a css trick? Chances are someone already proposed a something on codepen for you to copy/paste! A usefull site to have in your toolbox. 
* [ES Compatibility Table](http://kangax.github.io/compat-table/) : If you want to know what feature is supported by what browser or JS engine, this site can come in handy!
* [JSON Generator](https://next.json-generator.com/) : Need to generate some JSON test data for your website? Try this tool, it allows to generate large amounts of very customized data entries. 

# Frameworks & Libraries
There are __PLENTY__ of _npm_ libraries out there, so its hard to keep up and know what to use. Just type anything + `npm` in _Google_ and see what happens, it's likely you wil find several matching libraries. So how to choose? A good way when comparing several libs is using [www.npmtrends.com](https://www.npmtrends.com/). Add the names of a couple of libraries and see what's trending. 

Another good place to look at is: [bestofjs.org](https://bestofjs.org/), its a currated list of the most popular projects. 

If you want to lookback on the past year to see what's trending, this site is also a great place: [2018.stateofjs.com](https://2018.stateofjs.com/introduction/)

Here are a couple of selected commonly used libraries you should know about: 

## JS Tool libs
* [MomentJS](https://momentjs.com/) : Best library for handling dates in JS, can be a bit heavy out-of-the-box, so only use if you have complex Dates or formatting requirements. 
* [Lodash](https://lodash.com/) : Usefull helper functions library, fills the gap for many small missing functions in JS. 
    * ~~[Underscore](https://underscorejs.org/)~~ : This library used to be the favored one as a utility lib (and is still very used) but nowdays _Lodash_ has become the default as more "modern" (Lodash was inspired by Underscore). See [lodash-vs-underscore](https://www.npmtrends.com/lodash-vs-underscore)
* [Winston](https://github.com/winstonjs/winston) : A simple Logging library (for NodeJS) 
* [axios](https://github.com/axios/axios) : A promised based HTTP client for the Browser and NodeJS. Its easy to use but has one little problem... its support for _proxy_ so might want to use the fix:
    * see [/axios/axios/issues/925](https://github.com/axios/axios/issues/925)
    * Working for proxy: [axios-https-proxy-fix](https://www.npmjs.com/package/axios-https-proxy-fix)

## CSS libs
* [animate.css](https://daneden.github.io/animate.css/) : Adds animations to your elements easily. A bit heavy (56k), so if performance is of concern try copy/pasting just the animations you need as you will likely only use a sub-set of them. 
* [Font Awesome](https://fontawesome.com/icons?d=gallery) : Most commonly used svg/css Icon library. 
* ~~[Bootstrap](https://getbootstrap.com/)~~ : A once very popular CSS layout/component framework. Its still good but I feel its over popularity has created a "Bootstrap fatigue" these days, weakening its once great apeal. 

## Advanced JS
* [html2canvas](https://html2canvas.hertzen.com/) : Allows to perform screenshots of any html element (eg: for making site previews)
* [popmotion.io](https://popmotion.io/) : Great library if you want to do advanced animations on your website.
* [Howler.js](https://github.com/goldfire/howler.js#documentation) : Good when you want to do some fancy Audio tricks.
* [D3.js](https://d3js.org/) : A advanced SVG rendering engine. hard to use but very powerful. Many of theother charting library actually use d3.js underneath. So good to know it exists. 

## Front-End Frameworks

So the common question is: _React_, _Angular_ or _Vue_? Well the awnser for to this one is simple: __React__!!!

Why? It's of course a question of taste but if you want to leverage the most a large community, bet on _React_. A simple way to look at it is: [React vs Angular vs Vue](https://www.npmtrends.com/react-vs-@angular/core-vs-vue), still not conviced? Check: [2018.stateofjs.com/front-end-frameworks](https://2018.stateofjs.com/front-end-frameworks/overview/), _Angular_ has a large portion of `Used it, would not use it again` and that's not a good sign...

To create a new _React App_, nothing better than the [Create-React-App](https://github.com/facebook/create-react-app) tool. Doing all the plumbing required to build your app with npm, webpack, babel, grunt, gulp, hot-reload, etc... was a real pain and this was part of the reason of the _"JS fatigue"_ that existed during the years from to 2015-2017.

## React Based libs
* React UI Components Libraries:
    * [Fabric (Office UI)](https://developer.microsoft.com/en-us/fabric)
    * [Ant design](https://ant.design/)
    * [Material Design (Google)](https://material-ui.com/)
* Charting libs
    * [React-Vis](https://uber.github.io/react-vis/)
* Special Components:
    * [Draft.js](https://draftjs.org/) : Powerful WYSISWYG and Rich-text editror component. 

# Web-developement tips

## Size does matter - smaller is better

Keep in mind how much data will be needed for you app to work. Not everyone will have a quick 4G network, some might on a slow VPN network. So try to always keep in an eye on the size of the package your sending to the Browser

### Analyzing your app bundle

There are plenty of tool to help you analyze your final app bundle, I use this one because of its simpicity: [source-map-explorer](https://github.com/danvk/source-map-explorer#readme)

Its good practice to regularly check whats being bundled in your app using this tool (or any other). 
* Simply run `source-map-explorer bundle.min.js bundle.min.js.map` on your build app files and get a better sense of whats packed inside. 

### Know your libraries

Some libraries need to be used in special manners in order to ensure a minimal package size. Eg, for _Lodash_ you need to use:
```javascript
import groupBy from 'lodash/groupBy'
``` 
instead of:
```javascript
import { groupBy } from 'lodash'
```
if you want to avoid sending the entire _Lodash_ library.

Same goes for `office-react`, use:
```javascript
import { TextField } from 'office-ui-fabric-react/lib/TextField';
```
instead of:
```javascript
import { TextField } from 'office-ui-fabric-react';
```
Yes, it will create heavier import statements and are more clunky to manage. Its the price to pay for a more optimized build. 

Bundling unused code is the reason why libraries like [prop-types](https://www.npmjs.com/package/prop-types) have moved out of _ReactJS_ over time, as the code was only used during the dev phase but still packaged in your final build. 

## While loading...

Remember that a ReactJs app is full rendered by your JS/JSX code, meaning until its fully downloaded, nothinn is going to be displayed on screen. So remember to add on your base _index.html_ file a native css loader somewhere.

So instead of your standard React "root div": 
```html
<div id="root" />
```
Add something like: 
```html
<div id="root">
    <div class="loader">Loading...</div>
</div>
```
Then add some cool css over it :) For example: [this](/css-tips/loader.css)