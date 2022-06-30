
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

let lastRepaintTime = 0;
function shouldRender() {
    const now = Date.now();
    const shouldRepaint = now - lastRepaintTime > 16;
    if(shouldRepaint){
        lastRepaintTime = now;
    }
    return shouldRepaint; // Approx 60 fps
}

function start(mainFunction, render){
    const taskQueue = [];
    
    taskQueue.push(mainFunction);
    while(true) {
        const task = taskQueue.pop();
        execute(task);

        if(shouldRender()){
            render();
        }
    }
}