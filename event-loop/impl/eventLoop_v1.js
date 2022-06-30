
function execute(functionCall) {
    const stack = [functionCall];
    while(stack.length > 0){
        const stackFunction = stack.pop();
        const functionSteps = getSteps(stackFunction);
        // run each step
        // add function calls to stack
        // etc...
    }
}

function start(mainFunction, render){
    const taskQueue = [];
    taskQueue.push(mainFunction);
    while(true) {
        const task = taskQueue.pop();
        execute(task);
    }
}