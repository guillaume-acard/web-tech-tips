import React, { useState } from 'react';

const fibonacci = (n:number): number => {
    let result = 0;
    for(let more=0; more<100000;more++){
        result = 0; 
        let prev1 = 1;
        for(let i=0; i<n; i++){
            [result, prev1] = [prev1 + result, result];
        }
    }
    return result;
}

const LoadingPerformance = () => {
    const [startNumber, setStartNumber] = useState(0);
    performance.mark("fibo-start");
    const fiboValues = [startNumber, startNumber+1, startNumber+2].map(fibonacci);
    performance.mark("fibo-end");
    performance.measure("fibo", "fibo-start", "fibo-end");
    return <div>
        <h2>Fibonacci values: <button onClick={() =>setStartNumber(startNumber+10)}>Next 10</button></h2>
        {fiboValues.map((value, i) => <span className="comma-list-item">fib({startNumber+i}) = {value}</span>)}
    </div>
}

export default LoadingPerformance;