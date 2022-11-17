import React, { useEffect, useState } from "react";

function BasicStateExample() {
    const [counter, setCounter] = useState(0);
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div>UseState counter: {counter}</div>
            <div>
                <label>
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(!checked)} /> Check me {checked ? "treus" : "false"}
                </label>
                <button
                    onClick={() => {
                        setCounter(counter + 1);
                        setCounter(counter + 1);
                    }}
                >
                    Increment the bad way
                </button>
                <button
                    onClick={() => {
                        setCounter((prev) => prev + 1);
                        setCounter((prev) => prev + 1);
                    }}
                >
                    Increment the good way
                </button>
            </div>
        </div>
    );
}

type UseEffectParam = () => () => void

function AsyncLoadingComponent({ name }: { name: string }) {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);

    useEffect(() => {
        setInterval(() => {
            console.log("Counter #1: forever..." + name);
            setCounter1((previousCounter) => previousCounter + 1);
        }, 1000);
    }, [name]);

    useEffect(() => {
        const intervalHandle = setInterval(() => {
            console.log("Counter #2: forever?"+ name);
            setCounter2((previousCounter) => previousCounter + 1);
        }, 1000);
        return () => {
            console.log("Stoping counter #2 now. Bye bye!");
            clearInterval(intervalHandle);
        };
    }, [name]);

    return (
        <div>
            <div>Counter #1: {counter1}</div>
            <div>Counter #2: {counter2}</div>
        </div>
    );
}

export default function HooksExamples() {
    const [kill, setKill] = useState(false);
    const [name, setName] = useState("hello");
    return (
        <div>
            <h2>UseState</h2>
            <p>Used for base state management</p>
            <BasicStateExample />

            <h2>UseEffect Hook</h2>
            <p>Only used for async operations. Never use for anything else.</p>
            <button onClick={() => setKill(true)}>Kill counter</button>
            <button onClick={() => setName("World!")}>Change name: {name}</button>
            {!kill && <AsyncLoadingComponent name={name} />}
        </div>
    );
}
