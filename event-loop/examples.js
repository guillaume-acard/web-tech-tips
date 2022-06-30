function stackOverflow(iteration) {
    if (iteration % 10 === 0) console.log(`StackOverflow: ${iteration}`);
    stackOverflow(iteration + 1);
}

function stackOverflow2(iteration) {
    if (iteration % 10 === 0) console.log(`StackOverflow: ${iteration}`);
    setTimeout(() => stackOverflow2(iteration + 1), 0);
}

stackOverflow(0);
stackOverflow2(0);
