function stackOverflow(iteration) {
    if (iteration % 10 === 0) console.log(`StackOverflow: ${iteration}`);
    stackOverflow(iteration + 1);
}

function stackOverflow2(iteration) {
    if(iteration === 0) {
        console.time("stackoverflow2");
    }
    if (iteration % 100 === 0) {
        console.log(`StackOverflow: ${iteration}`);
        console.timeEnd("stackoverflow2");
        console.time("stackoverflow2");
    }
    setTimeout(() => stackOverflow2(iteration + 1), 0);
}

// stackOverflow(0);
// stackOverflow2(0);
