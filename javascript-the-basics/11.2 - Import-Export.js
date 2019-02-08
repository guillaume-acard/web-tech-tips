const { log } = console;

//#: NodeJS uses "require"
const math = require("./8.1 - Import-Export");
const { mult } = require("./8.1 - Import-Export");

log( math.add(2, 4) );
log( mult(2, 4) );