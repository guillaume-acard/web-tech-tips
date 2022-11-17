import React from "react";

export default function Overview() {
    return (
        <div>
            <h1>ReactJS</h1>
            <h2>What it is?</h2>
            <p>
                First release in May 2013. Not at version 18.2 <br />
                Part of the big 3:
                <ul>
                    <li>
                        <strong>ReactJS</strong> : Just a rendering lib. Needs external dependencies for everything else. HTML in JS with the usage of JSX.
                    </li>
                    <li>
                        <strong>Angular</strong> : Full framework, dependency injeciton, services, routing... Uses custom "html" attributes in templates.
                    </li>
                    <li>
                        <strong>VueJS</strong> : custom ".vue" format that mix script/css/html. Has custom "html" attributes to use in templates.
                    </li>
                </ul>
            </p>
            <h2>How it works?</h2>
            <p>
                <ol>
                    <li>Init React on a element: <pre>{"ReactDOM.render(<App />, document.getElementById('root'));"}</pre></li>
                    <li>Create a "Virtual DOM" of your website base don provided components.</li>
                    <li>On render cycle: Calculate the "diff" with actual Browser DOM on each render.</li>
                    <li>Updates only the required parts</li>
                </ol>
            </p>
        </div>
    );
}
