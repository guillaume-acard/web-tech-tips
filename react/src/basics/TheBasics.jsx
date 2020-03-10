import React, { createElement, useEffect } from 'react';
import renderPureDomExample from './PureDom';

const SimpleComponent = 
    createElement("ul", null, 
        createElement("li", null, "Simple list component")
    );

export const TheBasics1 = () => {
    useEffect(() => renderPureDomExample("pure-dom"), []);

    return createElement(
        "div", null, [
            createElement("h1", null, "The basics"),
            createElement("p", { style: { color: "darkblue" } }, "JSX is just sugar over React.createElement"),
            SimpleComponent,
            <p>You can even <strong>Mix</strong> it all up if you want!</p>,
            <div id="pure-dom"></div>
        ]
    )
}