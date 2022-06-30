
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
    const uiEventQueue = [];
    const networkEventLoop = [];
    const queues = [taskQueue, uiEventQueue, networkEventLoop];
    let nextQueueIndex = 0;

    const microTaskQueue = [];
    const animationTaskQueue = [];

    function getNextQueue() {
        nextQueueIndex = nextQueueIndex + 1 % queues.length;
        return queues[nextQueueIndex];
    }

    taskQueue.push(mainFunction);
    while(true) {
        const queue = getNextQueue();
        const task = queue.pop();
        execute(task);

        while(microTaskQueue.length > 0){
            const microTask = microTaskQueue.pop();
            execute(microTask);
        }

        if(shouldRender()){
            const frameAnimationTasks = animationTaskQueue.splice(0, animationTaskQueue.length);
            for(const animationTask of frameAnimationTasks){
                execute(animationTask);
            }
            render();
        }
    }
}