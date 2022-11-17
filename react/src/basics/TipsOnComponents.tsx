import React, { useState } from "react";

const OptionsOnComponent = ({ disabled }: { disabled?: boolean }) => {
    if (disabled) {
        return <div style={{ color: "grey" }}>Darn... I am disabled :(</div>;
    }
    return <div>Hello, I am enabled!</div>;
};

const UserProfile = ({ firstName, lastName, email }: { firstName: string; lastName: string; email: string }) => {
    return (
        <ul className="article">
            <li>
                Name: {firstName} {lastName}
            </li>
            <li>Email: {email}</li>
        </ul>
    );
};

export default function TipsOnComponents() {
    const [enabled, setEnabled] = useState(false);

    const user = {
        firstName: "Scott",
        lastName: "Tiger",
        email: "scott.tiger@oracle.com", // Test -> if removed
        lang: "en",
    };

    return (
        <div>
            <h2>Tips on components</h2>

            <h3>Boolean props</h3>
            <OptionsOnComponent />
            <OptionsOnComponent disabled={false} />
            <OptionsOnComponent disabled />
            <OptionsOnComponent disabled={true} />

            <h3>Passing all props</h3>
            <UserProfile {...user} />

            <h3>Conditional components</h3>
            <button onClick={() => setEnabled((prev) => !prev)}>Toggle</button>
            {enabled && <div>Hello TRUE!</div>}
            {!enabled && <div>Hello FALSE!</div>}
        </div>
    );
}
