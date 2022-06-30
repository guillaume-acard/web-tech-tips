function buildLargeObject(size) {
    let result = {};
    for (let i = 0; i < size; i++) {
        result = {
            ...result,
            [i]: buildLargeObject(size - 1),
        };
    }
    return result;
}
async function expensiveCalc() {
    console.time("Expensive");
    const largeObject = buildLargeObject(10);
    JSON.stringify(largeObject);
    console.timeEnd("Expensive");
}

async function runSync() {
    console.time("runSync");
    await expensiveCalc();
    await expensiveCalc();
    console.timeEnd("runSync");
}

async function runAsync() {
    console.time("runSync");
    await Promise.allSettled([expensiveCalc(), expensiveCalc()]);
    console.timeEnd("runSync");
}

// What will execute faster?
// runSync();
runAsync();
