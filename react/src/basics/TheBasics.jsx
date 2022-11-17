import React, { createElement, useEffect } from 'react';
import renderPureDomExample from './PureDom';

const SimpleComponent = (props) => {
    return React.createElement("ul", { className: "red" }, // <--- reason its "className" in JSX and not "class" like in HTML. ITs because the dom defines it as "className"
        React.createElement("li", null, props.title)
    );
}

export const TheBasics = () => {
    useEffect(() => renderPureDomExample("pure-dom"), []);

    return createElement(
        "div", null, [
            createElement("h1", null, "The basics"),
            createElement("p", { style: { color: "cyan" } }, "JSX is just sugar over React.createElement"),
            SimpleComponent({ title: "Simple list component"}),
            <p>You can even <strong>Mix</strong> it all up if you want!</p>,
            <div id="pure-dom"></div>
        ]
    )
}